# Portfolio — Étudiant Informatique & Jeux Vidéo

Site portfolio statique pour candidature Master, avec option d'impression / export PDF.

## Structure des fichiers

```
portfolio/
│
├── index.html              ← Page principale
│
├── css/
│   ├── variables.css       ← Tokens de design (couleurs, typos, espacements)
│   ├── reset.css           ← Normalisation & base
│   ├── layout.css          ← Grilles, sections, hero, footer
│   ├── components.css      ← Navbar, boutons, cartes, formulaire, tags
│   ├── animations.css      ← Keyframes & classes d'animation
│   └── print.css           ← Styles dédiés impression / PDF
│
├── js/
│   ├── nav.js              ← Navbar sticky, lien actif, hamburger mobile
│   ├── animations.js       ← Reveal au scroll (IntersectionObserver), compteurs
│   └── form.js             ← Validation du formulaire de contact
│
└── README.md               ← Ce fichier
```

## Personnalisation rapide

### 1. Identité
Dans `index.html`, remplace :
- `[Ton Prénom]` → ton prénom (titre de page + balise meta)
- `TON_PRENOM.DEV` → ton domaine ou pseudo
- `Prénom` / `Nom` → dans la section hero
- `[Ville]` → ta ville universitaire
- `[Nom du Master]` → le master visé

### 2. Stats hero
```html
<span class="stat__num" data-count="3">0</span>  ← change le chiffre
```

### 3. Compétences
Ajoute / retire des `<span class="tag">` dans les `.skill-card`.  
Utilise `tag--hot` pour mettre en avant tes points forts.

### 4. Projets
Duplique ou modifie les `<article class="project-card">`.  
Change `data-emoji` pour l'icône de la vignette.

### 5. Liens de contact
Dans la section `#contact`, mets à jour :
- `href="mailto:..."` → ton email
- `href="https://linkedin.com/in/..."` → ton LinkedIn
- `href="https://github.com/..."` → ton GitHub
- `href="https://....itch.io"` → ton itch.io (si applicable)

### 6. Couleurs
Tout dans `css/variables.css` → modifie `--color-accent`, `--color-bg`, etc.

## Formulaire de contact

Par défaut, le formulaire simule un envoi.  
Pour le rendre fonctionnel, intègre [Formspree](https://formspree.io) :

1. Crée un compte sur formspree.io
2. Crée un formulaire et récupère ton ID (ex: `xabcdefg`)
3. Dans `js/form.js`, remplace le bloc "Simulation d'envoi" par :

```js
fetch('https://formspree.io/f/TON_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  })
});
```

## Impression / Export PDF

Clique sur le bouton **"⊡ Imprimer / PDF"** dans la navbar.  
Le fichier `css/print.css` bascule automatiquement sur fond blanc avec texte noir.

Depuis Chrome/Firefox : **Fichier → Imprimer → Enregistrer au format PDF**

## Mise en ligne gratuite

**GitHub Pages :**
```bash
git init
git add .
git commit -m "Portfolio initial"
git remote add origin https://github.com/TONPSEUDO/portfolio.git
git push -u origin main
# Puis : Settings → Pages → Source: main branch
```

**Netlify :** Glisse-dépose le dossier `portfolio/` sur [netlify.com/drop](https://netlify.com/drop)
