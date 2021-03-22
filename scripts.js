const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card', '.card_content');


for (let card of cards) {
        card.addEventListener("click", function(){
        const imageId = card.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src = `assets/${imageId}.png`;       
        
    })
}



document.querySelector(".close-modal").addEventListener("click", function(){
modalOverlay.classList.remove("active");

})



