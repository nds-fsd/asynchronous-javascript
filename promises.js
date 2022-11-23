const getAccountBalance = new Promise((resolve, reject) => {
  const balance = 25000;
  const bankIsAvailable = true;

  setTimeout(() => {
    if (bankIsAvailable) {
      resolve(balance);
    }
    reject("Bank is unavailable at this moment");
  }, 1000);
});

const buyItem = (money) => {
  return new Promise((resolve, reject) => {
    const itemPrice = 100;

    setTimeout(() => {
      if (money > itemPrice) {
        resolve(true);
      }
      reject("Insufficient funds");
    }, 500);
  })
}

getAccountBalance
  .then((accountBalance) => {
    return buyItem(accountBalance);
  })
  .then((wasItemBought) => {
    console.log(wasItemBought);
  })
  .catch((error) => {
    console.log(error);
  });
