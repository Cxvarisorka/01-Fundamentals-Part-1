// console.log("Hello");

// let firstName = "Luka";

// console.log(firstName);

// თქვენ არშეგიძლიათ გამოიყენოთ სხვა სიმბოლოები გარდა $ და _ 
// თქვენ არ შეგიძლიათ შექმნათ ცვლადი რომლის სახელიც
// იწყება რიცხვებით, სხვა შემტხვევაში შეგიძლიათ გამოიყენოთ.
// მაგალითად number1

// let 3years = 3; // სინტაქსის ერორი
// let luka&tskhvaradze = 17; // სინტაქსის ერორი

// თქვენ არ შეგიძლიათ გამოიყენოტ რეზერვირებული სიტყვა
// ცვლადის სახელად
// მაგალითად: let, function, const და ასე შემდეგ.

// let function = 10; ეს გამოიწვევს ერორს

// აგრეთვე არის წესები რომელიც უნდა დავიცვთ ცვლადების შექმნისას
// არ გამოიყენოთ ცვლადის სახელი როომელიც იწყება დიდი ასოთი
// შეცდომა არ იქნება მაგრამ ამ ტიპის ცვლადის სახელებს გამოვიყენებთ
// სხვა რამეში, რომელსაც მომავალში ვისწავლით.

// let Person = "Luka"; // ეს არ გამოიწვევს ერორს.

// თუ თქვენ გინდათ შექმნათ ცვლადი რომლის მნიშვნელობაც არ
// შეიცვლება მაშინ შეგიძლიათ გამოიყენოთ pascal case
// რაც გულისხმობს ყველა სიმბოლო ცვლადის სახელში უნდა იყოს დიდი

// const keyword ქმნის ცვლადს რომლის მნიშვნელობასაც ინიციალიზების
// შემდეგ ვერ შევცვლით.

// ინიციალიზება - მნიშვნელობის მინიჭება
// დეკლარაცია - ცვლადის შექმნა

// const PI = 3.14; 

// კარგი პრაქტიკაა ის რომ ცვლადის სახელისთვის შეარჩიოთ
// ისეთი სახელი რომელიც აღწერს რა მნიშვნელობა ინახება ცვლადში

// examples

// Good practice, descriptive variable names.
// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// Bad practice, not descriptive variable names.
// let job1 = "Programmer";
// let job2 = "Teacher";

// პრიმითიული მონაცემთა ტიპები

// number, string, boolean, undefined, null, symbol and big int

// პრიმიტიულია მონაცემთა ტიპი რომელიც არ არის ობიექტი

// Number data type რომელიც გამოიყენება მთელი და ათწილადი რიცხვებისთვის

// მთელი რიცხვი: 5, -6, 10 .
// ათწილადი: 5.3, -8.6, 9.34 .

// სხვა პროგრამულ ენებში შეხვდებით ბევრ სხვადასხვა მონაცემთა
// ტიპს ცალკე მთელი რიცხვებისთვის და ცალკე ათწილადებისთვის
// მაგრამ არა ჯავასკრიპტში, მარტივად ორივე ტიპის რიცხვითსვის
// არის ერთი მონაცემთა ტიპი Number

// let age = 17;
// let score = 9.5;

// String data type რომელიც არის სიმბოლოებთა თანმიმდევრობა
// მარტივად ეს მონაცემთა ტიპი გამოიყენება ტექსტური მონაცემებისთვის

// char - სიმბოლო: 'a','b','c'....
// string - სიმბოლოებთა თანმიმდევრობა: "luka", "nia", "lile"...
 
// let name = "Luka";

// ჩვენ შეგვიძლია სტრინგი შევქმნათ ორმაგი და ერთმაგი 
// ბრჭყალებით '' ან ""

// ყველაფერი რაც ბრჭყალებში იქნება არის სტრინგი

// let number = "10"; ესეც არის სტრინგი

// Boolean data type არის ლოგიკური მონაცემთა ტიპი
// ის შეიძლება იყოს მხოლოდ ორი მნიშვნელობა: true and false
// ჩვენ ვიყენებთ მას იმისთვის რომ კომპიუტერმა მიიღოს გადაწყვეტილებები

// let isAdult = true;
// let isOn = false;

// ზემოთა სამი მონაცემთა ტიპი არის ყველაზე მნიშვნელოვანი

// undefined არის მნიშვნელობა ცვლადის 
// რომლელშიც ჯერ მნიშვნელობა არ არის (empty value) მაგალითად

// let firstName;

// console.log(firstName); // Result will be undifend

// null არის undefined ის მსგავსი ჯერჯერობით მას არ ავხსნით
// უბრალოდ იცოდეთ რომ არსებობს ის გამოიყენება სხვა სიტუაციაში
// undefined ისგან განსხვავებით

// Symbol(ES2015) ამაზეც არ ვისაუბრებთ

// BigInt(ES2020) ეს გამოიყენება დიდი რიცხვების შესანახათ
// ამაზეც ჯერ არ ვისაუბრებთ

// ზემოთ ჩამოთვლილი 7 მონაცემთა ტიპი არის პრიმიტიული.

// Javascript_ს გააჩნია თვისება დინამიური წერა
// რაც გულისხმობს იმას რომ ჩვენ არ გვიწევს მექანიკურად
// გავუწეროთ ცვლადს მასში რა ტიპის მონაცემი ინახება
// ამის მაგივრად Javascript ავტომატურად ადგენს
// მონაცემტა ტიპს ცვლადში მნიშვნელობის შენახვის შემდეგ

