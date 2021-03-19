// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody")

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

data.forEach((tableData) => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

button.on("click", runFilter);
form.on("submit",runFilter);

function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

};