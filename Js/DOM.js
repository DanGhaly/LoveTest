let yesbtn=document.getElementById('yesbtn')
let nobtn=document.getElementById('nobtn')
let lovetext=document.getElementById('lovetext')
let container=document.getElementById('container')


let norec=nobtn.getBoundingClientRect();
let contrec=container.getBoundingClientRect();

yesbtn.addEventListener('click',()=>{
    lovetext.innerHTML='I love you too ❤️'
})

nobtn.addEventListener('mouseover', ()=>{
    let x= Math.floor(Math.random()*(contrec.width-norec.width))+1;
    let y= Math.floor(Math.random()*(contrec.height-norec.height))+1;
    nobtn.style.left=x+'px'
    nobtn.style.top=y+'px'
})

