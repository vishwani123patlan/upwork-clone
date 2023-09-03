export const validateData = (fieldType, fieldValue) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if ((fieldType=="firstName" || fieldType=="lastName") && (!fieldValue)) {
    return `Please fill ${fieldType}.`;
  }

  if (fieldType=="email" && !fieldValue){
    return 'Please fill email.';
  }

  if (fieldType=="email" && fieldValue && !emailRegex.test(fieldValue)){
    return 'Please enter a valid email.';
  }

  if (fieldType=="password" && !fieldValue){
    return 'Please fill password.';
  }
}