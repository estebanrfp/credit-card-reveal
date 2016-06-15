Credit Card Reveal
=============
Identifica correctamente las tarjetas de Visa, Amex, Mastercard, Diners, Discover, JCB, Switch, Solo, Dankort, Maestro, Forbrugsforeningen, láser.

Interface
-----
```js
revealCard('card number');
```
Se pasa un número de tarjeta, devolverá el nombre de la tarjeta o "Unknown".

Usage
-----
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

contribuyendo
------------
Todas las contribuciones son bienvenidas.
Indica a continuación las pruebas para demostrar los cambios

LICENSE
-------

