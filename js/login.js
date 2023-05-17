var back=document.getElementById("container");
window.onmousemove = function(event){
    var x=-event.clientX/25;
    var y=-event.clientY/25;
    back.style.backgroundPositionX = x+"px";
    back.style.backgroundPositionY = y+"px";
}

function login(){
    alert("账号或密码错误 (前后端交互尚未完成，可选择游客登录)");
}