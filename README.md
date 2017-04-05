# Credit Card Reveal

Credit cards identifier from Visa, Amex, Mastercard, Diners, Discover, JCB, Switch, Solo, Dankort, Maestro, Forbrugsforeningen, Laser.

## Install

```
npm install credit-card-reveal
```

## Interface

```js
revealCard('card number');
```
A card number is passed, the name of the card or "Unknown" is returned.

## Usage

```js
revealCard = require('credit-card-reveal')

console.log(revealCard('4929255008802878')) //VISA
console.log(revealCard('4532971714778876')) //VISA

console.log(revealCard('5170651768364146')) //MasterCard
console.log(revealCard('5125796296825872')) //MasterCard

console.log(revealCard('349237692562216')) //AMEX
console.log(revealCard('375886564589009')) //AMEX

console.log(revealCard('3011286804723969')) //Diners
console.log(revealCard('3026210028069895')) //Diners
```

## Credits

[estebanrfp](https://desarrolloactivo.com/)

## License

[MIT](https://opensource.org/licenses/MIT)
