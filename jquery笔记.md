# 一.回顾

## 1.js基础

### 编程的三要素

#### 1·.数据

​     a.变量是用来存储数据

​     b.数据类型：基本数据类型（number,string,boolean,null,undefined）   

​                            引用类型(object[ Date,Math,Array],function)

​     c.运算符:   让数据可以进行相互

​     d.数据的转换



#### 2.流程控制：顺序  分支  循环

​    a.分支：

​          单分支   if()  {}

​          双分支    if() {} else {}

​          多分支    if(){} else if(){}....else{}

​          switch...case

​    b.循环

​        for(){}

​        while(){}

​        do{}while()

​        for...in

#### 3.函数

​     作用：函数只是为了将相同的逻辑代码封装起来

​     声明函数   函数调用

​    function 函数名(形参){

​       函数体

​       [return 返回值]

​    }

​     函数名(实参)



a. arguments

b.全局变量 局部变量

c.作用域   作用域链



### 补充：

预解析：在js代码执行前，有变量提升，函数名提升

内置对象： Math,Date,String,Array





## 2.webAPI

作用：用js语言做网页特效

### 1.DOM

​    a.找对象（找元素）

​       节点查找：

​            父：parentNode

​			子:   children       第一个孩子：children[0]

​			兄:   previousElementSibling   ,    nextElementSibling

​    b.操作内容：  innerHTML  innerText

​    c.操作属性： src  value  href  class style

​           getAttribute()

​           setAttribute()

​           

​          className    classList(add,remove,toggle)

​          

​       自定义属性 (data-type)

​          node.dataset.没有data-开头的属性名

​          node.dataset.type

​    d.操作大小：offsetWidth  clientWidth  scrollHeight

​    e.操作位置：offsetLeft offsetTop



​    重点：事件

​    事件流：捕获 与 冒泡

​    事件对象：event

​    阻止事件的默认行为：preventDefault()

​    阻止事件冒泡：stopPropagation()

​    

### 2.BOM

   window:  

​         方法：setTimeout()   setInterval()   

​	     事件：onload  onresize

   window子对象：location history  document navigator





# jQuery学习

### 1.下载jQuery.js



### 2.在全局作用域下就有 $ 对象，这个$对象也是函数.



### 3.jQuery中的入口函数

   $(document).ready(function(){...})

   $(function(){...})



### 4.jQuery对象与dom的相互转换



### 5.选择器



### 6.节点查找

父：parent()

父级：parents()

子:   children()   

后代：find()

兄弟: siblings()



### 7.样式属性操作

行内样式：  css()

类样式：addClass()   removeClass()  toggleClass()   hasClass()



### 8.索引操作

 index():  只能操作亲兄弟节点



### 9.效果 （显示与隐藏 动画）

show()   hide()   toggle()

slideDown()  slideUp()   slideToggle()

fadeIn()   fadeOut()   fadeToggle()   fadeTo(时间，opacity)

动画： animate({...},时间，速率，funciton(){动画执行完毕时})



### 10.属性

prop(): 固有属性           checked selected disabled

attr(): 自定义属性



data()



### 11.内容

html()

text()

val()



### 12.jquery元素的遍历

each()



### 13.元素的创建 追加 删除

创建：$("你创建的元素")

追加：append()  prepend()    before()   after()

删除：remove()  empty()   html("")



### 14-元素的大小

width()   height()     内容的宽高

innerWidth()   innerHeight()   内容 + padding

outerWidth()   outerHeight()    内容 + padding+border

outerWidth(true)   outerHeight(true)    内容 + padding+border+margin



### 15.位置

offset()   距文档的偏移量

position()  距有定位的父级元素的偏移量

scrollTop() 滚动距离



### 16.事件

on():   可以实现事件委托

off():

one():

事件对象：event

   