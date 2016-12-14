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

    },

    {
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
var seconds = 10;

var counter;

window.onload = function() {
    $(".start").on("click", startGame);
    $(".choice").on("click",function(){
    	//console.log(this.id);
    	//stop();
    	if(this.id===question_list[count].cor_answer){
    		$(".message").html("You got it right");

    	}else{
    		$(".message").html("You got it wrong. The right answer is "+question_list[count].answer[question_list[count].cor_answer]);
    	}
    	count++;
	
})

}

function stop(){
	clearInterval(counter);
	clearInterval(showImage);
}

function answerDecision(){
	console.log(this.id);
	if(question_list.cor_answer===this.id){
		//message answer is right
		//increase score by 1
		//display next question 
		//reset timer
	}else{
		//show the right answer
		//display next question
		//reset timer
	}

}

function startGame() {

    $(".main-area").css("visibility", "visible");
    displayImage();
    showImage = setInterval(displayImage, 11000);
    counter = setInterval(timer, 1000);



}

function displayImage() {

    if (count < question_list.length) {
    	 seconds =10;
        $(".question").html("<h2>" + question_list[count].question + "</h2>");
        $(".ques_image").html("<img src=" + question_list[count].ques_image + " width='400px'>");

        $("#0").html(question_list[count].answer[0]);
        $("#1").html(question_list[count].answer[1]);
        $("#2").html(question_list[count].answer[2]);
        $("#3").html(question_list[count].answer[3]);
        //count++;
    } else {
        clearInterval(showImage);
        //show final results
    }


}




function timer() {
    $(".timer_display").html(seconds + " secs");
    if (seconds < 0) {
        clearInterval(counter);

        return;
    }


    seconds--;
}


