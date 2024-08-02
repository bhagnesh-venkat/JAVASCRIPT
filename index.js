//console.log(`Hello`)
//window.alert(`I like Biryani`)
//This is a comment
/* This is a comment */
//document.getElementById('myH1').textContent=`Hello`;
//document.getElementById('myP').textContent=`I like Biryani`;
//let x=100;
//console.log(`your score is ${x} runs`);
//window prompt
//let username;
//username=window.prompt("what's your username?");
/*let username;
document.getElementById('mySubmit').onclick=function(){
    username=document.getElementById('myText').value;
    document.getElementById('myH1').textContent=`Hello ${username}`
}*/

/*let age=window.prompt(`How old are you ?`)
age=Number(age);
age+=1
console.log(age);
console.log(typeof age);*/

/*const PI=3.14
let circumference;
let radius
document.getElementById('mySubmit').onclick=function(){
    radius=document.getElementById('myText').value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById('myH3').textContent=circumference
}*/

//let x=3.51
//z=Math.round(x)
//console.log(z) //4

/*let x=3.21
z=Math.round(x)
console.log(z) //3
let x=3.99
z=Math.floor(x)
console.log(z) //3
let x=3.21
z=Math.ceil(x)
console.log(z) //4
z=Math.trunc(x) // eliminate decimals
console.log(z) //3
let x=3
let y=2
z=Math.pow(x,y)
console.log(z) //9
let x=81
z=Math.sqrt(x)
console.log(z) //9
let x=10
z=Math.log(x);
let x=45;
z=Math.sin(x);
z=Math.cos(x);
z=Math.tan(x);
console.log(z);
x=-3.21
z=Math.abs(x) //3.21 gives positive by eliminating minus
z=Math.sign(x) //-1
let x=3
ley y=2
let z=1
let max=Math.max(x,y,z);
let min=Math.min(x,y,z);*/

//let age=16;
//let message=age>=18 ? "You are an adult" : "you are a minor";
//console.log(message)

/*let day =1;
switch(day){
    case 1:
        console.log('It is Monday');
        break;
    case 2:
        console.log('It is Tuesday');
        break;
    case 3:
        console.log('It is Wednesday');
        break;
    case 4:
        console.log('It is Thursday');
        break;
    case 5:
        console.log('It is Friday');
        break;
    case 6:
        console.log('It is Saturday');
        break;
    case 7:
        console.log('It is Sunday');
        break;
    default:
        console.log(`${day} is not a day`);
}*/

//let username="Kona Venkata Bhagnesh";
//console.log(username.charAt(0));
//console.log(username.indexOf("a"))
//console.log(username.lastIndexOf("a"))
//console.log(username.length);
//console.log(username.trim())
//console.log(username.toUpperCase())
//console.log(username.toLowerCase())
//console.log(username.repeat(3))
//let res=username.startsWith(" ")
//let res=username.endsWith(" ")
//let res=username.includes(" ")
//console.log(res)

//let phoneNumber="123-456-7890";
//phoneNumber=phoneNumber.replaceAll("-","");
//phoneNumber=phoneNumber.padStart(15,"0");
//phoneNumber=phoneNumber.padEnd(15,"0");
//console.log(phoneNumber)

//const fullName="Kona Venkata Bhagnesh"
//let firstName=fullName.slice(0,4)
//let lastName=fullName.slice(12)
//let firstChar=fullName.slice(0,1)
//let lastChar=fullName.slice(-1)
//let firstName=fullName.slice(0,fullName.indexOf(" "))
//let lastName=fullName.slice(fullName.indexOf(" ")+1)
//console.log(lastName)

/*No methpd chaining
let username=window.prompt('Enter your username:')
username=username.trim()
let letter=username.charAt(0)
letter=letter.toUpperCase()
let extraChars=username.slice(1)
extraChars=extraChars.toLowerCase()
username=letter+extraChars
console.log(username)*/

/*Methd chaining
let username=window.prompt('Enter your username:')
username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username)*/

/*const temp=20
if(temp>0 && temp<=30){
    console.log("The weather is Good")
}
else{
    console.log("The weather is Bad")
}*/

/*let username=""
while(username==="" || username===null){
    username=window.prompt("Enter your username:")
}
console.log(`Hello ${username}`);*/

