// Edit 01

// let userMsg = document.getElementById('message');
// let deliveredmsg = document.getElementById('deliveredmsg');
// let btn = document.querySelector('.btn');


// btn.addEventListener('click', (e) => {
//   e.preventDefault();

//   let msgValue = userMsg.value.trim().toUpperCase();
  
//   if(msgValue === '') {
//     let showMsg = `<span class="error">Please enter valid message!</span>`;
//     deliveredmsg.innerHTML = showMsg;
//   } else {
//     let showMsg = `<span class="success">Last Message Delivered</span><br><strong>${msgValue}</strong>`;
//     deliveredmsg.innerHTML = showMsg;
//   };

//   userMsg.value = '';

// })


// Edit 02

let userInput = document.getElementById('input');
let outputmsg = document.getElementById('outputmsg');
let btn = document.querySelector('.btn');
let form = document.getElementById('form');
let small = document.querySelector('small');
// console.log(small)

// Functions 

function showError(message) {

  small.setAttribute('class', 'text-center my-2 error')
  small.innerText = message;
  outputmsg.innerHTML = '';
}

function showSuccess(message) {

  small.setAttribute('class', 'text-center my-2 success')
  small.innerText = message;
}

// Listeners

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let userMsg = userInput.value.trim().toUpperCase();

  if (userMsg === '') {
    showError('Please enter valid message!');
  } else {
    showSuccess('Last message was delivered');
    outputmsg.innerHTML = userMsg;
  };

  userInput.value = '';
})