$(function(){
    
    // 页面打开加载数据
    loadData();

    $("#title").on("keydown",function(event){
        if(event.keyCode==13){
            var title = $(this).val() 
            var msg = {name:title,done:false};

            // 1想插入到localStorage，先读取本地存储，
            var data = getData()
            // 2再追加
            data.push(msg);
            // 3最后再重新存储
            saveData(data)
            // 4数据展示

            loadData()

            $(this).val("");

        }
    })

    // 封装读localStorage数据
    function getData(){
        var todo = localStorage.getItem("todo");
        if(todo!=null){
            var data = JSON.parse(todo)
        }else {
            var data = []
        }        
        return data;
    }

    // 封装向localStorage存储数据
    function saveData(data){
        var str = JSON.stringify(data)
        localStorage.setItem("todo",str)
    }
    // 封装加载数据
    function loadData(){
        var data = getData();

        $("#todolist,#donelist").html("");
        var todoCount = 0;
        var doneCount = 0;
        data.forEach(function(value,i){
            if(value.done){
                var li = $(`<li ><input type="checkbox" checked><p>${value.name}</p><a href="javascript:;" data-id=${i}></a></li>`);
                $("#donelist").prepend(li);
                doneCount++;
            }else {
                var li = $(`<li ><input type="checkbox" name="" id=""><p>${value.name}</p><a href="javascript:;" data-id=${i}></a></li>`);
                $("#todolist").prepend(li);
                todoCount++;
            }
        })

        $("#todocount").html(todoCount)
        $("#donecount").html(doneCount)

    }

    $("#todolist,#donelist").on("click","a",function(){
        // 删除本地存储数据

        // 1.先找出数据的对应的下标
        var index = $(this).data("id");
        // 2.从本地存储中获取数据
        var data = getData();
        // 3.根据下标删除数据
        data.splice(index,1)
        // 4.删除后的数据重新存储到本地存储
        saveData(data);
        // 5.再次根据本地存储数据重新加载
        loadData();
    })


    $("#todolist,#donelist").on("click",":checkbox",function(){
        var status = $(this).prop("checked");
        var index = $(this).siblings("a").data("id");

        // 获取数据
        var data = getData();
        // 修改数据
        data[index].done = status;
        // 存储数据
        saveData(data);
        // 重新加载数据
        loadData()


    })





















    // {name:"要做的第一个事情",done:false}

    // [
    //     {name:"要做的第一个事情",done:false},
    //     {name:"要做的第二个事情",done:false}
    // ]


    // 将json对象转换成json字符串： JSON.stringify()
    // 将json字符串转换成json对象： JSON.parse()

    // var obj = {name:"要做的第一个事情",done:false};
    // console.log(JSON.stringify(obj));
    
    // var arr = [
    //         {name:"要做的第一个事情",done:false},
    //         {name:"要做的第二个事情",done:false}
    // ]
    // var str = JSON.stringify(arr);
    // console.log(str);

    // console.log(JSON.parse(str));



    





})