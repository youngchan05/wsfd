$(function() {
    slide.init();
    popUtils.init();
    menu.init();
    AOS.init();
});
var slide = {
    init : function(){
        this.fullPage();
        this.setting();
        
    },
    setting : function(){
        if($('.swiper-container').length == 0) return ;
        var swiper = new Swiper('.swiper-container', {
            effect : 'fade', // 페이드 효과 사용
            loop : true, // 무한 반복
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
            pagination: {
                el: '.pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
                delay : 3000,   // 시간 설정
              },
        });
    },
    fullPage : function(){
        $('#fullpage').fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage','5thpage'],
            menu: '#menu',
            lazyLoad: true
          });
        // var myFullpage = new fullpage('#fullpage', {
        //     anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage','5thpage'],
        //     menu: '#menu',
        //     lazyLoad: true
        // });
    }
}

var popUtils = {
    init : function(){
        this.close();
    },
    show : function(name){
        var target = $("div[data-" + name +" ]");
        $('.pop-wrap').toggleClass('active');
        target.toggleClass('active');
        this.scrollStop();
    },
    close : function(){
        $('.pop_close').on('click',function(){
            $('.pop-wrap').toggleClass('active');
            $(this).parent().toggleClass('active');
            $('body').off('scroll touchmove mousewheel');
        })
    },
    scrollStop : function(){
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
          });
    },
}

var menu = {
    init: function(){
        this.open();
        this.close();
    },
    close: function(){
        $('.close_menu').on('click',function(){
            $('.mobile-menu').toggleClass('active');
        })
        $('.mobile-menu a').on('click',function(){
            $('.mobile-menu').toggleClass('active');
        })
    },
    open :function(){
        $('.btn_menu').on('click',function(){
            $('.mobile-menu').toggleClass('active');
        })
    }
}

function dataValidation(){
        var phoneNumber = $('#phoneNumber').val();
        var platform = $('.platform').find("input[name=platform]").is(':checked');
        var privacyAgree =  $('#privacyAgree[name=privacyAgree]').is(':checked');
        var noticeAgree =  $('#noticeAgree[name=noticeAgree]').is(':checked');
        var regExp_ctn = /^(01[01670]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/;
        if(phoneNumber.length < 11 || !regExp_ctn.test(phoneNumber)) return  popUtils.show('phone'); // 핸드폰 번호 확인
        if(!platform) return  popUtils.show('os'); // 핸드폰 기종 확인
        if(!privacyAgree) return  popUtils.show('agree'); // 개인정보 번호 확인
        if(!noticeAgree) return  popUtils.show('agree'); // 개인정보 번호 확인
        dataSubmit();
}

function dataSubmit(){
    var param = {
        phoneNumber : $('#phoneNumber').val(),
        platform : $('.platform').find("input[name=platform]").val(),
        privacyAgree :  $('#privacyAgree[name=privacyAgree]').val(),
        noticeAgree : $('#noticeAgree[name=noticeAgree]').is(':checked') ? "1" : "0",
		channelUrl : document.referrer
    }
    cauly_send("8d813a5d-7b4b-429a-88a7-8925cc08525e","CA_CONVERSION",$('#phoneNumber').val());
    var data = JSON.stringify(param);
    gtag_report_conversion();
    $.ajax({
        type: "POST",
        data:data,
        url:"/reservation",
        contentType:'application/json',
        success : function(){
            popUtils.show('result'); // 사전예약 완료
        },
        error:function(request,status,error){
            popUtils.show('result'); // 사전예약 완료
           }
    });
}

