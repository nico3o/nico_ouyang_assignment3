const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",
    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];

const table = document.getElementById("tableData");
for (let body of tableInfo) {
  let tr = document.createElement("tr");
  table.appendChild(tr);
  for (let data in body) {
    let td = document.createElement("td");
    td.innerText = body[data];
    tr.appendChild(td);
  }
}

//Question 2
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

//Order List
const number = document.getElementById("number");
let ol = document.createElement("ol");
number.appendChild(ol);
for (let data of list) {
  let li = document.createElement("li");
  li.innerText = data;
  ol.appendChild(li);
}

//Unorder List
const point = document.getElementById("point");
let ul = document.createElement("ul");
point.appendChild(ul);
for (let data of list) {
  let li = document.createElement("li");
  li.innerText = data;
  ul.appendChild(li);
}

//Question 3
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let select = document.createElement("select");
document.getElementById("dropdown").appendChild(select);
dropDownList.forEach((ele) => {
  select.options.add(new Option(ele.content, ele.value));
});
