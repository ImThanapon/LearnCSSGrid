
$(document).ready(function(){
    $('.hamburger').on("click", function(){
        $('.nav-grid').toggleClass("open");
    });
});
//ไม่สามารถเรียกใช้ toggleClass ได้ !!!!!

function myFunction(x) {
    x.classList.toggle("change");
}