const getAccountBalance = () => {
  return new Promise((resolve, reject) => {
    const balance = 25000;
    const bankIsAvailable = true;

    setTimeout(() => {
      if (bankIsAvailable) {
        resolve(balance);
      }
      reject("Bank is unavailable at this moment");
    }, 1000);
  });
}

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

const app = async () => {
  try {
    const balance = await getAccountBalance();
    const wasItemBought = await buyItem(balance);
    console.log(wasItemBought);
  } catch (error) {
    console.log(error);
  }
}

app();
