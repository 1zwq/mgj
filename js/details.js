//-------------------------------------------------------------------------------
!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width / 320) + "px");
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));
//---------------------页面加载完成之后---------------------------------------
window.onload=function(){
  to_top();
     window.onscroll = function(){
        to_top();
        //整个body的高度或者要获取当前页面的滚动条纵坐标位置
        var s = document.body.scrollTop || document.documentElement.scrollTop;
        if(s>H) {
            node.style = "position:fixed;top:0;"
        
        }else{
               node.style = "position:static"
        }
    }
    var node = document.getElementById("node"),
    H = 0,
    Y = node;//node到body最上方的距离求出h
    while (Y) {
      //元素加的是这个这个元素到整个body的距离
      H += Y.offsetTop; //子元素距离父元素的距离
      Y = Y.offsetParent;//不停地去寻找父元素

    }  
    //------------------------点击快捷导航按钮出现阴影里面的内容-------------------
  var shadow = document.getElementById('all-shadow');
  var cil = document.getElementById('right-cil');
  var pink = document.getElementById('pink-shadow'); 
  var word = document.getElementById('word');
  var none_nav = document.getElementById('none_nav');
  //点击快捷导航如果快捷导航里面的值为真,让阴影以及阴影里面的内容出来
  word.onclick = function(e){
    disOrNone(true);     
  }
  none_nav.onclick = function(e){
    disOrNone(false);     
  }
   
  function disOrNone(a){
    if (a) {
      shadow.style.display = 'block';
      cil.style.display = 'block';
      pink.style.background = 'pink';
      word.style.display = 'none';
      none_nav.style.display = 'block';
    }else{
      shadow.style.display = 'none';
      cil.style.display = 'none';
      pink.style.background = 'black';
      none_nav.style.display = 'none';
      word.style.display = 'block';
    }
  }
//置顶当整个body的高度或者要获取当前页面的滚动条纵坐标位置大于500时让置顶 出现否则消失
  function to_top(){
      if (document.documentElement.scrollTop + document.body.scrollTop > 500) {
            document.getElementById("to-top").style.display = "block";
        }
        else {
            document.getElementById("to-top").style.display = "none";
        }
  }

//--------点击颜色分类会改变上方的颜色,以及图片---------------
  var blue = document.getElementById("blue");
  var sto = document.getElementById("sto");
  var black = document.getElementById("black");
  var blu = document.getElementById("blue");
  var red = document.getElementById("red");
  var pic = document.getElementById("pic");
  var pack = document.getElementById("pack");
  var sel = document.getElementById("sel");
  var count = "";
  blue.onclick =function(){
    if(count ==""){
      sel.innerHTML = "请选择:";
      blue.style.color = "#a1a1a1";
      sto.innerHTML  = "颜色";
      pack.innerHTML = "库存538件";
      sto.style.color = "#333";
      pic.src = "img/listHot19.webp";
      
      count++;

    }else{
      blue.style.color = "#ff2255";
      sel.innerHTML = "已选择:";
      sto.innerHTML  = "绿色【小熊挂件随机送】";
      sto.style.color = "#ff2255";
      pack.innerHTML = "库存468件";
      pic.src = "img/green.webp";
      count = "";
    }
  }
   black.onclick =function(){
    if(count ==""){
      sel.innerHTML = "请选择:";
      black.style.color = "#a1a1a1";
      sto.innerHTML  = "颜色";
      pack.innerHTML = "库存538件";
      sto.style.color = "#333";
      pic.src = "img/listHot19.webp";
      count++;

    }else{
     black.style.color = "#ff2255";
      sel.innerHTML = "已选择:";
      sto.innerHTML  = "黑色【小熊挂件随机送】";
      sto.style.color = "#ff2255";
      pack.innerHTML = "库存1000件";
     pic.src = "img/black.webp";
      count = "";
    }
  }
   red.onclick =function(){
    if(count ==""){
      sel.innerHTML = "请选择:";
      red.style.color = "#a1a1a1";
      sto.innerHTML  = "颜色";
      pack.innerHTML = "库存538件";
      sto.style.color = "#333";
      pic.src = "img/listHot19.webp";
      count++;

    }else{
      red.style.color = "#ff2255";
      sel.innerHTML = "已选择:";
      sto.innerHTML  = "粉红色【小熊挂件随机送】";
      sto.style.color = "#ff2255";
      pack.innerHTML = "库存5700件";
      pic.src = "img/pink.webp";
      count = "";
    }
  }

  //----------点击图文详情 以及商品参数热卖推荐颜色改变----------
    var des = document.getElementById("des");
    var sho = document.getElementById("sho");
    var com = document.getElementById("com");
    
    des.onclick = function(){
      des.style.color = "#ff1877";
    }
    sho.onclick = function(){
      sho.style.color = "#ff1877";
      des.style.color ="";
    }
     com.onclick = function(){
      com.style.color = "#ff1877";
      sho.style.color ="";
    }


//--------点击数量加或减获取上面的价格随着数量不停的增减------------
    var price = document.getElementById("price");
    var sub = document.getElementById("sub");
    var number2 = document.getElementById("number2");
    var plus= document.getElementById("plus");
    var i = 1;
    plus.onclick = function(){
      i++;
      number2.innerHTML =i;
      price.innerHTML = price.innerHTML*2;

    }
    sub.onclick = function(){
      i--;
      number2.innerHTML = i;
      price.innerHTML =parseFloat(price.innerHTML/2) ;
    }
//--------------点击优惠活动券显示已经领取--------------
    var draw = document.getElementById("draw");
    var ico = document.getElementById("ico");
    var rec = document.getElementById("rec");
    var vec = document.getElementById("vec");
    var alr = document.getElementById("alr");
    var qua = document.getElementById("qua");
    
    draw.onclick = function(){
      draw.style.background ="#cac6c6"
      ico.style.display = "block";
    }
     rec.onclick = function(){
      rec.style.background ="#cac6c6"
      vec.style.display = "block";

    }
     alr.onclick = function(){
     alr.style.background ="#cac6c6"
      qua.style.display = "block";

    }
//-----------点击箭头按钮让阴影里面的东西出现---------------
  var siz = document.getElementById("size");
  var sha = document.getElementById("all-sha");
  siz.onclick =function(){
    sha.style.display = "block";
    white.style.display = "block";
  }
//-----------点击关闭按钮让阴影以及阴影里面的东西消息--------------
  var close = document.getElementById("close");
  close.onclick = function(e){
    sha.style.display =" none";
    white.style.display = "none";
  }
  //-----------点击免邮里面的箭头出现里面的内容--------------------
  var doc = document.getElementById("doc");
  var free = document.getElementById("free");
  doc.onclick = function(){
    shadow.style.display = 'block';
    free.style.display = 'block';
  }
  var closeb = document.getElementById("closeb");
  closeb.onclick = function(){
    shadow.style.display = "none";
    free.style.display = "none";
  }
  //-------------点击退货补运费出现里面的内容----------------------
  var freight = document.getElementById("freight");
    freight.onclick = function(){
    shadow.style.display = "block";
    free.style.display = "block";
  }
  //------------点击查看详情出现里面的内容-----------------------
  var Det = document.getElementById("Det");
  var Pre = document.getElementById("Pre");
  Det.onclick = function(){
    sha.style.display ="block";
    Pre.style.display ="block";
  }
  var but = document.getElementById("but");
  but.onclick = function(){
  sha.style.display="none";
  Pre.style.display="none";
  }
  //-----------距结束仅剩多长时间 ------------------------------
var h = document.getElementById('hours');
var m = document.getElementById('minutes');
var s= document.getElementById('sec');
function time(){
  var nowDate = new Date();//当前系统时间
    var futDate = new Date("2017/10/01");//设定将来时间
    
    var nms = nowDate.getTime();
    var fms = futDate.getTime();
    var ms = fms - nms;
    var ds = 24*3600 *1000;//一天的毫秒数
    var hs = 3600*1000;//一个小时的毫秒数
    var mins = 1000*60;//一分钟的毫秒数

    var day = parseInt(ms/ds);
    var hours = parseInt(ms%ds/hs);
    var min = parseInt(ms%ds%hs/mins);
    var sec = parseInt(ms%ds%hs%mins/1000);
    h.innerHTML = add0(hours);
    m.innerHTML =add0(min);
    s.innerHTML = add0(sec);
  }
  function add0(num){
    if(num<10){
      return "0"+num
    }else{
      return num
    }
  }
  setInterval(time,1000)
}


