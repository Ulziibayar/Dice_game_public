// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг - 0, 2-р тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 1;
// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч

var scores = [0, 0];
// Идэвхитэй тоглогчийн ээлжийн цуглуулж буй оноо
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгатай байна.
// var diceNumber = Math.floor(Math.random() * 6) + 1;

// Програм эхлэх
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// queryselector-oor olson elementee huwisagchidzarlaj bna.

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Shoog shideh
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
// console.log("Шоо :" + diceNumber);

// roll-dice tovchiig DOM-s avah
