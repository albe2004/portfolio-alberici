const P='assets/img/projects/', D='assets/downloads/', O=P+'other-projects/';

/* Testi EN / IT */
const T={
en:{nav_home:`Home`,nav_projects:`Projects`,nav_cv:`CV`,nav_contact:`Contact`,
tagline:`Design-focused UX/UI designer dedicated to creating intuitive and engaging user experiences.`,
cta_projects:`See my projects`,cta_cv:`Download CV`,
bio1:`I'm Andrea, a UX/UI designer from Rome, born in 2004 and raised in a big family with six siblings. My passion for video games as a child sparked my curiosity for art and the digital world.`,
bio2:`I studied graphic design at Stendhal high school in Rome, then completed the Master in UX/UI Design and AI at start2impact University, with ten portfolio projects from accessibility and wireframing to UI and copywriting. Today I work on web design, brand identity and editorial content.`,
projects_t:`Projects`,projects_p:`A look at the projects I've worked on, each one a step forward in my creative and professional journey.`,
dl:`Download presentation`,works_t:`Other works`,
contact_t:`Contact me`,contact_p:`Have a project in mind? Let's connect and bring your vision to life.`,
f_name:`Name`,f_msg:`Message`,send:`Send message`,reply:`I will get back to you within 48 hours. Thank you for your patience!`,rights:`All rights reserved.`},
it:{nav_home:`Home`,nav_projects:`Progetti`,nav_cv:`CV`,nav_contact:`Contatti`,
tagline:`UX/UI designer con un approccio orientato al design, che crea esperienze utente intuitive e coinvolgenti.`,
cta_projects:`Vedi i progetti`,cta_cv:`Scarica il CV`,
bio1:`Sono Andrea, UX/UI designer di Roma, classe 2004, cresciuto in una famiglia numerosa con sei fratelli. La passione per i videogiochi da bambino ha acceso la mia curiosità per l'arte e il mondo digitale.`,
bio2:`Ho studiato grafica al liceo Stendhal di Roma e ho completato il Master in UX/UI Design e AI alla start2impact University, con dieci progetti di portfolio che vanno da accessibilità e wireframing a UI e copywriting. Oggi mi occupo di web design, brand identity e contenuti editoriali.`,
projects_t:`Progetti`,projects_p:`Una selezione dei progetti a cui ho lavorato, ognuno un passo avanti nel mio percorso creativo e professionale.`,
dl:`Scarica la presentazione`,works_t:`Altri lavori`,
contact_t:`Contattami`,contact_p:`Hai un progetto in mente? Mettiamoci in contatto e diamo vita alla tua idea.`,
f_name:`Nome`,f_msg:`Messaggio`,send:`Invia messaggio`,reply:`Ti risponderò entro 48 ore. Grazie per la pazienza!`,rights:`Tutti i diritti riservati.`}
};

