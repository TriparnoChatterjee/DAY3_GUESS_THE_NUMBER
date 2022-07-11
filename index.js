var output = document.getElementById("out");
const button = document.querySelector("#check_btn");
const guess = Math.floor(Math.random() * 100) + 1;
// console.log(value);
// console.log(guess);
const check = () => {
  const value = document.querySelector("#in").value;
  if(value<1 || value>100){
    output.innerHTML = "Please enter a value between 1 and 100";
    return;
  }
  if (value == guess) {
    output.innerHTML = "Congrats! Got the answer correctly!";
  } else if (value > guess) {
    output.innerHTML = "Guess a smaller number";
  } else {
    output.innerHTML = "Guess a greater number";
  }
};
button.addEventListener("click", check);
