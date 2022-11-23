const getAccountBalance = (callback) => {
  const balance = 25000;
  const bankIsAvailable = true;

  setTimeout(() => {
    if (bankIsAvailable) {
      return callback(balance);
    }
    throw new Error("Bank is unavailable at this moment");
  }, 1000);
}

const buyItem = (money) => {
  const itemPrice = 100;

  setTimeout(() => {
    if (money > itemPrice) {
      return console.log(true);
    }
    throw new Error("Insufficient funds");
  }, 500);
}

getAccountBalance(buyItem);
