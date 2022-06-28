const closeIcon = document.querySelector('.modal__header-icon')
const openModalBtn = document.querySelector('.open-modal-btn')
const closeModalBtn = document.querySelector('.modal__footer-close')
const modal = document.querySelector('.modal') 

function toggleModal(){
    modal.classList.toggle('hide')
}

openModalBtn.addEventListener('click', toggleModal)
closeModalBtn.addEventListener('click', toggleModal)
closeIcon.addEventListener('click', toggleModal)

