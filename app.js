// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг - 0, 2-р тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 1;
// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч

var scores = [0, 0];
// Идэвхитэй тоглогчийн ээлжийн цуглуулж буй оноо
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгатай байна.
var dice = Math.floor(Math.random() * 6) + 1;
/* <div class="player-score" id="score-0">43</div> */
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

// roll-dice tovchiig DOM-s avah

console.log("Шоо :" + dice);
