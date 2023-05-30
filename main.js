let tglbtn = document.querySelector(".toggle-btn");
let prices = document.querySelectorAll(".price");

tglbtn.onclick = () => {
    tglbtn.classList.toggle("on");
    switch (tglbtn.id) {
        case "Monthly":
            prices[0].innerHTML = anualprices.basic;
            prices[1].innerHTML = anualprices.Professional;
            prices[2].innerHTML = anualprices.Master;
            tglbtn.id = "Anual";
            break;
        case "Anual":
            prices[0].innerHTML = monthlyprices.basic;
            prices[1].innerHTML = monthlyprices.Professional;
            prices[2].innerHTML = monthlyprices.Master;  
            tglbtn.id = "Monthly";
        default:
            break;
    }
}
let monthlyprices = {
    'basic': '&dollar;19.99',
    'Professional':'&dollar;24.99',
    'Master':'&dollar;39.99'
}
let anualprices = {
    'basic': '&dollar;199.99',
    'Professional': '&dollar;249.99',
    'Master': '&dollar;399.99'
}
