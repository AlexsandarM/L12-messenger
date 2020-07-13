
let userMsg = document.getElementById('message');
let deliveredmsg = document.getElementById('deliveredmsg');
let btn = document.querySelector('.btn');


btn.addEventListener('click', (e) => {
  e.preventDefault();

  let msgValue = userMsg.value.trim().toUpperCase();
  
  if(msgValue === '') {
    let showMsg = `<span class="error">Please enter valid message!</span>`;
    deliveredmsg.innerHTML = showMsg;
  } else {
    let showMsg = `<span class="success">Last Message Delivered</span><br><strong>${msgValue}</strong>`;
    deliveredmsg.innerHTML = showMsg;
  };

  userMsg.value = '';

})
