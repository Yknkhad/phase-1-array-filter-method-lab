// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
}
function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
}
const drivers = [
    { name: "mike", hometown: "england" },
    { name: "alex", hometown: "San Francisco" },
    { name: "Sally", hometown: "Los Angeles" },
    { name: "steve", hometown: "Chicago" },
    { name: "john", hometown: "Boston" }
];

console.log(findMatching(["john", "alex", "Sally", "steve", "john"], "john"));
console.log(fuzzyMatch(["john", "alex", "Sally", "steve", "john"], "Sa"));
console.log(matchName(drivers, "john"));







