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
//-----------------点击箭头让内容出现----------------------
var siz =document.getElementById("siz");
var sha=document.getElementById("all-sha");
var white=document.getElementById("white");
  siz.onclick =function(){
    sha.style.display ="block";
    white.style.display ="block";
  }
 //--------------点击关闭按钮让内容消失---------------------
   var close = document.getElementById("close");
  	close.onclick = function(e){
    sha.style.display =" none";
    white.style.display = "none";
  }
  //-------------点击数量加或减获取上面的价格随着数量不停的增减------------------
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
    //-------------点击颜色分类会改变上方的颜色,以及图片----------------
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
//----------------点击价格不停的加否则减-------------------
   var subs = document.getElementById("sub1");
   var number3 = document.getElementById("number3");
   var plus1= document.getElementById("plus1");
    var i = 1;
    plus1.onclick = function(){
      i++;
      number3.innerHTML =i;
    }
    subs.onclick = function(){
      i--;
      number3.innerHTML = i;
    }
  //-----------------------返回首页------------------------
    var leftrow = document.getElementById("leftrow");
    leftrow.onclick = function(){
    	self.location = "index.html";
    }