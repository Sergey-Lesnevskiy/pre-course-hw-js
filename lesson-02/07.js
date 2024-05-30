let passportMarried = {
  address: {
      country: "USA",
      city: "Bobryisk"
  },
  name: "Petr",
  surname: "Petrov",
};
let passportMarried2 = {...passportMarried} 
passportMarried2.married = true;

console.log(passportMarried); 
console.log(passportMarried2);