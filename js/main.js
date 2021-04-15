const open = document.querySelectorAll('.gallery__section');


open.forEach(element => {
    element.addEventListener('click',addClass);
    element.addEventListener('transitionend',bringChild);
});

function bringChild(event){
    if(event.propertyName.includes("flex")){
        this.classList.toggle('open-active');
    }
}
function addClass(element){
    this.classList.toggle('open');
}

console.log(open);