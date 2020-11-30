class Selectors {
  constructor(name) {
	this.elHP = document.getElementById(`health-${name}`);
  this.elProgressbar = document.getElementById(`progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor ({name, hp, type, selectors, attacks}) {
  	super(selectors);
    this.name = name;
    this.hp = hp;
    this.type = type;
    this.attacks = attacks;
    this.defaultHP = hp;
    this.renderHP();
  }

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressbarHP();
  }

  renderHPLife = () => {
    this.elHP.innerText = this.hp + ' / ' + this.defaultHP;
  }

  renderProgressbarHP = () => {
    this.elProgressbar.style.width = ((this.hp * 100) / this.defaultHP)  + '%';
  }

  changeHP = (count, cb) => {
      this.hp -= count;
      if (this.hp <= count) {
        this.hp = 0;
      }
      this.renderHP();
      cb && cb();
    };
}


export default Pokemon; 