'use strict'

const sort = function(str) {
    return str.split(' ').map((element) => { 
        return element.toLowerCase().split('').sort().join('').replace(/\S/, (match) => { 
            return match.toUpperCase()
        });
    }).sort().join(' ');
}