var utils = init();

function init (){
    return {
        certificationPop : function(){
            $('#CertificationPop').on('click',function(){
                $('.bottom-pop').toggleClass('active');
            })
        },
        closePop : function(){
            $('.bottom-pop .close-btn').on('click',function(){
                $('.bottom-pop').toggleClass('active');
            })
        },
        hedaer : function(){
            var $selector = $('.wrapper');
            var $target = $('.header');
            if($selector.hasClass('sub')){
                var text = $('.sub-title strong').text();
                $target.append('<strong>'+text+'</strong>');
            }
        },
        mobileMneu:function(){
            var $btn = $('.m_menu'),
                $gnb = $('.gnb');
            $btn.on('click',function(){
                $(this).toggleClass('active');
                $gnb.toggleClass('active');
            })
            $('.depth').on('click',function(){
                $(this).toggleClass('on');
            })
        },
        mainScroll :function(){
            var $selector = $('.wrapper'),
                $target = $('.header'),
                $wrap = $('.header-wrap'),
                $logo = $('.logo img');
            if($selector.hasClass('main')){
                $(window).scroll(function(){
                    console.log($wrap)
                    $scrollTop = $(this).scrollTop();
                    if($scrollTop > $target.height()){
                        $target.addClass('active');
                        $wrap.addClass('active');
                        $logo.attr('src','../img/logo/logo_black.png');
                    }else{
                        $target.removeClass('active')
                        $wrap.removeClass('active')
                        $logo.attr('src','../img/logo/logo_white.png');
                    }
                })
            }
        },
        popAks : function(){
            var $selector = $('.btn_ask'),
                $target = $('.inquire-pop'),
                $close = $target.find('.close')
            $selector.on('click',function(){
                $target.addClass('active');
            })
            $close.on('click',function(){
                $target.removeClass('active');
            })
        },
        accordion: function(){
            var $selector = $('.cs-table .text-wrap .inquire');
            $selector.on('click',function(){
                $(this).siblings('.anwer').toggleClass('active');
            })

        }
    }
}

(function(){
    utils.certificationPop();
    utils.closePop();
})();
