let author = 'Samantha Wessel';
  


function findNames(string) {
    const newNames = string.toLowerCase().split(' ');
    return {
        firstName: newNames[0],
        lastName: newNames[1],
    };
}

const names = findNames(author);
let firstName = names.firstName;
let lastName = names.lastName;

console.log(`My first name is: ${firstName}`);
console.log(`My last name is ${lastName}`);