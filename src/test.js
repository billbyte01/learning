// ---------------------- why not to use 'var' ----------------------

// function findX(){
//     var x = 1
//     {
//         var x = 2
//         console.log('inside: ' + x)
//     }
//     console.log('outside: ' + x)
// }

// findX()


// UNARY PLUS -- it changes text to number
// let y = '4'
// console.log(+y)


// ---------------------- string not equal ----------------------

// const fruits = ['apple', 'banana', 'grape', 'cherry']
// if (!fruits.includes('cherry')) {
//     console.log('cherry is missing')
// } else {
//     console.log('cherry lady')
// }


// ---------------------- objects ----------------------

// const family = [
//     {
//         firstName: 'Emi',
//         lastName: 'Pociecha',
//         age: 32,
//         use_crypto: false
//     },
//     {
//         firstName: 'Sławek',
//         lastName: 'Pociecha',
//         age: 32,
//         use_crypto: true
//     },
//     {
//         firstName: 'Wiola',
//         lastName: 'Pociecha',
//         age: 3,
//         use_crypto: false
//     }
// ]
//
// for (let i = 0; i < family.length; i++) {
//     if (family[i].use_crypto === true) {
//         console.log('Good! You are not Fiat Marine!');
//     } else {
//         console.log('Oh no! Fiat Marine!');
//     }
// }


// ---------------------- functions ----------------------

// function sendText(name, time) {
//     console.log('Why my eyes ya ' + name + '? At ' + time)
// }

// sendText('Cat')
// sendText('Dog', 15)


// ---------------------- moving bob ----------------------

// const bob = document.querySelector('.face');
// let count = 0

// function moveBob(){
//     count += 50
//     bob.style.left = count + 'px'
// }

// bob.addEventListener('click', moveBob)


// ---------------------- 'concat' - conesting variables to the one array ----------------------

// const string = "Hello "
// const string2 = "Marian"

// console.log(string.concat(string2))

// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const array3 = [7,8,9]

// console.log(array1 + array2)
// console.log(array1.concat(array2, array3))

// const newArray = array1.concat(array2)

// console.log(newArray)


// ---------------------- joining elements into one string ----------------------

// const textDisplay = document.querySelectorAll('.ball')[0]

// const emotions = ['Happy', 'Sad', 'Confident']
// console.log(emotions)
// console.log(emotions.join(" "))

// const newWord = emotions.join(" ")

// //emotions.pop() //changes the lenght of the array - remove last element
// //emotions.shift() //changes the lenght of the array - remove first element
// //emotions.unshift('Energetic') //changes the array by adding an element at the beginning
// //emotions.push('Lonely') //changes the array by adding an element at the end
// //const emotions2 = emotions.slice(1,2) //create a new array by slicing elements from the old one
// //console.log(emotions2)

// textDisplay.innerHTML = emotions


// ---------------------- removing element/elements and adding a new one + searching occurence ----------------------

// const ball = document.querySelector('.ball')

// const movies = ['Elf', 'Annie', 'Bart', 'Camila', 'Hero', 'Mulan', 'Emily']
// // console.log(movies.length)
// movies.splice(1,2,'Mulan') //removes element from 2 to 3 and add 'Mulan'
// movies.splice(1,0,'Mulan') //only add 'Mulan' before seccond element
// // console.log(movies.length)
// // console.log(movies.indexOf('Mulan')) // find firt occurrence of an element
// // console.log(movies.lastIndexOf('Mulan')) // find last occurrence of an element
// // console.log(movies.indexOf('Mulan', -1))
// console.log(movies)

// function find(needle, haystack) {
//     var results = []
//     var idx = haystack.indexOf(needle)
//     while (idx != -1) {
//         results.push(idx)
//         idx = haystack.indexOf(needle, idx + 1)
//     }
//     return results; // returns all occurrences of an elements finded in a given array
// }

// console.log(find('Mulan', movies))

// ball.innerHTML = movies


// ---------------------- 'forEach' - changing all selected elements ----------------------

// const balls = document.querySelectorAll('.ball')
// console.log(balls)
// balls.forEach(ball => ball.style.backgroundColor = 'green')

// const names = ['Emi','Wiola','Don']
// names.forEach(name => console.log(name))

// const scores = [12, 43, 23, 55, 33, 22]
// scores.forEach(score => console.log(score + 2))


// ---------------------- 'some' - checking all selected elements ----------------------

// const scores = [
//     {
//         name: 'Emi',
//         age: 23
//     },
//     {
//         name: 'Leo',
//         age: 56
//     },
//     {
//         name: 'Wil',
//         age: 65
//     },
//     {
//         name: 'Los',
//         age: 33
//     },
// ]

// console.log(scores.some(score => score.age > 60)) // true

// const balls = Array.from(document.querySelectorAll('.ball')) // Array.from creates an array from these elements

// console.log(balls)

// const isBallBroken = balls.some(ball => ball.hasChildNodes()) // we check here if there is a child node in any .ball div

// console.log(isBallBroken) //true


// ---------------------- 'map' - works like 'forEach' but create a new array ----------------------
// const ages = [
//     {
//         name: 'Ola',
//         age: 12
//     },
//     {
//         name: 'Can',
//         age: 14
//     },
//     {   
//         name: 'Leo',
//         age: 23
//     }
// ]

// console.log(ages)

// const newAges = ages.map(user => user.age + 5)

// console.log(newAges)


// ---------------------- 'filter' - create a new array for elements meeting the condition ----------------------

// const shoes = ['botki', 'adidasy', 'pantofle', 'sandały']

// const shortShoes = shoes.filter(shoe => shoe.length <= 7)

// console.log(shortShoes)

// const showBall = document.querySelectorAll('.ball')[1]

// showBall.innerHTML = shortShoes 


// ---------------------- 'reduce' - reducing an array, accumulating to the one value ----------------------

// const scores = [3,4,2,5]

// const total = scores.reduce((accumulator, value) => accumulator + value)

// console.log(total)


// ---------------------- 'every' - test everything in an array and return true/false ----------------------

// const testResults = ['mama','tata','bobo','aman']

// const check = testResults.every(result => result.length === 3)

// console.log(check)


// ---------------------- 'split' - divide a string into order list of substrings ----------------------

// const sentence = 'I will split it on a half'

// console.log(sentence.split(' '))

// const words = sentence.split(' ')

// console.log(words[2], words[5])