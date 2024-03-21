/*   Final Exercise: Build a Cash Register Machine
Let's build a cash register machine that can add items to a shopping cart, calculate total price, calculate discounts, and accept payment by cash.

The currency is assumed in USD, so you don't need to add it to the program.

The cash register has 3 items for sale:

Phone for 300
Smart TV for 220
Gaming Console for 150
There's a 10% discount when the total price is higher than 400.

The cash register should have a shopping cart that starts empty.

The cash register should provide a method called addItem that takes the name of an item as a parameter. When called, it should check if the item is available for sale. If it is, the item should be added to the shopping cart. If it is not available, show a message saying we don't sell that item.

The cash register should provide a method called calculateTotalPrice that calculates the total price of all the items in the shopping cart. It should iterate over the items in the shopping cart and sum up their prices.

The cash register should provide a method called pay that takes the payment amount as a parameter.

It should calculate the total price of the items in the shopping cart using the calculateTotalPrice method. If the total price is higher than 400, a 10% discount should be applied.

The method should then compare the payment amount with the total price (after applying the discount) and display an appropriate message:

If the payment amount is equal to or greater than the total price, it should display a message thanking the customer for the purchase. If there is any change, it should also display the amount of change to be given.
If the payment amount is less than the total price, it should display a message indicating that the customer does not have enough money to purchase the items.
The program should include appropriate console.log() statements to display messages for adding items to the shopping cart, displaying the total price, and processing the payment.
The program should handle scenarios where the customer's payment amount is exactly equal to the total price, as well as cases where the payment amount is greater or less than the total price.

To build the program, you need to use what you've learned about objects, arrays, conditionals, and loops.

I recommend that you try building the program yourself first. If you get stuck, then see the provided solution below. Good luck!  */