
//Creacion de arrays

let like = document.querySelector(".fa-thumbs-up");
let unlike = document.querySelector(".fa-thumbs-down");
let indexes = document.querySelectorAll(".index");
console.log(indexes);

// Feedback
// Funcionalidad en desarrollo, AJAX y PHP en estudio.

function likeCounter(){
    if (unlike.classList.contains("fas")) {
        unlike.classList.remove("fas");
        unlike.classList.add("far");
        like.classList.remove("far");
        like.classList.add("fas");
        document.getElementById("appear").innerHTML = "<br/><b>Gracias por tu feedback</b>"
    }

    else if (like.classList.contains("fas")) {
        like.classList.remove("fas");
        like.classList.add("far");
        document.getElementById("appear").innerHTML = "<br/><br/>"
    }

    else {
        like.classList.remove("far");
        like.classList.add("fas");
        document.getElementById("appear").innerHTML = "<br/><b>Gracias por tu feedback</b>"
    }
}

function unlikeCounter(){
    if (like.classList.contains("fas")) {
        like.classList.remove("fas");
        like.classList.add("far");
        unlike.classList.remove("far");
        unlike.classList.add("fas");
        document.getElementById("appear").innerHTML = "<br/><b>Gracias por tu feedback</b>"
    }

    else if (unlike.classList.contains("fas")) {
        unlike.classList.remove("fas");
        unlike.classList.add("far");
        document.getElementById("appear").innerHTML = "<br/><br/>"
    }

    else {
        unlike.classList.remove("far");
        unlike.classList.add("fas");
        document.getElementById("appear").innerHTML = "<br/><b>Gracias por tu feedback</b>"
    }
}

// Animacion de salida

function exit(link){
    var link;
    indexes.forEach(function(index){
        index.classList.remove("animated");
        index.classList.remove("fadeIn");
        index.classList.add("animated");
        index.classList.add("fadeOut");
        setTimeout(() => {
            location.href=link;
        }, 500);
    })
}

