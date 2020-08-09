import ENUM from "./enum";

export const focusErrorElement = (className, setTimeoutRequired) => {
  if (!className) return;
  const scrollBehaviour = {behavior: 'smooth', block: 'center',inline: 'nearest'};
  const elementField = [...document.getElementsByClassName(className)][0];
  if (setTimeoutRequired && elementField) {
    const element = setTimeout(function(){
      elementField.scrollIntoView(scrollBehaviour);
      clearTimeout(element);
    }, 100);
  } else if(elementField){
    elementField.scrollIntoView(scrollBehaviour);
  }
};

export const trimFunction = data => typeof(data) === 'string' ? data.trim() : data;
export const trimLeftFunction = data => typeof(data) === 'string' ? data.trimLeft().replace(ENUM.PATTERN.REMOVE_DOUBLE_SPACE_ADD_SPACE , ' ') : data;

export const customOnKeyPress = (e, restrictions, onKeyPress) => {

    /* Allow Alphabets Only */
    const text = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    const allowAlphabets = (restrictions.includes('numbers') && restrictions.includes('special-characters')) && !ENUM.PATTERN.ALLOW_ALPHABETS_ONLY.test(text);
    if (allowAlphabets) return e.preventDefault();
    /* Allow Alphabets Only */
  
    const { value } = e.target;
  
    /* Removing Left space */
    if(restrictions.includes('left-space')) e.target.value = trimLeftFunction(value);
    /* Removing Left space */
  
    /* Trim */
    if(restrictions.includes('space')) e.target.value = trimFunction(value);
    /* Trim */
  
    /* Allow Numbers Only */
    const allowNumeric = (restrictions.includes('alpha') && restrictions.includes('special-characters')) && !ENUM.PATTERN.NUMBERS_ONLY.test(text)
    if (allowNumeric) return e.preventDefault();
    /* Allow Numbers Only */
  
    onKeyPress(e);
  };