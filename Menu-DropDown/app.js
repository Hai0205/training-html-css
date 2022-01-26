$(document).ready(function () {
    $(".sub-btn").click(function () {
      $(this).next(".sub-menu").slideToggle();
    });
    $(".more-btn").click(function () {
        $(this).next(".more-menu").slideToggle();
      });
    var menu= document.querySelector(".menu");
    var menuBtn = document.querySelector(".menu-btn");
    var closeBtn = document.querySelector(".btn-close");
    menuBtn.addEventListener("click",()=>{
      menu.classList.add("active");
    })
    closeBtn.addEventListener("click",()=>{
      menu.classList.remove("active");
    })
  });