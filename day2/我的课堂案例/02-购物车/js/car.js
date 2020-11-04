$(function () {
    // 1 全选与取消全选
    $(".checkall").change(function () {
        var status = $(this).prop("checked");
        // console.log(status);
        $(".j-checkbox,.checkall").prop("checked", status);
        if ($(this).prop("checked")) {
            // 让所有的商品添加 check-cart-item 类名
            $(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item 移除
            $(".cart-item").removeClass("check-cart-item");
        }
    });

    // 2 反选
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true)
        } else {
            $(".checkall").prop("checked", false)
        }
        if ($(this).prop("checked")) {
            // 让当前的商品添加 check-cart-item 类名
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item 移除
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });
    // 3 增减商品数量
    // 加       increment +号  p-num数量  p-sum小计
    $(".increment").click(function () {
        // +号的兄弟input框的值给num变量 点击+号让num值++，然后赋值给文本类型的input框
        var num = $(this).siblings(".itxt").val();
        num++
        $(this).siblings(".itxt").val(num);
        var p = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        var price = (num * p).toFixed(2);
        // 小计模块
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum()
    });
    // 减
    $(".decrement").click(function () {
        var num = $(this).siblings(".itxt").val();
        if (num == 1) return;
        num--;
        $(this).siblings(".itxt").val(num);

        var p = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        var price = (num * p).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum()

    });



    //4 用户修改文本框itxt(文本类型的input框)要改变小计
    $(".itxt").change(function () {
        // 先得到文本框里的值 × 当前商品的单价
        var num = $(this).val();
        // 当前商品的单价
        var p = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        var price = (num * p).toFixed(2);
        // 文本框里的值 × 当前商品的单价
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum()



    });



    // 5. 封装了一个函数  计算总数量和总价  总数量：所有文本框里的值相加  总价同理
    getSum();

    function getSum() {
        // 已选amount-sum件商品 总数量
        var count = 0; //计算总数量 itxt
        var money = 0; //计算总价 p-sum
        $(".itxt").each(function (i, dom) {
            count += parseInt($(dom).val())
        })
        // 总数量amount-sum em 
        $(".amount-sum em").text(count);

        $(".p-sum").each(function (i, dom) {
            money += parseFloat($(dom).text().substr(1));
            // 总价price-sum
            $(".price-sum em").text(`￥${money.toFixed(2)}`);
        });
    }

    // 6 删除商品模块
    $(".p-action a").click(function () {
        // (1) 删除的是当前的商品
        $(this).parents(".cart-item").remove();
        getSum();
    });
    //(2) 删除选中(小复选框选中)的商品
    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    //(3) 清空购物车 删除全部商品
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getSum();
    });


})