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
var leftrow = document.getElementById("leftrow")

leftrow.onclick = function(){
	self.location = "index.html"
}
//--------------点击领券出现里面的内容-----------------------------
var coupons = document.getElementById("coupons");
var shadow = document.getElementById("all-shadow");
var store = document.getElementById("store");
var points = document.getElementById("points");
var away = document.getElementById("away");
var awayone = document.getElementById("awayone");
var awaytwo = document.getElementById("awaytwo");
coupons.onclick = function(){
	shadow.style.display = "block";
	store.style.display = "block";

}
points.onclick = function(){
	shadow.style.display = "none";
	store.style.display = "none";

}
//------------------点击领取显示已领取------------------------
awayone.onclick = function(){
	awayone.innerHTML = "已领取";
	awayone.style.color = "#666";
	awayone.style.border = "none";

}
away.onclick = function(){
	away.innerHTML = "已领取";
	away.style.color = "#666";
	away.style.border = "none";

}
awaytwo.onclick = function(){
	awaytwo.innerHTML = "已领取";
	awaytwo.style.color = "#666";
	awaytwo.style.border = "none";

}
//---------------点击编辑显示里面的内容--------------------------
var pass = document.getElementById("pass")
pass.onclick = function(){
	self.location="editor.html";
}
//---------------------------点击全选-----------------------------
var ok = document.getElementById("ok");
var fas = document.getElementById("fastener");
var fast = document.getElementById("fast");
var check = document.getElementById('check');
var che = document.getElementById('che');
var change= document.getElementById('change');

ok.onclick = function(){
	fas.style.display = "block";
	fast.style.display = "block";
	che.style.display = "block";
	change.innerHTML = "￥78.00";

}
fas.onclick = function(){
	fas.style.display ="none";
	fast.style.display ="none";
	che.style.display = "none";
	change.innerHTML = "￥0.00";

}

