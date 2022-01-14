// console.log("Hello from our first JS file.")

// let age = prompt("Enter your Age");
// if (age < 18) {
//     console.log("You're not old enough to see this content.")
// } else {
//     console.log("You're good to go!")
// }

// console.log(age);


let password = prompt('please enter a new password');

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('success');
    } else {
        console.warn("No spaces allowed!")
    }
} else {
    console.log('password not long enough!')
}