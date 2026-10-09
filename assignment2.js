const prompt = require("prompt-sync")();

//Grade Book
// var grades = [];

// for(a = 0; a != 6; a){
//     a = select();
//     if(a == 1){
//         grades = add();
//     }
//     else if(a == 2){
//         remove();
//     }
//     else if(a == 3){
//         ave = averagegrade(grades);
//         console.log(`The average grade is ${ave}`);
//     }
//     else if(a == 4){
//         high = highgrade(grades);
//         console.log(`The highest grade is ${high}`)
//     }
//     else if(a == 5){
//         print();
//     }
//     else if(a == 6){
//         console.log("Goodbye!")
//     }
// }

// //adds grades
// function add(){
//     let y = grades;
//     let x = 0;
//     while(x != "done"){
//         x = addnumber();
//         if(x == "done"){
//             console.log("Returning\n")
//             break;
//         }
//         else{
//             x = Number(x);
//             y.push(x);
//             console.log("Item has been added.\n");
//         }
//     }
//     return y;
// }

// //removes grades
// function remove(){
//     let x = 0;
//     while(x != "done"){
//         console.log("If you are finished type Done.")
//         x = prompt("What Grades do you want to remove: ").toLowerCase();
//         y = Number(x);
//         let z = grades.indexOf(y);
//         if(x=== "Done" || x === "done"){
//             break;
//         }
//         else if(z != -1){
//             grades.splice(z, 1);
//             console.log("Grade has been Removed.\n");
//         }
//         else{
//             console.log("Grade does not Exist.\n");
//         }
//     }
// }

// //finds average Grade
// function averagegrade(numbers){
//     let result = 0;
//     let i = 0;
//     for (let number of numbers){
//             result = number + result;
//             i = i + 1;
//     }
//     result = result / i;
//     result = Math.round(result * 100) / 100;
//     return result;
// }


// //highest grade
// function highgrade(numbers){
//     let result = -Infinity;
//     for (let number of numbers){
//         if (number > result){
//             result = number;
//         }
//     }
//     if(result == -Infinity){
//         result = "Null";
//     }
//     return result;
// }

// //Prints all the Grades
// function print(){
//     for(var i = 0; i <= grades.length - 1; i++){
//         console.log(i + 1 + ". " + grades[i]);
//     }
// }

// function select(){
//     for(a = 0; a == NaN || a > 6 || a <= 0; a){
//         console.log("Please Select an Option - \n\tPress 1 to Add Grades \n\tPress 2 to Remove Grades \n\tPress 3 to Print the Average \n\tPress 4 to Find the Highest Grade\n\tPress 5 to Print all Grades\n\tPress 6 to Quit");
//         a = Number(prompt("What's your choice: "));
//         if(a > 6 || Number.isNaN(a) || a <= 0){
//             console.log("Invailed input. Please try again.\n")
//         }
//     }
//     return a
// }


// //Checks for done or a vaild grade
// function addnumber(){
//     for(b = -1; Number.isNaN(b) || b > 100 || b < 0; b){
//         console.log("Type DONE when finished.");
//         a = prompt("Add a Grade 0-100: ").toLowerCase();
//         b = Number(a);
//         if(a == "done"){
//             return a;
//         }
//         else if(b >= 100 || Number.isNaN(b) || b <= 0){
//             console.log("Invalid input. Please try again.\n")
//         }
//     }
//     return b
// }



//Movie list builder
var movies = [];
var uppermovies = [];

for(a = 0; a != 7; a){
    a = select();
    if(a == 1){
        movies = add();
    }
    else if(a == 2){
        remove();
    }
    else if(a == 3){
        search();
    }
    else if(a == 4){
        print();
    }
    else if(a == 5){
        moviecount();
    }
    else if(a == 6){
        printupper();
    }
    else if(a == 7){
        console.log("Goodbye!")
    }
}

//adds movies
function add(){
    let y = movies;
    let x = 0;
    while(x != "Done"){
        console.log("If you are finished type Done.")
        let x = prompt("What Movies do you want to add? ").toLowerCase();
        x = moviecase(x);
        let z = y.indexOf(x);
        if(x=== "Done" || x === "done"){
            break;
        }
        else if(z != -1){
            console.log("Already on the list.\n");
        }
        else{
            
            let a = x.toUpperCase();
            uppermovies.push(a);
            y.push(x);
            console.log("Item has been added.\n");
        }
    }
    return y;
}


//movie casing gives the movies a movie casing style
function moviecase(movie){
    let words = movie.toLowerCase().split(" ");
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].slice(0, 1).toUpperCase() +
        words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
}

//removes Movies
function remove(){
    let x = 0;
    while(x != "done"){
        console.log("If you are finished type Done.")
        x = prompt("What Movie do you want to remove: ").toLowerCase();
        x = moviecase(x)
        let z = movies.indexOf(x);
        if(x=== "Done" || x === "done"){
            break;
        }
        else if(z != -1){
            movies.splice(z, 1);
            uppermovies.splice(z, 1);
            console.log("Movie has been Removed.\n");
        }
        else{
            console.log("Movie does not Exist.\n");
        }
    }
}


//Checks if a movie is on the list
function search(){
    let x = 0;
     while(x != "Done"){
        console.log("If you are finished type Done.")
        let x = prompt("What movie are you looking for? ").toLowerCase();
        let a = movies.indexOf(x)
        if(x === "done"){
            break
        }
        else if(a === -1){
            console.log("Not on the list\n");
        }
        else{
            console.log("Found\n")
        }
    }
}

//Prints all the Movies
function print(){
    for(var i = 0; i <= movies.length - 1; i++){
        console.log(i + 1 + ". " + movies[i]);
    }
}

function moviecount(){
    let i = 0;
    for(let number of movies){
        i ++;
    }
    console.log("\nYou currently have " + i + " Movies\n")
}

//Prints all the Movies in Upper case
function printupper(){
    for(var i = 0; i <= uppermovies.length - 1; i++){
        console.log(i + 1 + ". " + uppermovies[i]);
    }
}

function select(){
    for(a = 0; a == NaN || a > 7 || a <= 0; a){
        console.log("Please Select an Option - \n\tPress 1 to Add Movies \n\tPress 2 to Remove Movies \n\tPress 3 to Search for Movies \n\tPress 4 to Print all Movies\n\tPress 5 to Count all Movies\n\tPress 6 to Display Movies in Uppercase\n\tPress 7 to Quit");
        a = Number(prompt("What's your choice: "));
        if(a > 7 || Number.isNaN(a) || a <= 0){
            console.log("Invailed input. Please try again.\n")
        }
    }
    return a;
}