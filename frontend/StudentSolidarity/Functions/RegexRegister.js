//Check all values from the FORM
export function regexRegister(objReceive) {
    //Number of error if > 0 wont be able to send the data to the API
    let anyError = 0;
  
    let informationErr = {
      firstNameErr: "",
      lastNameErr: "",
      emailErr: "",
      passwordErr: "",
    };
  
    //Regex Format checkEmail , firstName and lastName
    const regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const regexPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[-:\;\$\.\!\%\*])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,34}$/);
    const regexCharName = new RegExp("^([a-zA-Z0-9]){2,12}$");
  
    //Check all user data
    if (!regexEmail.test(objReceive.email)) {
      console.log("Test 1: ", objReceive.email);
      informationErr.emailErr = "Please complete this field.";
      anyError++;
    }
  
    //If not only alphabet char
    if (!regexCharName.test(objReceive.firstName)) {
      informationErr.firstNameErr =
        "Please complete this field with 2-12 alphabet characters.";
      anyError++;
    }
  
    if (!regexCharName.test(objReceive.lastName)) {
      informationErr.lastNameErr =
        "Please complete this field with 2-12 alphabet characters.";
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