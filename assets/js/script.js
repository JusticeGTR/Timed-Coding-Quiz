//first things first, let's make the button generate the the first question, bring up the 
//High scores and Timer and make itself dissappear

//after clicking the start the time with (75?) seconds./
// if timer === 0
    //show input box for user name/initials
    //submit button takes you to another html page with the user initials and score
        //next html page has list of all user initials and scores and button to return
        //to original page button and a clear score button
    //else
        //display questions with answers as buttons(add event listener to them)
            //test if the user clicked on tright answer button or the wrong one
                // if right, calculate the score and display correct and move to the next question
                //else if wrong: calculate the score and display wrong and move to the next question
                

                //needs to append child automatically for each button

//use local memory to store high scores, and pull them from there to populate the high score board and page

//make all the questions an object of objects or array of objects to keep data cleaner



var generateQuizEl = document.getElementById("generateQuiz");
var countEl = document.getElementById("counter");
var highScoreEl = document.getElementById("highScores");
var quizEl = document.getElementById("quiz")
var quizTextEl = document.getElementById("quizText")
var userInputEl = document.getElementById("userInput")
var quizTitleEl = document.getElementById("quizTitle")
var userScoreEl = document.getElementById("userScore")

var problems = [
    questionOne:{question:"Which of these are data types present in javascript?", answer1:"String, Number, Boolean, Object", answer2:"Lions, Tigers and Bears", answer3:"String, Cheddar, Mozzarella, Brie", answer4:"Jquery, Event, Debug, Terminal", correctAnswer:"String, Number, Boolean, Object"},
    questionTwo:{question:"What is the difference between '==' and '==='?", answer1:"Kinda equals and Really equals", answer2:"Loosely and Strictly equals", answer3:"Double equals and Triple equals", answer4:"'and' and 'or'", correctAnswer:"Loosely and Strictly equals"},
    questionThree:{question:"If I want a variable available to everything, which scope should it be in?", answer1:"Sniper", answer2:"local", answer3:"Tele-", answer4:"Global", correctAnswer:"Global"},
    questionFour:{question:"If the keyword 'this' is used, what is it usually referring to?", answer1:"The sentence it's in", answer2:"A variable", answer3:"The function its in", answer4:"A for loop", correctAnswer:"The function its in"},
    questionFive:{question:"What is used to put a comment in Javascript?", answer1:"<!-- -->", answer2:"/* */", answer3:"//", answer4:"||", correctAnswer:"//"]
}

function quizTime() {
    generateQuizEl.setAttribute("style", "visibility: hidden;")
    var currentScore = "";
    console.log(currentScore)
    var timer = 75;
    var setTimer = setInterval(function() {
        
        countEl.textContent = timer;

    function questionAndAnswers() {
        if(timer === 0){
            clearInterval(setTimer);
            generateQuizEl.setAttribute("style", "visibility: visible;")
            quizTitleEl.textContent = "Your Score:"
            quizTextEl.textContent = "Please enter your initials:"
            //var highScore = user score from local storage
            var inputBox = document.createElement("input")
            inputBox.setAttribute("type", "text")
            userInputEl.appendChild(inputBox)

        } else {
            //for each  to go through the problems object and get the information out of each
                //variable to store the question
                //variable to store the answers
                //variable to store the correct answer
                //for loop to go through each object and store each piece in the correct variable, and place it on the page, creating the html
                    //if i=0, question variable, add it put it into quizText
                    //if 1-4, answer variable, create button, add text to button and append to quizText
                    //if 5, correct answer variable
                    //if eventListener on click, function 
                    //variable to store user answer
                    //if event.target = correct answer variable, user answer = true, create <p>, add text "correct!" and append to quizEl, add points to currentScore
                            //else, create <p>, add text "wrong!" and append to quizEl and minus 10 seconds off timer
                    // 
            
        }
        questionAndAnswers()
        }
        
        timer--;
        
    }, 1000);
    
    // theQuiz();
    // function theQuiz(){
    //     var currentQuestion = problems.questionOne[0];
    //     var currentAnswers = ;
    //     for(i = 0; i > problems.key[])
    //     quizTextEl.textContent = 
    // }



}



generateQuizEl.addEventListener("click", quizTime);