/* Progetti: [immagine, pdf, titolo EN, descrizione EN, titolo IT, descrizione IT] */
const PROJECTS=[
['branding.jpg','Progetto-Graphic-Design-Andrea-Alberici.pdf',`Branding: Sunnee`,`Full visual identity for a sustainable beachwear brand: logo, palette, typography, icons, social assets and brand guidelines.`,`Branding: Sunnee`,`Identità visiva completa per un brand di beachwear sostenibile: logo, palette, tipografia, icone, contenuti social e brand guidelines.`],
['accessibility1.png','Progetto Accessibility parte 1 di Andrea Alberici.pdf',`Accessibility, part 1`,`Accessibility analysis of an e-commerce platform with personas and user journeys, proposing a more inclusive layout and navigation.`,`Accessibility, parte 1`,`Analisi dell'accessibilità di un e-commerce con personas e user journey, con proposte per layout e navigazione più inclusivi.`],
['accessibility2.png','Progetto Accessibility parte 2 di Andrea Alberici.pdf',`Accessibility, part 2`,`Accessibility challenges on the Ecodream website, with improved contrast, streamlined navigation and a clearer layout.`,`Accessibility, parte 2`,`Criticità di accessibilità del sito Ecodream, con miglioramenti su contrasto, navigazione e struttura del layout.`],
['discovery1.png','Progetto Discovery parte 1 di Andrea Alberici.pdf',`Discovery, part 1`,`UX analysis of Ecodream with heuristic evaluation and competitor benchmarking to find usability and accessibility gaps.`,`Discovery, parte 1`,`Analisi UX di Ecodream con valutazione euristica e benchmark dei competitor per individuare lacune di usabilità e accessibilità.`],
['discovery2.png','Progetto Discovery parte 2 di Andrea Alberici.pdf',`Discovery, part 2`,`Pain points from personas and customer journeys, with solutions like clearer calls to action, wishlist and live chat.`,`Discovery, parte 2`,`Pain point emersi da personas e customer journey, con soluzioni come call to action più chiare, wishlist e live chat.`],
['wireframing1.png','Progetto Wireframing 1 di Andrea Alberici.pdf',`Wireframing, part 1`,`High-fidelity wireframes and wireflow for Ecodream, focused on usability and an easier shopping journey.`,`Wireframing, parte 1`,`Wireframe ad alta fedeltà e wireflow per Ecodream, per un'esperienza d'acquisto più semplice e usabile.`],
['wireframing2.png','Progetto Wireframing 2 di Andrea Alberici.pdf',`Wireframing, part 2`,`Mobile adaptation of the Ecodream wireframes, with wireflow, sitemap, grids and typography.`,`Wireframing, parte 2`,`Adattamento mobile dei wireframe di Ecodream, con wireflow, sitemap, griglie e tipografia.`],
['user-interface1.png','Progetto User Interface 1 di Andrea Alberici.pdf',`User interface, part 1`,`Interface design and wireflow for the Ecodream website, optimizing product discovery and navigation.`,`User interface, parte 1`,`Design dell'interfaccia e wireflow per il sito Ecodream, per migliorare navigazione e scoperta dei prodotti.`],
['user-interface2.png','Progetto User Interface 2 di Andrea Alberici.pdf',`User interface, part 2`,`Mobile version of the Ecodream interface, with responsive layouts, clear navigation and optimized touchpoints.`,`User interface, parte 2`,`Versione mobile dell'interfaccia di Ecodream, con layout responsive, navigazione chiara e touchpoint ottimizzati.`],
['user-test1.png','Progetto User Test 1 di Andrea Alberici.pdf',`User test, part 1`,`Planning of a remote moderated First Click Test for Ecodream, with research goals, Figma prototype and test script.`,`User test, parte 1`,`Pianificazione di un First Click Test remoto moderato per Ecodream, con obiettivi di ricerca, prototipo Figma e script del test.`],
['user-test2.png','Progetto User Test 2 di Andrea Alberici.pdf',`User test, part 2`,`Analysis of the remote sessions: first-click behavior and usability issues turned into targeted design improvements.`,`User test, parte 2`,`Analisi delle sessioni remote: comportamento al primo click e problemi di usabilità trasformati in miglioramenti mirati.`],
['HTML-CSS-DI-ANDREA-ALBERICI.png','Progetto HTML e CSS di Andrea Alberici.pdf',`HTML and CSS`,`My first portfolio, from Figma to a responsive, accessible build with HTML, SCSS, Bootstrap, JavaScript and an EmailJS form.`,`HTML e CSS`,`Il mio primo portfolio, da Figma a un sito responsive e accessibile con HTML, SCSS, Bootstrap, JavaScript e form EmailJS.`],
['copywriting.png','Progetto Copywriting per Il Vestito Verde di Andrea Alberici.pdf',`Copywriting: Il Vestito Verde`,`Persuasive copy for a secondhand fashion platform, with audience analysis, storytelling and Cialdini's principles.`,`Copywriting: Il Vestito Verde`,`Copy persuasivo per una piattaforma di moda second hand, con analisi del pubblico, storytelling e principi di Cialdini.`],
['zoom-sul-cinema-guidelines.png','zoom-sul-cinema-guidelines.pdf',`Zoom sul Cinema guidelines`,`Complete visual identity: logo, palette, typography and social design for Instagram, Facebook and LinkedIn.`,`Zoom sul Cinema guidelines`,`Identità visiva completa: logo, palette, tipografia e grafiche social per Instagram, Facebook e LinkedIn.`],
['thumbnail-progetto-finale.png','progetto-finale.pdf',`Barilla rebrand`,`Visual identity and UX redesign merging tradition with a geometric language, from wireframes to prototype and usability test.`,`Barilla rebrand`,`Identità visiva e redesign UX che unisce tradizione e linguaggio geometrico, da wireframe a prototipo e test di usabilità.`]
];

const WORKS=['movie-poster.jpg','personal-logo.png','True detective poster.jpg','poster fight club.jpg','poster donnie darko.jpg','locandina concerto.jpeg','lonicera-logo.png','Rivista Arte Pratica_Tavola disegno 1.jpg','Poster Love.jpg','poster tyler.jpg','soutHfield mayor logo.jpg','poster-lettering-interstellar.png','mr robot.png','shining.png','poster fiat 509.png','poster 1984.png'];

let L='en';
try{L=localStorage.getItem('lang')||(navigator.language.startsWith('it')?'it':'en')}catch(e){}

const hideBroken=i=>i.onerror=()=>i.classList.add('missing');

function render(){
  document.documentElement.lang=L;
  document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=T[L][el.dataset.i18n]);
  document.getElementById('lang').textContent=L==='en'?'IT':'EN';
  const k=L==='en'?2:4;
  document.getElementById('grid').innerHTML=PROJECTS.map(p=>{
    const pdf=D+encodeURI(p[1]);
    return `<article class="card"><a href="${pdf}" download><img src="${P+encodeURI(p[0])}" alt="${p[k]}" loading="lazy"></a><h3>${p[k]}</h3><p>${p[k+1]}</p><a class="dl" href="${pdf}" download>${T[L].dl}</a></article>`;
  }).join('');
  document.querySelectorAll('.card img').forEach(hideBroken);
}

document.getElementById('works').innerHTML=WORKS.map(f=>`<img src="${O+encodeURI(f)}" alt="" loading="lazy">`).join('');
document.querySelectorAll('.works img').forEach(i=>i.onerror=()=>i.remove());
document.getElementById('year').textContent='© '+new Date().getFullYear();

document.getElementById('lang').onclick=()=>{
  L=L==='en'?'it':'en';
  try{localStorage.setItem('lang',L)}catch(e){}
  render();
};

/* Il form apre il client email (nessun backend richiesto su GitHub Pages) */
document.getElementById('form').onsubmit=e=>{
  e.preventDefault();
  const n=document.getElementById('f-name').value, m=document.getElementById('f-msg').value;
  location.href=`mailto:andreaalberici317@gmail.com?subject=${encodeURIComponent('Portfolio: '+n)}&body=${encodeURIComponent(m)}`;
};

render();
