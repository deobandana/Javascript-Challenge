// create variable for a data from data.js
var tableData = data;

// create variable for a table body
var tableUfo = d3.select("#ufo-table");
var ufoBody = tableUfo.select("tbody");  

// Iterate thtough tableData, add function ufo to call each item
tableData.forEach(function(ufo) {
  // create rows for each data point
  var rowUfo = ufoBody.append("tr");
  // iterate through each object inside of array and pick values only
  Object.entries(ufo).forEach(function([key, value]) {
    // create cells for each data point and add values to it 
    var cellUfo = rowUfo.append("td");
     cellUfo.text(value);
  });
});

// Select button and form tags assign listener 
var button=d3.select("#filter-btn");
var form = d3.select("form");
button.on("click", runSearch);
form.on("submit", runSearch);

// function to filter table 
function runSearch() {
  //prevent predefined html events
  d3.event.preventDefault();
  // define filter inputs
  var inputElement=d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filterTable = tableData.filter(datapoint => datapoint.datetime === inputValue);
  // log filtered results to make it visible in console
  console.log(filterTable);
  // remove previous original data in table
  ufoBody.selectAll("tr").remove();
  // iterate through filtered data and update table
  filterTable.forEach(function(ufo) {
    // create rows for each data point
    var rowNew = ufoBody.append("tr");
    // iterate through each object inside of array and pick values only
    Object.entries(ufo).forEach(function([key, value]) {
      // create cells for each data point and add values to it 
      var cellNew = rowNew.append("td");
      cellNew.text(value);
    });
  });
};
