const bar = document.querySelector(".fa-bars")
const down = document.querySelector(".down")

let view = true;
bar.addEventListener("click",()=>{
    if(view){
        down.style.display = "flex";
        view = false
    }else{
        down.style.display = "none";
        view = true;
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 590) {
        down.style.display = "none";
        view = false;
    }
});
