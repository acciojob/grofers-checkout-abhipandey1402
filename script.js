var table = document.querySelector('table');
 var lastRow = document.createElement('tr');
 var prices = document.querySelectorAll('[data-ns-test=price]');
 let sum = 0;
 for(let i = 0; i < prices.length; i++) {
  sum += parseInt(prices[i].textContent);
 }
 var child = document.createElement("td");
 child.setAttribute('data-ns-test', 'grandTotal');
 

 child.textContent = sum;
 lastRow.appendChild(child);
 table.appendChild(lastRow);