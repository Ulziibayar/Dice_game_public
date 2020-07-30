//Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;

// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
var diceDom = document.querySelector(".dice");

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// Тоглоомыг эхлүүлнэ.
initGame();

// Тоглоом эхлэхэд бэлтгэнэ.

// function initGame() {
//   isNewGame = true;
//   // Програм эхлэхэд бэлтгэе
//   document.getElementById("score-0").textContent = "0";
//   document.getElementById("score-1").textContent = "0";
//   document.getElementById("current-0").textContent = "0";
//   document.getElementById("current-1").textContent = "0";
//   // document.querySelector(".player-name").textContent = "Winner";
//   globalThis.diceDom = document.querySelector(".dice");
//   diceDom.style.display = "none";
//   // Шоог шидэх эвент листенер
// }
function initGame() {
  // Тоглоом эхэллээ гэдэг төлөвт оруулна.
  isNewGame = true;

  // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

  // Програм эхлэхэд бэлтгэе
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", initGame);
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
    //   1-6 хүртэлх санамсаргүй 1 тоог гаргана.
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // Шооны зургийг еб дээр гаргаж ирнэ.
    diceDom.style.display = "block";
    //   Буусан тоонд харгалзах зургийг веб дээр гаргаж ирнэ.
    diceDom.src = "dice-" + diceNumber + ".png";

    //   Тоглогчийн ээлжийг солих
    if (diceNumber !== 1) {
      roundScore += diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //     // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
      //     // 1 буусан тул тоглогчийн ээлжийг солино.
      changePlayer();

      // Мааааашшшш чухаллллллл !!!!!!!!
      // document.querySelector(".player-0-panel").classList.remove("active");
      // document.querySelector(".player-1-panel").classList.add("active");
      // Шоог түр алга болгох
    }
  } else {
    alert("Тоглоом дууслаа\n" + "NEW GAME товчийг дарж дахин эхлүүлнэ үү");
  }
});

//  Тоог хадгалах хэсэг Hold button event listener

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame === true) {
    // Уг тоглогчийн цуглуулсан оноог глобаль оноон дээр нь нэмж өгнө.
    // Ээлжийн оноог 0 болгоно.
    // Тоглогчийн ээлжийг солино.

    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // Тоглогч хожсон эсэхийг шалгах
    if (scores[activePlayer] > 30) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "winner!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // document.getElementById("current-" + activePlayer).textContent = roundScore;

      changePlayer();
    }
  }
});

function changePlayer() {
  document.getElementById("current-" + activePlayer).textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
  roundScore = 0;
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}
