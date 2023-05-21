let items = document.querySelectorAll(".item");

function setActive(){
    items.forEach((item) =>{
        item.classList.remove("active");
    })
    this.classList.add("active");
}

items.forEach((item) =>{
    item.addEventListener('click',setActive);
})

function show(pos){
    for(let i=1;i<=5;i++){
        let info = document.getElementById("info"+i);
        if(i===pos){
            info.style.display="block";
        }
        else{
            info.style.display="none";
        }
    }
}