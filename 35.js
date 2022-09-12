
function first(){
    document.getElementById("heading1").innerHTML="This is the heading1 tag";
}

function second(){
    document.getElementById("heading1").innerHTML="This is the heading2 tag";
}


function Pragraph(){
    document.getElementById("demo").innerHTML= "You clicked the text" ;
}


document.getElementById("demo1").addEventListener("click",myfunction);


function myfunction(){
    document.getElementById("demo1").innerHTML = "YOU CLICKED ME";
}

// first();