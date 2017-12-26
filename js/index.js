function Tanc(obj){
    this.obj = obj;
    this.btn = document.getElementById("btn");
    this.bdy = document.body;
    this.onbtn()
}
Tanc.prototype={
    constructor:Tanc,
    onbtn:function(){
        var that = this;
        this.btn.onclick=function(){

            var box = document.createElement("div");
            that.bdy.appendChild(box);
            box.id="box";
            var div = document.createElement("div");
            box.appendChild(div);
            div.id="div";
            var h1 = document.createElement("h1");
            div.appendChild(h1);
            h1.innerHTML = that.obj.title;
            var p = document.createElement("p");
            div.appendChild(p);
            p.innerHTML = that.obj.content;
            var btn1 = document.createElement("button");
            div.appendChild(btn1);
            btn1.innerHTML = that.obj.buttons[0];
            var btn2 = document.createElement("button");
            div.appendChild(btn2);
            btn2.innerHTML = that.obj.buttons[1];

            that.ondel()
            that.onmousediv()
        }
    },
    ondel:function(){
        var that = this;
        var btn1 = document.getElementsByTagName("button");
        btn1[1].onclick=function(){
            that.obj.successCallback()
        }
        btn1[2].onclick=function(){
            that.obj.cancelCallback()
        }
    },
    onmousediv:function(){
        var that = this;
        div.onmousedown=function(e){
            var e=e || window.event;
            that.left = e.clientX-this.offsetLeft;
            that.top = e.clientY-this.offsetTop;
            document.onmousemove=function(e){
                var e=e||window.event;
                var x = e.clientX-that.left-400;
                var y = e.clientY-that.top-50;
                div.style.left= x+"px";
                div.style.top= y+"px";
            }
        }

        div.onmouseup=function(){
            document.onmousemove=null;
        }
    }
}