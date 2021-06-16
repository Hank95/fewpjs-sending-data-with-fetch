// Add your code here
const submitData = function (userName, userEmail) {
  const createData = {
    name: userName,
    email: userEmail,
  };
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(createData),
  };
  return fetch("http://localhost:3000/users", configObject)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      renderId(json);
    })
    .catch((message) => {
      body.append(message);
    });
};
const body = document.querySelector("body");

const renderId = function (json) {
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  let id = json.id;
  li1.innerText = json.name;
  li2.innerText = json.email;
  // body.append(ul);
  body.append(id, li1, li2);
  console.log(json);

  // li1.innerText = json[1].name;
  // li2.innerText = json[1].email;
};
// console.log(submitData());

// fetch("http://localhost:3000/dogs")
//   .then((request) => request.json())
//   .then((json) => {
//     console.log(json[json.length - 1].dogName);
//     json.forEach((j) => {
//       console.log(j.id);
//       console.log(json[json.length - 1]);
//     });
//     // if (json.id=== json.length){
//     //   console.log();
//     // }
//   });
document.addEventListener("DOMContentLoaded", () => {
  console.log(submitData("herny", "Email"));
});
console.log();
