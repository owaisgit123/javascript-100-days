const  usertime  =  '  12:00 PM  my  time  is  12:00 PM  ' 
console . log  ( usertime .length )

// print a  only length   number  
const  userIntroduction  =  '  Hello, my name is owais. I am a student in the 10th class.  ' .toUpperCase() 
console .log  ( userIntroduction)

// print a string in uppercase
const  userName  =  '  Owais  ' .trim() ;
console .log  ( userName )

// print a string without spaces at the start and end
const  userEmail  = ' OWAIS163737@GMAIL.COM  ' .toLowerCase() ; 
console .log  ( userEmail )

// print a string in lowercase
const  useradress  =  '  123 Main Street, City, Country  ' .toUpperCase() .trim()  .toLowerCase();
console .log  ( useradress )

// print a string in uppercase, then trim it, and finally convert it to lowercase
const studentDetails =  ' Name: Owais, Age: 17, Class: 10th, School: ABC High School  ' .includes ('xz') ; // fales not  exists 

// check if the string contains '1900' and return true or false
//additionally, you can check for other substrings as needed
//  checking for 'Owais' and '10th'


const  classDetails  =  ' Class: 10th, Section: A, Roll No: 25  '  .indexOf('Class') !== -1 ; 
// and  number length 26 exists true and  string not exists length not exists  is 2000 fales returns 
// check if the string contains 'Class: 10th' and return true or false ///  ! == -1   
            // ! === - 1 


const  userInfo1  =  'Owais, 17, Student, ABC High School  ' .indexOf ( 'School ') ;            
// find the index of 'School' in the string and return the index number small string  number print  
// if 'School' is not found, it will return -1


const  Replace1  =  'Owais, 17, Student, ABC High School  ' .replace( 'Owais' ,   ' Hamza i am  student  10th  class   '  ) 
// replace 'Owais' with 'Hamza i am student 10th class' in the string and return the modified string


const Replace2  =  'Owais, 17, Student, ABC High School  ' .replaceAll(  'O' , usertime)
// replace all occurrences of 'O' with the value of usertime in the string and return the modified string

const StudentOffDays = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday' .concat('Monday', usertime);

// concatenate the string with 'Monday' and the value of usertime, and return the modified string
//  After print string  and before print concat  print  variable  

const BankAccountNumber = '2939' .padStart (16  ,'*')

// pad the string with '*' characters to make it 16 characters long, and return the modified string

const BankAccountNumber2 = '2939' .padEnd (16  ,'*')

// pad the string with '*' characters to make it 16 characters long at the end, and return the modified string
// and  PedEnd  eaxmple **********7373

const  Timetable = 'Math, Science, English, History, Geography' .charAt ( 6)

// get the character at index 6 in the string and return it starting from 0
// and  return  character  'M'

const  StudentHistory1 = 'Math, Science, English,! History, Geography' .charCodeAt (23)
// get the Unicode value of the character at index 23 in the string and return it
// and alphebetic character  'H'  and return 72 
// The ASCII Character Set

const  Subject = ' Math, Science, English,! History, Geography' .slice ( 0 , 4 )
// extract a substring from index 0 to index 4 (exclusive) in the string and return it


