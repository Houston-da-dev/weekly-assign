const prompt = require('prompt-sync')();

var score = 0;
var life = 3;
console.log("Welcome to the Math Quiz!!!")

let x = select();
if(x == 1){
    quiz1();
}
else{
    quiz2();
}
console.log("You got a Score of " + score)



function quiz1(){
 let y = select2()
    if(y == 1){
        easy();
    }
    else if(y == 2){
        medium();
    }
    else{
        hard();
    }
}

function quiz2(){
    let y = select2()
    if(y == 1){
        easy2();
    }
    else if(y == 2){
        medium2();
    }
    else{
        hard2();
    }
}

function easy(){
    for(counter = 1; counter != 21; counter ++){
        let num1 = Math.floor(Math.random()*10);
        let num2 = Math.floor(Math.random()*10);
        random = Math.floor(Math.random()*2)
        if(random == 1){
            console.log(num1 + "+" + num2 + "=?");
            z = inputnumber()
            if(z == num1 + num2){
                score = score + 10;
                console.log("Correct!");
            }
            else if(z == "skip" || z == "Skip"){
                console.log("Skipped!!!");
            }
            else{
                score = score - 5;
                console.log("Wrong!");
            }
        }
        else{
            console.log(num1 + "-" + num2 + "=?");
            z = inputnumber()
            if(z == num1 - num2){
                score = score + 10;
                console.log("Correct!");
            }
            else if(z == "skip" || z == "Skip"){
                console.log("Skipped!!!");
            }
            else{
                score = score - 5;
                console.log("Wrong!");
            }
        }
    }
}

function medium(){
    for(counter = 1; counter != 21; counter ++){
        random = Math.floor(Math.random()*3)+1;
        if(random == 1){
            let num1 = Math.floor(Math.random()*100);
            let num2 = Math.floor(Math.random()*100);
            console.log(num1 + "+" + num2 + "=?");
            z = inputnumber()
            if(z == num1 + num2){
                score = score + 10;
                console.log("Correct!");
            }
            else if(z == "skip" || z == "Skip"){
                console.log("Skipped!!!");
            }
            else{
                score = score - 5;
                console.log("Wrong!");
            }
        }
        else if(random == 2){
            let num1 = Math.floor(Math.random()*100);
            let num2 = Math.floor(Math.random()*100);
            console.log(num1 + "-" + num2 + "=?");
            z = inputnumber()
            if(z == num1 - num2){
                score = score + 10;
                console.log("Correct!");
            }
            else if(z == "skip" || z == "Skip"){
                console.log("Skipped!!!");
            }
            else{
                score = score - 5;
                console.log("Wrong!");
            }
        }

        else if(random == 3){
            let num1 = Math.floor(Math.random()*10);
            let num2 = Math.floor(Math.random()*10);
            console.log(num1 + "*" + num2 + "=?");
            z = inputnumber()
            if(z == num1 * num2){
                score = score + 10;
                console.log("Correct!");
            }
            else if(z == "skip" || z == "Skip"){
                console.log("Skipped!!!");
            }
            else{
                score = score - 5;
                console.log("Wrong!");
            }
        }
        else if(random == 4){
            let num1 = Math.floor(Math.random()*10);
            let num2 = Math.floor(Math.random()*9)+1;
            console.log(num1 + "/" + num2 + "=?");
            z = inputnumber()
            if(z == num1 / num2){
                score = score + 10;
                console.log("Correct!");
            }
            else if(z == "skip" || z == "Skip"){
                console.log("Skipped!!!");
            }
            else{
                score = score - 5;
                console.log("Wrong!");
            }
        }
    }
}

