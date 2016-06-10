var allQuestions = [
  {
    question: "Which President has NOT won a Nobel Peace Prize?",
    choices: ["Woodrow Wilson", "Theodore Roosevelt","Jimmy Carter", "Franklin Delano Roosevelt"],
    correctAnswer: "four"
  },
  {
    question: "Which state does NOT border Iowa?",
    choices:["Wisconsin","Kansas","Nebraska","Minnesota"],
    correctAnswer:"two"
  },
  {
    question: "Who is the current UK Prime Minister?",
    choices:["David Cameron", "Gordon Brown", "Tony Blair","Winston Churchill"],
    correctAnswer:"one"
  },
  {
    question:"Which state first ratified the U.S. Constitution?",
    choices:["Maryland","Rhode Island","Delaware","New York"],
    correctAnswer:"three"
  },
  {
    question:"Which state ratified the 13th Amendment of the U.S. Consitution in 2013?",
    choices:["South Carolina", "Alabama", "Georgia","Mississippi"],
    correctAnswer:'four'
  }
]


$(document).ready(function(){
  $("#question").text(allQuestions[0].question);
  $("input:text").each(function(i,e){
    $(e).val(allQuestions[0].choices[i])
  })
  var quizScore = 0;
  var click = 0;
  
  
  $(".answerButton").on("click",function(){ //Function that will run when answer is selected. 
    getAnswer(click)                             //Done: Making sure answer is selected
    checkRadio();                           //ToDo: Checking answer for correct response, scoring, and to change the text of everything for next question
    showScore(click);
    newQuestion(click);
    
  })

  
  function checkRadio(){ //Check if an answer is selected and changes the string in button to finish when on last question
    if($("input:radio:checked").length > 0){
      click = click + 1
      if (click == 4){
        $(".answerButton").text("Finish!")
      }
    }else{
      alert("Please select an answer!");
      return;
    }
  }
  
  function getAnswer(clickNumber){
    var realAnswer = allQuestions[clickNumber].correctAnswer;
    console.log(realAnswer);
    var answer = $("input:radio:checked").attr("id");
    console.log(answer);
    if (answer == allQuestions[clickNumber].correctAnswer){
      console.log("Correct!")
      quizScore = quizScore + 20;
    } else{
      console.log("Wrong")
      quizScore = quizScore
    }
    
  }
  
  function newQuestion(clickNumber){ // CHanges the Question and Responses for new question after submit button is done
    if (clickNumber < allQuestions.length){
      $("#question").text(allQuestions[clickNumber].question);
      $("input:text").each(function(i, e){
        $(e).val(allQuestions[clickNumber].choices[i]);
      })
    };
  }
  
  function showScore(clickNo){
    if (clickNo == 5){
      console.log("Your score is " + quizScore + "%");
    }
  }
  
  
})




