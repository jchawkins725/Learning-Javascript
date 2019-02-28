function checkCashRegister(price, cash, cid) {
  var currency = [.01, .05, .1, .25, 1, 5, 10, 20, 100]
  var change = cash - price;
  var statusObj = {
    status: "",
    change: []
  };
  var amounts = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]

  for (let i=currency.length-1; i>=0; i--) {
    while (change.toFixed(2) >= currency[i]) {
      if (cid[i][1] <= 0) {
        i--;
      }
      else {
        amounts[i][1]+=currency[i];
        cid[i][1] -= currency[i];
        change -= currency[i];
      }
    }
    }
  if (change > 0) {
    statusObj.status = "INSUFFICIENT_FUNDS";
  }
  else {
    for (let j=0; j<amounts.length; j++) {
       if (amounts[j][1] > 0) {
          statusObj.change.unshift(amounts[j]);
          statusObj.status = "OPEN";
       }
  }
}
  return statusObj;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
