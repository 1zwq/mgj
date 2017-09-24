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

//-----------------页面加载完成后固定到上方—-----------------------------------------
window.onload=function(){
    var node = document.getElementById("node"),
    H = 0,
    Y = node;//node到body最上方的距离求出h
    while (Y) {
      //元素加的是这个这个元素到整个body的距离
      H += Y.offsetTop; //子元素距离父元素的距离
      Y = Y.offsetParent;//不停地去寻找父元素
    }
    window.onscroll = function(){
      //整个body的高度或者要获取当前页面的滚动条纵坐标位置
        var s = document.body.scrollTop || document.documentElement.scrollTop;
        if(s>H) {
            node.style = "position:fixed;top:0;"
        
        }else{
               node.style = "position:static"
        }
    }
}
//------------------------------替换图片-----------------------------------------------
    var node = document.querySelectorAll('.p1');
    var likes = document.querySelectorAll('.like');
    var arrImg = ['img/listHot30.webp','img/like-pic13.png','img/like-pic14.png','img/like-pic15.png','img/like-pic16.png'];
    for(var i = 0; i < node.length;i++){    
        node[i].index = i;
        node[i].onclick = function(){
          for(var j = 0; j < node.length; j++){
            node[j].style.color = 'white';
          }
          this.style.color = 'black';
          var imgIndex = this.index;
          for(var k = 0; k < likes.length; k++){
            likes[k].firstElementChild.src = arrImg[imgIndex];
          }
        }
    }
    //-------------跳转到详细页面---------------------------
    var enc = document.getElementById("encircle");
    encircle.onclick = function(){
      self.location = "details.html"
    }