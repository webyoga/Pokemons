class Selectors {
  constructor(name) {
	this.elHP = $getElById(`health-${name}`);
    this.elProgressbar = $getElById(`progressbar-${name}`);
  }
}

class Pokemon extend Selectors {
  constructor ({name, selectors}) {
  	super(selectors);
    this.name = name;
    this.defaultHP = 100;
    this.damageHP = 100;
    this.renderHP();
  }

 


  renderHP = () => {
    this.renderHPLife();
    this.renderProgressbarHP();
  }

  renderHPLife = () => {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
  }

  renderProgressbarHP = () => {
    this.elProgressbar.style.width = this.damageHP + '%';
  }
}


export default Pokemon; 