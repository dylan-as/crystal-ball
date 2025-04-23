//magic 8 ball functionality! this function lists out magic 8 ball responses, stores them, and returns a randomized answer
//upon user click. 

//random number generator
function soothsayer (min, max) {
    return Math.floor(Math.random() * (max - min + 1))
    + min;
}

//omens and other sayings

const omens = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
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
]