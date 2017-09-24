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


//-------------刷新页面时出现验证码------------------------------------
var identifying = document.getElementById("identifying");
var arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','a','b','c','d','e','f','g'];
var res = '';
for(var i = 1; i <= 4; i++){
	var a = parseInt(Math.random()*arr.length-1);
	res += arr[a];
}
identifying.innerHTML = res;
//---------------点击事件时出现验证码---------------------------------------
identifying.onclick = function(){	 
    var arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','a','b','c','d','e','f','g'];
	var res = '';
	for(var i = 1; i <= 4; i++){
		var a = parseInt(Math.random()*arr.length-1);
		res += arr[a];
	}
	identifying.innerHTML = res;
}
//--------------获取光标时颜色为黑色---------------------------------------
var inp = document.getElementById("inp");
var code = document.getElementById("code");
inp.onfocus = function(){
	inp.value = "";
	inp.style.color = "black";
}
code.onfocus = function(){
	code.value = "";
	code.style.color = "black";
}
//-------------账户必须是11位开头为1 ----------------------------------------
var btn = document.getElementById("btn");
var pat = /^1\d{10}$/;
btn.onclick = function(){
	if(!pat.test(inp.value)){//input里面的内容不是11位或者开头不是1则账户输入错误
		alert("账户输入错误")
		return
	}
	if(code.value != identifying.innerHTML){
		alert("验证码输入错误")	//当input的value不等于验证码的value时,则验证码输入错误
		return
	}
	self.location ="index.html";
			
} 
//------------点击账号密码登录跳转到登录页面---------------------------------
var numlogin = document.getElementById("numlogin")

numlogin.onclick = function(){
	self.location = "login.html";
}
//------------点击图片让阴影和二维码出现否则消失----------------------------------
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