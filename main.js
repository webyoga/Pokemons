function $getElById(id) {
  return document.getElementById(id);
}
const $btn = $getElById('btn-kick');
const character = {
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

// пример применения деструктуризации (теория) 

let {defaultHP: defaultHP1, damageHP: damageHP1} = character;  //присвоил свойста объекта defaultHP и damageHP перменным defaultHP1 и damageHP1

let {defaultHP: defaultHP2, damageHP: damageHP2} = enemy;    //присвоил свойста объекта defaultHP и damageHP перменным defaultHP1 и damageHP1


$btn.addEventListener('click', function () {
  console.log('Kick');
  character.changeHP(random(20));
  enemy.changeHP(random(20));
});

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



function random(num) {
  return Math.ceil(Math.random() * num);
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



init();