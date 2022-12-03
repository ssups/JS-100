function Card() {
  this.attack = Math.floor(Math.random() * 45) + 1;
  this.def = Math.floor(Math.random() * 45) + 1;
  this.average = (this.attack + this.def) / 2;
  this.rarity =
    this.average >= 40 ? "UltraRare" : this.average < 40 && this.average >= 20 ? "Rare" : "Normal";
}

// const cards = Array(5)
//   .fill(0)
//   .map(el => new Card());

const cards = new Card();
console.log(cards);

// function Upgrade(card, attribute, amount) {
//   card[attribute] += amount;
//   card["average"] = (card["attack"] + card["def"]) / 2;
//   card["rarity"] =
//     card["average"] >= 40
//       ? "UltraRare"
//       : card["average"] < 40 && card["average"] >= 20
//       ? "Rare"
//       : "Normal";
//   return card;
// }

// cards[0] = Upgrade(cards[0], "attack", 20);

// console.log(cards);

// cards.push(new Card());

// console.log(cards);

// const arr = [1, 7, 4, 2, 5];
// const newArr = arr.sort((a, b) => {
//   console.log("a:", a, " / ", "b:", b);
//   return a - b;
// });
// console.log(newArr);

const arr = Array(10)
  .fill(0)
  .map((el, ind) => ind);

console.log(arr);
const temp = arr.values();
const temp2 = arr.keys();
console.log(temp);
console.log(temp2);

function sum(...rest) {
  console.log("argumetns: ", arguments);
  console.log("rest: ", rest);
  return rest.reduce((pre, cur) => pre + cur, 0);
  // arguments : 인자들을 객체형태로 반환?
  // rest :  인자들을 원소로 가지는 배열
}
console.log(sum(1, 2, 3));
