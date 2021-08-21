document.getElementById('16-GB').addEventListener('click', function() {
    const memoryCost = document.getElementById('memory-cost');
    const defaultMemoryCost = '0';
    memoryCost.innerText = "180";
    const memoryCostNumber = parseInt(memoryCost.innerText) + parseInt(defaultMemoryCost);
    memoryCost.innerText = memoryCostNumber;

})

document.getElementById('8-GB').addEventListener('click', function() {
    const memoryCost = document.getElementById('memory-cost');
    const defaultMemoryCost = '0';
    memoryCost.innerText = "0";
    const memoryCostNumber = parseInt(memoryCost.innerText) + parseInt(defaultMemoryCost);
    memoryCost.innerText = memoryCostNumber;

})

document.getElementById("ssd-256").addEventListener('click', function() {
    const storageCost = document.getElementById('storage-cost');
    const defaultStorageCost = '0';
    storageCost.innerText = '0';
    const storageCostNumber = parseInt(defaultStorageCost) + parseInt(storageCost.innerText);
    storageCost.innerText = storageCostNumber;
})
document.getElementById("ssd-512").addEventListener('click', function() {
    const storageCost = document.getElementById('storage-cost');
    const defaultStorageCost = '0';
    storageCost.innerText = '100';
    const storageCostNumber = parseInt(defaultStorageCost) + parseInt(storageCost.innerText);
    storageCost.innerText = storageCostNumber;
})
document.getElementById("ssd-1TB").addEventListener('click', function() {
    const storageCost = document.getElementById('storage-cost');
    const defaultStorageCost = '0';
    storageCost.innerText = '180';
    const storageCostNumber = parseInt(defaultStorageCost) + parseInt(storageCost.innerText);
    storageCost.innerText = storageCostNumber;
})
document.getElementById("without-delivery").addEventListener('click', function() {
    const deliveryCost = document.getElementById('delivery-charge');
    const defaultdeliveryCost = '0';
    deliveryCost.innerText = '0';
    const deliveryCostNumber = parseInt(defaultdeliveryCost) + parseInt(deliveryCost.innerText);
    storageCost.innerText = deliveryCostNumber;
})
document.getElementById("with-delivery").addEventListener('click', function() {
    const deliveryCost = document.getElementById('delivery-charge');
    const defaultdeliveryCost = '0';
    deliveryCost.innerText = '20';
    const deliveryCostNumber = parseInt(defaultdeliveryCost) + parseInt(deliveryCost.innerText);
    storageCost.innerText = deliveryCostNumber;
})