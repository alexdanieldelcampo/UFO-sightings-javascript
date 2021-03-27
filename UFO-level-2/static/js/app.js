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

form.on("submit", runFilter);

function runFilter() {

    // Prevent the page from refreshing
  d3.event.preventDefault();

    // Select the input element and get the raw HTML node
  
  var date_input = d3.select("#datetime");
  var city_input = d3.select("#city");
  var state_input = d3.select("#state");
  var country_input = d3.select("#country");
  var shape_input = d3.select("#shape");

  // Get the value property of the input element
 

  var date_value = date_input.property("value").trim();
  var city_value = city_input.property("value").toLowerCase()
  var state_value = state_input.property("value").toLowerCase().trim();
  var country_value = country_input.property("value").toLowerCase().trim();
  var shape_value = shape_input.property("value").toLowerCase().trim();

  

  


  
  
// this is in case the user enters nothing into the form
  if (date_value === "" && city_value === "" && state_value == "" && country_value === "" && shape_value === "") {
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

    
    
    
    var filteredData = tableData


      
    // this is to allow the dataset to be filtered by all 5 inputs.
    if (date_value !== ""){
      var filteredData = filteredData.filter(sighting => sighting.datetime === date_value)
    } 
    if (city_value !== "") {
      var filteredData = filteredData.filter(sighting => sighting.city === city_value)
    }
    if (state_value !== ""){
      var filteredData = filteredData.filter(sighting => sighting.state === state_value)
    }
    if (country_value !== "") {
      var filteredData = filteredData.filter(sighting => sighting.country === country_value)
    }
    if (shape_value !== "") {
      var filteredData = filteredData.filter(sighting => sighting.shape === shape_value)
    }
    console.log(filteredData.length)
        
    if (filteredData.length == 0){
      tbody.append("tr").append("td").text("No sightings with those entries in this dataset.");
    }



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