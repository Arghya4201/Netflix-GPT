export const checkValidData = (email,password,name) => {
    const isValidEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/.test(email);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
    const isValidname = /^[a-zA-Z]+\.?$/.test(name);
    if(!isValidname) return "Name is not valid"
    if(!isValidEmail) return "EmailId is not valid"
    if(!isValidPassword) return "Password is not valid"
    
    return null
}