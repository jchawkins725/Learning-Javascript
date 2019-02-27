function checkCashRegister(price, cash, cid) {
  var currency = [.01, .05, .1, .25, 1, 5, 10, 20, 100]
  var change = cash - price;
  var statusObj = {
    status: "",
    change: []
  };
  var amounts = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]

  for (let i=currency.length-1; i>=0; i--) {
    while (change >= currency[i]) {
      cid[i][1] -= currency[i];
      amounts[i][1]+=currency[i];
      statusObj.status = "OPEN";
      statusObj.change = [amounts[i]];
      change -= currency[i];
      }
    }
  //statusObj.status = "INSUFFICIENT_FUNDS";
  //statusObj.change = [];
  return statusObj;

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
