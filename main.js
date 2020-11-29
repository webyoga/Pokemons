import Pokemon from "./pokemon.js";  //получение класса Pokemon в main.js
import random from "./random.js";    //получение функции random в main.js
import {pokemons} from "./pokemons.js";  //получение переменной в кот записан массив с атаками

function $getElById(id) {
  return document.getElementById(id);
}
/*
const $btnnew = $getElById('btn-new');  //кнопка New

const $btn = $getElById('btn-kick');
*/

const pikachu = pokemons.find(item => item.name === 'Pikachu');

const player1 = new Pokemon ({
  ...pikachu,
  selectors: 'player1',
<<<<<<< HEAD
});

const $control = document.querySelector('.control');

player1.attacks.forEach(item => {
  console.log(item);
  const $btn = document.createElement('button');
  $btn.classList.add('button');
  $btn.innerText = item.name;
  const btnCount = countclick($btn, item.maxCount);
  $btn.addEventListener('click', () => {
    console.log('Click button ', $btn.innerText);
    btnCount();
    player1.changeHP(random(20), function () {
    addLogs(player1, player2);
  });
  player2.changeHP(random(20));
  checkLooser();
=======
>>>>>>> 98633b0d6abddc442a7ebae8d965bfbde26aa00e
});
  $control.appendChild($btn);
});



const player2 = new Pokemon ({
<<<<<<< HEAD
   name: 'Charmonder',
  selectors: 'player2',
=======
  name: 'Charmonder',
  selectors: 'player2',
});

const $control = document.querySelector('.control');

player1.attacks.forEach(item => {
  console.log(item);
  const $btn = document.createElement('button');
  $btn.classList.add('button');
  $btn.innerText = item.name;
  const btnCount = countclick($btn, item.maxCount);
  $btn.addEventListener('click', () => {
    console.log('Click button ', $btn.innerText);
    btnCount();
  });
  $control.appendChild($btn);


>>>>>>> 98633b0d6abddc442a7ebae8d965bfbde26aa00e
});





function countclick(el, count = 6) {
  const innerText = el.innerText;
  el.innerText = `${innerText} (${count})`;
  return function () {
    count--;
    if (count === 0) {
      el.disabled = true;
    }
    el.innerText = `${innerText} (${count})`;
    return count;
  };
}

const countclick1 = countclick($btn);
const countclick2 = countclick($btnnew);


//обработчик для события "Клик" по кнопке Kick, используя метод addEventListener 
$btn.addEventListener('click', function () {
  countclick1();
  player1.changeHP(random(20), function () {
    addLogs(player1, player2);
  });
  player2.changeHP(random(20));
  checkLooser();
});

//обработчик для события "Клик" по кнопке New, используя метод addEventListener 
$btnnew.addEventListener('click', function () {
  countclick2();
  player1.changeHP(random(20));
  player2.changeHP(random(20), function () {
    addLogs(player2, player1);
  });
  checkLooser();
});      

function checkLoose(player) {
  if (player.hp === 0) {
    const $logs = document.getElementById('logs');
    const $p = document.createElement('p');
    $p.innerText = `Бедный ${player.name} проиграл бой!`;
    $logs.insertBefore($p, $logs.children[0]);
//    alert('Бедный ' + player.name + ' проиграл бой!');
    return true;
  }
  return false;
}

function checkLooser() {
  if (checkLoose(player1) || checkLoose(player2)) {
    const allButtons = document.querySelectorAll('.control .button');
    allButtons.forEach(item => console.log(item));
    startgame();
  }
}  

//начало игры
function startgame() {
  const $btn2 = document.createElement('button');
  $btn2.classList.add('button');
  $btn2.innerText = 'START';
  $btn2.addEventListener('click', () => {
    console.log('Click button ', $btn2.innerText);
    location.reload();
  });
  $control.appendChild($btn2);
}


function addLogs(pl1, pl2) {
  const $logs = $getElById('logs');
  const $p = document.createElement('p');
  $p.innerText = generateLog(pl1, pl2);
  $logs.insertBefore($p, $logs.children[0]);
}

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
