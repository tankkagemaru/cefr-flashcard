# 📚 CEFR Flashcards

A modern, colorful vocabulary learning app built around the CEFR framework (A1 → C2). Study English words with photos, pronunciation, IPA transcription, example sentences, and Arabic/Mandarin translations at beginner levels.

🔗 **Live demo:** `[https://<your-username>.github.io/cefr-flashcards/](https://tankkagemaru.github.io/cefr-flashcard/)`

![CEFR Flashcards](https://img.shields.io/badge/CEFR-A1--C2-blueviolet) ![No Build](https://img.shields.io/badge/build-none-success) ![Vanilla JS](https://img.shields.io/badge/js-vanilla-yellow) ![Free](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Features

- **6 CEFR levels** — A1 (Beginner) through C2 (Proficient)
- **Multiple word sets** — Everyday English, Business & Work, Travel & Places (easily extensible)
- **Rich flashcards** — each card shows a visual glyph, English word, IPA pronunciation, part of speech, definition, and an example sentence
- **Arabic & Mandarin translations** — automatically shown at A1 and A2 levels (script only)
- **Text-to-speech** — tap to hear any word or example sentence, powered by your browser's built-in speech engine
- **Folder-based photos** — drop images into a `photos/` folder and they'll automatically appear on the matching card
- **Smart flashcard marking** — tag words as Hard, Learning, or Mastered to track progress
- **Quick quizzes** — 5-question quizzes after each study session with mixed picture-match and word-match modes
- **Gamification** — XP, daily streak counter, and a global mastered count
- **Shuffle mode** — randomize card order for variety
- **Favorites** — heart tricky words to find them later
- **Persistent progress** — everything saves to `localStorage`, no account needed
- **Offline-ready** — no external dependencies once loaded
- **Mobile-friendly** — works great on phones and tablets

---

## 🚀 Quick start

### Option 1: Host on GitHub Pages (recommended)

1. Create a new repo (e.g. `cefr-flashcards`)
2. Add `index.html` to the repo root
3. Go to **Settings → Pages → Source: `main` branch → `/root`**
4. Visit `https://<your-username>.github.io/cefr-flashcards/`

That's it — no build step, no dependencies.

### Option 2: Run locally

```bash
git clone https://github.com/<your-username>/cefr-flashcards.git
cd cefr-flashcards
python3 -m http.server 8000
# Or any static server. Then open http://localhost:8000
```

Simply opening `index.html` directly in a browser also works, but some browsers restrict `fetch()` from `file://` URLs, which will disable photo lookups. Use a local server for the full experience.

---

## 📁 Project structure

```
cefr-flashcards/
├── index.html          ← The entire app (HTML + CSS + JS + word data)
├── README.md           ← This file
├── photos/             ← Optional: add photos here to override emoji glyphs
│   ├── general/
│   │   ├── A1/
│   │   │   ├── apple.jpg
│   │   │   ├── dog.jpg
│   │   │   └── ...
│   │   ├── A2/
│   │   └── ...
│   ├── business/
│   └── travel/
└── words.js            ← Optional: see "Scaling tips" below
```

---

## ✏️ How to add more words

Open `index.html`, scroll to the `window.WORD_SETS = { ... }` block, and add a word to any level. Each word has this shape:

```js
{
  word: 'apple',
  ipa: '/ˈæp.əl/',
  pos: 'noun',
  def: 'A round fruit with red, green, or yellow skin.',
  example: 'I eat an apple every day.',
  ar: 'تفاحة',     // ← required only for A1 and A2
  zh: '苹果',       // ← required only for A1 and A2
  glyph: '🍎',
  theme: 'red',
}
```

### Field reference

| Field | Required | Description |
|---|---|---|
| `word` | ✅ | The English word (lowercase preferred) |
| `ipa` | ✅ | IPA phonetic transcription, e.g. `/ˈæp.əl/` |
| `pos` | ✅ | Part of speech: `noun`, `verb`, `adjective`, `adverb`, etc. |
| `def` | ✅ | Short definition |
| `example` | ✅ | Example sentence using the word |
| `ar` | A1/A2 only | Arabic translation (script only) |
| `zh` | A1/A2 only | Mandarin translation (simplified characters) |
| `glyph` | ✅ | A single emoji representing the word |
| `theme` | ✅ | Color theme (see below) |

### Available themes

| Theme | Gradient |
|---|---|
| `red` | soft red → coral |
| `amber` | peach → orange |
| `green` | mint → emerald |
| `blue` | sky → sapphire |
| `purple` | lavender → violet |
| `teal` | aqua → teal |
| `coral` | blush → pink |
| `pink` | rose → magenta |
| `gray` | silver → slate |
| `indigo` | periwinkle → indigo |

---

## 📦 How to add a new word set

Inside `window.WORD_SETS`, add a new top-level entry following this template:

```js
window.WORD_SETS = {
  general: { /* ... */ },
  business: { /* ... */ },
  travel: { /* ... */ },

  // 👇 Your new set
  academic: {
    name: 'Academic English',
    desc: 'Vocabulary for essays and exams',
    icon: '🎓',
    iconBg: 'linear-gradient(135deg, #10b981, #3b82f6)',
    levels: {
      A1: [ /* ... words ... */ ],
      A2: [ /* ... */ ],
      B1: [ /* ... */ ],
      B2: [ /* ... */ ],
      C1: [ /* ... */ ],
      C2: [ /* ... */ ],
    },
  },
};
```

The new set will automatically appear on the home screen.

### Ideas for new sets

- 🎓 Academic English
- 💻 Technology & Computing
- 🌱 Nature & Environment
- 🍽️ Food & Cooking
- 🎨 Arts & Culture
- ⚕️ Health & Medical
- ⚖️ Law & Politics
- 🏗️ Science & Research
- 💰 Finance & Economics
- 🏃 Sports & Fitness

---

## 📸 How to add photos

The app checks for real photos first and falls back to the emoji glyph + themed gradient if none is found. This lets you ship without any photos and add them gradually.

### Folder convention

```
photos/<set-key>/<level>/<word>.<ext>
```

For example:

```
photos/
├── general/
│   ├── A1/
│   │   ├── apple.jpg       ← will show on the "apple" card
│   │   ├── dog.png
│   │   └── house.webp
│   ├── A2/
│   │   ├── airport.jpg
│   │   └── beach.jpeg
│   └── B1/
│       └── achieve.jpg
└── business/
    └── A1/
        └── boss.jpg
```

### Rules

- File name must match the `word` field **exactly** (lowercase)
- Supported extensions: `.jpg`, `.jpeg`, `.png`, `.webp`
- Recommended size: **600×400px** (landscape) for best appearance
- Use royalty-free images (Unsplash, Pexels, Pixabay, or your own)
- Compressed JPGs keep the repo small — aim for ~50–100 KB each

### Sources for royalty-free photos

- [Unsplash](https://unsplash.com) — high-quality, free for any use
- [Pexels](https://www.pexels.com) — curated stock photos
- [Pixabay](https://pixabay.com) — large variety, commercial-use allowed
- [Openverse](https://openverse.org) — Creative Commons search engine

---

## 🔧 Scaling tips

### Splitting vocabulary into `words.js`

Once your word list gets large (500+ words), it becomes awkward to scroll through in `index.html`. Split it out:

**1.** Create `words.js` in the repo root and paste your vocabulary into it:

```js
// words.js
window.WORD_SETS = {
  general: { /* ... */ },
  business: { /* ... */ },
  // ...
};
```

**2.** In `index.html`, remove the inline `window.WORD_SETS = { ... };` block and replace it with a script tag before the main `<script>`:

```html
<script src="words.js"></script>
<script>
  // main app code...
</script>
```

### Splitting per word set

For very large vocabularies, split each set into its own file:

```html
<script src="sets/general.js"></script>
<script src="sets/business.js"></script>
<script src="sets/travel.js"></script>
<script src="sets/academic.js"></script>
<script>
  // Before the main render, merge them into window.WORD_SETS
  window.WORD_SETS = Object.assign({},
    window.GENERAL_SET,
    window.BUSINESS_SET,
    window.TRAVEL_SET,
    window.ACADEMIC_SET
  );
</script>
```

Each set file then defines its own namespaced global, e.g. `window.GENERAL_SET = { general: { ... } };`

### Loading vocabulary from JSON

If you prefer JSON over JS:

```js
// Near the top of the main script
async function loadWords() {
  const res = await fetch('words.json');
  window.WORD_SETS = await res.json();
  render();
  showScreen('home');
}
loadWords();
```

---

## ⌨️ Keyboard shortcuts

Currently all interaction is via click/tap. Keyboard support can be added — PRs welcome.

---

## 🧠 How progress is tracked

Everything is stored in the browser's `localStorage` under the key `cefr-flashcards-v1`:

- **`progress`** — object mapping `set-level-index` → `"mastered" | "learning" | "hard"`
- **`streak`** — consecutive days of study (resets if you miss a day)
- **`lastStudied`** — the date string of your last session
- **`favorites`** — array of favorited card keys
- **`xp`** — total experience points earned
- **`ttsEnabled`** — whether audio is on

### XP earned per action

| Action | XP |
|---|---|
| Mark word as "Mastered" | +10 |
| Mark word as "Learning" | +3 |
| Mark word as "Hard" | +2 |
| Correct quiz answer | +5 |

### Resetting progress

Open DevTools → Console → run:

```js
localStorage.removeItem('cefr-flashcards-v1');
location.reload();
```

---

## 🌐 Browser support

- ✅ Chrome / Edge 90+
- ✅ Firefox 90+
- ✅ Safari 14+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Android

TTS requires a browser with Web Speech API support (all modern browsers).

---

## 🛠️ Tech

- **Vanilla HTML + CSS + JavaScript** — no frameworks, no build tools
- **Web Speech API** — for text-to-speech
- **localStorage** — for progress persistence
- **CSS gradients + emoji** — for reliable cross-platform visuals

Zero external dependencies. The entire app is one HTML file.

---

## 📝 Roadmap ideas

Contributions welcome! Some ideas for future enhancements:

- [ ] Dark mode
- [ ] Spaced-repetition scheduling (SM-2 algorithm)
- [ ] Export/import progress as JSON
- [ ] Fill-in-the-blank quiz mode
- [ ] Listening mode (play audio, type the word)
- [ ] Typing practice mode
- [ ] Audio recording + comparison
- [ ] More translations (Spanish, French, German, Hindi, etc.)
- [ ] Keyboard navigation
- [ ] Progressive Web App (PWA) manifest for offline install
- [ ] Community word set sharing

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/new-word-set`
3. Add your words or improvements
4. Commit: `git commit -m "Add academic word set"`
5. Push: `git push origin feature/new-word-set`
6. Open a pull request

### Adding a word set — checklist

- [ ] All 6 levels (A1, A2, B1, B2, C1, C2) have at least 12 words each
- [ ] A1 and A2 words include `ar` and `zh` translations
- [ ] All words have valid `glyph` emoji and `theme` color
- [ ] IPA transcriptions are accurate (see [Cambridge Dictionary](https://dictionary.cambridge.org))
- [ ] Example sentences are clear and natural
- [ ] Definitions are appropriate for the CEFR level

---

## 📄 License

MIT License — feel free to fork, modify, and use for personal or commercial purposes.

---

## 🙏 Acknowledgments

- CEFR (Common European Framework of Reference for Languages) — the official framework
- [Cambridge Dictionary](https://dictionary.cambridge.org) — for reference on IPA and definitions
- Browser vendors — for the Web Speech API that makes free TTS possible
- All photographers on [Unsplash](https://unsplash.com) and [Pexels](https://www.pexels.com) who share their work

---

## 💬 Questions?

Open an [issue](https://github.com/<your-username>/cefr-flashcards/issues) or start a [discussion](https://github.com/<your-username>/cefr-flashcards/discussions) on the repo.

Happy learning! 🚀
