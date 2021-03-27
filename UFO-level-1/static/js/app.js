// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody")

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

tableData.forEach((sighting) => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
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
  var inputValue = inputElement.property("value").trim();

  console.log(inputValue);
  console.log(tableData);
// this is in case the user enters nothing into the form
  if (inputValue === "") {
    tbody.html("");

    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  }


    else {
        var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

        console.log(filteredData);



        // clear the table
        tbody.html("");

        // fill table with filtered data
        filteredData.forEach((sighting) => {

            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });

        });

    } 


};