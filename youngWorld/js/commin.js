<<<<<<< HEAD
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
        // mobileMneu:function(){
        //     var $btn = $('.m_menu'),
        //         $gnb = $('.gnb');
        //     $btn.on('click',function(){
        //         $(this).toggleClass('active');
        //         $gnb.toggleClass('active');
        //     })
        //     $('.depth').on('click',function(){
        //         $(this).toggleClass('on');
        //     })
        // },
        categoryScroll :function(){
            var $selector = $('.category-fix'),
                $header = $('.fixed-top-btn'),
                $wrap = $('.category-section'),
                $text = $('.search-tit').height() ? $('.search-tit').height()  : 0 ,
                $top = $selector.offset().top,
                $height = $selector.height()  + $header.height() - $text;
                console.log($height );
                $(window).scroll(function(){
                    $scrollTop = $(this).scrollTop();
                    if($scrollTop >$top - 50){
                        if($wrap.hasClass('fix')) return;
                        $wrap.addClass('fix');
                        $wrap.css({
                            paddingTop:$height,
                        })
                    }else {
                        $wrap.removeClass('fix');
                        $wrap.css({
                            paddingTop:$header.height(),
                        })
                    }
                })
        },
        categoryTab : function(){
            $tab = $('.category-tab button'),
            $cont = $('.category-cont'),
            $idx = 0;
            $tab.on('click', function(){
                $idx = $(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                $cont.eq($idx).addClass('active').siblings().removeClass('active');
            })
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
            var $selector = $('.accordion-wrap dt');
            $selector.on('click',function(){
                $(this).toggleClass('active');
            })

        }
    }
}

(function(){
    utils.certificationPop();
    utils.closePop();
    utils.accordion();
    utils.categoryScroll();
    utils.categoryTab();
})();
=======
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
        // mobileMneu:function(){
        //     var $btn = $('.m_menu'),
        //         $gnb = $('.gnb');
        //     $btn.on('click',function(){
        //         $(this).toggleClass('active');
        //         $gnb.toggleClass('active');
        //     })
        //     $('.depth').on('click',function(){
        //         $(this).toggleClass('on');
        //     })
        // },
        categoryScroll :function(){
            var $selector = $('.category-fix'),
                $header = $('.fixed-top-btn'),
                $wrap = $('.category-section'),
                $text = $('.search-tit').height() ? $('.search-tit').height()  : 0 ,
                $top = $selector.offset().top,
                $height = $selector.height()  + $header.height() - $text;
                console.log($height );
                $(window).scroll(function(){
                    $scrollTop = $(this).scrollTop();
                    if($scrollTop >$top - 50){
                        if($wrap.hasClass('fix')) return;
                        $wrap.addClass('fix');
                        $wrap.css({
                            paddingTop:$height,
                        })
                    }else {
                        $wrap.removeClass('fix');
                        $wrap.css({
                            paddingTop:$header.height(),
                        })
                    }
                })
        },
        categoryTab : function(){
            $tab = $('.category-tab button'),
            $cont = $('.category-cont'),
            $idx = 0;
            $tab.on('click', function(){
                $idx = $(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                $cont.eq($idx).addClass('active').siblings().removeClass('active');
            })
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
            var $selector = $('.accordion-wrap dt');
            $selector.on('click',function(){
                $(this).toggleClass('active');
            })

        }
    }
}

(function(){
    utils.certificationPop();
    utils.closePop();
    utils.accordion();
    utils.categoryScroll();
    utils.categoryTab();
})();
>>>>>>> c1bbc2ee951c9e275b5496cd79a64dfc24f14e74
