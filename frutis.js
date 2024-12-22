const fruits = [
  { id: 1, name: "Apple", price: 2.5, expiryDate: "2024-12-30" },
  { id: 2, name: "Banana", price: 1.2, expiryDate: "2024-12-25" },
  { id: 3, name: "Cherry", price: 3.0, expiryDate: "2025-01-05" },
  { id: 4, name: "Grapes", price: 4.0, expiryDate: "2025-01-10" },
  { id: 5, name: "Mango", price: 5.5, expiryDate: "2024-12-28" },
];

// - 1. Add a new fruit to the array. 

fruits.push({
  id:fruits.length+1,
  name:"papaya",
  price:20,
  expiryDate:  new Date( Date.now()+10*24*60*60).toISOString().split('T')[0]
})
console.log(fruits)



// - 2. Remove the last fruit from the array.



// - 3. Remove the first fruit from the array.
// - 4. Extract the first three fruits into a new array.
// - 5. Remove the second fruit from the array.
// - 6. Find all fruits with a price greater than 3.
// - 7. Double the price of all fruits in the array.
// - 8. Return an array of fruit names in uppercase.
// - 9. Find the fruit with the name "Mango".
// - 10. Check if any fruit has a price less than 2.