// ---------------------- fahrenheit to celcius using 'map' ----------------------

// const fahrenheit = [33.8,1,212,41]

// const celcius = fahrenheit.map(degrees => (degrees - 32) * 5 / 9)
// console.log(celcius)

// // OR with function:

// function getCelcius(){
//     return fahrenheit.map(degrees => (degrees - 32) * 5 / 9)
// }
// console.log(getCelcius())


// ---------------------- checking values with 'some' method ----------------------

// const values = [11,NaN,[],'Angels']

// function checkForFalsey(){
//     return values.some(value => !value)
// }

// console.log(checkForFalsey()) // return 'true' because we have 'NaN'


// ---------------------- count a total number of characters with 'reduce' ----------------------

// const family = ['mama','tata','son','daughter']

// function howManyLetters(){
//     return family.reduce((value, letters) => value + letters)
// }

// console.log(howManyLetters().length)


// ---------------------- using 'every' check if every number is a squere number ----------------------

// const numbers = [4,9,16,25]

// function checkSquares(){
//     return numbers.every(number => Math.sqrt(number) % 1 === 0)
// }

// console.log(checkSquares())


// ---------------------- returns a string with a given lenght or larger with 'filer' ----------------------

// const words = ['lola','mariola','papola','kamola']

// function wordLength(){
//     return goodWords = words.filter(word => word.length >= 5)
// }

// console.log(wordLength())


// ---------------------- changing strings to numbers with 'map' ----------------------

// const strings = ['23','212','32','44']

// console.log(strings)

// function converter(){
//     return strings.map(word => Number(word)) // or https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l
// }

// console.log(converter())


// ---------------------- counts the number of vovels in a sentence - 'split' + 'filter' ----------------------

// function vovelCount(text){
//     return(text.split('').filter(letter => letter.match('a|e|i|o|u|y|A|E|I|O|U|Y'))).length
// }

// console.log(vovelCount('I love to learn Java Script')) // we have x vovels in the sentence


// ---------------------- capitalise every firt letter of the word ----------------------

// function capitalise(text){
//     return((text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))).join(' '))
// }

// console.log(capitalise('i have a good day!'))