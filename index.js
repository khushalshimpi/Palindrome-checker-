// get Element from Html
const btnCheck = document.querySelector("button");
const str = document.querySelector("input");

// Add Event to Btn
btnCheck.addEventListener("click", (e) => {
  e.preventDefault();

  //convert Lowercase
  const inputWord = str.value.toLocaleLowerCase();

  //convert into Array   
  const string = inputWord.split("");

  //reverse the array   
  const reArray = string.reverse();
  
  //join the reverse array 
  const joinArray = reArray.join("");

  

  //check palindrome
  if (inputWord === ""){
    document.querySelector(".output-text").innerHTML = 
    `
    <p style="font-size: 1rem;">Given string is empty. It's not valid</p>
    `
  }   
  else if (inputWord === joinArray) {
    document.querySelector(".output-text").innerHTML = 
    `
    <div class = output>
        <p>${inputWord} = ${joinArray}</p>
        <p style = 'font-size: 1rem;'>It is Palindrome.</p>
    </div>

    `
    str.value = "";
  }
  else{
    document.querySelector(".output-text").innerHTML = 
    `
    <p style="font-size: 1rem;">It is not a palindrome</p>
    `
  }

});
