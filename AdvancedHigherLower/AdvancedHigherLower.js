function get_number(prompt) {
    let valid_input = false;
    let maxNum, input;
    

    while(!valid_input) {
        input = window.prompt(prompt);
    
        maxNum = Number(input);
    
        if(maxNum != NaN && maxNum > 0) {
            valid_input = true;
        } else if (isNaN(maxNum)) {
            alert("This isn't a number!");
        } else {
            alert("This is a negative number, you need a positive one!");
        }
    }
    if (maxNum == Math.round(maxNum)) {
        return maxNum;
    } else {
        alert("Your max number " + maxNum + " is a decimal and needs to be rounded. Your new rounded value is " + Math.round(maxNum) + ".");
        return Math.round(maxNum);
    }
    
}

function do_guess() {
    let guess = Number(document.getElementById("guess").value);
    
    let message = document.getElementById("message");
    
    if(guess != NaN && guess > 0 && guess <= maxNum) {

        
        let noDuplicate = true;

        for(let i = 0; i < allGuesses.length; i++) {
            if (guess == allGuesses[i]){
                noDuplicate = false;
                message.innerHTML = "Guess is a duplicate! Try again!";
            }
        }
        if(noDuplicate) {
            allGuesses.push(guess);
            if (guess == random) {
                message.innerHTML = "You got it right! It took you " + allGuesses.length + " tries and your guesses were " + allGuesses + ".";
            } 
            else if (guess > random) {
                message.innerHTML = "Number too High! Try again!";
            }
            else {
                message.innerHTML = "Number too Low! Try again!";
            }
        }


    } 
    else if (isNaN(guess)) {
        message.innerHTML ="This isn't a number!";
    } 
    else if (guess > maxNum) {
        message.innerHTML = "That number is not in range, try again. Number is higher than max number.";
    }
    else {
        message.innerHTML = "That number is not in range, try again. This is a negative number or 0, you need a positive one!";
    }
    


}


let maxNum = get_number("Enter the maximum number.");
console.log("maxNum is " + maxNum);
let maxNumMessage = document.getElementById("maxNum");
maxNumMessage.innerHTML = "Max number is " + maxNum;

let random = Math.floor(Math.random() * maxNum) + 1;
console.log(random + " is the answer");


const allGuesses = [];

