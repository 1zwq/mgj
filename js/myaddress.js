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
var left = document.getElementById('leftrow');
left.onclick = function(){
	self.location = "my.html";
}
//------------------收货地址里面点击删除出现里面的内容--------------------------
var leave = document.getElementById("leave");
var shadow = document.getElementById("all-sha");
var delect = document.getElementById("delect");
var call= document.getElementById("call");
var confirm=document.getElementById("confirm");
var mei=document.getElementById("mei");
var appen=document.getElementById("appen");
leave.onclick = function(){
	shadow.style.display = "block";
	delect.style.display = "block";
}
call.onclick = function(){
	shadow.style.display = "none";
	delect.style.display = "none";
}
confirm.onclick = function(){
	shadow.style.display = "none";
	delect.style.display = "none";
	mei.style.display = "none";
	appen.style.display = "block";
}