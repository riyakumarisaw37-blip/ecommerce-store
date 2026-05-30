let cart = 0;
const buttons = document.querySelectorAll(".card button");
buttons.forEach(button=>{
    button.addEventListener("click",()=>{cart++;
        document.getElementById("cart-count").innerText=cart;
    });
});
