function Function(){
    document.getElementById('generalForm').classList.add("generalFocus");
    document.getElementById('localForm').classList.remove("generalFocus");
    document.getElementById('contactForm').classList.remove("generalFocus");
};
function localFunction(){
    document.getElementById('localForm').classList.add("generalFocus");
    document.getElementById('generalForm').classList.remove("generalFocus");
    document.getElementById('contactForm').classList.remove("generalFocus");
};
function contactFunction(){
    document.getElementById('contactForm').classList.add("generalFocus");
    document.getElementById('localForm').classList.remove("generalFocus");
    document.getElementById('generalForm').classList.remove("generalFocus");
};

//
// document.getElementById('general').onclick = function(){
//   document.getElementsByClassName('col-lg-4').className += " .generalFocus";
// };
