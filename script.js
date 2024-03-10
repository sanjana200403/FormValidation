console.log("form validation")
function validation(){
   var user = document.getElementById('user').value
   var pass = document.getElementById('pass').value
   var conpass = document.getElementById('conpass').value
   var mobileNumber = document.getElementById('mobileNumber').value
   var email = document.getElementById('email').value
   if(user==""){
    document.getElementById('username').innerHTML= "**please fill the username field"
    return false
   }
   if((user.length<3)|| (user.length>20)){
    document.getElementById('username').innerHTML= " **  username length must be b/w 3 and 20"
    return false

   }
   if(!isNaN(user)){
    document.getElementById('username').innerHTML= " **  username must have the character only "
    return false
   }
   if(pass==""){
    document.getElementById('passwords').innerHTML= "**please fill the password field"
    return false
   }
   if((pass.length<=6)|| (user.length>20)){
    document.getElementById('passwords').innerHTML= " **  password must have 6 character"
    return false

   }
   if(conpass==""){
    document.getElementById('confirmPass').innerHTML= "**please fill the Password field"
    return false
   }
   if(conpass!=pass){
    document.getElementById('confirmPass').innerHTML= "**Password is not matching"
    return false
   }
   if(mobileNumber==""){
    document.getElementById('mobileNum').innerHTML= "**please fill the Number"
    return false
   }
   if(isNaN(mobileNumber)){
    document.getElementById('mobileNum').innerHTML= "**please fill the digit only"
    return false
   }
   if(mobileNumber.length!==10){
    document.getElementById('mobileNum').innerHTML= "**please fill the correct Number"
    return false
   }
   if(email==""){
    document.getElementById('emailId').innerHTML= "**please fill the Email"
    return false
   }
   if(email.indexOf('@')<=0){
    document.getElementById('emailId').innerHTML= "**please fill the valid Email"
    return false
   }
   if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
    document.getElementById('emailId').innerHTML= "**Invalid Email"
    return false
   }
   else{
    alert("form successfully submitted")
    

   }
  
   



}