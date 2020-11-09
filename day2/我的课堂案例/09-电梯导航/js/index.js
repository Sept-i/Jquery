// $(function() {
//     // 1.显示隐藏电梯导航
//     var toolTop = $(".recommend").offset().top;
//     toggleTool();

//     function toggleTool() {
//         if ($(document).scrollTop() >= toolTop) {
//             $(".fixedtool").fadeIn();
//         } else {
//             $(".fixedtool").fadeOut();
//         };
//     }

//     $(window).scroll(function() {
//         toggleTool();
//         // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名

//         $(".floor .w").each(function(i, ele) {
//             if ($(document).scrollTop() >= $(ele).offset().top) {
//                 console.log(i);
//                 $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

//             }
//         })


//     });
//     // 2. 点击电梯导航页面可以滚动到相应内容区域
//     $(".fixedtool li").click(function() {

//         console.log($(this).index());
//         // 当我们每次点击小li 就需要计算出页面要去往的位置 
//         // 选出对应索引号的内容区的盒子 计算它的.offset().top
//         var current = $(".floor .w").eq($(this).index()).offset().top;
//         // 页面动画滚动效果
//         $("body, html").stop().animate({
//             scrollTop: current
//         });
//         // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
//         $(this).addClass("current").siblings().removeClass();
//     })
// })

$(function () {
    // 1 滚动页面到今日推荐 让tool显示和隐藏
    var toolTop = $(".recommend").offset().top;

    function toggleTool() {
        if ($(window).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }
    $(window).scroll(function () {
        toggleTool()
        // 4 页面滚动内容区域 电梯导航的当前li也添加current类 姐妹移除current
        $(".floor .w").each(function (i, dom) {
            if ($(window).scrollTop() >= $(dom).offset().top) {
                $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current")
            }
        })
    });
    // 2点击电梯导航 滚到到对应的内容区域  核心算法：电梯导航下标和内容区下标 对应
    $(".fixedtool li").click(function () {
        // 点li计算页面要去的位置
        var index = $(this).index(); //li的下标
        var top = $(".floor .w").eq(index).offset().top;
        $("html,body").stop().animate({
            scrollTop: top
        })
        // 3点击电梯导航之后 当前li添加current  姐妹移除current--------(jquery排他思想)
        $(this).addClass("current").siblings().removeClass("current");
    });

})