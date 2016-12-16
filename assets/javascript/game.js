var question_list = [{
        question: "What is Monica's biggest pet peeve?",
        answer: ["Water rings on the coffee table",
            "Animals dressed as humans",
            "Crumbs",
            "People who chew loudly"
        ],
        cor_answer: 1,
        ques_image: "./assets/images/ques_1_image.jpg",
    }, {
        question: " According to Chandler, what phenomenon scares the bejesus out of him?",
        answer: ["Commitment",
            "Michael Flatley,Lord of the Dance",
            "Office parties",
            "Strip clubs"
        ],
        cor_answer: 1,
        ques_image: "./assets/images/ques_2_image.jpg",
    }, {
        question: "Monica and Ross had a grandmother who died. Chandler and Joey went to her funeral. Name that grandmother.",
        answer: ["Althea", "Beatrice", "Muriel", "Estelle"],
        cor_answer: 0,
        ques_image: "./assets/images/ques_3_image.jpg",
    }, {
        question: " Every week TV Guide comes to Chandler and Joey’s apartment. What name appears on the address label?",
        answer: ["Chandler Bing", "Chanandler Bong", "Miss Chanandler Bong", "Chanandler"],
        cor_answer: 2,
        ques_image: "./assets/images/ques_4_image.jpg",

    }, {
        question: "What is the name of Chandler’s father’s Las Vegas all-male burlesque?",
        answer: ["It’s Raining Men", "Gypsies Tramps and Thieves", "Mr. Garibaldi and the Fellows", "Viva Las Gaygas"],
        cor_answer: 3,
        ques_image: "./assets/images/ques_5_image.jpg",
    }, {
        question: "What was Monica’s nickname when she was a field-hockey goalie?",
        answer: ["Harmonica", "Big Fat Goalie", "The Big Goalie", "Cheater Cheater Compulsive Eater"],
        cor_answer: 1,
        ques_image: "./assets/images/ques_6_image.jpg",
    }, {
        question: "Rachel claims this is her favorite movie:",
        answer: ["Dangerous Liaisons", "Weekend at Bernie’s", "16 Candles", "Pretty in Pink"],
        cor_answer: 0,
        ques_image: "./assets/images/ques_7_image.jpg",

    }, {
        question: " In what part of her body did Monica get a pencil stuck at age 14?",
        answer: ["Her ear", "Her nose", "Her butt", "Her foot"],
        cor_answer: 0,
        ques_image: "./assets/images/ques_9_image.jpg",

    }, {
        question: "Monica categorizes her towels. How many categories are there?",
        answer: ["11", "17", "21", "8"],
        cor_answer: 0,
        ques_image: "./assets/images/ques_10_image.jpg",

    }, {
        question: "What is Joey’s favorite food?",
        answer: ["Two pizzas", "Lasagna", "Sandwiches", "Cereal"],
        cor_answer: 2,
        ques_image: "./assets/images/ques_11_image.jpg",
    }
]

var showImage;
var count = 0;
var seconds = 20;
var counter;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var score = 0;
var currentCount;
var lastQuestionUnanswered=false;

window.onload = function() {
	$(window).scrollTop($('#header').position().top);
    $("#header").on("click", startGame);
    $(".choice").on("click", function() {
        $(".timer_display").css("visibility", "hidden");
        stop();
        checkAnswer(this);
    })  

    $(".choice").hover(function(){
    	$(this).css("background-color","#ffecdf");
    	$(this).css("border","solid 1px #50293c");
    },function(){
    	$(this).css("background-color","");
    	$(this).css("border","");
    }) 

    $(".restartGame_button").on("click", function() {
        $(".result_area").css("display", "none");        
        location.reload();
    })
}

function displayFinalScore() {
    $(".ques_area").css("display", "none");
    $(".result_area").css("display", "block");
    $(".answered").html("Correct: " + correct + "    Incorrect: " + incorrect);
    $(".unanswered").html(unanswered);
    score = correct * 10;
    $(".finalScore").html(score);
}

function checkAnswer(event) {
    currentCount = count - 1;
    if (event.id == question_list[currentCount].cor_answer) {
        $(event).css("background-color", "#4caf50");
        correct++;
        $(".correct").html("Correct: " + correct);
    } else {
        $(event).css("background-color", "red");
        $("#" + question_list[currentCount].cor_answer).css("background-color", "#4caf50");
        incorrect++;
        $(".incorrect").html("Incorrect:" + incorrect);
    }

    if (count >= question_list.length) {
        displayFinalScore();
    } else {
        nextQuestion();
    }   
}

function stop() {
    clearInterval(counter);
    clearInterval(showImage);
    setTimeout(displayImage, 3000);
}

function nextQuestion() {
    counter = setInterval(timer, 1000);
}

function startGame() {
    $(".start").css("visibility", "hidden");
    $(".main-area").css("visibility", "visible");
    $(window).scrollTop($('.main-area').position().top);
    displayImage();   
    showImage = setInterval(displayImage, 21000);
    counter = setInterval(timer, 1000);
}

function displayImage() {	
    $(".timer_display").css("visibility", "visible");
    if(lastQuestionUnanswered){
    	counter=setInterval(timer,1000);
    }   
    
    if (count < question_list.length) {
        seconds = 20;
        $(".timer_display").html("You have " +seconds + " seconds left!!");
        $(".question").html("<h2>" + question_list[count].question + "</h2>");
        $(".ques_image").html("<img src=" + question_list[count].ques_image + ">");
        $(".choice").css("background-color", "#FFFFFF");

        $("#0").html(question_list[count].answer[0]);
        $("#1").html(question_list[count].answer[1]);
        $("#2").html(question_list[count].answer[2]);
        $("#3").html(question_list[count].answer[3]);
        count++;
    } else {
        clearInterval(showImage);        
    }
}

function timer() {
   $(".timer_display").html("You have " +seconds + " seconds left!!");
    if (seconds === 0) {
    	stop();
    	 $(".timer_display").css("visibility", "hidden");
        currentCount = count - 1;
        $("#" + question_list[currentCount].cor_answer).css("background-color", "#4caf50");
        unanswered++;
        $(".unanswered").html("unanswered:" + unanswered); 
        lastQuestionUnanswered=true;       
        
         if (count >= question_list.length) {
             displayFinalScore();
             clearInterval(counter);
        } 
        return;
    }
    lastQuestionUnanswered=false;
    seconds--;
}
