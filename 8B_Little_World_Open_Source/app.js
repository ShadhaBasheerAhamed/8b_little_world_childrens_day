const students=[
["823","Aarya","The Bright Mind","A BRIGHT MIND WITH A BIG HORIZON","The Starlight Scholar","Turning curiosity into knowledge"],
["824","Amanda Pauline Raj","The Limitless Dreamer","DREAM BIGGER THAN THE SKY","The Dream Architect","Imagining possibilities and learning how to build them"],
["825","Annlin Delshia","The Creative Spark","WHERE IDEAS FIND THEIR SPARK","The Idea Illustrator","Giving new ideas room to grow"],
["826","Ashlin Danshia","The Rising Star","A RISING STAR, A WORLD OF POSSIBILITIES","The Rising Comet","Growing stronger through steady effort"],
["827","Aswin Raj","The Young Achiever","THE NEXT CHAPTER OF GREAT IDEAS","The Code Pathfinder","Breaking big problems into smaller steps"],
["828","Deivamithra","The Golden Mind","A GOLDEN MIND FULL OF POSSIBILITY","The Golden Galaxy Guide","Finding learning opportunities in everyday moments"],
["829","Dharshan","The Future Explorer","THE FUTURE IS YOURS TO EXPLORE","The Cosmic Explorer","Discovering new paths through learning"],
["830","Fharoy Gabriel","The Next Big Thinker","BIG QUESTIONS. BRIGHTER TOMORROWS.","The Question Questor","Turning questions into discoveries"],
["831","Gautham Karthick","The Knowledge Seeker","COLLECTING KNOWLEDGE, CREATING TOMORROW","The Knowledge Keeper","Building understanding one lesson at a time"],
["832","Kairav","The Curious Genius","CURIOSITY LOOKS GOOD ON YOU","The Curiosity Captain","Finding wonder in how things work"],
["833","Keshna","The Brilliant Chapter","YOUR STORY IS JUST GETTING STARTED","The Chapter Changer","Turning every experience into a lesson"],
["834","Mahalingam","The Future Leader","LEARN TODAY. LEAD WITH PURPOSE.","The North Star Leader","Learning with responsibility and purpose"],
["835","Mahitha","The Spark of Excellence","A LITTLE SPARK CAN LIGHT A BIG SKY","The Spark Keeper","Making steady progress with curiosity"],
["836","Mukul","The Idea Machine","THINK DIFFERENT. BUILD SOMETHING NEW.","The Idea Engineer","Turning what-if into let's-try"],
["837","Nehashmitra","The Little Legend","A LEGEND IN THE MAKING","The Legend-in-Progress","Growing through every new experience"],
["838","Niralya","The Dream Builder","BUILDING DREAMS, ONE IDEA AT A TIME","The Dream Builder","Connecting imagination with action"],
["839","Nivyanth","The Extraordinary One","ORDINARY DAYS. EXTRAORDINARY POSSIBILITIES.","The Possibility Pilot","Finding a way forward through learning"],
["840","Rahul Antony","The Rising Champion","CHAMPION YOUR OWN JOURNEY","The Progress Champion","Turning practice into progress"],
["841","Ram Virath","The Power of Potential","POTENTIAL HAS NO CEILING","The Potential Voyager","Growing beyond yesterday's limits"],
["842","Rohit Manas","The Young Visionary","SEE THE POSSIBILITY. MAKE IT REAL.","The Vision Navigator","Seeing possibilities and planning a path"],
["843","Roshannah","The Star Edition","A STAR EDITION, WRITTEN BY YOU","The Star Storyteller","Making each chapter count"],
["844","Rositha","The Beautiful Mind","A BEAUTIFUL MIND IN BLOOM","The Blooming Mind","Growing through patience and curiosity"],
["845","Sai Ashwinth","The Innovation Mind","IDEAS TODAY. INNOVATION TOMORROW.","The Innovation Inventor","Testing ideas and learning from results"],
["846","Sarvesh","The Future Achiever","YOUR EFFORT IS WRITING THE FUTURE","The Future Builder","Building progress through consistency"],
["847","Selva Sidhhanya","The Thoughtful Star","THOUGHTFUL MINDS CREATE BRIGHT FUTURES","The Thoughtful Astronomer","Thinking carefully before taking action"],
["848","Sri Sharini Selvan","The Brilliant Soul","BRILLIANCE WITH A HEART OF GOLD","The Heartlight Scholar","Pairing knowledge with kindness"],
["849","Suriya Dharshini","The Sunshine Edition","BRINGING LIGHT TO EVERY NEW CHAPTER","The Sunshine Voyager","Bringing a fresh start to every challenge"],
["850","Tarun Sanjiv","The Next Generation","THE NEXT GENERATION STARTS WITH YOU","The Future Coder","Learning today's tools for tomorrow's ideas"],
["851","Varshini","The Magic of Possibilities","A WORLD OF POSSIBILITIES HAS YOUR NAME","The Possibility Keeper","Seeing new opportunities in every lesson"]
].map(([roll,name,tag,headline,character,power])=>({roll,name,tag,headline,character,power}));
const $=id=>document.getElementById(id);let current=null;
const defaultStrengths=["A sincere learner","An attentive listener","A respectful classroom presence","A future full of possibilities"];
function letter(s){return `Dear future ${s.name},\n\nI hope you are still curious about the world and brave enough to try things you have never tried before. Remember your Grade 8B days: learning, growing and discovering what you can do. Be proud of every small step. Keep your kindness, keep your curiosity and make room for big dreams.\n\nWith lots of love,\nYour Shadha Mam ❤️`}
function message(s){return `${s.name}, your journey in Grade 8B is part of what makes this classroom special. Your willingness to learn, your attentive spirit and your interest in discovering new things are qualities to be proud of. Keep asking questions and giving your best. You have so many chapters still waiting to be written.`}
function doubt(s){return `${s.name}, one difficult day does not define your ability. You are allowed to make mistakes, ask for help and begin again. Your effort matters more than being perfect. Keep going, one little step at a time. I believe your story has wonderful things ahead.`}
function openStudent(pin){const s=students.find(x=>x.roll===String(pin).trim());if(!s){$("hint").textContent="We couldn't find that roll number. Please check it.";return}current=s;$("welcome").classList.add("hidden");$("welcomeNote").classList.add("hidden");$("teacher").classList.add("hidden");$("profile").classList.remove("hidden");$("studentName").textContent="Hello, "+s.name+"!";$("tagline").textContent=s.tag+" · Your story is still unfolding."; $("roll").textContent="ROLL NUMBER "+s.roll;showTab("message");window.scrollTo(0,0)}
function showTab(tab){if(!current)return;document.querySelectorAll("#tabs button").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));const s=current;let out="";
if(tab==="message")out=`<div class="kicker">A NOTE FROM YOUR SHADHA MAM</div><h3>Dear ${s.name},</h3><p>${message(s)}</p><p class="signature">With lots of love,<br>Your Shadha Mam ❤️</p>`;
if(tab==="strengths")out=`<div class="kicker">YOUR PERSONAL CONSTELLATION</div><h3>${s.tag}</h3><p>These are the strengths and possibilities I want you to keep nurturing. Every strength grows when you use it.</p><div class="strengths">${defaultStrengths.map(x=>`<div class="strength">✦ ${x}</div>`).join("")}</div><p class="signature">Keep discovering what makes you shine.<br>Your Shadha Mam ❤️</p>`;
if(tab==="future")out=`<div class="kicker">OPEN IN A FUTURE CHAPTER</div><div class="paper"><h3>A letter to your future self</h3><p>${letter(s).replaceAll("\n","<br>")}</p></div>`;
if(tab==="cover")out=`<div class="kicker">YOUR VERY OWN COVER STORY</div><div class="cover"><div class="mast">THE 8B TIMES</div><small>CHILDREN'S DAY SPECIAL · 2026</small><h3>${s.headline}</h3><b>${s.name.toUpperCase()}</b><p>ONE STUDENT · A THOUSAND POSSIBILITIES</p><small>THE FUTURE EDITION · NO. ${s.roll}</small></div><p class="signature">This cover belongs to you. Keep writing your story!<br>Your Shadha Mam ❤️</p>`;
if(tab==="character")out=`<div class="kicker">YOUR ONE-OF-A-KIND CHARACTER CARD</div><h3>${s.character}</h3><p>A special character in the 8B galaxy. Your journey is your own, and these are the powers you can keep growing.</p><div class="stats"><div class="stat"><small>SPECIAL POWER</small>${s.power}</div><div class="stat"><small>MISSION</small>Explore one new idea every day</div><div class="stat"><small>YOUR MOTTO</small>Small steps. Bright possibilities.</div><div class="stat"><small>UNIVERSE</small>Grade 8B · Galaxy of Possibilities</div></div><p class="signature">Never stop being your own kind of legend.<br>Your Shadha Mam ❤️</p>`;
if(tab==="doubt")out=`<div class="kicker">SAVE THIS FOR A CLOUDY DAY</div><h3>Open when you doubt yourself, ${s.name}.</h3><p>${doubt(s)}</p><p class="signature">I am cheering for you, always.<br>Your Shadha Mam ❤️</p>`;
$("panel").innerHTML=out}
$("unlock").onclick=()=>$("pin").value&&openStudent($("pin").value);$("pin").addEventListener("keydown",e=>{if(e.key==="Enter")openStudent($("pin").value)});
$("tabs").addEventListener("click",e=>{const b=e.target.closest("button[data-tab]");if(b)showTab(b.dataset.tab)});
$("back").onclick=()=>{$("profile").classList.add("hidden");$("welcome").classList.remove("hidden");$("welcomeNote").classList.remove("hidden");$("pin").value="";window.scrollTo(0,0)};
$("home").onclick=e=>{e.preventDefault();$("back").click()};
$("teacherBtn").onclick=()=>{$("welcome").classList.add("hidden");$("welcomeNote").classList.add("hidden");$("profile").classList.add("hidden");$("teacher").classList.remove("hidden");renderQR();window.scrollTo(0,0)};
$("closeTeacher").onclick=()=>{$("teacher").classList.add("hidden");$("welcome").classList.remove("hidden");$("welcomeNote").classList.remove("hidden")};
function renderQR(){const base=location.href.split("?")[0];$("qrgrid").innerHTML=students.map(s=>`<div class="qr"><img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(base+"?pin="+s.roll)}"><b>${s.name}</b><small>ROLL NO. ${s.roll}</small></div>`).join("")}
$("print").onclick=()=>window.print();const params=new URLSearchParams(location.search);if(params.has("pin"))$("pin").value=params.get("pin");
