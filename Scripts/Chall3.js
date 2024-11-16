document.querySelector('.js-login').addEventListener('click' , ()=>{login();});


const login =()=>{
  const user = document.querySelector('.js-user') ;
  const password = document.querySelector('.js-psw') ;
  const userValue = user.value.trim();
  const passwordValue =password.value;

  const isSecondPartValid = (value) => {
    const trimmedValue = value.replace("//", "").trim();
    //const containsTrue = trimmedValue.toLowerCase.includes("true");
    // Check if the second part contains an equality statement (e.g., "username=username")
    const equalityMatch = trimmedValue.match(/^([^=]+)\s*=\s*\1$/); // checks if both sides of '=' are identical
   
    return (equalityMatch !== null) ;
    
    //|| (containsTrue);
    
  };

  // Function to validate if `userValue` contains an "or" and a valid second part
  const isTrueStatement = (value) => {
    const trimmedValue = value.trim();

    // Check if value contains "or" and split into parts
    if (trimmedValue.toLowerCase().includes("or")) {
      const parts = trimmedValue.split("or");
    
      // Ensure there are two parts and validate the second part
      if (parts.length === 2) {
        const secondPart = parts[1].trim();

        // Validate if the second part has an equality check
        return isSecondPartValid(secondPart);
      }
    
    }else{
      return isSecondPartValid(trimmedValue);
    }
    return false;
  };

  if( userValue && userValue.endsWith("//")&&isTrueStatement(userValue) && passwordValue !== ""){
    window.location.href = "goodlogin.html" ;
  }else{
    const encodedUser = encodeURIComponent(userValue);
    const encodedPassword = encodeURIComponent(passwordValue);
    window.location.href = `badlogin.html?username=${encodedUser}&password=${encodedPassword}`;
  }
}



