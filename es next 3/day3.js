// task1
var obj = {
    name: "",
    address: "",
    age: 0,
  };


  var handler = {
    get: function (target, prop) {
      if (prop in target) {
        return target[prop];
      } else {
        throw "Sorry Properity not found";
      }
    },
    set: function (target, prop, value) {
      if (prop == "name") {
        if (typeof value != "string" || value.length != 7) {
          throw "Invaild value for Name";
        }
      }
  
      if (prop == "address") {
        if (typeof value != "string") {
          throw "Invaild value for Address";
        }
      }
  
      if (prop == "age") {
        if (!Number.isInteger(value) || value < 25 || value > 60) {
          throw "Invaild value for age";
        }
      }
      target[prop] = value;
    },
  };
  
  var newObj = new Proxy(obj, handler);
  
  newObj.name = "ahmedee";
  newObj.address = "mmmmmmmmmmmmmmmmmmmmmmmm";
  newObj.age = 27;
  
  console.log(newObj);

// task3
const myObject = {
    name: "ahmed",
    age: 25,
    favSkill: "esnext",
    [Symbol.iterator]() {
      let step = 0;
      let properties = Object.keys(this);
  
      return {
        next() {
          return {
            value: `${properties[step]}:${myObject[properties[step]]}`,
            done: step++ === properties.length,
          };
        },
      };
    },
  };
  
  for (let k of myObject) {
    console.log(k);
  }
  
  