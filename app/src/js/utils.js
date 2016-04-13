const utils = {
    // Accepts a name as a string and capitalizes first letters in every word. Returns formatted name as a string
    formatName: function (name) {
        let names = name.split(' ');
        let fullName = names.map(el => el[0].toUpperCase() + el.slice(1));
        return fullName.join(' ');
    }
};

export default utils