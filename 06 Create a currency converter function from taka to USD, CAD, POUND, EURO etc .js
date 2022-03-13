/**
 * Create a currency converter function from taka to USD, CAD, POUND, EURO etc 
 */


function currencyConvt(currency, amount) {
        if (currency == 'usd') {
                return `Your total amount in usd is ${amount * 84}`
        } else if (currency == 'cad') {
                return `Your total amount in cad is ${amount * 123}`
        } else if (currency == 'pound') {
                return `Your total amount in pound is ${amount * 98}`
        } else if (currency == 'euro') {
                return `Your total amount in euro is ${amount * 87}`
        } else {
                `Please enter correct amount and currency name or your currency is not support to convert`
        }
}


console.log(currencyConvt('euro', 233));