var checkmark = document.getElementsByClassName('complete');
// function alphanum(data){
//     var letters = /^[a-zA-Z]+$/;
//     if (letters.test(data)){
//         return true;
//     }
//     return false;
// }

function emailVal(data){
    var email_patt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email_patt.test(data)){
        return true;
    }
    return false;
};

function disableButton() {
    document.getElementById('submitDetails').disabled = true;
  };
  
function enableButton() {
    document.getElementById('submitDetails').disabled = false;
  };

document.getElementById('name').onblur = function() {
var namestatus = document.getElementById('name').value;
if (namestatus.length < 3) {
    document.getElementById('errname').innerHTML = 'Name field is empty or less than 3 characters!';
    checkmark[0].classList.remove('active');
    disableButton();
} 
// else if (!alphanumeric(namestatus)) {
//     document.getElementById('errname').innerHTML = 'Invalid characters!';
//     checkmark[0].classList.remove('active');
//     disableButton();
// } 
else {
    document.getElementById('errname').innerHTML = '';
    checkmark[0].classList.add('active');
    enableButton();
}
};
  
document.getElementById('email').onblur = function() {
    var emailstatus = document.getElementById('email').value;
    if (emailstatus.length < 0) {
      document.getElementById('erremail').innerHTML = 'Email field is empty';
      checkmark[1].classList.remove('active');
      disableButton();
    } else if (!emailVal(emailstatus)) {
      document.getElementById('erremail').innerHTML = 'Invalid email address!';
      checkmark[1].classList.remove('active');
      disableButton();
    } else {
      document.getElementById('erremail').innerHTML = '';
      checkmark[1].classList.add('active');
      enableButton();
    }
  };
  document.getElementById('password').onblur = function() {
    var passstatus = document.getElementById('password').value;
    if (passstatus.length < 6) {
      document.getElementById('errpass').innerHTML = 'Password field is empty or less than 6 characters';
      checkmark[2].classList.remove('active');
      disableButton();
    } else {
      document.getElementById('errpass').innerHTML = '';
      checkmark[2].classList.add('active');
      enableButton();
    }
    
    document.getElementById('cpassword').onblur = function() {
      var confirm = document.getElementById('cpassword').value;
      if(passstatus !== confirm) {
        document.getElementById('errcpass').innerHTML = "Passwords don't match";
        checkmark[3].classList.remove('active');
        disableButton();
      } else {
        document.getElementById('errcpass').innerHTML = '';
        checkmark[3].classList.add('active');
        enableButton();
      }
    }
  }
