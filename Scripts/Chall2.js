document.querySelector('.js-crypt').addEventListener('click' , ()=>{cryptkey();});
let attemptCount = 0;
const cryptkey =()=>{
  const resp = document.querySelector('.js-inp2');
  const failMessage = document.querySelector('.js-fail');
  if(resp.value == "vnuimfhdvhuflskhu3lskhuogin"){
      window.location.href = "winchall2.html";
  }else{
    attemptCount++; // Increment attempt count on incorrect input

    // If it's the first attempt or if the message has already been hidden
    if (attemptCount === 1 || failMessage.style.display === 'none') {
      addhtm = `<p class="js-try">try again</p>`;
      failMessage.innerHTML = addhtm;

      // Make the message appear and disappear immediately in the same click
      failMessage.style.display = 'block';  // Show the message
      setTimeout(() => {
        failMessage.style.display = 'none'; // Hide the message after a brief delay
      }, 1000);   
 
  }

 }
}


