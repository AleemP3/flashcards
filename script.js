let newQuestion = document.getElementById("add-question");
let newAnswer = document.getElementById("add-answer");
let container = document.getElementById("grid-container");

let questions = ["Is spencer better in <br /> Smash Bros than me", 
"What does JS stand for",
"How do you write <br /> a method in JS",
"How do you run <br /> a ruby file"
]; 
let answers = [
"no", 
"JavaScript", 
"const myFunction = () => { }",
"ruby myFile.rb"
]; 


const currentCards = (questions, answers) => {
  for(var q = 0; q < questions.length; q++) {
    let cards = document.createElement("div");
    cards.innerHTML = questions[q] + "<br />";
    container.appendChild(cards);
    
    for(var a = 0; a < answers.length; a++) {
      let button = document.createElement("button");
      let holder = document.createElement("p");
      button.innerHTML = "answers";
      cards.appendChild(button);
      console.log(answers[q]);
      cards.appendChild(holder);
      //debugger
      button.addEventListener("click", function() {
        holder.innerHTML = answers[q];
      })
    break;
    }
  }
}

const addNewCard = () => {

  let newCard = document.createElement("div");
  let p = document.createElement("p")
  let question = newQuestion.value;

  newCard.innerHTML = question;
  container.appendChild(newCard);
  
}

currentCards(questions, answers); 