/*let loggeIn=false
let username
let password
while(!loggeIn){
    username=window.prompt('Enter your Username:')
    password=window.prompt('Enter your Password')
    if(username==="myUsername" && password==="myPassword"){
        loggeIn=true
        console.log('You are logged in');
    }
    else{
        console.log("Invalid Credentials ! please try again")
    }
}*/

/*for(let i=0;i<3;i++){
    console.log('Hello')
}*/

/*function happyBirthday(username,age){
    console.log(`Happy Birthday dear ${username}`)
    console.log(`you are ${age}years old`)
}
happyBirthday('Bhagnesh',23)*/

/*function add(x,y){
    let res=x+y
    return res;
}
let ans=add(5,7)
console.log(ans)*/

/*function isEven(number){
    return number%2===0 ? true: false;
}
console.log(isEven(11));*/

/*function isValid(email){
    if(email.includes('@')){
        return true
    }
    return false
}
console.log(isValid('venkata@gmail.com'))*/

/*let fruits=["apple","banana","orange"]
fruits.push("coconut")
fruits.pop()
fruits.unshift("mango")
fruits.shift()
let len=fruits.length
let index=fruits.indexOf("apple")
console.log(fruits[0])
for(let i=0;i<len;i++){
    console.log(fruits[i])
}
//enhanced for loop
for(let fruit of fruits){
    console.log(fruit)
}
fruits.sort()
fruits.sort().reverse()*/

/*const matrix=[[1,2,3],[4,5,6],[7,8,9]]
for(let row of matrix){
    const rowString=row.join(' ')
    console.log(rowString)
}*/

/*let numbers=[1,2,3,4,5]
let maximum=Math.max(...numbers)
console.log(maximum)
let fruits=["orange","banana","apple"]
let vegetables=["carrots","tomatoes","potatoes"]
let foods=[...fruits,...vegetables]
console.log(foods)*/


/*function openFridge(...foods){
    console.log(foods)
}
function getFood(...foods){
    return foods;
}
const food1="pizza"
const food2="hamburger"
const food3="hotdog"
const food4="sushi"
const food5="ramen"
//openFridge(food1,food2,food3,food4,food5)
const foods=getFood(food1,food2,food3,food4,food5)
console.log(foods)*/

/*function sum(...numbers){
    let res=0
    for(let number of numbers){
        res+=number
    }
    return res
}
const total=sum(1,2,3,4,5)
console.log(total)*/

/*function combineString(...strings){
    return strings.join(' ')
}
const fullName=combineString("Mr.","Venkat","Bhagnesh","Kona")
console.log(fullName)*/

/*hello(goodbye);
function hello(callback){
    console.log("Hello!")
    callback()
}
function leave(){
    console.log("Leave!")
}
function goodbye(){
    console.log("Good Bye!")
}*/

/*sum(display,2,3)
function sum(callback,x,y){
    let res=x+y
    callback(res)
}
function display(res){
    console.log(res)
}*/

/*let numbers=[1,2,3,4,5]
numbers.forEach(double)
numbers.forEach(display)

function double(element, index, array){
    array[index]=element*2
}
function display(element){
    console.log(element)
}*/

/*let fruits=["apple","ornage","banana","coconut"]
fruits.forEach(upperCase)
fruits.forEach(display)
function upperCase(element,index,array){
    array[index]=element.toUpperCase()
}
function display(element){
    console.log(element)
}*/

/*const numbers=[1,2,3,4,5]
const squares=numbers.map(square)
console.log(squares)
function square(element){
    return Math.pow(element,2)
}*/

/*const students=["spongebob","patrick","squidward","sandy"]
const studentsUpper=students.map(upperCase)
console.log(studentsUpper)
function upperCase(element){
    return element.toUpperCase()
}*/

/*const dates=["2024-04-15","2024-2-20","2025-03-26"]
const formatedDates=dates.map(formatDates)
console.log(formatedDates)
function formatDates(element){
    const parts=element.split("-")
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}*/

/*let numbers=[1,2,3,4,5,6,7]
let evenNums=numbers.filter(isEven)
console.log(evenNums)
function isEven(element){
    return element % 2 === 0
}*/

/*const ages=[16,17,18,18,19,20,60]
const adults=ages.filter(isAdult)
console.log(adults)
function isAdult(element){
    return element >= 18;
}*/

