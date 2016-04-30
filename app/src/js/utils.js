'use strict';

const utils = {
    // Accepts a name as a string and capitalizes first letters in every word. Returns formatted name as a string
    formatName: function (name) {
        let names = name.split(' ');
        let fullName = names.map(el => el[0].toUpperCase() + el.slice(1));
        return fullName.join(' ');
    },

    validateUser: function (user) {
        let valid = true;
        // Iterate over user's keys and ensure that all of them are valid
        Object.keys(user).forEach(key => {
            if (!user[key] || (key === 'name' && user[key].length < 3) || (key === 'age' && (user[key] < 0 || user[key] > 100))) {
                valid = false;
            }
        });
        return valid;
    }
};

export default utils