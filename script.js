let newQuestion = document.getElementById("add-question");
let newAnswer = document.getElementById("add-answer");
let container = document.getElementById("grid-container");

let questions = [{question: "Is spencer better in <br /> Smash Bros than me", answer: "no"},
{question: "What does JS stand for", answer: "JavaScript" },
{question: "How do you write <br /> a method in JS", answer: "const myFunction = () => { }"},
{question: "How do you run <br /> a ruby file", answer: "ruby myFile.rb" }
]; 


const currentCards = () => {
  for(var q = 0; q < questions.length; q++) {

    let cards = document.createElement("div");
    cards.innerHTML = questions[q].question + "<br />";
    container.appendChild(cards);
    let button = document.createElement("button");
    let deleteButton = document.createElement("button");
    let edit = document.createElement("button");
    button.setAttribute("data-index", q)
    deleteButton.setAttribute("data-index", q)
    edit.setAttribute("data-index", q)
    let holder = document.createElement("p");
      button.innerHTML = "answers";
      deleteButton.innerHTML = "Delete" + "<br />";
      edit.innerHTML = "Edit <br />";
      cards.appendChild(button);
      cards.appendChild(deleteButton);
      cards.appendChild(edit);
      console.log(questions[q].answer);
      cards.appendChild(holder);
      button.addEventListener("click", function() {
        //debugger;
        let index = this.getAttribute("data-index");
        console.log(questions[index].answer);
        holder.innerHTML = questions[index].answer;
        
      })
      deleteButton.addEventListener("click", function() {
        let index = this.getAttribute("data-index");
        questions.pop(index)
        container.removeChild(cards);
      })
      edit.addEventListener("click", function() {

      })
    }
  }

  const addNewCard = () => {

    let obj = {question: newQuestion.value, answer: newAnswer.value};
    questions.push(obj);
    clear();

    let newCard = document.createElement("div");
    container.appendChild(newCard);
    newCard.innerHTML = questions[questions.length - 1].question + "<br />";
    let newButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let edit = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    edit.innerHTML = "Edit";
    newButton.innerHTML = "answer";
    newCard.appendChild(newButton);
    let newHolder = document.createElement("p");
    newCard.appendChild(newHolder);
    newCard.appendChild(deleteButton);
    newCard.appendChild(edit);
    newButton.addEventListener("click", function() {
      newHolder.innerHTML = questions[questions.length - 1].answer; 
    })
    deleteButton.addEventListener("click", function() {
      container.removeChild(newCard);
    })
  }

  const clear = () => {
    newQuestion.value = "";
    newAnswer.value = "";
  }
  console.log(questions);
  currentCards(); 

  
