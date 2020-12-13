import Pokemon from "./pokemon.js";  //получение класса Pokemon в main.js
import random from "./random.js";    //получение функции random в main.js

class Game {
  getPokemons = async () => {
    const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
    const body = await responce.json();
    return body;
  }
  
  start = async () => {

    function $getElById(id) {
      return document.getElementById(id);
    }

    const pokemons = await this.getPokemons();
    console.log(pokemons);

    const pl1 = pokemons[random(pokemons.length)-1];
    const pl2 = pokemons[random(pokemons.length)-1];
    console.log(pl1.id);
    console.log(pl2.id);

    const m1 = pl1.id;
    const m2 = pl2.id;

    const img1 = document.getElementById('img-player1');
    img1.src = pl1.img; 

    const img2 = document.getElementById('img-player2');
    img2.src = pl2.img; 

    const name1 = document.getElementById('name-player1');

    name1.innerText = `${pl1.name}`;

    const name2 = document.getElementById('name-player2');
    name2.innerText = `${pl2.name}`;

    const player1 = new Pokemon ({
      ...pl1,
      selectors: 'player1',
    });

    function selfRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const $control1 = document.querySelector('.player-control1');
    const $control2 = document.querySelector('.player-control2');


    player1.attacks.forEach(item => {
      console.log(item);
      const $btn = document.createElement('button');
      $btn.classList.add('button');
      $btn.innerText = item.name;
      const btnCount = countclick($btn, item.maxCount);
      $btn.addEventListener('click', async () => {
        const fightid = item.id;
        console.log(m1, fightid, m2);
        async function getFights () {
          const responce = await fetch('https://reactmarathon-api.netlify.app/api/fight?player1id=' + m1 + '&attackId=' + fightid + '&player2id=' + m2 + ' ');
          console.log(responce);
          const body = await responce.json();
          console.log(body);
          return body;
        } 
        const fights = await getFights(); 
        console.log(fights);
        console.log('Click button ', $btn.innerText);
        btnCount();
        player2.changeHP(fights.kick.player2, function () {
          console.log(fights.kick.player2);
          addLogs(player2, player1);
        });
        checkLooser();
      });
      $control1.appendChild($btn);
    });


    const player2 = new Pokemon ({
      ...pl2,
      selectors: 'player2',
    });

    player2.attacks.forEach(item => {
      console.log(item);
      const $btn = document.createElement('button');
      $btn.classList.add('button');
      $btn.innerText = item.name;
      const btnCount = countclick($btn, item.maxCount);
      $btn.addEventListener('click', async () => { 
        const fightid = item.id;
        console.log(m1, fightid, m2);
        async function getFights () {
          const responce = await fetch('https://reactmarathon-api.netlify.app/api/fight?player1id=' + m1 + '&attackId=' + fightid + '&player2id=' + m2 + ' ');
          console.log(responce);
          const body = await responce.json();
          console.log(body);
          return body;
        } 
        const fights = await getFights(); 
        console.log(fights);
        console.log('Click button ', $btn.innerText);
        btnCount();
        player1.changeHP(fights.kick.player1, function () {
          console.log(fights.kick.player1);
          addLogs(player1, player2);
        });
        checkLooser();
      });
      $control2.appendChild($btn);
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

    function checkLoose(player) {
      if (player.hp === 0) {
        console.log(player.hp);
        const $logs = document.getElementById('logs');
        const $p = document.createElement('p');
        $p.innerText = `Бедный ${player.name} проиграл бой!`;
        $logs.insertBefore($p, $logs.children[0]);
        return true;
      }
      return false;
    }

    function checkLooser() {
      if (checkLoose(player1) || checkLoose(player2)) {
        const allButtons = document.querySelectorAll('.control-buttons .button');
        allButtons.forEach($item => $item.remove());
        startgame();
      }
    }
    function startgame() {
      const $btn2 = document.createElement('button');
      $btn2.classList.add('button');
      $btn2.innerText = 'START';
      $btn2.addEventListener('click', () => {
        console.log('Click button ', $btn2.innerText);
        location.reload();
      });
      $control1.appendChild($btn2);
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
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${firstPerson.hp-firstPerson.defaultHP}, [${firstPerson.hp}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${firstPerson.hp-firstPerson.defaultHP}, [${firstPerson.hp}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${firstPerson.hp-firstPerson.defaultHP}, [${firstPerson.hp}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${firstPerson.hp-firstPerson.defaultHP}, [${firstPerson.hp}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${firstPerson.hp-firstPerson.defaultHP}, [${firstPerson.hp}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${firstPerson.hp-firstPerson.defaultHP}, [${firstPerson.hp}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${firstPerson.hp-firstPerson.defaultHP}, [${firstPerson.hp}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. ${firstPerson.hp-firstPerson.defaultHP}, [${firstPerson.hp}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно [${secondPerson.name} случайно влепил стопой в живот соперника. ${firstPerson.hp-firstPerson.defaultHP}, [${firstPerson.hp}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${firstPerson.hp-firstPerson.defaultHP}, [${firstPerson.hp}/${firstPerson.defaultHP}]`,
      ];

      return logs[random(logs.length) - 1];
    }

  }
}

const game = new Game();
game.start();
