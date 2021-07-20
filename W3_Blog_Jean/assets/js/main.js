// open modal subscribe
var openModals = document.querySelectorAll('.btn-subs');
var modal = document.querySelector('.modal-subs');
var modalContainer = document.querySelector('.modal-subs__content');

showModal = function () {
    modal.classList.add('open-modal');
}

for (const openModal of openModals) {
    openModal.addEventListener('click', showModal);
}

// close modal subscribe
hideModal = function () {
    modal.classList.remove('open-modal');
}

var closeModal = document.querySelector('.modal-subs__close');
closeModal.addEventListener('click', hideModal);

modal.addEventListener('click', hideModal);
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})

// like and unlike
var buttonLike = document.querySelectorAll('.btn-like');
for (let button of buttonLike) {
    button.onclick = function () {
        this.style.display = 'none';
        this.nextElementSibling.style.display = 'block'
    }
}
var buttonLiked = document.querySelectorAll('.btn-liked');
for (let button of buttonLiked) {
    button.onclick = function () {
        this.style.display = 'none';
        this.previousElementSibling.style.display = 'block'
    }
}

// open replies
   var x = document.getElementById('demo3');
    console.log(x.className.indexOf('all-comments-open') == -1)
 
    function openReplies(id) {
        var x = document.getElementById(id);
        if (x.className.indexOf('all-comments-open') == -1) {
            x.classList.add('all-comments-open');
         } else {
             x.classList.remove('all-comments-open');
         }
    }