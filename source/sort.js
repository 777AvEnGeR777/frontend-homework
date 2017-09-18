'use strict'

const sort = function(str) {
    var words = str.split(' ');
    words.forEach(function(element, index) {
        element = element.toLowerCase();
        var letters = element.split('');
        if(letters.length === 0)
            return;
        letters.sort();
        letters[0] = letters[0].toUpperCase();
        words[index] = letters.join('');
    });
    words.sort();
    return words.join(' ');
}