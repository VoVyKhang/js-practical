const image = document.querySelectorAll('.image img')
const prevBtn = document.querySelector('.prev')
const rightBtn = document.querySelector('.right')
const closeBtn = document.querySelector('.close')
const galleryImage = document.querySelector('.gallery__inner img')
const gallery = document.querySelector('.gallery')

var currentIndex = 0

function showGallery() {
    if(currentIndex == 0){
        prevBtn.classList.add('hide')
    }
    else{
        prevBtn.classList.remove('hide') 
    }

    if(currentIndex == image.length -1){
        rightBtn.classList.add('hide')
    }else{
        rightBtn.classList.remove('hide')
    }

    galleryImage.src = image[currentIndex].src
    gallery.classList.add('show')
}

image.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index
        showGallery()
    })
})

closeBtn.addEventListener('click', function() {
    gallery.classList.remove('show')

})

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27){
    gallery.classList.remove('show')
    }
})

prevBtn.addEventListener('click', function() {
    if(currentIndex > 0) {
        currentIndex--
        showGallery()
    }
})

rightBtn.addEventListener('click', function() {
    if(currentIndex < image.length -1){
        currentIndex++
        showGallery()
    }
})
