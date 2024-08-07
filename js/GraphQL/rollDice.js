// Instead of this:
// const fetch = require('node-fetch');

// Use this:
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var dice = 3;
var sides = 6;
var query = `query RollDice2($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;
 
fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: { dice, sides },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', JSON.stringify(data)));