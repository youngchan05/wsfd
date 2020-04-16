const boxMoving = () =>{
    const boxWrap = document.querySelector('.fix-box'),
        box = boxWrap.querySelectorAll('div');
    let currentBox = 0;
        function boxAnimation(){
            box[currentBox].classList.add('on');
            currentBox++;
            if(currentBox == box.length){
                clearInterval(boxLoop)
                boxWrap.classList.add('active')
            }
        }
        const boxLoop = setInterval(boxAnimation , 200);
}
const contentScroll = () =>{
    const contentWrap = document.querySelector('.wrap'),
        width = contentWrap.offsetWidth,
        scroll = document.querySelector('.scroll-bar'),
        scrollBg = scroll.querySelector('span');
        console.log(width);
    return {
        init : function(){
            console.log(width);
            this.scrollBar()
        },
        scrollBar : function(){

        }
    }
}
const scroll = contentScroll();
const init = ()=>{
    boxMoving();
    scroll.init();
}
setTimeout(init , 3000);

// const text = document.querySelectorAll('.line p');
// const wrap = document.querySelector('.wrap');
// const scroll = document.addEventListener('scroll', ()=>{
//     let top = window.scrollY /3;
//     for(let i = 0; i < text.length; i++){
//         text[i].style.transform  = "translateY("+ -top+ "px)";
//     }
// })