/*const words=["apple","orange","banana","kiwi","pomegranate","coconut"]
const shortWords=words.filter(getShortWords)
console.log(shortWords)
function getShortWords(element){
    return element.length <= 6
}*/

/*const prices=[5,30,10,25,15,20]
const total=prices.reduce(sum)
console.log(`$${total.toFixed(2)}`)
function sum(accumulator,element){
    return accumulator+element
}*/

/*const grades=[75,50,90,80,65,95]
const maximum=grades.reduce(getMax)
console.log(maximum)
function getMax(accumulator,element){
    return Math.max(accumulator,element)
}*/


/*const hello = function(){
    console.log("Hello")
}
hello()*/

/*const numbers=[1,2,3,4,5]
const sqaures=numbers.map(function(element){
    return Math.pow(element,2)
})
console.log(sqaures)
const evenNums=numbers.filter(function(element){
    return element%2 ===0
})
console.log(evenNums)
const total=numbers.reduce(function(accumulator,element){
    return accumulator+element
})
console.log(total)*/

/*const hello=(name,age)=> {
                            console.log(`hello ${name}`)
                            console.log(`you are ${age} years old`)
                        }
hello('venkat',23)
const numbers=[1,2,3,4,5]
const sqaures=numbers.map((element)=>Math.pow(element,2))
console.log(sqaures)
const evenNums=numbers.filter((element)=>element%2===0)
console.log(evenNums)
const total=numbers.reduce((accumulator,element)=> accumulator+element)
console.log(total)*/

/*const person1={
    firstName:"spongebob",
    lastName:"squarepants",
    age:30,
    isEmployed:true,
    sayHello:function(){console.log(`Hi I am spongebob`)},
    sayBye:()=>console.log("GoodBye spongebob"),
    eat:function(){console.log("I am eating a krabby patty")}
}
const person2={
    firstName:"patrick",
    lastName:"star",
    age:42,
    isEmployed:false,
    sayHello:function(){console.log(`Hi I am patrick`)},
    sayBye:()=>console.log("GoodBye spongebob"),
    eat:function(){console.log("I am eating roasted chicken and pizza")},
}
person2.eat()*/

/*const person1={
    name:"spongebob",
    favFood:"hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat:function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2={
    name:"patrick",
    favFood:"pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat:function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
person2.eat()
console.log(this)*/

/*function Car(make,model,year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color,
    this.drive=function(){console.log(`You drive the ${this.model}`)}
}
const car1=new Car("Ford","Mustang",2024,"red")
const car2=new Car("Chevrolet","camero",2025,"blue")
const car3=new Car("Dodge","charger",2026,"silver")
car1.drive()
console.log(car1.color)*/

/*class product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayProduct(){
        console.log(`product: ${this.name}`)
        console.log(`price: ${this.price.toFixed(2)}`)
    }
    calculateTotal(salesTax){
        return this.price+(this.price*salesTax)
    }
}
const salesTax=0.05
const product1=new product('shirt',19.99)
const product2=new product('pants', 22.50)
product2.displayProduct()
const total=product1.calculateTotal(salesTax)
console.log(`Total Price: $${total.toFixed(2)}`)*/

/*class MathUtil{
    static PI=3.14;

    static getDiameter(radius){
        return radius*2
    }
    static getCircumference(radius){
        return 2*MathUtil.PI * radius
    }
    static getArea(radius){
        return MathUtil.PI*radius*radius
    }
}
console.log(MathUtil.PI)
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getCircumference(10))
console.log(MathUtil.getArea(10))


class User{
    static userCount=0
    constructor(username){
        this.username=username
        User.userCount++
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }
}
const user1=new User('spongebob')
const user2=new User('patrick')
user1.sayHello()
user2.sayHello()
User.getUserCount()
console.log(user1.username)
console.log(User.userCount)*/

/*class Animal{
    alive=true
    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}
class Rabbit extends Animal{
    name="Rabbit"
    run(){
        console.log(`This ${this.name} is Running`)
    }
}
class Fish extends Animal{
    name="Fish"
    swim(){
        console.log(`This ${this.name} is Swimming`)
    }
}
class Hawk extends Animal{
    name="Hawk"
    fly(){
        console.log(`This ${this.name} is Flying`)
    }
}
const rabbit=new Rabbit()
const fish=new Fish()
const hawk=new Hawk()
console.log(rabbit.alive)
rabbit.eat()
rabbit.sleep()
rabbit.run()
fish.swim()
hawk.fly()*/

