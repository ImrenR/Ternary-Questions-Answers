//? Question 1 : Number Classification: Determine whether a number is positive, negative, or zero, 
//? and return "Positive", "Negative", or "Zero" accordingly.

const number= -5;

const result= number >0
? "Positive"
: number <0
  ? "Negative"
  :"Zero";
  console.log(result);


//? Question 2 :Credit Application Status: Determine if a person’s credit score is 700 or higher ("Credit Approved"), 
//? between 500 and 699 ("Additional Documents Required"), or below 500 ("Credit Denied").

const creditApp = 499

const result1 = creditApp >= 700
? "Credit Approved"
: creditApp >= 500 && creditApp <= 699
  ? "Additional Documents Required"
  : "Credit Denied";
  console.log(result1);

//? Question 3 :Temperature Status: Based on a temperature value, determine if it is "Below Freezing Point," 
//?"At Room Temperature," or "At Boiling Point."

const temp= 90

const tempStatus= (temp === 0 && temp < 0) 
? "Below Freezing Point"
: temp === 25
 ? "At Room Temperature"
 : temp >= 100
  ? "At Boiling Point"
  : "Between room temperature and boiling point";
console.log(tempStatus);


//? Question 4 : Student Performance Status: Based on a student’s grade,
//? determine the performance level as "Excellent," "Good," "Average," or "Poor" (90-100: Excellent, 80-89: Good, 70-79: Average, 0-69: Poor).
 
const finalScore = 45

const finalResult = finalScore >= 90
? "Excellent"
: finalScore >= 70 && finalScore <= 85
? "Good"
: finalScore >= 60 && finalScore <=70
? "Avarage"
: "Poor"
console.log(finalResult);


//? Question 5 :Age Group: Categorize a person’s age as "Child," "Teen," "Adult," or "Senior" 
//? (0-12: Child, 13-24: Teen, 25-64: Adult, 65 and above: Senior).

const person = 66

const result2= (person >= 0 && person <=12 )
? "Child"
: (person >= 13 && person <=24 )
? "Teen"
:(person >= 25 && person <=64 )
? "Adult"
: "Senior"
 console.log(result2);

//? Question 6 : Product Discount Status: For a product price of 100 TL or more, apply a 20% discount; 
//? for prices between 50-99 TL, apply a 10% discount; and for prices below 50 TL, no discount. Calculate the new price accordingly

const productPrice = 120;

const newPrice = productPrice =>100
? productPrice * 0.8
: productPrice >=50 && productPrice <= 99
   ? productPrice * 0.1
   : "No discount";
console.log(`Congrats you recevied discount your new price is ${newPrice} `);

//? Question 7 :User Membership Status: If a user is a member, display "Member login successful"; 
//? if not, display "Guest login." Additionally, if the user is a member, check whether their status is active or inactive.

const isMember = true;
const isActive=false;

const loginStatus= isMember
?isActive
 ? "Member login successful and active"
 : "Member login successful but inactive"
:"Guest login";
console.log(loginStatus);

//? Question 8 :Comparison of Two Values: Compare two numbers and return "Both are equal,"
//?  "The first is greater," or "The second is greater."

const firstPerson = 90
const secondPerson =30

const personValues = firstPerson === secondPerson
? "Both are equal"
:firstPerson > secondPerson
?"The first is greater"
:"The second is greater.";
console.log(personValues);

//? Question 9 : Course Selection: Based on a student’s course selection, determine the level as 
//? "Basic," "Intermediate," or "Advanced" (Basic: 1-3, Intermediate: 4-6, Advanced: 7-10).

const courseSelection = 5; // Replace with the student's course number to test

const level = courseSelection >= 1 && courseSelection <= 3
  ? "Basic"
  : courseSelection >= 4 && courseSelection <= 6
    ? "Intermediate"
    : courseSelection >= 7 && courseSelection <= 10
      ? "Advanced"
      : "Invalid Course Number"; // Optional: Handle invalid course numbers

console.log(level);


//? Question 10 : Field of Study Selection: Based on a student’s grade, determine which field they can study in:
//?  "Engineering" (80 and above), "Economics" (60-79), or "Social Sciences" (0-59).

const grade = 85; // Replace with the student's grade to test

const fieldOfStudy = grade >= 80
  ? "Engineering"
  : grade >= 60 && grade <= 79
    ? "Economics"
    : grade >= 0 && grade <= 59
      ? "Social Sciences"
      : "Invalid Grade"; // Optional: Handle invalid grade input

console.log(fieldOfStudy);
