  
function verifFirstName() {
    var fName = document.getElementById("firstname").value
    if(fName == "") 
    alert ("Please verify your first name");
    }

function verifLastName() {
    var lName = document.getElementById("lastname").value
    if(lName == "") 
    alert("Please verify your last name")
    }

function verifUserName() {
    var user = document.getElementById("username").value
    if (user == "") 
    alert("Please verify your user name")
    }

function verifMail(){
    var email = document.getElementById("mail").value
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

 if (!filter.test(email)) 
    alert("Please provide a valid email address")
    email.focus;
    return false;

}

function verifPassword(){
    var password= document.getElementById("password").value
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;

if (password == "") {

    alert("Please provide a valid password")
    
 }

 else if (re.test(password) === false)
   {
       alert ("Please provide a valid password")
   }
}

function verifPhone(){
    var mobile = document.getElementById("phoneNumber").value
    var phoneno = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    
    if (mobile.match(phoneno))
            
        return true 
            
    else
    
    {
        alert("Please provide a valid phonenumber ");
        return false;
        
    }
    }


function submitform() {

var fName = document.getElementById("firstname").value
var lName = document.getElementById("lastname").value
var user = document.getElementById("username").value
var email = document.getElementById("mail").value
var password= document.getElementById("password").value
var mobile = document.getElementById("phoneNumber").value
var addComment = document.getElementById("comment").value

if (fName == "" || lName == "" || user == "" || email == "" || password == ""  || mobile == "" || addComment == "" )


alert ("Your form can not be submitted ")

}