/*class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name,age);
        this.runSpeed=runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed)
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name,age);
        this.swimSpeed=swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed)
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name,age);
        this.flySpeed=flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed)
    }
}
const rabbit=new Rabbit("rabbit",1,25);
const fish=new Fish("fish",2,12)
const hawk=new Hawk("hawk",3,50)
console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.runSpeed)
rabbit.run()*/

/*class Rectangle{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }
    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth
        }
        else{
            console.error("width must be a positive number")
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight
        }
        else{
            console.error("height must be a positive number")
        }
    }
    get width(){
        return this._width
    }
    get height(){
        return this._height
    }
    get area(){
        return this._height*this._width
    }
}
const rectangle=new Rectangle(3,4)
console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)

class Person{
    constructor(firstname, lastname, age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    set firstname(newFirstName){
        if(typeof newFirstName==="string" && newFirstName.length > 0){
            this._firstname=newFirstName;
        }
        else{
            console.error(`firstname must be a non empty string`)
        }
    }
    set lastname(newLastName){
        if(typeof newLastName==="string" && newLastName.length > 0){
            this._lastname=newLastName;
        }
        else{
            console.error(`lastname must be a non empty string`)
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge>=0){
            this._age=newAge
        }
        else{
            console.error("age must be a number")
        }
    }
    get firstname(){
        return this._firstname
    }
    get lastname(){
        return this._lastname
    }
    get age(){
        return this._age
    }
    get fullname(){
        return this._firstname +" "+ this._lastname
    }
}
const person1=new Person("venkat","bhagnesh",23)
console.log(person1.firstname)
console.log(person1.lastname)
console.log(person1.age)
console.log(person1.fullname)*/

/*let a=1;
let b=2;
[a,b]=[b,a]
console.log(a)
console.log(b)

const colors=["red","green","blue","black","white"];
[colors[0],colors[4]]=[colors[4],colors[0]]
console.log(colors)

const [firstColor, secondColor, thirdColor, ...extraColors]=colors;
console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors)

const person1={
    firstname:"spongebob",
    lastname:"squarepants",
    age:30,
    job:"Fry Cook"
}
const person2={
    firstname:"patrick",
    lastname:"start",
    age:34,
}
const {firstname,lastname,age,job="unemployed"}=person2
console.log(firstname)
console.log(lastname)
console.log(age)
console.log(job)

function displayPerson({firstname,lastname,age,job="unemployed"}){
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`age:${age}`)
    console.log(`job:${job}`)
}
displayPerson(person2)*/

/*const Person={
    fullname:"spongebob squarepants",
    age:30,
    isStudent:true,
    hobbies:["karate","jellyfishing","cooking"],
    address:{
        street:"124 Conch st",
        city:"Bikni Bottom",
        country:"Int water",
    }
}
for(const property in Person.address){
    console.log(Person.address[property])
}
console.log(Person.fullname)
console.log(Person.age)
console.log(Person.isStudent)
console.log(Person.hobbies[2])
console.log(Person.address.street)*/

/*class Address{
    constructor(street, city, country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}
class Person{
    constructor(name, age, ...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address)
    }
}

const person1=new Person("spongebob",30,"124 counch st","Bikni bottom","int water")
const person2=new Person("patrick",34,"124 counch st","Bikni bottom","int water")
console.log(person1.address)*/

/*const fruits=[{name:"apple",color:"red",calories:95},
              {name:"orange",color:"orange",calories:45},
              {name:"banana",color:"yellow",calories:105},
              {name:"coconut",color:"white",calories:159},
              {name:"pineapple",color:"yellow",calories:37}]
console.log(fruits[0].name)
fruits.forEach((fruit)=>console.log(fruit.name))
fruits.push({name:"grapes",color:"purple",calories:62})
//fruits.splice(1,2)//removes elements at certain indexes
console.log(fruits)
fruits.forEach(fruit => console.log(fruit.color))
const fruitNames=fruits.map(fruit => fruit.name)
console.log(fruitNames)
const yellowFruits=fruits.filter(fruit => fruit.color==="yellow")
console.log(yellowFruits)
const lowCalFruits=fruits.filter(fruit => fruit.calories<100)
console.log(lowCalFruits)
const highCalFruits=fruits.filter(fruit => fruit.calories>100)
console.log(highCalFruits)
const maxFruit=fruits.reduce((  max , fruit) =>
                                fruit.calories > max.calories ?
                                fruit : max)
console.log(maxFruit)
const minFruit=fruits.reduce((  min , fruit) =>
                                fruit.calories < min.calories ?
                                fruit : min)
console.log(minFruit)*/

