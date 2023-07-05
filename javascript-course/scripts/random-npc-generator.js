const raceGen = () => {
  const races = ['Argonian', 'Breton', 'Bosmer', 'Dunmer', 'Altmer', 'Nord', 'Imperial', 'Redguard', 'Khajiit', 'Orc'];
  const roll = Math.floor(Math.random() * races.length);
  return races[roll];
};

const classGen = () => {
  const charclass = ['Assasin', 'Bard', 'Battlemage', 'Barbarian', 'Mage', 'Warlock', 'Ranger', 'Hunter', 'Thief', 'Agent'];
  const roll = Math.floor(Math.random() * charclass.length);
  return charclass[roll];
};

function Encounter() {
  return `You are approached by misterious ${raceGen()} ${classGen()}`
};

const expThreshold = [1000, 5000, 1000, 2000];

class randomDude {
  constructor(name) {
    this._name = name;
    this.race = raceGen();
    this._class = classGen();
    this.health = Number(Math.floor(Math.random() * 21 + 10));
    this.magicka = Number(Math.floor(Math.random() * 21 + 10));
    this.exp = Number(0);
    this.level = Number(1);    
  }

  addExp(number) {
    this.exp += Number(number);
    document.querySelector(`#exp-${this.order}`).innerHTML = `Current exp: ${this.exp}`;
    for(let i= 0; i < expThreshold.length; i++) {
      if (this.exp > expThreshold[i]) {
        this.level++;
        document.querySelector(`#lvl-${this.order}`).innerHTML = `Current level: ${this.level}`;
        this.health += Number(Math.floor(Math.random() * 11));
        document.querySelector(`#hp-${this.order}`).innerHTML = `Health: ${this.health}`;
        this.magicka = Number(Math.floor(Math.random() * 11));
        document.querySelector(`#mp-${this.order}`).innerHTML = `Magicka: ${this.magicka}`;
      }
    }      
  };
}

let champNumber = 0;
const champPull = [];

document.querySelector('.js-generator').addEventListener('click', () => {
  const inputName = document.querySelector('.js-name-prompt').value;
  
  champPull[champNumber] = new randomDude(inputName);
  
  champPull[champNumber].order = champNumber;

  const output = document.querySelector('.placeholder');
  output.innerHTML += 
  `<div class="charsheet" id=${champPull[champNumber]._name}>
      <div id=${champPull[champNumber]._name} class="ht-charname"> Name: ${champPull[champNumber]._name} </div>
      <div class="ht-char-race"> Race: ${champPull[champNumber].race} </div>
      <div class="ht-char-class">Class: ${champPull[champNumber]._class} </div>
      <div class="ht-char-hp" id="hp-${champPull[champNumber].order}">Health:${champPull[champNumber].health} </div>
      <div class="ht-char-mp" id="mp-${champPull[champNumber].order}">Magicka: ${champPull[champNumber].magicka} </div>
      <div class="ht-char-exp" id="exp-${champPull[champNumber].order}">Current exp: ${champPull[champNumber].exp} </div>
      <div class="ht-char-lvl" id="lvl-${champPull[champNumber].order}">Current level: ${champPull[champNumber].level}</div>`;
        
  champNumber++;
})
