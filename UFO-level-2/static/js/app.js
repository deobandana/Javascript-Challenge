// create variable for a data from data.js
var tableData = data;

// create variable for a table body
var tableUfo = d3.select("#ufo-table");
var ufoBody = tableUfo.select("tbody");  
var oldInput = d3.select("input");
// Iterate thtough tableData, add function ufo to call each item
tableData.forEach(function(ufo) {
  //d3.event.preventDefault();
  // create rows for each data point
  var rowUfo = ufoBody.append("tr");
  // iterate through each object inside of array and pick values only
  Object.entries(ufo).forEach(function([key, value]) {
    // create cells for each data point and add values to it 
    var cellUfo = rowUfo.append("td");
     cellUfo.text(value);
  });
});

// initial filter table data by date
var button=d3.select("#filter-btn");
var form = d3.select("form");
// listener on Filter Table button click
button.on("click", runSearch);
// listener on sumbition with keyboard ENTER button
form.on("submit", runSearch);
// define runSearch function to filter table by selected criteria
var filterTable = [];
function runSearch() {
    var filterTable = [];
    //prevent predefined html events
    d3.event.preventDefault();
    // locate input tag by class
    var inputElement = d3.select(".form-control");
    // select input value entered by client
    var inputValue = inputElement.property("value");
    //perform data filter
    if (filterTable.length >= 1){
      console.log('filtering filtered data');
      filterTable=filterTable.filter(datapoint => datapoint.datetime === inputValue);
    }else {
      console.log('new filter');
      filterTable = tableData.filter(datapoint => datapoint.datetime === inputValue);
    }
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
// add additional filter criterias in drop down menu
// define selector variable to locate drop down menu 
var selector = d3.select("#selFilter");
// create listener to run function changeFilter on drop down list change
selector.on("change", changeFilter);

// define changeFilter function including runSearch function to filter by selected column
function changeFilter() {
    // drop down menu functionality
    var newFilter = selector.node().value;
    var listInput = d3.select(".list-group-item");
    // update input tag 
    var newInput = listInput.append('input');
    var oldInput = d3.select("input");
    var label = d3.select("label");
    // switch function to update input tag as per client drop down selection
    switch(newFilter) {
        case "newFilter2":
            oldInput.remove();
            label.text("Enter a City");
            newInput.attr("class", "form-control");
            newInput.attr("id", "city");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "city");
            break;
        case "newFilter3":
            oldInput.remove();
            label.text("Enter a State");
            newInput.attr("class", "form-control");
            newInput.attr("id", "state");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "state");
            break;        
        case "newFilter4":
            oldInput.remove();
            label.text("Enter a Country");
            newInput.attr("class", "form-control");
            newInput.attr("id", "country");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "country");
            break;
        case "newFilter5":
            oldInput.remove();
            label.text("Enter Shape");
            newInput.attr("class", "form-control");
            newInput.attr("id", "shape");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "shape");
			
		
			
			
			
            break;
        default:
            oldInput.remove();
            label.text("Enter a Date from 1/1/2010 - 1/13/2010");
            newInput.attr("class", "form-control");
            newInput.attr("id", "datetime");
            newInput.attr("type", "text");
            newInput.attr("placeholder", "Your Date Here");
            break;            
    }
}
// select input tag id after tag update

// define button and form to create listener
var button=d3.select("#filter-btn");
var form = d3.select("form");
// listener on Filter Table button click
button.on("click", runSearch);
// listener on sumbition with keyboard ENTER button
form.on("submit", runSearch);
// define runSearch function to filter table by selected criteria
var filterTable = [];
function runSearch() {
    var newId = d3.select("input").attr("id");
    
    //prevent predefined html events
    d3.event.preventDefault();
    // locate input tag by class
    var inputElement = d3.select(".form-control");
    // select input value entered by client
    var inputValue = inputElement.property("value");
    var inputValue = inputValue.toLowerCase();
    //perform data filter
    if (filterTable.length >= 1){
      console.log('filtering filtered data');
      filterTable = filterTable.filter(datapoint => datapoint[newId] === inputValue);
    }else {
      console.log('new filter');
      filterTable = tableData.filter(datapoint => datapoint[newId] === inputValue);
    }
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

var resButton=d3.select("#reset-btn");
resButton.on("click", resetFilters);

function resetFilters(){
  location.reload();
}

