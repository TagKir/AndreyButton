function randomNumber(item) {
  return Math.floor(Math.random() * item);
}

const mlbbRound = {
  person: [
    "Miya",
    "Balmond",
    "Saber",
    "Alucard",
    "Bruno",
    "Alpha",
    "Cyclops",
    "Hilda",
    "Rafaela",
    "Bane",
    "Freya",
    "Tigreal",
    "Clint",
    "Gord",
    "Akai",
    "Franco",
    "Nana",
    "Minotaur",
    "Alice",
    "Estes",
    "Aurora",
    "Fanny",
    "Karrie",
    "Roger",
    "Chou",
    "Diggie",
    "Angela",
    "Johnson",
    "Ruby",
    "Valir",
    "Yi Sun-shin",
    "Natalie",
    "Gusion",
    "Lolita",
    "Moskov",
    "Gatotkaca",
    "Vexana",
    "Hayabusa",
    "Lapu-Lapu",
    "Sun",
    "Karina",
    "Grock",
    "Zhask",
    "Argus",
    "Lancelot",
    "Kagura",
    "Harley",
    "Hylos",
    "Martis",
    "Lesley",
    "Helcurt",
    "Pharsa",
    "Jawhead",
    "Irithel",
    "Brody",
    "Lylia",
    "Hanabi",
    "Chang’e",
    "Kaja",
    "Leomord",
    "Lunos",
    "Claude",
    "Selena",
    "Aldous",
    "Vale",
    "Hanzo",
    "Badang",
    "Kimy",
    "Thamuz",
    "Harith",
    "Khufra",
    "Belerick",
    "Faramis",
    "Minsitthar",
    "Kadita",
    "Masha",
    "Uranus",
    "Esmeralda",
    "X.Borg",
    "Ling",
    "Wanwan",
    "Cecilion",
    "Terizla",
    "Dyrroth",
    "Silvanna",
    "Baxia",
    "Granger",
    "Guinevere",
    "Benerdetta",
    "Popol and Kupa",
    "Yu Zhong",
    "Barats",
    "Atlas",
    "Luo Yi",
    "Carmilla",
    "Khaleed",
    "Mathilda",
    "Odette",
    "Eudora",
    "Layla",
    "Zilong",
  ],
  line: ["Gold", "Mid", "Exp", "Roum", "Jungle"],
  end: ["Winner", "Loser"],
  gitler: [
    "Ich Fuhrer Hitler, Scwein! Где мой крематорий?",
    "Я самый супер — стар в учебниках истории!",
    "Я подчинил себе пол мира — исчадие рая,",
    "А ты украл у меня нагло мой титул — Диктатор!",
    "День добрый, это эм си Володя — Владимир Путин,",
    "Тот кто ебёт Россию в выходные и по будням.",
    "Тебя я где-то видел? Ветеран? Инвалид?",
    "Проваливай, иначе Дима на тебя нассыт!",
    "Ты разгоняешь митинги! Ты копипаст меня!",
    "Свобода слова в России? Что это за хуйня?!",
    "Но самооборона Крыма явно была лишней.",
    "Тебе никто не разрешал пиздить мои же фишки!",
    "Сегодня от моей улыбки всему миру грустно,",
    "Ведь завтра вся планета станет исторично русской.",
    "А эти евросанкции, не, ну вы чё, в натуре?",
    "За меня хачи, медведи, Киселёв, Валуев!",
    "Тебя бросить жена. Видать что-то не так, старик?",
    "Наверно кроме «Тополя» ничего не стоит?",
    "А твой рейх-фюрер «Диман» вообще странный тип.",
    "Чья очередь на новых выборах сверху быть?",
    "Увы, нацизм не в моде, я повторю ещё раз.",
    "Да и кидают зигу лишь работники «МакДональдс».",
    "Вы в 45-м, от яда, прям как тараканы…",
    "А я хотел увидеть дойчен фильмы с Евой Браун.",
    "Как в печке Абрам, вспотеет твоя жопа,",
    "Когда ребята — скинхеды — найдут идиота.",
    "Мы точно знаем, чего боишься, как меня.",
    "Огня на майдане в Москве у Кремля!!!",
    "Да кто не любит Путина? Путина любят все!",
    "Ведь кто не любит Путина — давно сидит в тюрьме.",
    "Ведь кто не знает, Путин умница — строит империю.",
    "А ты, истерика, рождён от инцеста евреев.",
    "Ви кляті москалі, ви кляті окупанти!",
    "Тому скачу на Майдані зранку до світанку!",
    "Ми тут танцюємо, пісні співаємо гарно.",
    "Іноді хтось стриляє, когось убиваймо.",
    "Я ліпше буду під Бандерою, ніж під кацапом.",
    "Ніж під кацапом Путлєром — оцим сталінським братом!",
    "Аджеж тепер настав наш час — Україні Слава!",
    "Єбать, хлопці, окуратнєй, уронили сало!",
  ],
};

let answer, result, randRes;

function answerPrint() {
  answer = [];
  result = [];

  for (item in mlbbRound) {
    randRes = randomNumber(mlbbRound[item].length);

    switch (item) {
      case "person":
        answer.push(mlbbRound.person[randRes]);
        break;
      case "line":
        answer.push(mlbbRound.line[randRes]);
        break;
      case "end":
        answer.push(mlbbRound.end[randRes]);
        break;
      case "gitler":
        answer.push(mlbbRound.gitler[randRes]);
        break;
    }
  }
  result.push(
    `Your person: ${answer[0]} <br />
  Your line: ${answer[1]} <br />
  You are: ${answer[2]} <br /> <br />
  Мои последние слова: <br />
  ${answer[3]}`
  );
}

const button = document.querySelector("button");
function buttonClick() {
  answerPrint();
  const mlbb = document.querySelector("#pushme");
  mlbb.innerHTML = result;
  mlbb.style.cssText = `
    font-size: 1.5rem;
    font-weight: 500;
  `;
}

button.onclick = buttonClick;
