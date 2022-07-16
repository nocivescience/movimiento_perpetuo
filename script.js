const cards=document.querySelectorAll('.card');
const cardsArray=Array.from(cards);
const prevEl=document.querySelector('#prev');
const nextEl=document.querySelector('#next');
let contador=1;
cards.forEach((card,index)=>{
    card.innerHTML=`
        <div class='number-card'>
            ${index+1}
        </div>
    `;
});
function changeCard(){
    cardsArray.forEach(card=>{
        card.classList.remove('move-right');
        contador++;
    });
};
nextEl.addEventListener('click',()=>{
    changeCard();
    if(contador==cardsArray.length){
        setTimeout(()=>{
            
        });
    }
});