/*let numbers=[1,2,10,9,8,4,6,7]
numbers.sort((a,b) => a-b)
console.log(numbers)

const people=[  {name:"spongebob",age:30,gpa:3.0},
                {name:"patrick",age:37,gpa:1.5},
                {name:"squidward",age:51,gpa:2.5},
                {name:"sandy",age:27,gpa:4.0}   ]
people.sort((a,b)=> a.age-b.age)
console.log(people)
people.sort((a,b)=> a.name.localeCompare(b.name))
console.log(people)*/

/*const date=new Date(2024,0,1,2,3,4,5)
const date=new Date("2024-01-02T12:00:00Z")
const date1=new Date("2024-12-31")
const date2=new Date("2025-01-01")
const year=date.getFullYear()
const month=date.getMonth()
const day=date.getDate()
const hour=date.getHours()
const minutes=date.getMinutes()
const seconds=date.getSeconds()
const dayOfWeek=date.getDay()
date.setFullYear(2025)
date.setMonth(0)
date.setDate(1)
date.setHours(2)
date.setMinutes(3)
date.setSeconds(4)
console.log(date)
if(date2>date1){
    console.log("Happy New Year")
}*/

/*function Outer(){
    let message="Hello"
    function Inner(){
        console.log(message)
    }
    Inner()
}
Outer()*/
/*function createCounter(){
    let count=0;
    function Increment(){
        count++;
        console.log(`count increased to ${count}`);
    }
    function getCount(){
        return count
    }
    return {Increment,getCount}
}

const counter=createCounter()
counter.Increment()
console.log(`The current count is ${counter.getCount()}`)*/

/*function createGame(){
    let score=0
    function increaseScore(points){
        score+=points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points){
        score-=points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore}
}
const game=createGame()
game.increaseScore(5)
game.decreaseScore(2)
console.log(`The current score is ${game.getScore()} pts`);*/

/*function sayHello(){
    window.alert('Hello')
}
setTimeout(sayHello,3000);*/
//setTimeout(function(){window.alert("Hello")},3000);
/*const timeoutId=setTimeout(()=>window.alert("Hello"),3000)
clearTimeout(timeoutId)*/

/*let timeoutId;
function startTimer(){
    timeoutId=setTimeout(()=> window.alert("Hello"),3000)
    console.log("Started")
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("cleared")
}*/

/*console.time("test")
for(let i=0;i<10;i++){}
console.timeEnd("test")

function loadData(){
    console.time("loadData")
    for(let i=0;i<1000;i++){}
    console.timeEnd("loadData")
}
function processData(){
    console.time("processData")
    for(let i=0;i<10000;i++){}
    console.timeEnd("processData")
}
processData()
loadData()*/

/*let number=12345567.89
//number=number.toLocaleString("INR")
//number=number.toLocaleString(undefined)
number=number.toLocaleString("INR",{style:"currency",currency:"INR"})
console.log(number)*/

/*setTimeout(()=>console.log("Task1"),3000)
console.log("Task2")
console.log("Task3")
console.log("Task4")

function func1(callback){
    setTimeout(()=>{console.log("Task1");
                    callback()},3000)
}
function func2(){
    console.log("Task2")
    console.log("Task3")
    console.log("Task4")
}
func1(func2)*/

/*try{
    console.log(x)
}
catch(error){
    console.error(error)
}
finally{
    console.log("This is end")
}*/

/*try{
    const dividend=Number(window.prompt("Enter a dividend: "))
    const divisor=Number(window.prompt("Enter a divisor: "))
    if(divisor==0){
        throw new Error("You can't divide by zero")
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number")
    }
    result=dividend/divisor
    console.log(result)
}
catch(error){
    console.error(error)
}
console.log("This is end")*/

