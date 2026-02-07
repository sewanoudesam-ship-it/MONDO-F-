/* =========================================
   MONDO FÂ — STATE GLOBAL (STABLE)
   Rôle : gérer l’état de navigation et du jeu
========================================= */

/* État par défaut */
const DEFAULT_STATE = {
  language: null,   // baoule, bete, dioula, agni, senoufo
  category: null,   // corps, ecole, maison, nombres
  mode: null,       // apprendre | jouer
  index: 0,         // question actuelle
  score: 0          // score du joueur
};

/* Charger l’état depuis le stockage */
function loadState() {
  try {
    const saved = localStorage.getItem("MONDO_FA_STATE");
    if (!saved) return { ...DEFAULT_STATE };

    const parsed = JSON.parse(saved);
    return { ...DEFAULT_STATE, ...parsed };
  } catch (e) {
    console.warn("State corrompu, réinitialisation");
    return { ...DEFAULT_STATE };
  }
}

/* Sauvegarder l’état */
function saveState() {
  try {
    localStorage.setItem(
      "MONDO_FA_STATE",
      JSON.stringify(window.APP_STATE)
    );
  } catch (e) {
    console.error("Impossible de sauvegarder le state");
  }
}

/* Réinitialiser le jeu */
function resetGame() {
  window.APP_STATE.index = 0;
  window.APP_STATE.score = 0;
  saveState();
}

/* Exposition globale */
window.APP_STATE = loadState();
window.saveState = saveState;
window.resetGame = resetGame;