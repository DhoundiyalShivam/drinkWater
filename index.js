let smallCup =document.querySelectorAll('.smallCup')
let filledGlass = document.getElementById('filledGlass')
let cup = document.getElementById('cup')
smallCup.forEach(smallCup=>{
    smallCup.addEventListener('click',()=>{
        emptyGlass()
        filledGlasses(smallCup.id)
    })
})
function emptyGlass(){
    smallCup.forEach(smallCup=>{
        smallCup.classList.remove('filled')
    })
}
function filledGlasses(number){
    for(let i =0;i<number;i++){
        smallCup[i].classList.toggle('filled')
    }
largeGlass(number)
}
function largeGlass(number){
    let height = (number)/8*100;
    filledGlass.style.height=height+'%'
    if(height === 100){
        cup.innerText=''
    filledGlass.style.height=height+'%'


        filledGlass.innerText='Filled'
    }
    else{
        cup.innerText=`${height}% Filled`
        filledGlass.innerText=''
    }
}