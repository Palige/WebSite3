var initFunc = function () {

    var initLayout = function () {
        $(function () {
            new WOW().init();

        });

        //点击图片查看大图的样式
        $('.portfolio-popup').magnificPopup({
            type: 'image',         // 行内的类型，类比图片的模式
            closeBtnInside: true,   // 显示关闭按钮
            closeOnBgClick: false,  // 点击遮罩透明背景关闭弹出层
            gallery: {              //可点击查看上/下一张图片
                enabled: true
            }

        });


        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });



    }

    var clickEvent = function () {

        //导航栏点击
        $('li').click(function () {
            $(this).addClass("active-menu").siblings().removeClass("active-menu");
            //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减80px（这里根据需要自由设置）,1000=1s（时间）
            //$('html,body').stop().animate({ scrollTop: ($($(this).find("a").attr('href')).offset().top - 80) }, 1000);
            $('html,body').stop().animate({ scrollTop: ($("#" + $(this).attr('name')).offset().top - 80) }, 1500, 'easeInOutExpo');
        });

        //返回顶部
        $('.back-to-top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500, 'easeInOutExpo');
            return false;
        });

    }



    return {
        init: function () {
            initLayout();
            clickEvent();
        }
    }
}();

initFunc.init();





