//Employee Management System
let employees = [
  { id: 1, name: "Yonatan", department: "IT", salary: 6000 },
  { id: 2, name: "Sara", department: "HR", salary: 4500 },
  { id: 3, name: "Miki", department: "Finance", salary: 7000 },
  { id: 4, name: "Abel", department: "IT", salary: 5200 }
];
//Display All Employees
function showEmployees() {
  employees.forEach(e => console.log(e));
}

showEmployees();
//Filter Employees (Salary > 5000)
function highEarners() {
  return employees.filter(e => e.salary > 5000);
}

console.log(highEarners());
//Convaert names to upper case
function namesUpper() {
  return employees.map(e => e.name.toUpperCase());
}

console.log(namesUpper());
//calculating total salary
function totalSalary() {
  return employees.reduce((acc, e) => acc + e.salary, 0);
}

console.log("Total Salary:", totalSalary());
//add new employee
function addEmployee(id, name, department, salary) {
  employees.push({ id, name, department, salary });
}

addEmployee(5, "Lidya", "Marketing", 4800);

console.log(employees);
//finding employee by department
function findByDept(dept) {
  return employees.filter(e => e.department === dept);
}

console.log(findByDept("IT"));
//get employee name only
function employeeNames() {
  return employees.map(e => e.name);
}

console.log(employeeNames());
//update employee salary
function updateSalary(id, newSalary) {
  let emp = employees.find(e => e.id === id);
  if (emp) emp.salary = newSalary;
}

updateSalary(2, 5500);
//delete employee
function deleteEmployee(id) {
  employees = employees.filter(e => e.id !== id);
}
//sort employee by salary
function sortBySalary() {
  return [...employees].sort((a, b) => a.salary - b.salary);
}
