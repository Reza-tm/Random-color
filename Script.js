let colorCodePlace = document.querySelector('.colorCodePlace')
let colorCode = document.querySelector('.colorCode')
let exampleColor = document.querySelector('.exColor')
let btn = document.querySelector('#btn')
let copyBtn = document.querySelector('#copy')
let tikedBtn = document.querySelector('#ticked')
let iconPlace = document.getElementById('iconPlace')
let randomColor ;
// console.log(randomColor);
let generator = ()=>{
    randomColor = Math.random().toString(16).substring(2,8)
    console.log(randomColor);
    colorCode.value="#"+ randomColor
    exampleColor.style.color = "#"+ randomColor
    
}
btn.addEventListener('click' , ()=>generator())

copyBtn.onclick = function(){
    if(colorCode.value){
        colorCode.select()
        document.execCommand("copy");
        copyBtn.remove()
        iconPlace.innerHTML=`<svg id="ticked" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="${'#'+randomColor}">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>`
        setTimeout(()=>{location.reload ()
        } , 500)
    }
}
