var question_list = [{
        question: "What is Monica's biggest pet peeve?",
        answer: ["Water rings on the coffee table",
            "Animals dressed as humans",
            "Crumbs",
            "People who chew loudly"
        ],
        cor_answer: 2,
        ques_image: "./assets/images/ques_1_image.jpg",

    }, {
        question: " According to Chandler, what phenomenon scares the bejesus out of him?",
        answer: ["Commitment",
            "Michael Flatley,Lord of the Dance",
            "Office parties",
            "Strip clubs"
        ],
        cor_answer: 2,
        ques_image: "./assets/images/ques_2_image.jpg",

    },

    {
        question: "Monica and Ross had a grandmother who died. Chandler and Joey went to her funeral. Name that grandmother.",
        answer: ["Althea", "Beatrice", "Muriel", "Estelle"],
        cor_answer: 1,
        ques_image: "./assets/images/ques_3_image.jpg",


    }, {
        question: " Every week TV Guide comes to Chandler and Joey’s apartment. What name appears on the address label?",
        answer: ["Chandler Bing", "Chanandler Bong", "Miss Chanandler Bong", "Chanandler"],
        cor_answer: 3,
        ques_image: "./assets/images/ques_4_image.jpg",

    }, {
        question: "What is the name of Chandler’s father’s Las Vegas all-male burlesque?",
        answer: ["It’s Raining Men", "Gypsies Tramps and Thieves", "Mr. Garibaldi and the Fellows", "Viva Las Gaygas"],
        cor_answer: 4,
        ques_image: "./assets/images/ques_5_image.jpg",
    }, {
        question: "What was Monica’s nickname when she was a field-hockey goalie?",
        answer: ["Harmonica", "Big Fat Goalie", "The Big Goalie", "Cheater Cheater Compulsive Eater"],
        cor_answer: 2,
        ques_image: "./assets/images/ques_6_image.jpg",
    }, {
        question: "Rachel claims this is her favorite movie:",
        answer: ["Dangerous Liaisons", "Weekend at Bernie’s", "16 Candles", "Pretty in Pink"],
        cor_answer: 1,
        ques_image: "./assets/images/ques_7_image.jpg",

    }, {
        question: " In what part of her body did Monica get a pencil stuck at age 14?",
        answer: ["Her ear", "Her nose", "Her butt", "Her foot"],
        cor_answer: 1,
        ques_image: "./assets/images/ques_9_image.jpg",

    }, {
        question: "Monica categorizes her towels. How many categories are there?",
        answer: ["11", "17", "21", "8"],
        cor_answer: 1,
        ques_image: "./assets/images/ques_10_image.jpg",

    }, {
        question: "What is Joey’s favorite food?",
        answer: ["Two pizzas", "Lasagna", "Sandwiches", "Cereal"],
        cor_answer: 3,
        ques_image: "./assets/images/ques_11_image.jpg",

    }
]

var showImage;
var count = 0;

$(".timer_display").html("<p>hello</p>");

// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
    $(".question").html("<h2>" + question_list[count].question + "</h2>");
    $(".ques_image").html("<img src=" + question_list[count].ques_image + " width='400px'>");
    $("<input>").css("visibility","visible");
    $(".option1").append(question_list[count].answer[0]);
    $(".option2").append(question_list[count].answer[1]);
    $(".option3").append(question_list[count].answer[2]);
    $(".option4").append(question_list[count].answer[3]);

}

function randomQuesBank() {

}

function nextImage() {

    // TODO: Increment the count by 1.
    if (count < question_list.length) {
        count++;

        $(".question").html("");
    //     $("<input>").css("visibility","hidden");
    
     $(".option1").html("");
     $(".option2").html("");
     $(".option3").html("");
     $(".option4").html("");



    //     // TODO: Show the loading gif in the "image-holder" div.
    //     $(".ques_image").html('<img src="./assets/images/loading.gif">');



        // TODO: Use a setTimeout to run displayImage after 1 second.
        setTimeout(displayImage, 2000);
    }




}

// window.onload = function() {
//     var countdownElement = document.getElementById('countdown'),
//         downloadButton = document.getElementById('download'),
//         seconds = 10,
//         second = 0,
//         interval;

//     downloadButton.style.display = 'none';

//     interval = setInterval(function() {
//         countdownElement.firstChild.data = 'You can start your download in ' + (seconds - second) + ' seconds';
//         if (second >= seconds) {
//             downloadButton.style.display = 'block';
//             clearInterval(interval);
//         }

//         second++;
//     }, 1000);
// }

// function startSlideshow() {
//     // TODO: Use showImage to hold the setInterval to run nextImage.
showImage = setInterval(nextImage, 2000);

// }

// function stopSlideshow() {
//     // TODO: Put our clearInterval here:
//     clearInterval(showImage);

// }

// This will run the display image function as soon as the page loads.
displayImage();
