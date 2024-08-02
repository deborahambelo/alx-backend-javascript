/** This module renders table based on a list of objects */


/**
 * Create an interface for a Student that has the following elements:
 * - First name (string)
 * - Last name (string)
 * - Age (number)
 * - Location (string)
 */
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
/**
 * Create a Students object with the following format:
 */
  const studentA: Student = {
    firstName: 'Benyas',
    lastName: 'Getachew',
    age: 50,
    location: 'Addis',
  }
  
  const studentB: Student = {
    firstName: 'Alex',
    lastName: 'Abebe',
    age: 45,
    location: 'Jima',
  }
/**
 * Create an array of Students
 */ 
  const studentList = [studentA, studentB];

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  studentList.forEach((obj) => { // for each student in the list
    const row = document.createElement('tr'); // create a row
    const cellName = document.createElement('td');  // create a cell for the name
    const cellLocation = document.createElement('td'); // create a cell for the location
    // set the text content of the cell to the first name
    cellName.textContent = obj.firstName;
    // set the text content of the cell to the location
    cellLocation.textContent = obj.location; 
    row.appendChild(cellName); // append the cell to the row
    row.appendChild(cellLocation); // append the cell to the row
    tbody.appendChild(row); // append the row to the tbody
  });
  table.appendChild(tbody); // append the tbody to the table
  document.body.appendChild(table); // append the table to the body
  
