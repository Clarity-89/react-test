import utils from './utils';

/* Returns a semi-random number between min and max as an integer */
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Returns gender as a string "Male" or "Female" based on the ending of passed in string. For the purposes
 * of the predefined data the function checks only for the "a" ending since the data has been formatted
 * that only female names end in "a"
 */
function gender(name) {
    name = name.split(' ')[0];
    return name[name.length - 1] === 'a' ? 'Female' : 'Male';
}

/* Returns a random name created by combining first and last names from the lists */
function randomName() {
    var firstNames = ['aaron', 'adam', 'bill', 'bob', 'joe', 'tony', 'ted', 'anna', 'barbara', 'liza', 'maria',
            'sanna', 'samira', 'tereza'],
        lastNames = ['andrews', 'armstrong', 'baker', 'banks', 'barnes', 'castillo', 'castro', 'fleming', 'grant',
            'hudson', 'larson', 'murphy', 'reynolds', 'wayne'],
        randomIndex1 = randomRange(0, firstNames.length - 1),
        randomIndex2 = randomRange(0, lastNames.length - 1);

    return firstNames[randomIndex1] + ' ' + lastNames[randomIndex2];
}

function createData() {
    var users = [];

    for (var i = 0; i < 100; i++) {
        var user = {};
        user.id = String(i);
        user.name = utils.formatName(randomName());
        user.age = randomRange(18, 100);
        var alreadyExists = users.filter(function (el) {
            return el.name === user.name;
        });
        if (alreadyExists.length) {
            user.name = '';
            user.name = utils.formatName(randomName());
        }
        user.gender = gender(user.name);
        users.push(user);
    }
    return users;
}

export default createData()


