document.querySelector("#login").addEventListener("submit",Myfunction);
var regdUsers=JSON.parse(localStorage.getItem("Signupdata"));
// console.log(regdUsers);

function Myfunction(){
    event.preventDefault();
    var enterdemail=document.querySelector("#email").value;
    var enterdpass=document.querySelector("#pass").value;

    // console.log(enterdemail,enterpass);

    for(var i=0;i<regdUsers.length;i++){
        // console.log(regdUsers[i]);
        if(regdUsers[i].email==enterdemail && 
        regdUsers[i].pass ==enterdpass)
        {
            alert("Login Success");
            window.location.href="index.html";
            break;
        }
        else{
           alert("invalid Credentials");
           window.location.reload();
           break;
          
        }
    
    }
}