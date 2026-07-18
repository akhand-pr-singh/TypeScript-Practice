//======================PRIMITIVE DATATYPES===================
//String
let greetings = 'Hello from Akhand.';
//Number 
// let num: number = 7.2343 (Don't do obvious stuff since, it is assigned a number value. Therefore, it will automatically pick the number functions)
let num = 7.2343;
num.toFixed();
// num = 'Akhand'; (And if you try to assign a string after assigning it a number once, it will start throwing the ts error in that line)
//Boolean
let condition = false;
let assignedValue = condition.valueOf();
console.log('AssignedValue: ', assignedValue);
console.log(greetings);
export {};
