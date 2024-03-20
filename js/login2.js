let loginForm = document.getElementById("loginForm");
let submitLogin = document.getElementById("submitLogin");

submitLogin.onclick = (event) => {
    console.log(loginForm);
    let  userPhon = loginForm["userPhon"].value;
    let usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];   
    if(usersArray.length == 0){
       alert("נא הרשמ/י לפני ההתחברות");
    }
    let flag = false;
    for(let i=0; i< usersArray.length; i++){
        if(userPhon == usersArray[i].userPhon){
            window.location.href="../html/home.html";
            flag = true;}
    } 
    if(flag == false){
        alert("אינך מחובר/ת למערכת את/ה מוזמנ/ת להרשם")
    }


}
