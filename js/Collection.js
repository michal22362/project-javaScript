const BeneyBrak = document.getElementById("BeneyBrak");
const jerusalem = document.getElementById("jerusalem");
const ModiinYashpero = document.getElementById("ModiinYashpero");
const Modiin = document.getElementById("Modiin");
const NesZiona = document.getElementById("NesZiona");
const PetachTikva = document.getElementById("PetachTikva");
const KiryatOno = document.getElementById("KiryatOno");
const RamatGan = document.getElementById("RamatGan");
const shilat = document.getElementById("shilat");

if(JSON.parse(localStorage.getItem("address")) != null){
    localStorage.setItem("address", JSON.stringify(null))}

BeneyBrak.onclick = () => {
    let branch = JSON.parse(localStorage.getItem("branch")) || "";  
    branch = "בני ברק"
    localStorage.setItem("branch", JSON.stringify(branch)); 
}

jerusalem.onclick = () => {
    let branch = JSON.parse(localStorage.getItem("branch")) || "";  
    branch = "ירושלים קניון הדר"
    localStorage.setItem("branch", JSON.stringify(branch)); 
}

ModiinYashpero.onclick = () => {
    let branch = JSON.parse(localStorage.getItem("branch")) || "";  
    branch = "מודיעין ישפרו סנטר"
    localStorage.setItem("branch", JSON.stringify(branch)); 
}

Modiin.onclick = () => {
    let branch = JSON.parse(localStorage.getItem("branch")) || "";  
    branch = "מודיעין קניון עזריאלי"
    localStorage.setItem("branch", JSON.stringify(branch)); 
}

NesZiona.onclick = () => {
    let branch = JSON.parse(localStorage.getItem("branch")) || "";  
    branch = "נס ציונה"
    localStorage.setItem("branch", JSON.stringify(branch)); 
}

PetachTikva.onclick = () => {
    let branch = JSON.parse(localStorage.getItem("branch")) || "";  
    branch = "פתח תקוה אם המושבות"
    localStorage.setItem("branch", JSON.stringify(branch)); 
}

KiryatOno.onclick = () => {
    let branch = JSON.parse(localStorage.getItem("branch")) || "";  
    branch = "קריית אונו"
    localStorage.setItem("branch", JSON.stringify(branch)); 
}

RamatGan.onclick = () => {
    let branch = JSON.parse(localStorage.getItem("branch")) || "";  
    branch = "רמת גן ביאליק"
    localStorage.setItem("branch", JSON.stringify(branch)); 
}

shilat.onclick = () => {
    let branch = JSON.parse(localStorage.getItem("branch")) || "";  
    branch = "שילת"
    localStorage.setItem("branch", JSON.stringify(branch)); 
}