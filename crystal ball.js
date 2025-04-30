//magic 8 ball functionality! this function lists out magic 8 ball responses, stores them, and returns a randomized answer
//upon user click. 

//random number generator
function soothsayer (min, max) {
    return Math.floor(Math.random() * (max - min + 1))
    + min;
}

// //omens and other sayings

const omens = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good. (Gmail better).",
    "Sike!",
    "Signs point to yes.",
    "Reply hazy, try again later.",
    "Ask again later.",
    "Better not tell you now!",
    "Wouldn't YOU like to know, weather boy?",
    "Concentrate and ask again. Lol.",
    "Don't count on it.",
    "I think... not.",
    "You wish!",
    "Outlook not so good :(",
    "Inconceivable!"
];

//returns a random variable. 
function diviner () {
    const randomIndex = soothsayer(0,omens.length-1);
    return omens[randomIndex];
}

// form validation 

// write a function that retrieves element by id (#question) value onclick of diviner button and: 
// if blank/null - generates 'please ask a question! 
// if text - generates random diviner () answer 

function tellFortune () {
    let question = document.getElementById("question");

    if(question.value == "" || question.value == " " || question.value == "Ask me anything..." || question.value == "Please ask a question!" || question.value == "I'm not a mind reader!")

       {question.style.color = "white"
        question.value = "Please ask a question!" || "I'm not a mind reader!"}

    else {
        question.style.color = "white"
        let fortune = document.getElementById("fortune")
        fortune.innerHTML = diviner();
    }

}
