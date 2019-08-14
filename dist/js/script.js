const myEmail = "saleem@abushelbayeh.com";
var counter = 0;
// function showEmail() {
//     var newPara = document.createElement("p");
//     var newContent = document.createTextNode(myEmail);

//     newPara.appendChild(newContent);

//     document.body.appendChild(newPara);
// }
// document.getElementById("showEmailButton").onclick = showEmail();

function showEmail() {
    //document.getElementById("myEmail").style.display = "block";
    if (counter === 0) {
        const newPara = document.getElementById("myEmail");
        var newContent = document.createTextNode(myEmail);

        newPara.appendChild(newContent);
        counter++;
    }
    
}



