const FormSend  = document.getElementById("FormSend");
const submit  = document.getElementById("submit");

console.log("ytrefghjgfds");
if(JSON.parse(localStorage.getItem("branch")) != null){
    localStorage.setItem("branch", JSON.stringify(null))}

FormSend.onclick = (event) =>{ 
    console.log(FormSend["city"].value);
    let address = FormSend["city"].value + " " +  FormSend["street"].value +" ,דירה "+ FormSend["numHous"].value;
    console.log(address);
    let address2 = JSON.parse(localStorage.getItem("address")) ||"";
    
    localStorage.setItem("address", JSON.stringify(address));

    submit.onclick = () => {
        window.location.href="../html/product.html"; 
    }


}

