$(function () {
    // 存储本地存储数据格式  var todolist=[{title:"xxx",done:false}]
    // 1 按回车 把完整的数据存储到本地储存里
    // 给输入框绑定按下事件 
    $("#title").on("keydown", function (event) {
        // 2 如果按下的键ASCII值为13(回车键)
        if (event.keyCode === 13) {
            // 先 霍 取本地储存原来的数据
            //  3 声明数组 保存数据
            var local = getData();
            // 把local数组 更新数据 (秀) ，把输入框最新的数据追加给local数组
            local.push({
                title: $(this).val(),
                done: false
            });
            // 把最新local数组 春 给本地储存
            savaData(local);
            // 4 todolist 本地储存数据渲染到页面
            load();
        }
    });


    // 封装函数  🖖🏻 霍 取本地储存的数据 
    function getData() {
        // 获取本地储存的数据
        var data = localStorage.getItem("todolist");
        // 如果获取本地储存的数据 不等于 空，说明有数据 有数据就拿过来
        if (data !== null) {
            //本地储存的数据是字符串格式 ，我们需要对象格式的，把从本地储存获取的字符串格式转换为对象格式
            // 有数据就返回 把字符串格式 转换成 对象格式
            return JSON.parse(data);
        } else {
            //  如果获取本地储存的数据 等于 空，就返回空数组
            return [];
        }
    }
    //  封装函数 春
    function savaData(data) {
        // local是局部变量 这里不能直接修改 要把local传参 给savaData(data)来把修改之后最新的数据存储到本地储存;
        localStorage.setItem("todolist", JSON.stringify(data));
    }

    // 封装函数 宣 染加载数据
    function load() {
        // 先霍取本地储存数据
        var data = getData();
        // 遍历本地存储数据
        $.each(data, function (i, n) {
            // i是data本地存储数据的索引 n是本地存储数据的每一条 有几条数据就生成几个li添加到ol里(代办事项)
            // 把遍历本地存储数据的每一条数据自创建的li添加到ol里面的li的前面 
            $("ol").prepend("<li></li>");
        })
    }



})