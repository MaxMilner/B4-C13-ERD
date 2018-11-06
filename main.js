function getEmployee()
  return fetch("http://localhost:3000/employee")
  .then(response => response.json() )

function getDepartment()
  return fetch("http://localhost:3000/department")
  .then(response => response.json() )

function getCPU()
  return fetch("http://localhost:3000/cpu")
  .then(response => response.json() )