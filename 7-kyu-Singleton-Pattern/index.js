class Singleton {
  constructor() {
    if (Singleton.exits) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    Singleton.exits = true;
    this.test = null;
  }
}
