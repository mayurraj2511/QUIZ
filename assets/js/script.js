const quesAns = [
    [ "What does HTML stand for?", " Hyperlinks and Text Markup Language " ," Hyper Text Markup Language " , "Home Tool Markup Language  " , " None of the above  ", "2"],
    [ "What does CSS stand for? ", "Creative Style Sheets", " Colorful Style Sheets", "Cascading Style Sheets" ," Computer Style Sheets", "3"],
    [ "Which organization defines Web standards?", " Apple Inc. ", "  IBM Corporation ", "  World Wide Web Consortium "," Microsoft Corporation ","3"],
    [ "Who is the main author of the HTML?" , "Brendan Eich" , "Tim Berners-Lee" , "Web developer" , "Google Inc" , "2" ] ,
    [ "A page designed in HTML is called _____.", "Application", " Cover page", "Front-end", "Web Page", "4"]
]   

var x = 0 ;
let score = 0;
let ra = 0;
let wa = 0;

function  printQA () {
    document.getElementById("q").innerHTML = quesAns [x][0];
    document.getElementById("a1").innerHTML = quesAns [x][1];
    document.getElementById("a2").innerHTML = quesAns [x][2];
    document.getElementById("a3").innerHTML = quesAns [x][3];
    document.getElementById("a4").innerHTML = quesAns [x][4];
}
printQA () ;

function submitAns (answ) {
    
    if ( answ == quesAns[x][5]) {
        score = score +5 ;
        ra++;
    } else  {
        score = score -2 ;
        wa++;
    }

    ++x; 
    if ( quesAns.length > x )
        printQA ();

    if (quesAns.length == x ) {
        document.getElementById("Quizmain").innerHTML = `
        <h1>Quiz End</h1>
        <h2>Score : ${ score} </h2>
        <p>Right Answer : ${ra}</p>
        <p>Wrong Answer : ${wa}</p>
        `

    }
}
