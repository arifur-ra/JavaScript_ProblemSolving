/**
 * Problem 1
 * Write a function that can print any random number between any two given numbers ? 
 */



const randomNumber = (num1,num2) =>{
 return  Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

console.log('Random Number',randomNumber( 1,6))

/**
 * Problem 2
 * How can you order roll numbers of students in your class sequentially ?
 */

let rollNumbers = [2,3,10,11,1,23,100,25,34]


rollNumbers = rollNumbers.sort(function(a, b){
    return a - b;  // smaller to bigger
    // return b-a  bigger to smaller
})

console.log('Orders of Roll Number', rollNumbers)


/**
 * Problem 3
 * How can you order names of students in your class sequentially ?
 */


let  studentsName = ["Ayan","Roza","Nusrat","Nabiha","Rayan","Amin"]

studentsName = studentsName.sort()


console.log('Orders of student names', studentsName)

/**
 * Problem 4
 * - Write a function that can tell us whether an year is a leap year or not ?
 */

const isLeapYear = (year)=>{

if((year % 400 === 0) || ((year % 4 === 0) &&(year % 100 !== 0))){
    console.log(`${year} is a leap year`)
}
else{
    console.log(`${year} is a not leap year`)

}

}

isLeapYear(2031)


/**
 * Problem 5
 * - How would you determine the number of vowels in a sentence ??
 */

const vowels = ['a','e','i','o','u','A','E','I','O','U']


function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);  // its convert the sentence to array

    letters.forEach((value)=>{
        if(vowels.includes(value)){
            count++;
        }

    })

return count;

}

console.log('The number of vowels in sentence:',countVowels('I Love Myself'))


/**
 * Problem 6
 * - How would you extract the duplicate numbers in a array ??
 */