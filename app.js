// import functions and grab DOM elements
import { records } from './records-data.js';
import { renderRecord } from './records-data.js';
// let state
console.log(renderRecord(records[0]));

for (let record of records) {
    const recordsDiv = document.getElementById('records');

    const recordDiv = renderRecord(record);
    recordsDiv.append(recordDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
