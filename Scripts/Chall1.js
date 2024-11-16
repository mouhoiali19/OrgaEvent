document.querySelector('.js-click1').addEventListener('click' , ()=>{verification();});

let attemptCount = 0; // To track attempts

const verification = () => {
  let addhtm = '';
  const rep = document.querySelector('.js-inp1');
  const tryMessage = document.querySelector('.js-try');
  
  if (rep.value == 101) {
    window.location.href = "result1.html"; // Redirect if correct answer
  } else {
    attemptCount++; // Increment attempt count on incorrect input

    // If it's the first attempt or if the message has already been hidden
    if (attemptCount === 1 || tryMessage.style.display === 'none') {
      addhtm = `<p class="js-try">try again</p>`;
      tryMessage.innerHTML = addhtm;

      // Make the message appear and disappear immediately in the same click
      tryMessage.style.display = 'block';  // Show the message
      setTimeout(() => {
        tryMessage.style.display = 'none'; // Hide the message after a brief delay
      }, 1000); // Adjust delay as needed (in milliseconds)
    }
  }
};

