// basic function

function singSong() {
    console.log('DO');
    console.log('RE');
    console.log('MI');
}

singSong()

//arguments practice - in the one below you need to pass a string or other type.

function greet(firstName) {
    console.log(`Hey there, ${firstName}!`);
};

//multiple arguments practice - ORDER MATTERS!
function greeting(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.!`);
};

function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    };
    console.log(result);
}


//return keyword
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}