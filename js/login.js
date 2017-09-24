
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

//----------------点击免密登录可以跳转到注册页面------------------------------
var login = document.getElementById("login")

login.onclick = function(){
	self.location = "register.html"
}
//-----------------获取光标用户名或者密码颜色为黑色---------------------------
var inp = document.getElementById("inp")
var pwd = document.getElementById("pwd")

inp.onfocus = function(){
	inp.value = "";
	inp.style.color = "black";
}
pwd.onfocus = function(){
	pwd.value = "";
	pwd.style.color = "black";
}
//--------------点击登录时用户名开头必须是字母后面必须是数字必须是5-18位-----------
//---------------密码开头必须是字母密码必须是5-18----------------------------------
var btn = document.getElementById("btn");
var pat = /^[a-zA-Z_]\w{5,18}\d$/;
var pat1 =/^[a-zA-Z_]\w{5,18}$/;
btn.onclick = function(){
	if(pat.test(inp.value)){
		if(pat1.test(pwd.value)){
			self.location ="index.html" ;
		}else{
			alert("密码输入错误")
		}
	}else{
		alert("账户输入错误")
	}
}
//--------------点击图片让阴影和二维码出现否则消失------------------
var tp = document.getElementById("tp")
var shadow = document.getElementById("shadow")
var erweima = document.getElementById("erweima")
tp.onclick = function(){
	shadow.style.display = "block";
	erweima.style.display = "block";	
}
shadow.onclick = function(){
	shadow.style.display = 'none';
	erweima.style.display = "none";
}



