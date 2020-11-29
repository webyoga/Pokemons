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
    this.defaultHP = 100;
    this.damageHP = 100;
    this.renderHP();
  }

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressbarHP();
  }

  renderHPLife = () => {
<<<<<<< HEAD
    this.elHP.innerText = this.hp + ' / ' + this.defaultHP;
  }

  renderProgressbarHP = () => {
    this.elProgressbar.style.width = this.hp + '%';
  }

  changeHP = (count, cb) => {
      this.hp -= count;
      if (this.hp <= count) {
        this.hp = 0;
=======
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
  }

  renderProgressbarHP = () => {
    this.elProgressbar.style.width = this.damageHP + '%';
  }

  changeHP = (count, cb) => {
      this.damageHP -= count;
      if (this.damageHP <= count) {
        this.damageHP = 0;
>>>>>>> 98633b0d6abddc442a7ebae8d965bfbde26aa00e
      }
      this.renderHP();
      cb && cb();
    };
}


export default Pokemon; 