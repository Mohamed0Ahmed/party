/// <reference types="../@types/jquery" />
"use strict";

$(".menu").on("click", function () {
   $(".nav-menu").animate({ width: "250px" }, 300);
   $(".layer.home").animate({ marginLeft: "250px" }, 300);
});

$(".close").on("click", function () {
   $(".nav-menu").animate({ width: "0px" }, 300);
   $(".layer.home").animate({ marginLeft: "0px" }, 300);
});

$(".singer").on("click", function (e) {
   $(".lorem").not($(this).next()).slideUp(500);
   $(this).next().slideToggle(500);
});

$(".nav-menu a ").on("click", function () {
   let sectionId = $(this).attr("href");
   let sectionOffest = $(sectionId).offset().top;
   $("body , html").animate({ scrollTop: sectionOffest }, 2000);
});

window.onload = function () {
   counter("25 october 2023 ");
};

function counter(countTo) {
   let date = new Date(countTo);
   date = date.getTime() / 1000;

   let now = new Date();
   now = now.getTime() / 1000;
   let timeBetween = date - now;

   let days = Math.floor(timeBetween / (24 * 60 * 60));
   let hours = Math.floor((timeBetween - days * (24 * 60 * 60)) / 3600);
   let mins = Math.floor(
      (timeBetween - days * (24 * 60 * 60) - hours * 3600) / 60
   );
   let secs = Math.floor(
      timeBetween - days * (24 * 60 * 60) - hours * 3600 - mins * 60
   );
   $("#count .days").html(`${days} D`);
   $("#count .hours").html(`${hours} h`);
   $("#count .minutes").html(`${mins} m`);
   $("#count .seconds").html(`${secs} s`);

   setInterval(function () {
      counter(countTo);
   }, 1000);
}

let maxLength = 100;
$("textarea").keyup(function () {
   let length = $(this).val().length;
   let leftWords = maxLength - length;
   if (leftWords <= 0) {
      $(".number").text("your available character finished");
   } else {
      $(".number").text(leftWords);
   }
});
