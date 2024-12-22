const fruits = [
    {
      id: 1,
      name: "Apple",
      price: 25,
      expiryDate: "2024-12-30",
    },
    {
      id: 2,
      name: "Banana",
      price: 15,
      expiryDate: "2024-12-25",
    },
    {
      id: 3,
      name: "Orange",
      price: 30,
      expiryDate: "2025-01-05",
    },
    {
      id: 4,
      name: "Grapes",
      price: 40,
      expiryDate: "2025-01-10",
    },
    {
      id: 5,
      name: "Mango",
      price: 50,
      expiryDate: "2024-12-28",
    },
  ];
//  const ans= fruits.reduce((acc,cur)=>{
//    return acc+cur;
//   },0)

//  console.log(ans)

// [1,2,4,4,5]
//! Forecach
/** 
 * *Return :- Nothing
 * *Traverse like array
 * *CB
 */
// fruits.forEach((ele)=>{
//    const {name,price} =ele  
//   console.log(`Price of  ${ele.name} is ${ele.price} `)
/// })

// [
//     {
//         name:"abc",
//       price:10
//     }
// ]

//  const ans=fruits.map(({name,price})=>({name,price}))

 

//  console.log(ans)
  

  const num=fruits.map(num=> num.price)
  const ans= fruits.reduce((acc,cur)=>acc+cur.price,0)
  console.log(ans)
  console.log(ans)
  console.log(ans)
  