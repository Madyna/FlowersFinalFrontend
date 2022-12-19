let priceKZT = document.querySelector('.price_with_kzt');
let priceRB = document.querySelector('.price_with_rb');
let priceDR = document.querySelector('.price_with_dollar');

const plus = document.querySelector('.plus_to_amount_product');
const minus = document.querySelector('.minus_from_amount_product');

let totalAmount = document.querySelector('.totalAmount');

let first = document.getElementById('first');
let second = document.querySelector('#second');
let third = document.querySelector('#third');
let fourth = document.querySelector('#fourth');
let fifth = document.querySelector('#fifth');
let sixth = document.querySelector('#sixth');

let productPrice = document.querySelector('.product_price');
let totalPrice = document.querySelector('.total_price');


function calculatePriceProduct() {
    let count = 1;

    plus.addEventListener('click', () => {
        count += 1;
        totalAmount.innerHTML = count;
        priceKZT.textContent = 16500 * count;
        priceRB.innerHTML = 2048 * count;
        priceDR.innerHTML = 34.01 * count;
        productPrice.innerHTML = priceDR.innerHTML;
    });
    
    minus.addEventListener('click', () => {
        while (count != 1) {
            count -= 1;
            break;
        }
        totalAmount.innerHTML = count;
        priceKZT.textContent = 16500 * count;
        priceRB.innerHTML = 2048 * count;
        priceDR.innerHTML = 34.01 * count;
        productPrice.innerHTML = priceDR.innerHTML;
    });

    k = 0;
    for(let i = 0; i < 6; i++) {
        if(document.getElementById('bonus' + i).checked) {
            k = k + parseInt(document.getElementById('bonus' + i).value);
            totalPrice.innerHTML = k;
        }
        else {
            totalPrice.innerHTML = k;
        }
    }
    document.querySelector('.total').innerHTML = parseFloat(productPrice.innerHTML) + parseFloat(totalPrice.innerHTML);

}

calculatePriceProduct();