// მნიშვნელობა "Luka", მონაცემთა ტიპი string

// იცოდეთ განსხვავება მნიშვნელობასა და ცვლადს შორის
// მნიშვნელობა არის ის რასაც ჩვენ ვინახავთ ცვლადში
// მნიშვნელობას აქვს თავისი ტიპი და არა ცვლადს

// ავიღოთ არა დინამიური ენა с++
// სადაც გვიწევს ცვლადის შემქნამდე მექანიკურად
// გავუწეროთ მასში რა ტიპის მონაცემი ინახება

// მაგალითად

// int number = 10; ეს არ არის ჯავასკრიპტი!!!

// როცა ჩვენ ჯავასკრიპტში (დინამიურ ენაში) ცვლადს მივანიჭებთ
// მნიშვნელობას ჩვენ მისი მნიშვნელობა შეგვიძლია შევცვალოტ
// და სრულიად სხვა მონაცემთა ტიპი მივანიჭოთ

// მაგალიტად

// let age = 17;
// age = "Luka";

// მაგრამ სხვა ენებში ეს შეუძლებელია იმიტომ რომ ჩვენ ტავიდანვე
// ვუწერთ რა მონაცემტა ტიპი უნდა შევინახოთ ცვლადში მაგალიტად с++ 
// როგორც არის.


// typeof არის ოპერატორი რომელიც გვექუბნება
// მნიშვნელობის მონაცემთა ტიპს

// let firstName;

// console.log(typeof true); // Boolean
// console.log(typeof 5); // number
// console.log(typeof 5.5); // number
// console.log(typeof "luka"); // string
// console.log(typeof firstName); // undifend


// არსებობს 3 გზა რომ შევქმნათ ცვლადი
// let, const, var
// ამათ შორის არის განსხვავებები რომლებზეც ვისაუბრებ ქვემოთ

// let ვქმნით ცვლადებს რომლის მნიშვნელობაც მომავალში შეიცვლება

// let firstName = "Luka";
// firstName = "Nika"; // this called re-assign varable or mutate variable

// const ვქმნით ცვლადს რომლიც მნიშვნელობაც არ შეიცვლება

// const firstName = "Luka";
// firstName = "Nika"; // ეს გამოიწვევს შეცდომას (assigment to constant variable error)

// const age; // this will result error because you need to assign value when declaring const variable

// var არის ძვეელი გზა ცვალდების შესაქმნელათ, 
// არ გამოიყენოთ ეს გზა მომავალში ამაზე ვისაუბრებთ!!


// მარტივი ოპერატორები

// მარტივად ოპერატორები გვეხმარება იმაში რომ შევქმნათ მნიშვნელობები ან გავაერთიანოთ მნიშვნელობები
// არსებობს ბევრი ტიპის ოპერატორები მაგალითად ლოგიკური ოპერატორები, მნიშვნელობის მინიჭების ოპერატორები, ლოგიკური ოპერატორები
// მათემათიკური ოპერატორები და ბევრი სხვა

// Math Operators
// const currentYear = 2050;

// const ageLuka = currentYear - 2006;
// const ageMari = currentYear - 2020;

// console.log(ageLuka, ageMari); // 44 30

// console.log(ageLuka * 2); // 88
// console.log(ageLuka / 2); // 22
// console.log(2 ** 3); // 2 * 2 * 2

// const firstName = "Luka";
// const lastName = "Tskhvaradze";
// console.log(firstName + " " + lastName); // სტრინგების შეერთება, ანუ კობინაცია

// console.log(typeof firstName) // string

// // Assigment Operators
// let x = 10 + 5; // = ეს ტოლობა არის თვითონ ოპერატორი რომელიც გამოიყენება მნიშვნელობის მინიჭებისთვის

// x += 10; // x = x + 10 result is 25
// x -= 5; // x = x - 5 result is 20
// x *= 2; // x = x * 2 result is 40
// x /= 2; // x = x / 2 result is 20

// x++; // x = x + 1 result is 21
// x--; // x = x - 1 result is 20

// console.log(x); // 15

// // Comparison Operators
// // ჩვენ ვიყენებთ შედარების ოპერატორებს რომ ვაწარმოოთ Boolean მნიშვნელობები

// console.log(ageLuka > ageMari); // true
// console.log(ageLuka < ageMari); // false
// console.log(ageLuka == ageMari); // false
// console.log(ageLuka === ageMari); // false
// console.log(ageLuka >= ageMari); // true
// console.log(ageLuka <= ageMari); // false

// const isFullAge = ageMari >= 18; // isFullAge = true

// ოპერატორების უპირატესობები

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// const firstName = "Luka";
// const job = "programmer";
// const birthYear = 2006;

// const info = "Hello my name is " + firstName + ", my job is " + job + ", born in " + (2024 - birthYear);

// // ალბათ გაგიჩნდებათ შეკიტხვა როგორ შეგვიძლია რიცხვისა და სტრინგის შეერთება
// // ჯავასკრიპტი როცა დაინახავს რომ ჩვენ გვინდა შევაერთოთ რიცხვი და სტრინგ
// // რიცხვს ავტომატორად გარდაქმნის სტრინგად

// const infoNew = `Hello my name is ${firstName}, my job is ${job}, born in ${2024 - birthYear}.`;

// console.log(info);
// console.log(infoNew);