const cart = document.querySelector('.cart_favourites');
const close = document.querySelector('.exit_close_cart_block');
const block = document.querySelector('.section_main_cart_block');



cart.addEventListener('click', () => {
    close.style.display = "block";
    block.style.display = "block";
});

close.addEventListener('click', () => {
    close.style.display = "none";
    block.style.display = "none";
});