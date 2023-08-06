// Your code goes here
//Adds an event listener to the document objecthe event being listened to is "DOMContentLoaded," 
//which fires when the HTML document has been fully loaded and parsed. 
//Once this event occurs, the provided function will be executed.
document.addEventListener("DOMContentLoaded", function () {
    updateDOM()
});


//makes function
//grabs the Id which is text
//replaces text with new text
function updateDOM() {
    document.getElementById("text")
        .innerHTML = "This is really cool!";
}