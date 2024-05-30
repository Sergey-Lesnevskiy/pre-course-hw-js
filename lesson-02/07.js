let passportMarried = {
  address: {
      country: "USA",
      city: "Bobryisk"
  },
  name: "Petr",
  surname: "Petrov",
};
let passportMarried2 = {  address: {
  country: "USA",
  city: "Bobryisk"
}, married: true, ...passportMarried,} 

console.log(passportMarried); 
console.log(passportMarried2);