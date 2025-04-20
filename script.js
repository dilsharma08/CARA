const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
    
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
    
}
const toggle = document.getElementById('dark-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
let cartCount = 0;
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
    });
});




