/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpentByCategory = {};

  for (let i = 0; i < transactions.length; i += 1) {
    var transaction = transactions[i];

    if(totalSpentByCategory[transaction.category]) {
      totalSpentByCategory[transaction.category] = (totalSpentByCategory[transaction.category] + transaction.price);
    } else {
      totalSpentByCategory[transaction.category] = transaction.price;
    }
  }

  let keys = Object.keys(totalSpentByCategory);

  // Iterate through transactions to calculate total spent on each category

  let resultArray = [];
  for (let i = 0; i < keys.length; i += 1) {
    let transaction = keys[i];
    resultArray.push({category: transaction, totalSpent: totalSpentByCategory[transaction]});
  }

  return resultArray;

}

module.exports = calculateTotalSpentByCategory;
