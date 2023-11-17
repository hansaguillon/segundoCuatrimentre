const { Console } = require("console");

const nums = [1,2,3,4,5,6,7,8,9,10];
let i = 0;
const nums2 = [];
while(nums.length >= i)
{
    if(nums[i]%2 == 0)
    {
        nums2.push(nums[i]);
    }
    i++
}
const num3 = nums.filter((num) => num%2 === 0);

console.log(num3);

let users= [{fistName : "Susan", lastName: "Steward"},{fistName : "Daniel", lastName: "Longbpttom"},{fistName : "Jacob ", lastName: "Black"}];

users.forEach((per) =>{
    console.log(`
    Apellido : ${per.lastName}
    Nombre :   ${per.fistName}   
    `);
})

console.log(users.filter((per)=> per.fistName === "Susan"));

var arrmap = users.map((per) => {
    let name = per.fistName + " - "+ per.lastName
    return name
});

console.log(arrmap);