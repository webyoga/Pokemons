import Pokemon from "./pokemon.js";  //получение класса Pokemon в main.js
import random from "./random.js";    //получение функции random в main.js

function $getElById(id) {
  return document.getElementById(id);
}

const $btnnew = $getElById('btn-new');  //кнопка New

const $btn = $getElById('btn-kick');

const player1 = new Pokemon ({
  name: 'Picachu',
  selectors: 'character',
});

const player1 = new Pokemon ({
  name: 'Charmonder',
  selectors: 'enemy',
});


/**const character = {
  name: 'Picachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElById('health-character'),
  elProgressbar: $getElById('progressbar-character'),
  changeHP: changeHP,
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElById('health-enemy'),
  elProgressbar: $getElById('progressbar-enemy'),
  changeHP: changeHP,
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
}
**/


// Функция с замыканием для вывода номера текущего клика
function click1(cl) {
  return function() {
    cl += 1;
    return cl;
  }
}  

const clickclick = click1(0);     //счетчик кликов по кнопке Kick
const clickclick1 = click1(0);   //счетчик кликов по кнопке New

// Функция с замыканием для подсчета оставшихся кликов и ограничения кликов
function click2(cl) {
  return function() {
    cl -= 1;
    return cl;
  }
}  

const clickoff2 = click2(6);   //создание счетчика оставшихся кликов по кнопке Kick 
const clickoff3 = click2(6);   //создание счетчика кликов по кнопке New

const clickoff = click2(7);   //создание счетчика для ограничения кол-ва кликов до 6 нажатий  по кнопке Kick
const clickoff1 = click2(7);  ////создание счетчика для ограничения кол-ва кликов до 6 нажатий  по кнопке New

//обработчик для события "Клиr" по кнопке Kick, используя метод addEventListener 
$btn.addEventListener('click', function () {
  if (clickoff() > 0) {
    console.log(`Вы совершили ${clickclick()}й клик по кнопке Kick`);  //вызов фукнции с замыканием для подсчета кликов по кнопке Kick + кол-во кликов
    $btn.innerText +=  `осталось ${clickoff2()} кликов`; 
    character.changeHP(random(20));
    enemy.changeHP(random(20));
  }
  else {
    $btn.disabled = true;     //ограничение по кликам до 6
  }
});

//обработчик для события "Клик" по кнопке New, используя метод addEventListener 
$btnnew.addEventListener('click', function () {
  if (clickoff1() > 0) {
    console.log(`Вы совершили ${clickclick1()}й клик по кнопке New`); //вызов функции с замыканием для подсчета кликов по кнопке New  + кол-во кликов
    $btnnew.innerText +=  `осталось ${clickoff3()} кликов`; 
  }
  else {
    $btnnew.disabled = true;   //ограничение по кликам до 6
  }
});                  

/**
function init() {
  console.log('Start Game!');
  character.renderHP();
  enemy.renderHP();
}



function renderHP() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function renderHPLife() {
  this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
 this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count) {
  this.damageHP -= count;

  const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);
  console.log(log);

const $logs = document.getElementById('logs');
const $p = document.createElement('p');
$p.innerText = `${log}`;
$logs.insertBefore($p, $logs.children[0]);
// console.log($logs.children);

  if (this.damageHP <= count) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' проиграл бой!');
    $btn.disabled = true;
  } 

  this.renderHP();
}
**/


// лог боя
function generateLog(firstPerson, secondPerson) {
  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${firstPerson.damageHP-firstPerson.defaultHP}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${firstPerson.damageHP-firstPerson.defaultHP}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${firstPerson.damageHP-firstPerson.defaultHP}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${firstPerson.damageHP-firstPerson.defaultHP}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${firstPerson.damageHP-firstPerson.defaultHP}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${firstPerson.damageHP-firstPerson.defaultHP}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${firstPerson.damageHP-firstPerson.defaultHP}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника ${firstPerson.damageHP-firstPerson.defaultHP}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно [${secondPerson.name} случайно влепил стопой в живот соперника. ${firstPerson.damageHP-firstPerson.defaultHP}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${firstPerson.damageHP-firstPerson.defaultHP}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`
];

  return logs[random(logs.length) - 1];
}



init();