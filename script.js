

//const mainPage = document.querySelector('.main-wrapper');
//const successPage = document.getElementsByClassName('thank-youpage');
//const inputForm = document.querySelector('#form-input');
//const submitBtn = document.getElementById('bttn');

//submitBtn.addEventListener('click', () => {
    //if (inputForm.value != " ") {
      //  mainPage.style.display = 'none';
        //successPage.style.display = 'flex';
        //console.log('working');
     //} else {
       // document.querySelector('#err-msg').innerHTML = 'Valid email required';
        //console.log('not working');
  //   }
//})//  


// Assigning variables

const firstPage = document.querySelector('.first-page');
const successPage = document.querySelector('.thankyou-page');
const inputForm = document.querySelector('#form-input');
const submitBttn = document.querySelector('#submit-bttn');
// inputForm.setAttribute('required', '');

submitBttn.addEventListener('click', () => {
    if (inputForm.value != '') {
        const userName = inputForm.value;
firstPage.style.display = "none";
successPage.style.display = "grid";
document.querySelector('#thankyou-msg').innerHTML = `${userName}.`
    } else {
document.querySelector('#err-msg').innerHTML = 'Valid email required'
    }
})

// I was unable to validate the input form for the ElementInternals. The only way I found to do it was regex but i do not understand how it works.

