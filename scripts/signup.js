
let arr=JSON.parse(localStorage.getItem("Signupdata"))||[];
function signups(n,c,e,p){
    this.name=n,
    this.contact=c,
    this.email=e,
    this.pass=p;
}

function signupinfo(e){
    e.preventDefault();

    let form=document.getElementById("signup");

    let name=form.name.value;
    let contact=form.contact.value;
    let email=form.email.value;
    let pass=form.pass.value;

    let s1=new signups(name,contact,email,pass);
    arr.push(s1);
    localStorage.setItem("Signupdata",JSON.stringify(arr));
    window.location.reload();
   
}