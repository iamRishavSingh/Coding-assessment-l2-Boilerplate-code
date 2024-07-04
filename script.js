let colorChoice = "";
let sizeChoice = "";
let qty = 1;
let initprice = 19999.00;
let offerprice = 12999.00;
let offerperc = (1 - (offerprice / initprice)) * 100


document.getElementById('offerprice').innerHTML = "$" + offerprice.toFixed(2);
document.getElementById('initprice').innerHTML = "$" + initprice.toFixed(2);
document.getElementById('offerperc').innerHTML = offerperc.toFixed(0) + "% off";


function setColor(color) {
    colorChoice = color;
}

function qtyplus() {
    qty++;
    document.getElementById('qtyshow').innerHTML = qty;

}

function qtyminus() {
    if (qty > 1)
        qty--;
    document.getElementById('qtyshow').innerHTML = qty;

}

function setSize() {
    const sizeForm = document.getElementById('sizeForm');
    const sizeSelection = sizeForm.querySelector('input[name="size"]:checked');
    if (sizeSelection) {
        sizeChoice = sizeSelection.value;

    }
}
function addMsg() {
    if (sizeChoice && colorChoice) {

        const msgbox = document.getElementById("cartmsg");
        msgbox.innerHTML = `${qty} Embrace Sideboard with Color ${colorChoice} and Size ${sizeChoice} added to cart`;
        msgbox.style.display = "block";
    } else {
        const msgbox = document.getElementById("cartmsg");
        msgbox.innerHTML = "Select your color and size preferences";
        msgbox.style.display="block";
    }
}