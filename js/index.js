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
//-----------------计时器-------------------------------
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
  //-----------------点击分类跳转分类页面——--------------------
  var Bot= document.getElementById("Bot");
  Bot.onclick = function(){
    self.location = "list.html";
  }
   //-----------------点击购物车跳转购物车页面——--------------------
  var shop = document.getElementById("shop1")
  shop.onclick = function(){
    self.location = "shopping.html";
  }
   //-----------------点击我的跳转分类我的页面——--------------------
  var my = document.getElementById("my");
  my.onclick = function(){
    self.location = "my.html";
  }
