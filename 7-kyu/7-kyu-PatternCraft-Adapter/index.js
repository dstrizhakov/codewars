class MarioAdapter {
  constructor(mario) {
    this.mario = mario;
  }

  attack(target) {
    const damage = this.mario.jumpAttack();
    target.health -= damage;
  }
}
