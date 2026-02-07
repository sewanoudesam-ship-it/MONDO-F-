/* =========================================
   MONDO FÂ — MODE JOUER
   PHASE 2 : Progression + Pourcentage
========================================= */

(function () {

  const questionEl = document.getElementById("question");
  const choicesEl  = document.getElementById("choices");
  const scoreEl    = document.getElementById("score");

  const percentEl  = document.getElementById("percent");

  const progressText = document.getElementById("progress-text");
  const progressFill = document.getElementById("progress-fill");

  const lang = APP_STATE.language;
  const cat  = APP_STATE.category;

  const dataList = DATA?.[lang]?.[cat];
  if (!Array.isArray(dataList) || dataList.length === 0) {
    questionEl.innerText = "Aucune donnée disponible";
    return;
  }

  const total = dataList.length;

  let index = APP_STATE.index || 0;
  let score = APP_STATE.score || 0;
  let answered = index; // 🔥 nombre de questions déjà répondues

  function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  function updateProgress() {
    progressText.innerText = `Question ${Math.min(index + 1, total)} / ${total}`;
    progressFill.style.width = `${(index / total) * 100}%`;
  }

  function updatePercent() {
    if (answered === 0) {
      percentEl.innerText = "";
      return;
    }

    const percent = Math.round((score / answered) * 100);
    percentEl.innerText = `Réussite : ${percent}%`;

    if (percent >= 70) {
      percentEl.style.color = "#2e7d32"; // vert
    } else if (percent >= 40) {
      percentEl.style.color = "#f9a825"; // orange
    } else {
      percentEl.style.color = "#c62828"; // rouge
    }
  }

  function showQuestion() {
    choicesEl.innerHTML = "";

   /* ===== FIN DU JEU ===== */
if (index >= total) {
  progressText.innerText = "Jeu terminé 🎉";
  progressFill.style.width = "100%";

  choicesEl.innerHTML = "";
  questionEl.innerText = "🎉 Bravo !";
  questionEl.className = "end-screen";

  const percent = total === 0 ? 0 : Math.round((score / total) * 100);

  const scoreDiv = document.createElement("div");
  scoreDiv.className = "end-score";
  scoreDiv.innerText = `Score : ${score} / ${total}`;

  const percentDiv = document.createElement("div");
  percentDiv.className = "end-percent";
  percentDiv.innerText = `Réussite : ${percent}%`;

  if (percent >= 70) {
    percentDiv.style.color = "#2e7d32"; // vert
  } else if (percent >= 40) {
    percentDiv.style.color = "#f9a825"; // orange
  } else {
    percentDiv.style.color = "#c62828"; // rouge
  }

  const catBtn = document.createElement("button");
  catBtn.className = "choice-btn back";
  catBtn.innerText = "⬅️ Catégories";
  catBtn.onclick = quitGame;

  choicesEl.appendChild(scoreDiv);
  choicesEl.appendChild(percentDiv);
  choicesEl.appendChild(catBtn);

  return;
}
    updateProgress();
    updatePercent();

    const item = dataList[index];
    questionEl.innerText = `${item.emoji} ${item.native}`;

    const correct = item.fr;
    const others = dataList
      .filter((_, i) => i !== index)
      .map(x => x.fr);

    const choices = shuffle([
      correct,
      ...shuffle(others).slice(0, 2)
    ]);

    choices.forEach(text => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.innerText = text;

      btn.onclick = () => {
        const allBtns = document.querySelectorAll(".choice-btn");
        allBtns.forEach(b => b.classList.add("disabled"));

        answered++;

        if (text === correct) {
          btn.classList.add("correct");
          score++;
        } else {
          btn.classList.add("wrong");
          allBtns.forEach(b => {
            if (b.innerText === correct) b.classList.add("correct");
          });
        }

        setTimeout(() => {
          index++;

          APP_STATE.index = index;
          APP_STATE.score = score;
          saveState();

          showQuestion();
        }, 800);
      };

      choicesEl.appendChild(btn);
    });

    scoreEl.innerText = `Score : ${score}`;
  }

  window.quitGame = function () {
    resetGame();
    APP_STATE.mode = null;
    saveState();
    window.location.href = "categories.html";
  };

  showQuestion();

})();