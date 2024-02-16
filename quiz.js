// selecting the dom
let questDisplay = document.getElementById('quest-display');
let linkDisplay = document.getElementById('link');
let btnEndQuiz = document.getElementById('btn-end-quiz');
let allQuestions = document.getElementById('all-questions');
let timeDisplay = document.getElementById('time');
let displayFirstQuestion = document.getElementById('first-question');
let btnLink = document.getElementsByClassName('btn-link');
let setExam = document.getElementById('set-exam');
let setExamButton = document.getElementById('btn-sche-quest');


// Create a Set
const score = new Set();
questions = questions.reverse();


    let count = 60 * 10;

    function setTimer() {
        setInterval(() => {
                count--;
                // making an object of time
                let setTime = new Date(count * 1000);

                // get minutes
                let minutes = setTime.getMinutes();
                // console.log(minutes);

                // get minutes
                let seconds = setTime.getSeconds();


                // set the time
                let theTime = setTime.toTimeString().slice(3, 8);

                timeDisplay.innerHTML = "Duration : " + theTime;
                // End the exam when the time ellapses
                if (minutes == 0 & seconds == 0) {
                    endExam()
                }



            },
            1000);
    }

    // call the timer function
    setTimer();


    // loopingt through the questions

    for (let i = 0; i < questions.length; i++) {

        //displaying the links 
        linkDisplay.innerHTML += `<a  href ="#q${i+1}">  <button class = "btn-color btn-link text-light  btn btn-info mt-1 "> ${i+1} </button> </a>`;
        questDisplay.innerHTML += `
    <form class ="pl-5"> 
         <div class="quest shadow-lg " id="q${i+1}"> <h3 class ="text-light"> Question ${i+1}</h3> <b class ="text-center"> ${questions[i].quest} </b>
         <hr>
         
         <br>  <input type = "radio" class ="option" id = "option-0" value = "${questions[i].options[0]}" name = "option">  ${questions[i].options[0]} 
         <br> <input type = "radio" class ="option" id = "option-1"  value = "${questions[i].options[1]}" name = "option"> ${questions[i].options[1]} 
         <br> <input type = "radio" class ="option" id = "option-2" value = "${questions[i].options[2]}" name = "option">  ${questions[i].options[2]}  
         <br> <input type = "radio" class ="option" id = "option-3" value = "${questions[i].options[3]}" name = "option">  ${questions[i].options[3]}  
         </div> 
         </form>

       `;

        let getOption = document.getElementsByClassName("option");
        let btnLink = document.getElementsByClassName('btn-color');
        let btnOptions = document.getElementsByClassName('btn-link');

        for (let x = 0; x < getOption.length; x++) {
            getOption[x].addEventListener('click', () => {

                for (let i = 0; i < questions.length; i++) {

                    // update score if the answer is corect by ading to the Score Set
                    if (getOption[x].value == questions[i].ans) {
                        score.add(getOption[x].value);

                    }


                }



            })


        }

    }

    function endExam() {
        allQuestions.innerHTML = `
    <div class = "p-4 mt-5">
    <h3 class ="text-center text-light mt-3">You Score ${score.size} out of ${questions.length}</h3>
    <hr>
    <a class ="offset-4" href = "index.html"><button class ="btn btn-info"> Take Another Test </button> </a>
    </div>
    `;

        score.clear;
    }



    btnEndQuiz.addEventListener('click', () => {
        let x = confirm("This action will end the exam. Are you sure you will like to do this ?");
        console.log(x)

        if (x == true) {
            endExam()

        }
    });


    btnEndQuiz.style.color = "red";
   

    



