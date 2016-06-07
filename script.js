var allQuestions = [
  {
    question: "Which President has NOT won a Nobel Peace Prize?",
    choices: ["Woodrow Wilson", "Theodore Roosevelt","Jimmy Carter", "Franklin Delano Roosevelt"],
    correctAnswer: 3
  },
  {
    question: "Which state does NOT border Iowa?",
    choices:["Wisconsin","Kansas","Nebraska","Minnesota"],
    correctAnswer:1
  },
  {
    question: "Who is the current UK Prime Minister?",
    choices:["David Cameron", "Gordon Brown", "Tony Blair","Winston Churchill"],
    correctAnswer:0
  },
  {
    question:"Which state first ratified the U.S. Constitution?",
    choices:["Maryland","Rhode Island","Delaware","New York"],
    correctAnswer:2
  },
  {
    question:"Which state ratified the 13th Amendment of the U.S. Consitution in 2013?",
    choices:["South Carolina", "Alabama", "Georgia","Mississippi"],
    correctAnswer:3
  }
]


$(document).ready(function(){
  console.log(allQuestions[0].question)
  $("#question").text(allQuestions[0].question);
})

