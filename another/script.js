// const plusBtn = document.querySelector(".plus-sign");
// const minusBtn = document.querySelector(".minus-sign");
// const texts = document.querySelectorAll(".text");
// const question = document.querySelector(".question");

// plusBtn.forEach((plusBtn, index) => {
//     plusBtn.addEventListener("click", function () {
//         texts[index].style.display = "block";
//         plusBtn.style.display = "none";
//         minusBtn.style.display = "block";
// })
// });

// minusBtn.forEach((minusBtn, index) => {
//     minusBtn.addEventListener("click", function () {
//         texts[index].style.display = "none";
//         minusBtn.style.display = "none";
//         plusBtn.style.display = "block";
// })
//  });

// corrected
// Get all elements with class "plus-sign" and "minus-sign"
const plusBtns = document.querySelectorAll(".plus-sign");
const minusBtns = document.querySelectorAll(".minus-sign");
const texts = document.querySelectorAll(".text");
const questions = document.querySelectorAll(".question");

// Add event listeners to each plus button
plusBtns.forEach((plusBtn, index) => {
  plusBtn.addEventListener("click", function () {
    // Show the text and toggle button visibility
    texts[index].style.display = "block";
    plusBtn.style.display = "none";
    minusBtns[index].style.display = "inline-block";
  });
});

// Add event listeners to each minus button
minusBtns.forEach((minusBtn, index) => {
  minusBtn.addEventListener("click", function () {
    // Hide the text and toggle button visibility
    texts[index].style.display = "none";
    minusBtn.style.display = "none";
    plusBtns[index].style.display = "inline-block";
  });
});
