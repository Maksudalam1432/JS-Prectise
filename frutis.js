const fruits = [
  { id: 1, name: "Apple", price: 2.5, expiryDate: "2024-12-30" },
  { id: 2, name: "Banana", price: 1.2, expiryDate: "2024-12-25" },
  { id: 3, name: "Cherry", price: 3.0, expiryDate: "2025-01-05" },
  { id: 4, name: "Grapes", price: 4.0, expiryDate: "2025-01-10" },
  { id: 5, name: "Mango", price: 5.5, expiryDate: "2024-12-28" },
];

// - 1. Add a new fruit to the array. 

function q1(){

  fruits.push({
    id:fruits.length+1,
    name:"papaya",
    price:20,
    expiryDate:  new Date( Date.now()+10*24*60*60).toISOString().split('T')[0]
  })
  console.log(fruits)
}



// q1()

// - 2. Remove the last fruit from the array.
function q2(){
  fruits.pop()
  console.log(fruits)
}

// q2()

// - 3. Remove the first fruit from the array.

  function q3(){
     fruits.shift()
     console.log(fruits)
  }
  // q3()

// - 4. Extract the first three fruits into a new array.
     function q4(){
      const ans=fruits.slice(0,3);
      console.log(ans)
     }
    //  q4()
  
// - 5. Remove the second fruit from the array.
   function q5(){
     fruits.splice(1,1)
     console.log(fruits)
   }
  //  q5()
 
// - 6. Find all fruits with a price greater than 3.

function q6(){

  const ans=    fruits.filter(num=>num.price>3)  
  console.log(ans)
}
// q6()
   
// - 7. Double the price of all fruits in the array.
 
    function q7(){
       
      fruits.forEach(num=>num.price*=2)
      console.log(fruits)
              
    }
    
    q7()
   
   
// - 8. Return an array of fruit names in uppercase.
   function q8(){

     const num=fruits.map((ans)=>ans.name.toUpperCase())
     console.log(num)
     
    }
    // q8()
     
      
// - 9. Find the fruit with the name "Mango".
      function q9(){
        // const num=fruits.filter(ans=>ans.name.toLowerCase().includes('mango'))
        const num=fruits.filter(ans=>ans.name.toLowerCase()==='mango')
        console.log(num)
      } 
  // q9()
// - 10. Check if any fruit has a price less than 2.
   function q10() {
    const md = fruits.filter(fruit => fruit.price < 2);
          const ans =md.length > 0;
          console.log(ans);
  }
  q10();
// q10()



// 11. Check if all fruits have an expiry date in 2024.

  // q11()
// 12. Add a new fruit at the beginning of the array.
// 13. Remove the third fruit from the array.
// 14. Find the total price of all fruits.
// 15. Sort the fruits by their names in alphabetical order.
// 16. Sort the fruits by their prices in descending order.
// 17. Reverse the order of fruits in the array.
// 18. Find the index of the fruit with the name "Banana".
// 19. Create a new array containing only the fruit IDs.
// 20. Add a new fruit at the second position in the array.
