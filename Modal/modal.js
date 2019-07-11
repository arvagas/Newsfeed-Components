// Takes body and adds a hidden modal at the end
document.querySelector('body').appendChild(modalArticleInput())

// opens a modal for user input
function modalArticleInput() {
  //Define new elements
  const modal = document.createElement('div')
  const modalContent = document.createElement('div')
  const title = document.createElement('h2')
  const titleInput = document.createElement('input')
  const date = document.createElement('h2')
  const dateInput = document.createElement('input')
  const paraOne = document.createElement('h2')
  const paraOneInput = document.createElement('input')
  const paraTwo = document.createElement('h2')
  const paraTwoInput = document.createElement('input')
  const paraThree = document.createElement('h2')
  const paraThreeInput = document.createElement('input')
  const closeBtn = document.createElement('span')
  const saveBtn = document.createElement('span')

  // Structure of elements
  modal.appendChild(modalContent)
  modalContent.appendChild(title)
  modalContent.appendChild(titleInput)
  modalContent.appendChild(date)
  modalContent.appendChild(dateInput)
  modalContent.appendChild(paraOne)
  modalContent.appendChild(paraOneInput)
  modalContent.appendChild(paraTwo)
  modalContent.appendChild(paraTwoInput)
  modalContent.appendChild(paraThree)
  modalContent.appendChild(paraThreeInput)
  modalContent.appendChild(closeBtn)
  modalContent.appendChild(saveBtn)

  // Set attributes
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
  modalContent.classList.add('modal-content')


  return modal
}

// Give 'New Article' menu item an event
const newArticle = document.querySelector('li:nth-last-child(2)')
newArticle.addEventListener('click', () =>{
  document.querySelector('.modal').classList.toggle('show')
  document.querySelector('body').classList.toggle('modal-open')
})