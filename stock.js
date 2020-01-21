var maxProfit = function(prices) {
    let maxprofit = 0

    for (let i = 0; i < prices.length; i++) { //when comparing elements through an array, use a double for loop
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i]
            if (maxprofit < profit) {
                maxprofit = profit
            }
        }
    }

    return maxprofit
};
