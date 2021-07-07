

let modal = document.getElementById('myModal');


let btn = document.getElementById("myBtn");
let btn1 = document.getElementById("myBtn1");


let span = document.getElementsByClassName("cls")[0];
let span1 = document.getElementsByClassName("cls1")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
span1.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(document).on('ready', function() {
     
    $('.center').slick({
        dots: true,
infinite: true,
centerMode: true,
slidesToShow: 3,
slidesToScroll: 3
});
});