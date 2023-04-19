const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	// Get all the price elements from the table
const priceElements = document.querySelectorAll('.price');

// Convert the NodeList into an array and map the prices to numbers
const prices = Array.from(priceElements).map(priceElement => parseFloat(priceElement.textContent));

// Calculate the total price by adding up all the prices
const totalPrice = prices.reduce((total, price) => total + price, 0);

// Create a new row for the total price
const newRow = document.createElement('tr');

// Create a cell for the total price and set its colspan to 2
const totalCell = document.createElement('td');
totalCell.setAttribute('colspan', '2');

// Set the text content of the total cell to the total price
totalCell.textContent = `Total: Rs ${totalPrice}`;

// Append the total cell to the new row
newRow.appendChild(totalCell);

// Append the new row to the table
const table = document.querySelector('table');
table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

