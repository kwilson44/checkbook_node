var CheckbookAPI = require("../lib/checkbook");
var Checkbook = new CheckbookAPI({
    api_key: '0d1cc1304a174710a58c2e59d9cd8c0b',
    api_secret: '3gP9Q8vRUwGIvBYaGv8FiqRxlKa8X1',
    env: 'demo'
});

/*
 Get sent/received invoices
 https://docs.checkbook.io/reference#get-invoices
 */

Checkbook.invoices.list({
    page: 1,
    per_page: 10
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});



/*
 Get the specified invoice
 https://docs.checkbook.io/reference#get-invoice
 */
/*
Checkbook.invoices.get('929b8b25fc2b4bb5b90ef8c863b363fd', function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Void the specified invoice
 https://docs.checkbook.io/reference#delete-invoice
 */
/*
Checkbook.invoices.delete('929b8b25fc2b4bb5b90ef8c863b363fd', function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/


/*
 Create invoice
 https://docs.checkbook.io/reference#post-invoice
 */

Checkbook.invoices.sendInvoice({
    name: 'Fresh Buddy',
    recipient: 'stemgirl3000@gmail.com',
    description: 'Thank you for shopping with Fresh Buddy',
    amount: 5.00
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});



/*
 Create invoice (with idempotency key)
 https://docs.checkbook.io/reference#post-invoice
 */

 /*
Checkbook.invoices.sendInvoice({
    name: 'Fresh Buddy',
    recipient: 'Jennifer Song',
    description: 'Test Send Invoice',
    amount: 10.00
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
}, '123456789');

*/

/*
 Pay invoice
 https://docs.checkbook.io/reference#post-invoice-payment
 */
/*
Checkbook.invoices.payInvoice({
    id: 'bcba746d677f48fcb68f411c40ff694d',
    amount: 10.00
}, function (error, response) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Response:', response);
    }
});
*/