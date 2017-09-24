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
//-----------------跳转购物车页面-------------------------
var skip = document.getElementById("skip")
  skip.onclick = function(){
    self.location = "shopping.html";
  }
  //---------------跳转到首页页面----------------------------
var index = document.getElementById("index");
index.onclick = function(){
	self.location = "index.html";
}
//-----------------跳转到我的收货地址页面---------------------
var deliver=document.getElementById("deliver");
deliver.onclick = function(){
    self.location = "myaddress.html"
}
//------------------跳转到登录页面----------------------------
var sign = document.getElementById("sign");
sign.onclick = function(){
    self.location = "login.html"
}