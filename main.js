const yes = document.getElementById('yes');
const no = document.getElementById('no');
let modalContent = document.querySelector(".modal-content");
let blurBg = document.querySelector(".blur-bg");
let closeModal = document.querySelector(".close-modal");
let closePopup = document.querySelector(".close-popup");
no.addEventListener('mouseover', ()=> {
    const x = Math.floor(Math.random() * (window.innerHeight-150));
    const y =  Math.floor(Math.random() * (window.innerHeight-150));
    no.style.left = `${x}px`;
    no.style.top = `${y}px`;
});
no.addEventListener('mouseover', function(){
    no.style.transform = 'scale(0.5)';
});
// no.addEventListener('mouseout', function(){
//     no.style.transform = 'scale(1)';
// });
yes.addEventListener('click',  function(){
    modalContent.classList.remove("hidden-modal");
    blurBg.classList.remove("hidden-blur");
})
let closeModalFunction = function () {
    modalContent.classList.add("hidden-modal")
    blurBg.classList.add("hidden-blur")
}
blurBg.addEventListener("click", closeModalFunction);
closeModal.addEventListener("click", function(){
    alert('Giờ Em Sẽ Là Của Anh 3==D');
});
closeModal.addEventListener("click", closeModalFunction);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape"
    && !modalContent.classList.contains("hidden")
    ) {
    closeModalFunction();
    }
});
