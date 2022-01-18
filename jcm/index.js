( function(){
    var anmationSection = $('.anmation-wrap'),
        anmationImg = $('.fix-imgs .img'),
        currentItem = anmationImg[0];
        for(var i = 0; i < anmationSection.length; i++){
            anmationSection.get()[i].dataset.index = i;
            anmationImg.get()[i].dataset.index = i;
            
        }
        window.addEventListener('scroll',function(){
            var step;
            var boundingRect;

            for(var i = 0; i < anmationSection.length; i++){
                step = anmationSection[i];
                height =  anmationSection.eq(i).height();
                boundingRect = step.offsetTop;
                duration = (window.scrollY - boundingRect) * 0.001;
                if(boundingRect <=  window.scrollY && boundingRect + height >=  window.scrollY){
                    currentItem.classList.remove('active');
                    currentItem = anmationImg[step.dataset.index];
                    currentItem.classList.add('active');
                    currentItem.style.cssText = "transform: scale( " + duration +" );"
                }else {
                }
            }
        });
})();