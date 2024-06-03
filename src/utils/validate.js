export const checkValidData = (email, password) => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8,16}$/;
  
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
  
    if (!isEmailValid) return "Email is Not Valid";
    if (!isPasswordValid) return "Password is Not Valid";
  
    return null;
  };
    
