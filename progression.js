/* ================================
   MONDO FÂ — TABLEAU DE PROGRESSION
================================ */

const tableBody = document.getElementById("progress-table");

// Parcours du localStorage
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);

  // On ne lit que les clés MONDO FÂ
  if (!key.startsWith("mondofa_progress_")) continue;

  const data = JSON.parse(localStorage.getItem(key));

  if (!data) continue;

  // Clé : mondofa_progress_categorie_langue
  const parts = key.replace("mondofa_progress_", "").split("_");
  const category = parts[0];
  const language = parts[1];

  const answered = data.currentIndex;
  const score = data.score;
  const successRate = answered > 0
    ? Math.round((score / answered) * 100) + "%"
    : "0%";

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${language}</td>
    <td>${category}</td>
    <td>${score}</td>
    <td>${answered}</td>
    <td>${successRate}</td>
    <td>${new Date().toLocaleDateString()}</td>
  `;

  tableBody.appendChild(row);
}

// Si aucune donnée
if (tableBody.children.length === 0) {
  tableBody.innerHTML = `
    <tr>
      <td colspan="6">Aucune progression enregistrée</td>
    </tr>
  `;
}