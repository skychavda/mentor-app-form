var firstValidate = 1;
var lastValidate = 1;
var emailValidate = 1;
var dateValidate = 1;
var monthValidate = 1;
var yearValidate = 1;
var genderValidate = 1;
var classValidate = 1;
var linkValidate = 1;
var phoneValidate = 1;
var addressValidate = 1;

function init(){
  document.getElementById('myForm').reset();
};

function Function(){
    document.getElementById('generalForm').classList.add("generalFocus");
    document.getElementById('generalForm').classList.remove("no-active");
    document.getElementById('localForm').classList.remove("generalFocus");
    document.getElementById('localForm').classList.add("no-active");
    document.getElementById('contactForm').classList.remove("generalFocus");
    document.getElementById('contactForm').classList.add("no-active");
};
function localFunction(){
    document.getElementById('localForm').classList.add("generalFocus");
    document.getElementById('localForm').classList.remove("no-active");
    document.getElementById('generalForm').classList.remove("generalFocus");
    document.getElementById('generalForm').classList.add("no-active");
    document.getElementById('contactForm').classList.remove("generalFocus");
    document.getElementById('contactForm').classList.add("no-active");
};
function contactFunction(){
    document.getElementById('contactForm').classList.add("generalFocus");
    document.getElementById('contactForm').classList.remove("no-active");
    document.getElementById('localForm').classList.remove("generalFocus");
    document.getElementById('localForm').classList.add("no-active");
    document.getElementById('generalForm').classList.remove("generalFocus");
    document.getElementById('generalForm').classList.add("no-active");
};


var btnsContainer = document.getElementById('mentor-wrap');
var btns = btnsContainer.getElementsByClassName('col-4');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function validform(){
  var gender = document.getElementsByName('radioGender');
  for(var i=0; i<gender.length;i++){
      if(gender[i].checked == true){
          genderValidate = 0;
          document.getElementById('genderError').innerHTML = " ";
      }
  }
  if(genderValidate==1){
    document.getElementById('genderError').innerHTML = "Please select gender";
  }
  if(firstValidate==1||lastValidate == 1||emailValidate == 1||dateValidate==1||monthValidate==1||yearValidate==1||genderValidate==1||classValidate==1||linkValidate==1||phoneValidate==1||addressValidate==1){
    document.getElementById('firstNameError').classList.remove("display");
    document.getElementById('lastNameError').classList.remove("display");
    document.getElementById('classError').classList.remove("display");
    document.getElementById('dobError').classList.remove("display");
    document.getElementById('linkError').classList.remove("display");
    document.getElementById('phoneError').classList.remove("display");
    document.getElementById('emailError').classList.remove("display");
    document.getElementById('addressError').classList.remove("display");
    document.getElementById('submitError').innerHTML = "Enter all fields";
    return false;
  }else {
    document.getElementById('submitError').innerHTML = " ";
    return true;
  }
};
function firstValidation(){
  pattern=/^([- \w\d\u00c0-\u024f]+)$/;
  var first = document.getElementById('firstNameInput').value;
  // if(first.value==" "){
  //   document.getElementById('firstNameInput').classList.add("error");
  //   document.getElementById('firstNameError').innerHTML = "Please enter name";
  // }
  if(pattern.test(first)==false){
    document.getElementById('firstNameInput').classList.add("error");
    document.getElementById('firstNameError').innerHTML = "No spacial characters allowed";
    firstValidate=1;
  }
  else{
    document.getElementById('firstNameInput').classList.remove("error");
    document.getElementById('firstNameError').innerHTML = " ";
    firstValidate=0;
  }

};

function emailValidation(){
  var pattern = /^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$/;
  var email = document.getElementById('emailInput').value;
  if(pattern.test(email)==false){
    // document.getElementById('lastNameInput').style.cssText = "border-bottom-color: red !important";
    document.getElementById('emailInput').classList.add("error");
    document.getElementById('emailError').innerHTML = "Please enter valid email";
    emailValidate = 1;
  }
  else{
    document.getElementById('emailInput').classList.remove("error");
    document.getElementById('emailError').innerHTML = " ";
    emailValidate = 0;
  }
};

function lastValidation(){
  pattern=/^([- \w\d\u00c0-\u024f]+)$/;
  var first = document.getElementById('lastNameInput').value;
  if(pattern.test(first)==false){
    document.getElementById('lastNameError').innerHTML = "No spacial characters allowed";
    document.getElementById('lastNameInput').classList.add("error");
    lastValidate = 1;
  }
  else{
    document.getElementById('lastNameInput').classList.remove("error");
    document.getElementById('lastNameError').innerHTML = " ";
    lastValidate = 0;
  }
};

function dateValidation(){
  var date = document.getElementById('date').value;
  if(date=="DD"){
    document.getElementById('date').classList.add("error");
    document.getElementById('dobError').innerHTML = "Enter date";
    dateValidate = 1;
  }else {
    document.getElementById('date').classList.remove("error");
    document.getElementById('dobError').innerHTML = " ";
    dateValidate = 0;
  }
};

function monthValidation(){
  var month = document.getElementById('month').value;
  if(month=="MM"){
    document.getElementById('month').classList.add("error");
    document.getElementById('dobError').innerHTML = "Enter month";
    monthValidate = 1;
  }else {
    document.getElementById('month').classList.remove("error");
    document.getElementById('dobError').innerHTML = " ";
    monthValidate = 0;
  }
};

function yearValidation(){
  var year = document.getElementById('year').value;
  if(year=="YYYY"){
    document.getElementById('year').classList.add("error");
    document.getElementById('dobError').innerHTML = "Enter year";
    yearValidate = 1;
  }else {
    document.getElementById('year').classList.remove("error");
    document.getElementById('dobError').innerHTML = " ";
    yearValidate = 0;
  }
};

function classValidation(){
  pattern=/^([- \w\d\u00c0-\u024f]+)$/;
  var classinput = document.getElementById('classInput').value;
  if(pattern.test(classinput)==false){
    document.getElementById('classError').innerHTML = "Enter class";
    document.getElementById('classInput').classList.add("error");
    classValidate = 1;
  }
  else{
    document.getElementById('classInput').classList.remove("error");
    document.getElementById('classError').innerHTML = " ";
    classValidate = 0;
  }
};

function linkValidation(){
  var pattern= /^(http[s]?:\/\/)?([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2}(\/([-~%\.\(\)\w\d]*\/*)*(#[-\w\d]+)?)?$/;
  var link = document.getElementById('link').value;
  if(pattern.test(link)==false){
    document.getElementById('link').classList.add("error");
    document.getElementById('linkError').innerHTML = "Please enter valid link";
    linkValidate = 1;
  }else {
    document.getElementById('link').classList.remove("error");
    document.getElementById('linkError').innerHTML = " ";
    linkValidate = 0;
  }
};

function phoneValidation(){
  var pattern = /^[0-9]{10}$/;
  var number = document.getElementById('phoneInput').value;
  if(pattern.test(number)==false){
    document.getElementById('phoneInput').classList.add("error");
    document.getElementById('phoneError').innerHTML = "Please enter valid number";
    phoneValidate = 1;
  }else {
    document.getElementById('phoneInput').classList.remove("error");
    document.getElementById('phoneError').innerHTML = " ";
    phoneValidate = 0;
  }
};

function addressValidation(){
  var region = document.getElementById('regionInput').value;
  var street = document.getElementById('streetInput').value;
  if(region==""||street==""){
    addressValidate=1;
  }else {
    document.getElementById('addressError').innerHTML = " ";
    addressValidate=0;
  }
};
