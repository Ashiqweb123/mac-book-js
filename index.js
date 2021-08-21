const memoryBtn1 = document.getElementById('8-GB');
const memoryBtn2 = document.getElementById('16-GB');
const storageBtn1 = document.getElementById('ssd-256');
const storageBtn2 = document.getElementById('ssd-512');
const storageBtn3 = document.getElementById('ssd-1TB');
const deliveryBtn1 = document.getElementById('withOutDelivery');
const deliveryBtn2 = document.getElementById('withDelivery');

const memoryCost = document.getElementById("memory-cost")
const storageCost = document.getElementById("storage-cost")
const deliverCost = document.getElementById("delivery-charge")



const bestPrice = document.getElementById('best-price');
bestPrice.innerText = '1299';


const total = document.getElementById('total-amount');
total.innerText = '1299';


memoryBtn1.addEventListener('click', function() {

    memoryCost.innerText = "0";
    bestPrice.innerText = '1299';
    total.innerText = '1299';
    updateTotal()
})

memoryBtn2.addEventListener('click', function() {

    memoryCost.innerText = "180";
    bestPrice.innerText = '1299';
    total.innerText = '1299';
    updateTotal()
})

storageBtn1.addEventListener('click', function() {

    storageCost.innerText = '0';
    bestPrice.innerText = '1299';
    total.innerText = '1299';
    updateTotal()
})
storageBtn2.addEventListener('click', function() {

    storageCost.innerText = '100';
    bestPrice.innerText = '1299';
    total.innerText = '1299';
    updateTotal()
})
storageBtn3.addEventListener('click', function() {

    storageCost.innerText = '180';
    bestPrice.innerText = '1299';
    total.innerText = '1299';
    updateTotal()
})

deliveryBtn1.addEventListener('click', function() {
    deliverCost.innerText = '0';
    bestPrice.innerText = '1299';
    total.innerText = '1299';
    updateTotal()
})
deliveryBtn2.addEventListener('click', function() {
    deliverCost.innerText = '20';
    bestPrice.innerText = '1299';
    total.innerText = '1299';
    updateTotal()
})


function updateTotal() {
    const deliverUpdate = parseInt(deliverCost.innerText);
    const bestPriceUpdate = parseInt(bestPrice.innerText);
    const memoryUpdate = parseInt(memoryCost.innerText);
    const storageupdate = parseInt(storageCost.innerText);
    const subTotal = deliverUpdate + bestPriceUpdate + memoryUpdate + storageupdate;
    total.innerText = subTotal;
}
// total calcution--------->

//using-promo-------->

document.getElementById("promoCode").addEventListener('click', function() {
    const promoCode = document.getElementById('promo-user');
    const promoUser = promoCode.value;
    console.log(promoUser);

    if (promoUser == "stevekaku") {
        const promoText = document.getElementById('promo-text');
        promoText.innerText = total.innerText * 0.8;
        promoCode.disabled = true;
    }


})