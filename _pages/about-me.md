---
permalink: /about-me/
title: "About me"
title_it: "Chi sono"
title_fr: "À propos de moi"
author_profile: true
---

<style>
.am-page {
  --am-green:  #0BDA51;
  --am-blue:   #AFDBF5;
  --am-coral:  #FF6B6B;
}

.am-intro {
  font-size: 1.05em;
  line-height: 1.65;
  color: var(--global-text-color);
  border-left: 3px solid var(--am-green);
  padding: 0.4em 0 0.4em 1.1em;
  margin: 1.2em 0 2.2em;
}

.am-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.1em;
  margin: 1.5em 0 2em;
}

.am-card {
  background: var(--global-code-background-color);
  border: 1px solid var(--global-border-color);
  border-top: 3px solid var(--am-accent, var(--am-green));
  border-radius: 6px;
  padding: 1.1em 1.2em 1.2em;
  transition: border-color 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.am-card:hover {
  border-color: var(--am-accent, var(--am-green));
  transform: translateY(-2px);
}

.am-card .am-icon {
  color: var(--am-accent, var(--am-green));
  font-size: 1.15em;
  margin-right: 0.45em;
}

.am-card h3 {
  display: flex;
  align-items: center;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  margin: 0 0 0.55em;
  color: var(--global-text-color);
}

.am-card p {
  margin: 0;
  font-size: 0.95em;
  line-height: 1.55;
  color: var(--global-text-color-light);
}

.am-card.am-green { --am-accent: var(--am-green); }
.am-card.am-blue  { --am-accent: var(--am-blue); }
.am-card.am-coral { --am-accent: var(--am-coral); }

.am-closer {
  margin-top: 2.5em;
  padding: 1.4em 1.5em;
  border-radius: 6px;
  background: var(--global-code-background-color);
  border-left: 4px solid var(--am-blue);
  color: var(--global-text-color);
}

.am-closer h3 {
  margin: 0 0 0.5em;
  font-size: 1.05em;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: var(--am-blue);
}

.am-closer h3 i { margin-right: 0.4em; }

.am-closer p {
  margin: 0.5em 0 0;
  line-height: 1.6;
}

.am-closer a {
  font-weight: 600;
}
</style>

<!-- ── ENGLISH ─────────────────────────────────────────────────────────── -->
<div class="lang-block am-page" data-lang="en">

<p class="am-intro">
  The rest of this site is the work side — code, papers, talks. This page is for everything else: the things I do when I'm not staring at C++ or a fit residual plot.
</p>

<div class="am-grid">

  <div class="am-card am-coral">
    <h3><i class="fas fa-utensils am-icon"></i>In the kitchen</h3>
    <p>I follow the recipe carefully — for about the first three steps. After that I'm improvising, which usually turns out well and occasionally produces the kind of dish you don't talk about afterwards. Somewhere between rigorous and freestyle.</p>
    <p style="margin-top: 0.7em;">Lately I've been growing my own <strong>chili plants</strong> on the balcony — partly for the cooking, partly because watching something slowly produce fruit is unreasonably satisfying.</p>
  </div>

  <div class="am-card am-blue">
    <h3><i class="fas fa-language am-icon"></i>Languages, work in progress</h3>
    <p>Italian and French are native, English is the one I think and work in. Spanish and Portuguese are currently being taught to me by reggaeton lyrics, Brazilian memes, and the occasional well-meaning friend. Progress is uneven but steady.</p>
  </div>

  <div class="am-card am-green">
    <h3><i class="fas fa-chess-knight am-icon"></i>Puzzles and games</h3>
    <p>Sudoku is the long-running habit. Chess is the new one — I'm at the stage where I can spot the blunder roughly half a second after making it. I take both seriously enough to improve, not so seriously that they stop being fun.</p>
  </div>

  <div class="am-card am-green">
    <h3><i class="fas fa-code am-icon"></i>Code as a hobby</h3>
    <p>I "vibe-code" small apps and sites on weekends — most recently a calorie tracker I actually use. Day job is C++ and physics analysis, so when I generate something with an LLM I can read it line by line and call out the parts that look suspicious, not just hope for the best.</p>
  </div>

  <div class="am-card am-coral">
    <h3><i class="fab fa-tiktok am-icon"></i>Science on TikTok &amp; YouTube</h3>
    <p>I make short videos trying to make physics feel less like homework. Same challenge as tutoring: find the one explanation that finally clicks, then say it in 60 seconds without lying about the details.</p>
  </div>

  <div class="am-card am-blue">
    <h3><i class="fas fa-dumbbell am-icon"></i>Gym</h3>
    <p>Structured routine, advanced enough to program my own training, disciplined enough to actually keep showing up. The unglamorous version of progress — small numbers going up over long periods of time.</p>
  </div>

</div>

<div class="am-closer">
  <h3><i class="fas fa-map-marker-alt"></i>Where I'm going next</h3>
  <p>
    Currently based in <strong>Bologna</strong>, finishing up the postdoc and actively transitioning out of academia. I'm looking at industry roles in more international, vibrant cities — somewhere with a real tech scene, walkable streets, and people from everywhere.
  </p>
  <p>
    If that sounds like an interesting match — or if you just want to chat about physics, code, or where to eat in Bologna — drop me a line at <a href="mailto:nicola.rubini.1995@gmail.com">nicola.rubini.1995@gmail.com</a>.
  </p>
</div>

</div><!-- /lang-block en -->

<!-- ── ITALIANO ────────────────────────────────────────────────────────── -->
<div class="lang-block am-page" data-lang="it" hidden>

<p class="am-intro">
  Il resto del sito è il lato professionale — codice, articoli, talk. Questa pagina è per tutto il resto: le cose che faccio quando non sono davanti al C++ o a un grafico dei residui di un fit.
</p>

<div class="am-grid">

  <div class="am-card am-coral">
    <h3><i class="fas fa-utensils am-icon"></i>In cucina</h3>
    <p>Seguo la ricetta meticolosamente — per circa i primi tre passi. Dopo improvviso, il che di solito va bene e a volte produce piatti di cui è meglio non parlare. Da qualche parte tra il rigoroso e il libero.</p>
    <p style="margin-top: 0.7em;">Ultimamente coltivo i miei <strong>peperoncini</strong> sul balcone — in parte per cucinare, in parte perché vedere qualcosa crescere lentamente dà una soddisfazione sproporzionata.</p>
  </div>

  <div class="am-card am-blue">
    <h3><i class="fas fa-language am-icon"></i>Lingue, lavori in corso</h3>
    <p>L'italiano e il francese sono madrelingua, l'inglese è la lingua in cui penso e lavoro. Lo spagnolo e il portoghese mi vengono insegnati dal reggaeton, dai meme brasiliani e da qualche amico paziente. I progressi sono discontinui ma costanti.</p>
  </div>

  <div class="am-card am-green">
    <h3><i class="fas fa-chess-knight am-icon"></i>Puzzle e giochi</h3>
    <p>Il sudoku è l'abitudine di lunga data. Gli scacchi sono la novità — sono alla fase in cui riconosco la mossa sbagliata circa mezzo secondo dopo averla fatta. Prendo entrambi abbastanza sul serio da migliorare, non così tanto da smettere di divertirmi.</p>
  </div>

  <div class="am-card am-green">
    <h3><i class="fas fa-code am-icon"></i>Codice come hobby</h3>
    <p>Il weekend scrivo app e siti piccoli — di recente un conta-calorie che uso davvero. Il lavoro principale è C++ e analisi dati, quindi quando genero qualcosa con un LLM riesco a leggerlo riga per riga e a individuare i punti sospetti, senza limitarmi a sperare per il meglio.</p>
  </div>

  <div class="am-card am-coral">
    <h3><i class="fab fa-tiktok am-icon"></i>Scienza su TikTok e YouTube</h3>
    <p>Faccio brevi video cercando di rendere la fisica meno simile ai compiti. Stessa sfida del tutoraggio: trovare la spiegazione che finalmente fa scattare qualcosa, e dirla in 60 secondi senza mentire sui dettagli.</p>
  </div>

  <div class="am-card am-blue">
    <h3><i class="fas fa-dumbbell am-icon"></i>Palestra</h3>
    <p>Routine strutturata, abbastanza avanzata da programmare il mio allenamento, abbastanza disciplinata da presentarmi davvero. La versione senza glamour dei progressi — numeri piccoli che salgono in lunghi periodi di tempo.</p>
  </div>

</div>

<div class="am-closer">
  <h3><i class="fas fa-map-marker-alt"></i>Cosa c'è dopo</h3>
  <p>
    Attualmente a <strong>Bologna</strong>, in chiusura del postdoc e in transizione verso l'industria. Cerco posizioni in città più internazionali e vivaci — con una scena tech reale, strade percorribili a piedi e persone da tutto il mondo.
  </p>
  <p>
    Se sembra un match interessante — o se vuoi semplicemente chiacchierare di fisica, codice o dove mangiare a Bologna — scrivimi a <a href="mailto:nicola.rubini.1995@gmail.com">nicola.rubini.1995@gmail.com</a>.
  </p>
</div>

</div><!-- /lang-block it -->

<!-- ── FRANÇAIS ────────────────────────────────────────────────────────── -->
<div class="lang-block am-page" data-lang="fr" hidden>

<p class="am-intro">
  Le reste de ce site représente le côté professionnel — code, articles, présentations. Cette page est pour tout le reste : ce que je fais quand je ne suis pas devant du C++ ou un graphe de résidus.
</p>

<div class="am-grid">

  <div class="am-card am-coral">
    <h3><i class="fas fa-utensils am-icon"></i>En cuisine</h3>
    <p>Je suis la recette scrupuleusement — pendant à peu près les trois premières étapes. Après, j'improvise, ce qui se termine généralement bien et produit parfois des plats dont on ne parle plus. Quelque part entre rigoureux et libre.</p>
    <p style="margin-top: 0.7em;">Récemment, je cultive mes propres <strong>piments</strong> sur le balcon — en partie pour cuisiner, en partie parce qu'observer quelque chose pousser lentement est étrangement satisfaisant.</p>
  </div>

  <div class="am-card am-blue">
    <h3><i class="fas fa-language am-icon"></i>Langues, travaux en cours</h3>
    <p>L'italien et le français sont maternels, l'anglais est la langue dans laquelle je pense et travaille. L'espagnol et le portugais me sont enseignés par le reggaeton, les mèmes brésiliens et quelques amis bienveillants. Les progrès sont irréguliers mais constants.</p>
  </div>

  <div class="am-card am-green">
    <h3><i class="fas fa-chess-knight am-icon"></i>Puzzles et jeux</h3>
    <p>Le sudoku est l'habitude de longue date. Les échecs sont la nouveauté — j'en suis au stade où je repère la gaffe environ une demi-seconde après l'avoir faite. Je prends les deux assez au sérieux pour progresser, pas au point que ça cesse d'être amusant.</p>
  </div>

  <div class="am-card am-green">
    <h3><i class="fas fa-code am-icon"></i>Code comme hobby</h3>
    <p>Je « vibe-code » de petites apps et sites le week-end — dernièrement un compteur de calories que j'utilise vraiment. Le travail principal est du C++ et de l'analyse physique, donc quand je génère quelque chose avec un LLM, je peux le lire ligne par ligne et repérer ce qui semble suspect, plutôt que d'espérer juste que ça marche.</p>
  </div>

  <div class="am-card am-coral">
    <h3><i class="fab fa-tiktok am-icon"></i>Science sur TikTok et YouTube</h3>
    <p>Je fais de courtes vidéos pour rendre la physique moins rébarbative. Le même défi qu'en cours particulier : trouver l'explication qui fait enfin déclic, puis la formuler en 60 secondes sans travestir les faits.</p>
  </div>

  <div class="am-card am-blue">
    <h3><i class="fas fa-dumbbell am-icon"></i>Salle de sport</h3>
    <p>Routine structurée, assez avancée pour programmer mon propre entraînement, assez discipliné pour vraiment m'y tenir. La version peu glamour du progrès — de petits chiffres qui augmentent sur de longues périodes.</p>
  </div>

</div>

<div class="am-closer">
  <h3><i class="fas fa-map-marker-alt"></i>Prochaine étape</h3>
  <p>
    Actuellement à <strong>Bologne</strong>, en fin de postdoc et en transition vers l'industrie. Je cherche des postes dans des villes plus internationales et dynamiques — avec une vraie scène tech, des rues agréables à arpenter et des gens venant de partout.
  </p>
  <p>
    Si cela semble être une rencontre intéressante — ou si vous souhaitez simplement discuter de physique, de code ou où manger à Bologne — contactez-moi à <a href="mailto:nicola.rubini.1995@gmail.com">nicola.rubini.1995@gmail.com</a>.
  </p>
</div>

</div><!-- /lang-block fr -->
