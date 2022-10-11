function Card() {
  this.attack = Math.floor(Math.random() * 45) + 1;
  this.def = Math.floor(Math.random() * 45) + 1;
  this.average = (this.attack + this.def) / 2;
  this.rarity =
    this.average >= 40 ? "UltraRare" : this.average < 40 && this.average >= 20 ? "Rare" : "Normal";
}

const cards = Array(5)
  .fill(0)
  .map(el => new Card());

console.log(cards);

function Upgrade(card, attribute, amount) {
  card[attribute] += amount;
  card["average"] = (card["attack"] + card["def"]) / 2;
  card["rarity"] =
    card["average"] >= 40
      ? "UltraRare"
      : card["average"] < 40 && card["average"] >= 20
      ? "Rare"
      : "Normal";
  return card;
}

cards[0] = Upgrade(cards[0], "attack", 20);

console.log(cards);

cards.push(new Card());

console.log(cards);

export { Card, Upgrade };