function hard(){
    for(counter = 1; counter != 21; counter ++){
        random = Math.floor(Math.random()*4)+1
        if(random == 1){
            let num1 = Math.floor(Math.random()*1000);
            let num2 = Math.floor(Math.random()*1000);
            console.log(num1 + "+" + num2 + "=?");
            z = inputnumber()
            if(z == num1 + num2){
                score = score + 10;
                console.log("Correct!");
            }
            else if(z == "skip" || z == "Skip"){
                console.log("Skipped!!!");
            }
            else{
                score = score - 5;
                console.log("Wrong!");
            }
        }
        else if(random == 2){
            let num1 = Math.floor(Math.random()*1000);
            let num2 = Math.floor(Math.random()*1000);
            console.log(num1 + "-" + num2 + "=?");
            z = inputnumber()
            if(z == num1 - num2){
                score = score + 10;
                console.log("Correct!");
            }
            else if(z == "skip" || z == "Skip"){
                console.log("Skipped!!!");
            }
            else{
                score = score - 5;
                console.log("Wrong!");
            }
        }

        else if(random == 3){
            let num1 = Math.floor(Math.random()*100);
            let num2 = Math.floor(Math.random()*100);
            console.log(num1 + "*" + num2 + "=?");
            z = inputnumber()
            if(z == num1 * num2){
                score = score + 10;
                console.log("Correct!");
            }
            else if(z == "skip" || z == "Skip"){
                console.log("Skipped!!!");
            }
            else{
                score = score - 5;
                console.log("Wrong!");
            }
        }
        else if(random == 4){
            let num1 = Math.floor(Math.random()*100);
            let num2 = Math.floor(Math.random()*99)+1;
            console.log(num1 + "/" + num2 + "=?");
            z = inputnumber()
            if(z == num1 / num2){
                score = score + 10;
                console.log("Correct!");
            }
            else if(z == "skip" || z == "Skip"){
                console.log("Skipped!!!");
            }
            else{
                score = score - 5;
                console.log("Wrong!");
            }
        }
        else if(random == 5){
            let num1 = Math.floor(Math.random()*9)+1;
            let num2 = Math.floor(Math.random()*9)+1;
            console.log(num1 + "%" + num2 + "=?");
            z = inputnumber();
            if(z == num1 % num2){
                score = score + 10;
                console.log("Correct!");
            }
            else if(z == "skip" || z == "Skip"){
                console.log("Skipped!!!");
            }
            else{
                score = score - 5;
                console.log("Wrong!");
            }
        }
    }
}

function easy2(){
    for(lives = 3; lives != 0; lives){
        let num1 = Math.floor(Math.random()*10);
        let num2 = Math.floor(Math.random()*10);
        random = Math.floor(Math.random()*2)
        if(random == 1){
            console.log(num1 + "+" + num2 + "=?");
            z = inputnumber2()
            if(z == num1 + num2){
                score = score + 10;
                console.log("Correct!");
            }
            else{
                console.log("Wrong!");
                lives = lives - 1;
            }
        }
        else{
            console.log(num1 + "-" + num2 + "=?");
            z = inputnumber2()
            if(z == num1 - num2){
                score = score + 10;
                console.log("Correct!");
            }
            else{
                console.log("Wrong!");
                lives = lives - 1;
            }
        }
    }
}

function medium2(){
    for(lives = 3; lives != 0; lives){
        random = Math.floor(Math.random()*4)+1;
        if(random == 1){
            let num1 = Math.floor(Math.random()*100);
            let num2 = Math.floor(Math.random()*100);
            console.log(num1 + "+" + num2 + "=?");
            z = inputnumber2();
            if(z == num1 + num2){
                score = score + 10;
                console.log("Correct!");
            }
            else{
                lives = lives - 1;
                console.log("Wrong!");
            }
        }
        else if(random == 2){
            let num1 = Math.floor(Math.random()*100);
            let num2 = Math.floor(Math.random()*100);
            console.log(num1 + "-" + num2 + "=?");
            z = inputnumber2()
            if(z == num1 - num2){
                score = score + 10;
                console.log("Correct!");
            }
            else{
                lives = lives - 1;
                console.log("Wrong!");
            }
        }

        else if(random == 3){
            let num1 = Math.floor(Math.random()*10);
            let num2 = Math.floor(Math.random()*10);
            console.log(num1 + "*" + num2 + "=?");
            z = inputnumber2()
            if(z == num1 * num2){
                score = score + 10;
                console.log("Correct!");
            }
            else{
                console.log("Wrong!");
                lives = lives - 1;
            }
        }
        else if(random == 4){
            let num1 = Math.floor(Math.random()*10);
            let num2 = Math.floor(Math.random()*9)+1;
            console.log(num1 + "/" + num2 + "=?");
            z = inputnumber2()
            if(z == num1 / num2){
                score = score + 10;
                console.log("Correct!");
            }
            else{
                console.log("Wrong!");
                lives = lives - 1;
            }
        }
    }
}

