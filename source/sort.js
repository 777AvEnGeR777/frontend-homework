'use strict'

const sort = (str) => { 
    if(typeof str != 'string')
        return '';
    return str.split(' ')
              .map((element) =>  element.toLocaleLowerCase()
                                        .split('')
                                        .sort((a,b) => a.localeCompare(b))
                                        .join('')
                                        .replace(/\S/, (match) => match.toLocaleUpperCase()))
              .sort((a,b) => a.localeCompare(b))
              .join(' ');
}