'use strict';

// Map
// Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.
// Получите список ключей и значений отдельно.
// Получите текущее количество элементов.
// Добавьте и удалите элемент
// Произведите поиск по ключу

const animals = [
  ['red', 'cat'], 
  ['white', 'dog'], 
  ['yellow', 'snake'], 
  ['brown', 'cow'], 
  ['grey', 'goat']
];
const plants = [
  ['tall', 'palm'], 
  ['slim', 'birch'], 
  ['pink', 'rose'], 
  ['old', 'oak'], 
  ['juicy', 'bamboo']
];
const animalsAndPlantsMap = new Map([...animals, ...plants]);
console.log(animalsAndPlantsMap);
console.log(animalsAndPlantsMap.keys());
console.log(animalsAndPlantsMap.values());
console.log(animalsAndPlantsMap.size);
console.log(animalsAndPlantsMap.delete('grey'));
console.log(animalsAndPlantsMap.set('cheerful', 'monkey'));
console.log(animalsAndPlantsMap.has('brown'));


// Set

// Создайте коллекцию Set с начальными значениями 1,2,3. 
// С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.
// Добавите еще несколько элементов.
// С помощью цикла for-of переберите ее значения и выведите в консоль.
// Найдите сумму этих значений.
// Удалите элемент 2.
// Очистите всю коллекцию.

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet.has(3));
console.log(mySet.has(4));
mySet.add(4);
mySet.add(5);


for(const item of mySet) {
  console.log(item);
}


let sum = 0;
for(const item of mySet) {
  sum += item;
}
console.log(sum); 


mySet.delete(2);
mySet.clear();

// MyArray


// * Сделать MyArray итерируемым.

class myArray {
  constructor() {
    if (!new.target) {
      return new myArray();
    }
    this.length = 0;
  }
  push(...items) {
    for (let i = 0; i < items.length; i++) {
      this[this.length++] = items[i];
    }
    return this.length;
  }
  unshift(...items) {
    this.length = this.length + items.length;
    for (let i = this.length - 1; i >= items.length; i--) {
      this[i] = this[i - items.length];
    }
    for (let i = items.length - 1; i >= 0; i--) {
      this[i] = items[i];
    }
    return this.length;
  }
  [Symbol.iterator] = function() {
    return {
      index: 0,
      length: this.length,
      myArr: this,
      next() {
        if (this.index < this.length) {
          return {done: false, value: this.myArr[this.index++]};
        } else {
          return {done: true};
        }
      }
    };
  };
}

const arr = new myArray();
arr.push(1, 2, 3);
console.log(arr);
for(let num of arr) {
  console.log(num);
}