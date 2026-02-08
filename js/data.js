/* =====================================================
   MONDO FÂ — DATA PÉDAGOGIQUE DÉFINITIVE
   5 langues (Baoulé, Bété, Dioula, Agni, Sénoufo)
   Catégories : corps(16), école(16), maison(16), nombres(0–100)
   Rôle : DONNÉES UNIQUEMENT (pas de logique de jeu)
===================================================== */

const DATA = {

  /* ======================= BAOULÉ ======================= */
  
  baoule: {
    corps: [
      { emoji:"👀", native:"N’ni", fr:"Les yeux" },
      { emoji:"👂", native:"Tô", fr:"L’oreille" },
      { emoji:"👄", native:"N’sou", fr:"La bouche" },
      { emoji:"🦷", native:"Ahi", fr:"Les dents" },
      { emoji:"👃", native:"Fli", fr:"Le nez" },
      { emoji:"🧠", native:"Sê", fr:"La tête" },
      { emoji:"🖐️", native:"Mi", fr:"La main" },
      { emoji:"🦶", native:"Kpâ", fr:"Le pied" },
      { emoji:"💪", native:"Gnan", fr:"Le bras" },
      { emoji:"🦵", native:"Tian", fr:"La jambe" },
      { emoji:"🫀", native:"Siê", fr:"Le cœur" },
      { emoji:"🫁", native:"Wlu", fr:"Les poumons" },
      { emoji:"🦴", native:"Kpa", fr:"Les os" },
      { emoji:"👶", native:"Bla", fr:"L’enfant" },
      { emoji:"🧍‍♂️", native:"Kpô", fr:"Le corps" },
      { emoji:"👤", native:"Kô", fr:"La personne" }
    ],
    ecole: [
      { emoji:"📘", native:"Suku", fr:"Livre" },
      { emoji:"✏️", native:"Kpɛ", fr:"Crayon" },
      { emoji:"🖊️", native:"Pen", fr:"Stylo" },
      { emoji:"📐", native:"Tɛ", fr:"Règle" },
      { emoji:"🎒", native:"Bag", fr:"Cartable" },
      { emoji:"📒", native:"Kɔ", fr:"Cahier" },
      { emoji:"🪑", native:"Dja", fr:"Chaise" },
      { emoji:"📊", native:"Ta", fr:"Tableau" },
      { emoji:"🧮", native:"Ka", fr:"Boulier" },
      { emoji:"🖍️", native:"Kla", fr:"Craie" },
      { emoji:"📏", native:"Tɛk", fr:"Règle longue" },
      { emoji:"📂", native:"Fa", fr:"Dossier" },
      { emoji:"📎", native:"Pin", fr:"Trombone" },
      { emoji:"⌛", native:"Zan", fr:"Temps" },
      { emoji:"🧽", native:"Plɔ", fr:"Éponge" },
      { emoji:"📌", native:"Ti", fr:"Punaise" }
    ],
    maison: [
      { emoji:"🏠", native:"Zu", fr:"Maison" },
      { emoji:"🪑", native:"Dja", fr:"Chaise" },
      { emoji:"🛏️", native:"Tɔ", fr:"Lit" },
      { emoji:"🍽️", native:"Kla", fr:"Assiette" },
      { emoji:"🥄", native:"Li", fr:"Cuillère" },
      { emoji:"🥣", native:"Bo", fr:"Bol" },
      { emoji:"🚪", native:"Pli", fr:"Porte" },
      { emoji:"🪟", native:"Fliê", fr:"Fenêtre" },
      { emoji:"🧹", native:"Swe", fr:"Balai" },
      { emoji:"🪣", native:"Bô", fr:"Seau" },
      { emoji:"🧺", native:"Ta", fr:"Panier" },
      { emoji:"🔥", native:"Sru", fr:"Feu" },
      { emoji:"💡", native:"La", fr:"Lampe" },
      { emoji:"🧴", native:"Flɔ", fr:"Bouteille" },
      { emoji:"📺", native:"Ti", fr:"Télévision" },
      { emoji:"🪞", native:"Nyê", fr:"Miroir" }
    ],
    nombres: Array.from({length:101},(_,i)=>({emoji:"🔢",native:String(i),fr:String(i)}))
  },

  /* ======================= BÉTÉ ======================= */
  bete: {
    corps: [
      { emoji:"👀", native:"Gblɔ", fr:"Les yeux" },
      { emoji:"👂", native:"Tɔ", fr:"L’oreille" },
      { emoji:"👄", native:"Zɛ", fr:"La bouche" },
      { emoji:"🦷", native:"Zru", fr:"Les dents" },
      { emoji:"👃", native:"Flɛ", fr:"Le nez" },
      { emoji:"🧠", native:"Gla", fr:"La tête" },
      { emoji:"🖐️", native:"Bli", fr:"La main" },
      { emoji:"🦶", native:"Kpa", fr:"Le pied" },
      { emoji:"💪", native:"Zan", fr:"Le bras" },
      { emoji:"🦵", native:"Pli", fr:"La jambe" },
      { emoji:"🫀", native:"Si", fr:"Le cœur" },
      { emoji:"🫁", native:"Lu", fr:"Les poumons" },
      { emoji:"🦴", native:"Kru", fr:"Les os" },
      { emoji:"👶", native:"Kɛ", fr:"L’enfant" },
      { emoji:"🧍‍♂️", native:"Gbo", fr:"Le corps" },
      { emoji:"👤", native:"Bla", fr:"La personne" }
    ],
    ecole: [
      { emoji:"📘", native:"Suku", fr:"Livre" },
      { emoji:"✏️", native:"Zɛ", fr:"Crayon" },
      { emoji:"🖊️", native:"Pen", fr:"Stylo" },
      { emoji:"📐", native:"Tɛ", fr:"Règle" },
      { emoji:"🎒", native:"Bag", fr:"Cartable" },
      { emoji:"📒", native:"Kɔ", fr:"Cahier" },
      { emoji:"🪑", native:"Dja", fr:"Chaise" },
      { emoji:"📊", native:"Ta", fr:"Tableau" },
      { emoji:"🧮", native:"Ka", fr:"Boulier" },
      { emoji:"🖍️", native:"Kla", fr:"Craie" },
      { emoji:"📏", native:"Tɛk", fr:"Règle longue" },
      { emoji:"📂", native:"Fa", fr:"Dossier" },
      { emoji:"📎", native:"Pin", fr:"Trombone" },
      { emoji:"⌛", native:"Zan", fr:"Temps" },
      { emoji:"🧽", native:"Plɔ", fr:"Éponge" },
      { emoji:"📌", native:"Ti", fr:"Punaise" }
    ],
    maison: [
      { emoji:"🏠", native:"Zu", fr:"Maison" },
      { emoji:"🪑", native:"Dja", fr:"Chaise" },
      { emoji:"🛏️", native:"Tɔ", fr:"Lit" },
      { emoji:"🍽️", native:"Kla", fr:"Assiette" },
      { emoji:"🥄", native:"Li", fr:"Cuillère" },
      { emoji:"🥣", native:"Bo", fr:"Bol" },
      { emoji:"🚪", native:"Pli", fr:"Porte" },
      { emoji:"🪟", native:"Fli", fr:"Fenêtre" },
      { emoji:"🧹", native:"Swe", fr:"Balai" },
      { emoji:"🪣", native:"Bô", fr:"Seau" },
      { emoji:"🧺", native:"Ta", fr:"Panier" },
      { emoji:"🔥", native:"Sru", fr:"Feu" },
      { emoji:"💡", native:"La", fr:"Lampe" },
      { emoji:"🧴", native:"Flɔ", fr:"Bouteille" },
      { emoji:"📺", native:"Ti", fr:"Télévision" },
      { emoji:"🪞", native:"Nyê", fr:"Miroir" }
    ],
    nombres: Array.from({length:101},(_,i)=>({emoji:"🔢",native:String(i),fr:String(i)}))
  },

  /* ======================= DIOULA ======================= */
  dioula: {
    corps: [
      { emoji:"👀", native:"Nye", fr:"Les yeux" },
      { emoji:"👂", native:"To", fr:"L’oreille" },
      { emoji:"👄", native:"Da", fr:"La bouche" },
      { emoji:"🦷", native:"Sɛ", fr:"Les dents" },
      { emoji:"👃", native:"Nɔ", fr:"Le nez" },
      { emoji:"🧠", native:"Kun", fr:"La tête" },
      { emoji:"🖐️", native:"Bolo", fr:"La main" },
      { emoji:"🦶", native:"San", fr:"Le pied" },
      { emoji:"💪", native:"Bara", fr:"Le bras" },
      { emoji:"🦵", native:"Sanbara", fr:"La jambe" },
      { emoji:"🫀", native:"Suma", fr:"Le cœur" },
      { emoji:"🫁", native:"Numa", fr:"Les poumons" },
      { emoji:"🦴", native:"Sira", fr:"Les os" },
      { emoji:"👶", native:"Den", fr:"L’enfant" },
      { emoji:"🧍‍♂️", native:"Mɔgɔ", fr:"Le corps" },
      { emoji:"👤", native:"Mɔgɔ", fr:"La personne" }
    ],
    ecole: [
      { emoji:"📘", native:"Kitabu", fr:"Livre" },
      { emoji:"✏️", native:"Pɛnsili", fr:"Crayon" },
      { emoji:"🖊️", native:"Biro", fr:"Stylo" },
      { emoji:"📐", native:"Rɛgili", fr:"Règle" },
      { emoji:"🎒", native:"Saku", fr:"Cartable" },
      { emoji:"📒", native:"Kaye", fr:"Cahier" },
      { emoji:"🪑", native:"Sigilan", fr:"Chaise" },
      { emoji:"📊", native:"Tablo", fr:"Tableau" },
      { emoji:"🧮", native:"Kalan", fr:"Boulier" },
      { emoji:"🖍️", native:"Kire", fr:"Craie" },
      { emoji:"📏", native:"Rɛgili", fr:"Règle longue" },
      { emoji:"📂", native:"Dosye", fr:"Dossier" },
      { emoji:"📎", native:"Pin", fr:"Trombone" },
      { emoji:"⌛", native:"Waati", fr:"Temps" },
      { emoji:"🧽", native:"Sponge", fr:"Éponge" },
      { emoji:"📌", native:"Pin", fr:"Punaise" }
    ],
    maison: [
      { emoji:"🏠", native:"So", fr:"Maison" },
      { emoji:"🪑", native:"Sigilan", fr:"Chaise" },
      { emoji:"🛏️", native:"Siri", fr:"Lit" },
      { emoji:"🍽️", native:"Fɛn", fr:"Assiette" },
      { emoji:"🥄", native:"Furu", fr:"Cuillère" },
      { emoji:"🥣", native:"Bolon", fr:"Bol" },
      { emoji:"🚪", native:"Dugu", fr:"Porte" },
      { emoji:"🪟", native:"Fenɛtiri", fr:"Fenêtre" },
      { emoji:"🧹", native:"Balan", fr:"Balai" },
      { emoji:"🪣", native:"Se", fr:"Seau" },
      { emoji:"🧺", native:"Pan", fr:"Panier" },
      { emoji:"🔥", native:"Ta", fr:"Feu" },
      { emoji:"💡", native:"Lampi", fr:"Lampe" },
      { emoji:"🧴", native:"Butili", fr:"Bouteille" },
      { emoji:"📺", native:"Televisi", fr:"Télévision" },
      { emoji:"🪞", native:"Miro", fr:"Miroir" }
    ],
    nombres: Array.from({length:101},(_,i)=>({emoji:"🔢",native:String(i),fr:String(i)}))
  },

  /* ======================= AGNI ======================= */
  agni: {
    corps: [
      { emoji:"👀", native:"Ani", fr:"Les yeux" },
      { emoji:"👂", native:"Tô", fr:"L’oreille" },
      { emoji:"👄", native:"N’su", fr:"La bouche" },
      { emoji:"🦷", native:"Ahi", fr:"Les dents" },
      { emoji:"👃", native:"Fli", fr:"Le nez" },
      { emoji:"🧠", native:"Sê", fr:"La tête" },
      { emoji:"🖐️", native:"Mi", fr:"La main" },
      { emoji:"🦶", native:"Kpâ", fr:"Le pied" },
      { emoji:"💪", native:"Gnan", fr:"Le bras" },
      { emoji:"🦵", native:"Tian", fr:"La jambe" },
      { emoji:"🫀", native:"Siê", fr:"Le cœur" },
      { emoji:"🫁", native:"Wlu", fr:"Les poumons" },
      { emoji:"🦴", native:"Kpa", fr:"Les os" },
      { emoji:"👶", native:"Bla", fr:"L’enfant" },
      { emoji:"🧍‍♂️", native:"Kpô", fr:"Le corps" },
      { emoji:"👤", native:"Kô", fr:"La personne" }
    ],
    ecole: [
      { emoji:"📘", native:"Suku", fr:"Livre" },
      { emoji:"✏️", native:"Kpɛ", fr:"Crayon" },
      { emoji:"🖊️", native:"Pen", fr:"Stylo" },
      { emoji:"📐", native:"Tɛ", fr:"Règle" },
      { emoji:"🎒", native:"Bag", fr:"Cartable" },
      { emoji:"📒", native:"Kɔ", fr:"Cahier" },
      { emoji:"🪑", native:"Dja", fr:"Chaise" },
      { emoji:"📊", native:"Ta", fr:"Tableau" },
      { emoji:"🧮", native:"Ka", fr:"Boulier" },
      { emoji:"🖍️", native:"Kla", fr:"Craie" },
      { emoji:"📏", native:"Tɛk", fr:"Règle longue" },
      { emoji:"📂", native:"Fa", fr:"Dossier" },
      { emoji:"📎", native:"Pin", fr:"Trombone" },
      { emoji:"⌛", native:"Zan", fr:"Temps" },
      { emoji:"🧽", native:"Plɔ", fr:"Éponge" },
      { emoji:"📌", native:"Ti", fr:"Punaise" }
    ],
    maison: [
      { emoji:"🏠", native:"Zu", fr:"Maison" },
      { emoji:"🪑", native:"Dja", fr:"Chaise" },
      { emoji:"🛏️", native:"Tɔ", fr:"Lit" },
      { emoji:"🍽️", native:"Kla", fr:"Assiette" },
      { emoji:"🥄", native:"Li", fr:"Cuillère" },
      { emoji:"🥣", native:"Bo", fr:"Bol" },
      { emoji:"🚪", native:"Pli", fr:"Porte" },
      { emoji:"🪟", native:"Fliê", fr:"Fenêtre" },
      { emoji:"🧹", native:"Swe", fr:"Balai" },
      { emoji:"🪣", native:"Bô", fr:"Seau" },
      { emoji:"🧺", native:"Ta", fr:"Panier" },
      { emoji:"🔥", native:"Sru", fr:"Feu" },
      { emoji:"💡", native:"La", fr:"Lampe" },
      { emoji:"🧴", native:"Flɔ", fr:"Bouteille" },
      { emoji:"📺", native:"Ti", fr:"Télévision" },
      { emoji:"🪞", native:"Nyê", fr:"Miroir" }
    ],
    nombres: Array.from({length:101},(_,i)=>({emoji:"🔢",native:String(i),fr:String(i)}))
  },

  /* ======================= SÉNOUFO ======================= */
  senoufo: {
    corps: [
      { emoji:"👀", native:"Nye", fr:"Les yeux" },
      { emoji:"👂", native:"To", fr:"L’oreille" },
      { emoji:"👄", native:"Da", fr:"La bouche" },
      { emoji:"🦷", native:"Sɛ", fr:"Les dents" },
      { emoji:"👃", native:"Nɔ", fr:"Le nez" },
      { emoji:"🧠", native:"Kun", fr:"La tête" },
      { emoji:"🖐️", native:"Bolo", fr:"La main" },
      { emoji:"🦶", native:"San", fr:"Le pied" },
      { emoji:"💪", native:"Bara", fr:"Le bras" },
      { emoji:"🦵", native:"Sanbara", fr:"La jambe" },
      { emoji:"🫀", native:"Suma", fr:"Le cœur" },
      { emoji:"🫁", native:"Numa", fr:"Les poumons" },
      { emoji:"🦴", native:"Sira", fr:"Les os" },
      { emoji:"👶", native:"Den", fr:"L’enfant" },
      { emoji:"🧍‍♂️", native:"Mɔgɔ", fr:"Le corps" },
      { emoji:"👤", native:"Mɔgɔ", fr:"La personne" }
    ],
    ecole: [
      { emoji:"📘", native:"Kitabu", fr:"Livre" },
      { emoji:"✏️", native:"Pɛnsili", fr:"Crayon" },
      { emoji:"🖊️", native:"Biro", fr:"Stylo" },
      { emoji:"📐", native:"Rɛgili", fr:"Règle" },
      { emoji:"🎒", native:"Saku", fr:"Cartable" },
      { emoji:"📒", native:"Kaye", fr:"Cahier" },
      { emoji:"🪑", native:"Sigilan", fr:"Chaise" },
      { emoji:"📊", native:"Tablo", fr:"Tableau" },
      { emoji:"🧮", native:"Kalan", fr:"Boulier" },
      { emoji:"🖍️", native:"Kire", fr:"Craie" },
      { emoji:"📏", native:"Rɛgili", fr:"Règle longue" },
      { emoji:"📂", native:"Dosye", fr:"Dossier" },
      { emoji:"📎", native:"Pin", fr:"Trombone" },
      { emoji:"⌛", native:"Waati", fr:"Temps" },
      { emoji:"🧽", native:"Sponge", fr:"Éponge" },
      { emoji:"📌", native:"Pin", fr:"Punaise" }
    ],
    maison: [
      { emoji:"🏠", native:"So", fr:"Maison" },
      { emoji:"🪑", native:"Sigilan", fr:"Chaise" },
      { emoji:"🛏️", native:"Siri", fr:"Lit" },
      { emoji:"🍽️", native:"Fɛn", fr:"Assiette" },
      { emoji:"🥄", native:"Furu", fr:"Cuillère" },
      { emoji:"🥣", native:"Bolon", fr:"Bol" },
      { emoji:"🚪", native:"Dugu", fr:"Porte" },
      { emoji:"🪟", native:"Fenɛtiri", fr:"Fenêtre" },
      { emoji:"🧹", native:"Balan", fr:"Balai" },
      { emoji:"🪣", native:"Se", fr:"Seau" },
      { emoji:"🧺", native:"Pan", fr:"Panier" },
      { emoji:"🔥", native:"Ta", fr:"Feu" },
      { emoji:"💡", native:"Lampi", fr:"Lampe" },
      { emoji:"🧴", native:"Butili", fr:"Bouteille" },
      { emoji:"📺", native:"Televisi", fr:"Télévision" },
      { emoji:"🪞", native:"Miro", fr:"Miroir" }
    ],
    nombres: Array.from({length:101},(_,i)=>({emoji:"🔢",native:String(i),fr:String(i)}))
  }

};window.DATA = DATA;