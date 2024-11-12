document.querySelector('.js-click1').addEventListener('click' , ()=>{verification();});

const verification = () =>{
  let addhtm ='' ;
  const rep = document.querySelector('.js-inp1');
  
  if(rep.value == 101) {
    window.location.href = "/result1.html" ;
  } else{
    addhtm = addhtm + `<p> try again </p>` ; 
    document.querySelector('.js-try').innerHTML = addhtm ;
  }
};