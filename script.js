//(My new found Js boiler plate)
const log = console.log.bind(console);
// The first stage - transform raw data into a formatted array of objects according to a specification.

// The second stage - use the output from the first stage to provide a textual report on the data.

// Objectives
// Use arrays to store ordered lists of data.
// Use objects to store keyed lists of data.
// Use conditional logic to process data.
// Use loops to handle repetitive tasks.
// Transform data according to specifications.

// Part 1: Refactoring Old Code
// Sample CSV data
let demoData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Function to parse CSV
function parseCSV(data) {
  // Split the data into rows using newline
  let rows = data.split("\n");

  // This will hold our final array of arrays
  let tableArray = [];

  // Loop through each row and split it by commas
  for (let i = 0; i < rows.length; i++) {
    // Split each row into cells
    let cells = rows[i].split(",");

    // Add the cells to the table array
    tableArray.push(cells);
  }
  return tableArray; // Return the two-dimensional array
}

// Call the function and store the result
let tableArray = parseCSV(demoData);

// Print the result
log(tableArray);

// Part 2: Expanding Functionality

// Get the number of columns from the first row
// Length of the first row gives us the number of columns
let columnCount = tableArray[0].length;

// Print the number of columns
log(`Number of columns: ${columnCount}`);

// Part 3: Transforming Data
// Function to convert rows into objects
function transformToObjects(tableArray) {
  // Get headers in lowercase
  let headers = tableArray[0].map((header) => header.toLowerCase());

  // This will hold our objects
  let objectsArray = [];

  // Loop through each row (skip the first row which is headers)
  for (let i = 1; i < tableArray.length; i++) {
    // Create a new object for each row
    let rowObject = {};
    for (let j = 0; j < headers.length; j++) {
      // Assign values to keys
      rowObject[headers[j]] = tableArray[i][j];
    }
    // Add the object to the array
    objectsArray.push(rowObject);
  }
  // Return the array of objects
  return objectsArray;
}

// Call the function
let newTableArray = transformToObjects(tableArray);

// Print the array of objects
log(newTableArray);

// Part 4: Sorting and Manipulating Data
// Remove the last object

// This removes the last entry
newTableArray.pop();

// Add a new object at index 1
newTableArray.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});

// Add another object at the end
newTableArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Calculate average age
// Start with zero
let totalAge = 0;
for (let person of newTableArray) {
  // Add each person's age to totalAge
  totalAge += Number(person.age);
}
// Calculate average
let averageAge = totalAge / newTableArray.length;

// Print the average
log(`Average age of the group is ${averageAge}.`);

// Show the updated array
log(newTableArray);

// Part 5: Full Circle
// Function to convert objects back to CSV format
function arrayToCSV(objectsArray) {
  // Get the keys from the first object
  let headers = Object.keys(objectsArray[0]);

  // Start with the header row
  let csvRows = [headers.join(",")];

  // Loop through each object
  for (let obj of objectsArray) {
    // Create a row from object values
    let row = headers.map((header) => obj[header]).join(",");

    // Add the row to csvRows
    csvRows.push(row);
  }
  // Join all rows with a newline
  return csvRows.join("\n");
}

// Call the function
let finalCSV = arrayToCSV(newTableArray);

// Print the final CSV format
log(finalCSV);
