/* =========================================
   MONDO FÂ — MODE APPRENDRE
   AUDIO FR (Text-to-Speech)
========================================= */

(function () {

  const emojiEl  = document.getElementById("emoji");
  const nativeEl = document.getElementById("native");
  const frEl     = document.getElementById("fr");
  const speakBtn = document.getElementById("speak-fr");

  const lang = APP_STATE.language;
  const cat  = APP_STATE.category;

  const dataList = DATA?.[lang]?.[cat];
  if (!Array.isArray(dataList) || dataList.length === 0) {
    frEl.innerText = "Aucune donnée disponible";
    return;
  }

  let index = APP_STATE.index || 0;

  /* ========= AUDIO FR ========= */
  function speakFrench(text) {
    if (!("speechSynthesis" in window)) {
      alert("Audio non supporté sur ce téléphone");
      return;
    }

    // stop toute lecture en cours
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = 0.9;
    utterance.pitch = 1;

    // attendre que les voix soient prêtes (ANDROID FIX)
    const voices = speechSynthesis.getVoices();
    const frVoice = voices.find(v => v.lang.startsWith("fr"));

    if (frVoice) {
      utterance.voice = frVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  /* ========= AFFICHAGE ========= */
  function showItem() {
    const item = dataList[index];

    emojiEl.innerText  = item.emoji || "";
    nativeEl.innerText = item.native || "";
    frEl.innerText     = item.fr || "";

    APP_STATE.index = index;
    saveState();
  }

  /* ========= BOUTON AUDIO ========= */
  speakBtn.onclick = function () {
    const text = frEl.innerText;
    if (text) speakFrench(text);
  };

  /* ========= SUIVANT ========= */
  window.nextItem = function () {
    index++;
    if (index >= dataList.length) index = 0;
    showItem();
  };

  showItem();

})();