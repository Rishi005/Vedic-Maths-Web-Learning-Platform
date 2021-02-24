// pos is position of where the user in the test or which question they're up to
var pos2 = 0, test2, test_status2, question2, choice2, choices2, chA2, chB2, chC2, correct2 = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions2 = [
  {
      question2: "25 x 41",
      a: "1500",
      b: "1003",
      c: "1025",
      answer: "C"
    },
  {
      question2: "13 x 77",
      a: "999",
      b: "1001",
      c: "1010",
      answer: "B"
    },
  {
      question2: "35 x 36",
      a: "1289",
      b: "1577",
      c: "1260",
      answer: "C"
    },
  {
      question2: "86 x 40",
      a: "2839",
      b: "4563",
      c: "3440",
      answer: "C"
    }
  ];
// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion2(){
  test2 = get("test2");
  if(pos2 >= questions2.length){
    test2.innerHTML = "<h2>You got "+correct2+" of "+questions2.length+" questions correct</h2>";
    get("test_status2").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos2 = 0;
    correct2 = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status2").innerHTML = "Question "+(pos2+1)+" of "+questions2.length;
  
  question2 = questions2[pos2].question2;
  chA2 = questions2[pos2].a;
  chB2 = questions2[pos2].b;
  chC2 = questions2[pos2].c;
  // display the question
  test2.innerHTML = "<h3>"+question2+"</h3>";
  // display the answer options
  // the += appends to the data we started on the line above
  test2.innerHTML += "<label> <input type='radio' name='choices2' value='A'> "+chA2+"</label><br>";
  test2.innerHTML += "<label> <input type='radio' name='choices2' value='B'> "+chB2+"</label><br>";
  test2.innerHTML += "<label> <input type='radio' name='choices2' value='C'> "+chC2+"</label><br><br>";
  test2.innerHTML += "<button onclick='checkAnswer2()'>Submit Answer</button>";
}
function checkAnswer2(){
  // use getElementsByName because we have an array which it will loop through
  choices2 = document.getElementsByName("choices2");
  for(var i=0; i<choices2.length; i++){
    if(choices2[i].checked){
      choice2 = choices2[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice2 == questions2[pos2].answer){
    //each time there is a correct answer this value increases
    correct2++;
  }
  // changes position of which character user is on
  pos2++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion2();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion2);