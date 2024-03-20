let loginForm = document.getElementById("loginForm");
let submitLogin = document.getElementById("submitLogin");

submitLogin.onclick = () => {
    console.log(loginForm);
    let  userPhon = loginForm["userPhon"].value;
    let usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];   
    if(usersArray.length == 0){
       alert("נא הרשמ/י לפני ההתחברות");
    }
    let flag = false;
    for(let i=0; i< usersArray.length; i++){
        if(userPhon == usersArray[i].userPhon){
            //התחברת לאזור האישי
            //תזכורת: למחוק את הalert
          alert("התחברת!!");
            flag = true;}
    } 
    if(flag == false){
        alert("אינך מחובר/ת למערכת את/ה מוזמנ/ת להרשם")
    }
    window.location.href = "Online.html";

}

const btnsubmit = document.getElementById('btnsubmit');
btnsubmit.onclick = () => {
    location.href = './finish.html';

}