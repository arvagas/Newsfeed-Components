// Takes body and adds a hidden modal at the end
document.querySelector('body').appendChild(modalArticleInput())

// opens a modal for user input
function modalArticleInput() {
  // Define new elements
  const modal = document.createElement('div')
  const modalDialog = document.createElement('div')
  const modalContent = document.createElement('div') // Holds the thee sections of modal
  const modalHeader = document.createElement('div') // Modal title, close button
  const modalTitle = document.createElement('h1')
  const modalBody = document.createElement('div') // User inputted items
  const title = document.createElement('h2')
  const titleInput = document.createElement('input')
  const date = document.createElement('h2')
  const dateInput = document.createElement('input')
  const paraOne = document.createElement('h2')
  const paraOneInput = document.createElement('textarea')
  const paraTwo = document.createElement('h2')
  const paraTwoInput = document.createElement('textarea')
  const paraThree = document.createElement('h2')
  const paraThreeInput = document.createElement('textarea')
  const modalFooter = document.createElement('div') // Close, save button 
  const closeBtn = document.createElement('span')
  const saveBtn = document.createElement('span')

  // Structure of elements
  modal.appendChild(modalDialog)
  modalDialog.appendChild(modalContent)
  modalContent.appendChild(modalHeader)
  modalHeader.appendChild(modalTitle)
  modalContent.appendChild(modalBody)
  modalBody.appendChild(title)
  modalBody.appendChild(titleInput)
  modalBody.appendChild(date)
  modalBody.appendChild(dateInput)
  modalBody.appendChild(paraOne)
  modalBody.appendChild(paraOneInput)
  modalBody.appendChild(paraTwo)
  modalBody.appendChild(paraTwoInput)
  modalBody.appendChild(paraThree)
  modalBody.appendChild(paraThreeInput)
  modalContent.appendChild(modalFooter)
  modalFooter.appendChild(closeBtn)
  modalFooter.appendChild(saveBtn)

  // Set attributes
  modalTitle.textContent = 'Create a New Article'
  title.textContent = 'Title:'
  titleInput.type = 'text'
  date.textContent = 'Date:'
  dateInput.type = 'text'
  paraOne.textContent = 'First Paragraph:'
  paraOneInput.type = 'text'
  paraTwo.textContent = 'Second Paragraph:'
  paraTwoInput.type = 'text'
  paraThree.textContent = 'Third Paragraph:'
  paraThreeInput.type = 'text'
  closeBtn.textContent = 'Close'
  saveBtn.textContent = 'Save'

  // Set classes
  modal.classList.add('modal')
  modalDialog.classList.add('modal-dialog')
  modalContent.classList.add('modal-content')
  modalHeader.classList.add('modal-header')
  modalBody.classList.add('modal-body')
  paraOneInput.classList.add('paraInput')
  paraTwoInput.classList.add('paraInput')
  paraThreeInput.classList.add('paraInput')
  modalFooter.classList.add('modal-footer')
  closeBtn.classList.add('btn')
  saveBtn.classList.add('btn', 'btn-primary')
  
  // Button events

  // If user clicks on save button, save new article into data object, turn off modal
  saveBtn.addEventListener('click', () =>{
    createNewArticle(titleInput.value, dateInput.value, paraOneInput.value, paraTwoInput.value, paraThreeInput.value)
    document.querySelector('body').classList.toggle('modal-open')
    modal.classList.toggle('modal-show')
    modalBackdrop.classList.toggle('show')
    document.querySelector('body').removeChild(modalBackdrop)
  })

  // If user clicks on close button, turn off modal
  closeBtn.addEventListener('click', () =>{
    document.querySelector('body').classList.toggle('modal-open')
    modal.classList.toggle('modal-show')
    modalBackdrop.classList.toggle('show')
    document.querySelector('body').removeChild(modalBackdrop)
  })

  // If user clicks on background, turn off modal
  modal.addEventListener('click', event =>{
    if (modal.classList.contains('modal-show') === false) return
    else if ((event.target.closest('.modal-content')) || (event.target === document.querySelector('li:nth-last-child(2)'))) return
    else document.querySelector('body').classList.toggle('modal-open')
    modal.classList.toggle('modal-show')
    modalBackdrop.classList.toggle('show')
    document.querySelector('body').removeChild(modalBackdrop)
  })

  return modal
}

const modalBackdrop = document.createElement('div')
modalBackdrop.classList.add('modal-backdrop', 'fade')

// Give 'New Article' menu item an event
const newArticle = document.querySelector('li:nth-last-child(2)')
newArticle.addEventListener('click', () =>{
  document.querySelector('body').classList.toggle('modal-open')
  document.querySelector('body').appendChild(modalBackdrop)
  modalBackdrop.classList.toggle('show')
  document.querySelector('.modal').classList.toggle('modal-show')
})