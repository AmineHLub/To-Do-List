class FakeLocalStorage {
  constructor() {
    this.localArr = [];
  }

  setItem(newlocalArr) {
    this.localArr = newlocalArr;
  }

  getItem() {
    return this.localArr;
  }
}

module.exports = FakeLocalStorage;