function hard2(){
    for(lives = 3; lives != 0; lives){
        random = Math.floor(Math.random()*5)+1;
        if(random == 1){
            let num1 = Math.floor(Math.random()*1000);
            let num2 = Math.floor(Math.random()*1000);
            console.log(num1 + "+" + num2 + "=?");
            z = inputnumber2();
            if(z == num1 + num2){
                score = score + 10;
                console.log("Correct!");
            }
            else{
                lives = lives - 1;
                console.log("Wrong!");
            }
        }
        else if(random == 2){
            let num1 = Math.floor(Math.random()*1000);
            let num2 = Math.floor(Math.random()*1000);
            console.log(num1 + "-" + num2 + "=?");
            z = inputnumber2()
            if(z == num1 - num2){
                score = score + 10;
                console.log("Correct!");
            }
            else{
                lives = lives - 1;
                console.log("Wrong!");
            }
        }

        else if(random == 3){
            let num1 = Math.floor(Math.random()*100);
            let num2 = Math.floor(Math.random()*100);
            console.log(num1 + "*" + num2 + "=?");
            z = inputnumber2()
            if(z == num1 * num2){
                score = score + 10;
                console.log("Correct!");
            }
            else{
                console.log("Wrong!");
                lives = lives - 1;
            }
        }
        else if(random == 4){
            let num1 = Math.floor(Math.random()*100);
            let num2 = Math.floor(Math.random()*99)+1;
            console.log(num1 + "/" + num2 + "=?");
            z = inputnumber2()
            if(z == num1 / num2){
                score = score + 10;
                console.log("Correct!");
            }
            else{
                console.log("Wrong!");
                lives = lives - 1;
            }
        }
        else if(random == 5){
            let num1 = Math.floor(Math.random()*9)+1;
            let num2 = Math.floor(Math.random()*9)+1;
            console.log(num1 + "%" + num2 + "=?");
            z = inputnumber2()
            if(z == num1 % num2){
                score = score + 10;
                console.log("Correct!");
            }
            else{
                console.log("Wrong!");
                lives = lives - 1;
            }
        }
    }
}

function inputnumber(){
    let input = prompt("Enter a number: ");
    let num = input
    while(isNaN(num) && num !== "skip" && num !== "Skip"){
        console.log(`invalid number`);
        input = prompt("Enter a number: ");
        num = input;
    }
    return num;
}

function inputnumber2(){
    let input = prompt("Enter a number: ");
    let num = input;
    while(isNaN(num)){
        console.log(`invalid number`);
        input = prompt("Enter a number: ");
        num = input;
    }
    return num;
}

function select(){
    for(a = 0; a == NaN || a > 2 || a <= 0; a){
        console.log("Please Select an Option - \n Press 1 for 20 questions \n Press 2 for survival mode");
        a = Number(prompt());
        if(a > 2 || Number.isNaN(a) || a <= 0){
            console.log("Invailed input. Please try again.");
        }
    }
    return a
}

function select2(){
    for(a = 0; a == NaN || a > 3 || a <= 0; a){
        console.log("Please Select an Option - \n Press 1 for easy \n Press 2 for medium \n Press 3 for hard");
        a = Number(prompt());
        if(a > 2 || Number.isNaN(a) || a <= 0){
            console.log("Invailed input. Please try again.");
        }
    }
    return a
}