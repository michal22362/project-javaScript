let signUpForm = document.getElementById("signUpForm");
let submitSignUp = document.getElementById("submitSignUp");   

// submitSignUp.onclick = signUp();
// const signUp
submitSignUp.onclick = (event) => {
   
    let newUser = {userPhon: signUpForm["userPhon"].value,
    userFirstName:signUpForm["userFirstName"].value,
    userlastName: signUpForm["userlastName"].value,
    userEmail: signUpForm["userEmail"].value, 
    userCity: signUpForm["userCity"].value,
    userSreet: signUpForm["userSreet"].value,
    userNumHome: signUpForm["userNumHome"].value,
    userFavoriteBranch: signUpForm["userFavoriteBranch"].value,
    userBirthday: signUpForm["userBirthday"].value,};


    let flag = true;
    let usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];   
    for(let i=0; i< usersArray.length; i++){
        if(newUser.userPhon == usersArray[i].userPhon){
           alert("לקוח יקר הינך מוכר באתרינו נא התחבר!")
           flag = false;}
    } 
    debugger

    if(flag){
        usersArray.push(newUser);
        localStorage.setItem("usersArray", JSON.stringify(usersArray));
        
    }

    window.location.href='../html/home.html';
}
   

    
     
// }
//   function redirectToAnotherPage() {
//     window.location.href = "./html/Online.html";
//   }

//   document.getElementById("submitSignUp").addEventListener("click", redirectToAnotherPage);