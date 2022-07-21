//Check all values from the FORM
export function regexLogin(objReceive) {
    //Number of error if > 0 wont be able to send the data to the API
    let anyError = 0;
  
    let informationErr = {
      emailErr: "",
      passwordErr: "",
    };
  
    //Regex Format checkEmail , firstName and lastName
    const regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const regexPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[-:\;\$\.\!\%\*])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,34}$/);

    //Check all user data
    if (!regexEmail.test(objReceive.email)) {
      console.log("Test 1: ", objReceive.email);
      informationErr.emailErr = "Please complete this field.";
      anyError++;
    }
  
  
    if(!regexPassword.test(objReceive.password)){
      informationErr.passwordErr = "Please complete this field.";
      anyError++;
    }
  
    return {
      data: informationErr,
      error: anyError,
    };
  }