//1  a & b

const api = `https://jsonplaceholder.typicode.com/users/`;

const getData = async function () {
  const container1 = document.getElementById("container1");
  try {
    const res = await fetch(api);
    if (!res.ok) throw new Error("Problem getting users");

    const usersData = await res.json();
    console.log(usersData);

    usersData.map((user) => {
      container1.innerHTML += `
      <div class="row" >
          <button class="col btn btn-primary mb-2" type="button" onclick="getUser(${user.id})">${user.name}</button>
      </div>`;
    });
  } catch (err) {
    console.log(`${err}🧨🧨🧨`);
  }
};

getData();

const getUser = async function (id) {
  const container2 = document.getElementById("container2");
  try {
    const response = await fetch(`${api}?id=${id}`);
    if (!response.ok) throw new Error("Problem getting users with id");

    const jsonData = await response.json();
    console.log(jsonData);
    container2.innerHTML = `
    <div class="m-0 container-fluid bg-light p-3">
    <h2 class="text-center text-success">Name: ${jsonData[0].name}</h2>
    <h4 class="text-center text-success">Email: ${jsonData[0].email}</h4>
    <p class="p-0 m-0 fs-5 text-center text-success">Adrress: ${jsonData[0].address["city"]}, ${jsonData[0].address["street"]}</p>
    <p class="p-0 m-0 fs-5 text-center text-success">Company: ${jsonData[0].company["name"]}</p>
    <p class="p-0 m-0 fs-5 text-center text-success">Phone: ${jsonData[0].phone}</p>
    <p class="p-0 m-0 fs-5 text-center text-success">Website: ${jsonData[0].website}</p>
    </div>
    `;
  } catch (err) {
    console.log(`${err}🧨🧨🧨`);
  }
};

///////////////////////////////////////////////////////////// 3 ///////////////////////////////////////////////////////////////

// const ordersSet = new Set([
//   "Javascript",
//   "CSS",
//   "CSS",
//   "Jquery",
//   "Javascript",
//   "CSS",
// ]);

// console.log(ordersSet);
// console.log(new Set("Eyad"));
// console.log(new Set(["Eyad"]));
// console.log(ordersSet.size);
// console.log(ordersSet.has("Javascript"));
// ordersSet.add("CSS");
// ordersSet.delete("Jquery");
// ordersSet.clear();
// console.log(ordersSet);
// console.log(ordersSet[0]); //no indexes in set

// for (const order of ordersSet) {
//   console.log(order);
// }

// const staff = [
//   "Engineer",
//   "Teacher",
//   "Engineer",
//   "Manager",
//   "Teacher",
//   "Engineer",
// ];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set("Mohamed").size);

///////////////////////////////////////////////////////////////////  4  ////////////////////////////////////////////////////

// const student = new Map();

// student.set("Mohamed", {
//   Grades: [
//     { Coursename: "JavaScript", Grade: "Excellent" },
//     { Coursename: "Jquery", Grade: "Good" },
//     { Coursename: "CSS", Grade: "V.Good" },
//   ],
// });

// student.set("Ahmed", {
//   Grades: [
//     { Coursename: "JavaScript", Grade: "Good" },
//     { Coursename: "Jquery", Grade: "Good" },
//     { Coursename: "CSS", Grade: "V.Good" },
//   ],
// });

// for (const elem of student) {
//   elem.forEach((element) => {
//     console.log(element);
//   });
// }
