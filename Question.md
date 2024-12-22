# Array Methods Assignment

## Central Dataset
```javascript
const fruits = [
  { id: 1, name: "Apple", price: 2.5, expiryDate: "2024-12-30" },
  { id: 2, name: "Banana", price: 1.2, expiryDate: "2024-12-25" },
  { id: 3, name: "Cherry", price: 3.0, expiryDate: "2025-01-05" },
  { id: 4, name: "Grapes", price: 4.0, expiryDate: "2025-01-10" },
  { id: 5, name: "Mango", price: 5.5, expiryDate: "2024-12-28" },
];
```

---

## Easy Questions (20)

1. Add a new fruit to the array.
2. Remove the last fruit from the array.
3. Remove the first fruit from the array.
4. Extract the first three fruits into a new array.
5. Remove the second fruit from the array.
6. Find all fruits with a price greater than 3.
7. Double the price of all fruits in the array.
8. Return an array of fruit names in uppercase.
9. Find the fruit with the name "Mango".
10. Check if any fruit has a price less than 2.
11. Check if all fruits have an expiry date in 2024.
12. Add a new fruit at the beginning of the array.
13. Remove the third fruit from the array.
14. Find the total price of all fruits.
15. Sort the fruits by their names in alphabetical order.
16. Sort the fruits by their prices in descending order.
17. Reverse the order of fruits in the array.
18. Find the index of the fruit with the name "Banana".
19. Create a new array containing only the fruit IDs.
20. Add a new fruit at the second position in the array.

---

## Medium Questions (15)

1. Remove all fruits with prices less than 3.
2. Find the fruit with the latest expiry date.
3. Create a new array with only fruits that expire in 2024.
4. Increase the price of all fruits by 10%.
5. Create a new array of fruits with an additional property `discountedPrice` (10% off).
6. Remove the fruit with the highest price.
7. Find the fruit with the shortest name.
8. Replace the second fruit in the array with a new fruit.
9. Create a new array of fruits sorted by expiry date.
10. Combine this fruit array with another array of vegetables.
11. Find the total number of characters in all fruit names combined.
12. Create a new array containing only the names of fruits priced above 4.
13. Remove the last two fruits from the array.
14. Split the array into two arrays: one with fruits priced above 3 and one with the rest.
15. Create a new array where the `expiryDate` is converted to a `Date` object.

---

## Hard Questions (10)

1. Remove duplicate fruits based on their names (if duplicates exist).
2. Find the average price of all fruits.
3. Group fruits by their expiry year (e.g., `{ 2024: [...], 2025: [...] }`).
4. Create a new array where each fruit has a `remainingDays` property (days until expiry).
5. Remove all fruits with an expiry date before today's date.
6. Replace all fruit names with their lengths (e.g., "Apple" → 5).
7. Find the fruit with the lowest price and update its price to match the highest price.
8. Create a string of all fruit names separated by commas.
9. Sort fruits by price, and for fruits with the same price, sort by name.
10. Create a new array where each fruit object is transformed to `{ name: ..., price: ... }`.
