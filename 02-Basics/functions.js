function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid = false) { }
;
signUpUser('Akhand', 'akhndprtp@gmail.com', false);
signUpUser('Akhand', 'akhndprtp@gmail.com');
const heroes = ['Thor', 'Iron Man', 'Hulk'];
heroes.map((hero) => {
    // We don't need to provide any datatype to the argument since ts is smart enough to determine which datatype it will be from heroes array.
    // return 1; (This will give error since, the functions return type is string)
    return hero;
});
function errorMessage1(errMsg) {
    console.log('Error: ', errMsg);
    // return 0; (This will give an error since the 0 is of number datatype and void means nothing should be returned)
    //return; (This will work!)
}
function errorMessage2(errMsg) {
    throw new Error(errMsg); // The return datatype never is used for the functions which throws an exception or terminates and execution. Hence, that value is never being observed since, it's an error and cannot be determined exactly.
    // return (This will give error since never )
}
export {};
