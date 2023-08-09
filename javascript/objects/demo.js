const cageFight = {
  contenders: [elon, mark],
  venue: "Thunderdome Arena",
  date: "2023-08-15",
  rules: [
    "No weapons allowed",
    "No biting or eye-gouging"
  ],
  winner: null,
  fightInProgress: true,
  startFight: function () {
    console.log("The cage fight between Elon Musk and Mark Zuckerberg has begun!");
  },
  announceWinner: function () {
    if (!this.fightInProgress) {
      if (this.winner) {
        console.log(`${this.winner.name} wins the cage fight!`);
      } else {
        console.log("The cage fight ended in a draw.");
      }
    } else {
    console.log("The cage fight is still in progress.");
    }
  }
};
