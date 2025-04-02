import fs from "fs";

// const data = {
//   name: "tanish",
//   plannet: "eath",
//   age: 27,
// };
// const details = JSON.stringify(data);
// fs.writeFileSync("json.json", details);

const details = fs.readFileSync("json.json");
console.log(details.toString());
const data = JSON.parse(details);

data.name = "vansh";
data.age = 22;

const userJson = JSON.stringify(data);
fs.writeFileSync("json.json", userJson);
