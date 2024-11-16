document.querySelector('.subm-js').addEventListener('click' , ()=>{
  const mainValue = document.querySelector('.js-main');
  const finalvalue = mainValue.value.toLowerCase().trim();
  
  if( finalvalue.includes("doflamingo")){
    alert("you win");
  }
  
});

document.querySelector('.js-hint1').addEventListener('click' , ()=>{
  window.location.href = "/challenge1.html";
});

document.querySelector('.js-hint3').addEventListener('click' , ()=>{
  window.location.href = "/challenge3.html";
});

document.querySelector('.js-hint2').addEventListener('click' , ()=>{
  window.location.href = "/challenge2.html";
});