/*const username="venkat"
const msg=document.getElementById("msg")
msg.textContent+=username===""?"Guest":username
console.dir(document)*/

/*const myHeading=document.getElementById("my-heading")
myHeading.style.backgroundColor="yellow"
myHeading.style.textAlign="center"

const fruits=document.getElementsByClassName("fruits")
fruits[0].style.backgroundColor="red"
for(let fruit of fruits){
    fruit.style.backgroundColor="yellow"
}
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor="green";
})

const h4Elements=document.getElementsByTagName("h4")
const liElements=document.getElementsByTagName("li")
h4Elements[0].style.backgroundColor="yellow"
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor="red"
}
for(let liElement of liElements){
    liElement.style.backgroundColor="orange"
}
Array.from(h4Elements).forEach((h4Element)=>{
    h4Element.style.backgroundColor="lightgreen"
})
Array.from(liElements).forEach((liElement)=>{
    liElement.style.backgroundColor="lightorange"
})

const element=document.querySelector(".fruits")
const element1=document.querySelector("h4")
const element2=document.querySelector("#my-heading")
element.style.backgroundColor="purple"
element1.style.backgroundColor="blue"
element2.style.backgroundColor="darkblue"

const foods=document.querySelectorAll(".fruits")
foods[0].style.backgroundColor="pink"
foods.forEach(food => {
    food.style.backgroundColor="grey"
})*/

//.firstElementChild
/*const element=document.getElementById("fruits")
const firstChild=element.firstElementChild
firstChild.style.backgroundColor="yellow"

const ulElements=document.querySelectorAll("ul")
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild
    firstChild.style.backgroundColor="pink"
})

//lastElementChild
const element1=document.getElementById("fruits")
const lastChild=element1.lastElementChild
lastChild.style.backgroundColor="grey"

const ulElements1=document.querySelectorAll("ul")
ulElements.forEach(ulElement => {
    const lastChild=ulElement.lastElementChild
    lastChild.style.backgroundColor="grey"
})

//nextElementSibling
const element2=document.getElementById("apple")
const nextSibling=element2.nextElementSibling
nextSibling.style.backgroundColor="skyblue"

//previousElementSibling
const element3=document.getElementById("onions")
const previousSibling=element3.previousElementSibling
previousSibling.style.backgroundColor="skyblue"

//parentElement
const element4=document.getElementById("pie")
const parent=element4.parentElement
parent.style.backgroundColor="lightgreen"

//children
const element5=document.getElementById("fruits")
const children=element5.children
Array.from(children).forEach(child => {
    child.style.backgroundColor="orange"
})*/

//event is an object provided automatically by web browser when something happens and it contain information when something happens
const myBox=document.getElementById("myBox");
/*function changeColor(event){
    event.target.style.backgroundColor="tomato";
    event.target.textContent="Ouch";
}
myBox.addEventListener("click",changeColor)
myBox.addEventListener("mouseover",(event)=>{
    event.target.style.backgroundColor="yellow";
    event.target.textContent="Don't do it"
})
myBox.addEventListener("mouseout",function(event){
    event.target.style.backgroundColor="lightgreen";
    event.target.textContent="Click me"
})

const myButton=document.getElementById("myButton")
function changeColor(event){
    myBox.style.backgroundColor="tomato";
    myBox.textContent="Ouch";
}
myButton.addEventListener("click",changeColor)
myButton.addEventListener("mouseover",(event)=>{
    myBox.style.backgroundColor="yellow";
    myBox.textContent="Don't do it"
})
myButton.addEventListener("mouseout",function(event){
    myBox.style.backgroundColor="lightgreen";
    myBox.textContent="Click me"
})*/

document.addEventListener("keydown",event=>{
    myBox.textContent="😫";
    myBox.style.backgroundColor="tomato"
})
document.addEventListener("keyup",event=>{
    myBox.textContent="😊";
    myBox.style.backgroundColor="lightblue"
})

const moveAmount=100;
let x=0;
let y=0;
document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y-=moveAmount;
                break;
            case "ArrowDown":
                y+=moveAmount;
                break;
            case "ArrowLeft":
                x-=moveAmount;
                break;
            case "ArrowRight":
                x+=moveAmount;
                break;
        }
        myBox.style.top=`${y}px`;
        myBox.style.left=`${x}px`;
    }
})