## convert the contenders to objects
``` javascript
        const elon = {
        name: "Elon Musk",
        age: 52,
        occupation: "CEO of X and SpaceX",
        strength: 80,
        confidence: 100,
        health: 80
        }

        const mark = {
        name: "Mark Zuckerberg",
        age: 38,
        occupation: "CEO of Meta",
        strength: 75,
        confidence: 85,
        health: 90
        }
```
- Review exisiting functions

- write function to show all the properties of the object

- displayContenders 
    - 
    ``` javascript
    cageFight[displayContenders] = function () {
        console.log("Contenders:");

    }
    
    ```

``` javascript

const displayObjProperties = function (obj) {
  // view different ways to loop through the keys
  keys = Object.keys(obj)
  console.log(keys)

  vals = Object.values(obj)
  console.log(vals)

  // this doesn't work
  // for (let key of obj) console.log(key)

  // instead do this
  for (let key in obj) {
    console.log(obj[key])
  }

}

displayObjProperties(mark);


// display contenders For ..of example
cageFight.displayContenders = function () {
  console.log("Contenders:");
  for (const contender of this.contenders) {
    console.log(`Name: ${contender.name}, Age: ${contender.age}, Occupation: ${contender.occupation}`);
  }
}

// Start the fight
cageFight.startFight();

cageFight.displayContenders();

// Simulate the fight outcome and set the winner
let winner = Math.round(Math.random());
console.log(winner)
cageFight.winner = cageFight.contenders[winner];

// Announce the winner
cageFight.announceWinner();
  
```

Q&A

Encourage participants to practice and experiment with the concepts learned.

