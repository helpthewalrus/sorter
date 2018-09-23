class Sorter {

  constructor(array = []) {
    this.array = array;
    this.compareOption = (left, right) => left - right;
  }

  add(newElement) {
    this.array.push(newElement);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  
  sort(indices) {
    indices.sort((a, b) => a - b);
    let newArray = [];
    for (let p of indices) {
      newArray.push(this.array[p]);
    }
    newArray.sort(this.compareOption);
    let j = 0;
    for (let e of newArray) {
      this.array[indices[j]] = e;
      j++;
    }
  };

  setComparator(compareFunction) {
    this.compareOption = compareFunction;
  };
};
module.exports = Sorter;