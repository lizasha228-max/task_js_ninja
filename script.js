// // Задание 1

// const strText = "Ohana means family";
// const letterArr = ["a", "e", "i", "0", "u"];

// function findLetters(sentence, arr) {
//   let numObj = {};

//   for (let info of arr) {
//       numObj[info] = 0;
//   }
//   for (let i = 0; i < sentence.length; i++) {
//     const counterElement = sentence[i];
//     if (arr.includes(counterElement)) {
//       numObj[counterElement]++
//     }
//   }
//   console.log("jkjjk",numObj)
//   return numObj
// }

// findLetters(strText,letterArr);

// // Задание 2

// const wordText = "Hallo";

// function reverseString(str){
//  let newString = "";
//  for (let i = 0; i < str.length ; i++){
// newString = newString + str[str.length - i - 1];
//  }
//  console.log("mjlkik",newString);
//  return newString;
// }

// reverseString(wordText);

// // Задание 3

// const arrEmail = "gygggvhv@gmail.com";
// const textAt = "@";

// function findAt(text,at){
// let newObj = {};

// for(let char of at){
// newObj[char] = 0;
// }
// for(let i = 0; i < text.length; i++){
//   const countAt = text[i];
//   if (at.includes(countAt)) {
//    newObj[countAt]++
//   }
// }
// console.log(newObj)
// }

// findAt(arrEmail,textAt);

// // Задание 4

// // const arrtextNum = "abc123def4";
// // str.replace( /[abcdef]/i,"");
// // console.log(arrNumbers);

// const arrtextNum = "abc123def4";
//  let res = "";
// for(let i = 0; i < arrtextNum.length; i++){
//     if (arrtextNum[i] != "1" && arrtextNum[i] != "2" && arrtextNum[i] != "3" && arrtextNum[i] != "4"){
//         res = res + arrtextNum[i];
//     }

// }
// console.log(res);

// // const str = "Hallo world!";
// // let strData = "";
// // for(let i = 0; i < str.length; i++){
// //     if (str[i] == " "){
// //       strData = strData + "Hallo_world!";
// //     }
// // }
// // console.log(strData);

// // const str = "hello my Friend, how are You?";

// // const strDat = new RegExp(/[A-Z]/g);
// // const resultStr = strDat.exec(str);

// // console.log("jkjmkjikj",resultStr[0])

// // const str = "My ID is A123";

// // console.log((/\d/g).test(str));

// // test — проверить, есть ли хотя бы одна цифра
// // exec — найти первое слово, начинающееся с заглавной буквы

// // match — найти все хэштеги

// // const str = "#code #life #JS";

// // const strInfo = (str).match(/\#/g);

// // console.log(strInfo);

// const str = "Hello world!";

// const strDat = (str).search(/\s/g);

// console.log(strDat);

// const strSentense = "JS is awesome";

// const strChange = (strSentense).replace(/\s/g,"_");

// console.log(strChange);

// const strInform = "яблоко,груша, банан";

// const infoChange = strInform.split(",");

// console.log(infoChange);

// async function addElement() {
//       const infoCards = document.querySelector(".cards");
//         const createDiv = document.querySelector(".tittle");
//       const data = ['apple', 'banana', 'orange'];
//             console.log(data)
//             for (let i = 0; i < data.length; i++) {
//              infoCards.innerHTML = data[i];
//             }
//             console.log(infoCards);
// }

// const API_URL = 'https://jsonplaceholder.typicode.com/users';

// async function createUserTable() {
//   const response = await fetch(API_URL);
//   const data = await response.json();

//   const container = document.getElementById('table-container');

//   let html = '<table border="1" cellspacing="0" cellpadding="8" style="width: 100%;">';
//   html += `
//     <tr>
//       <th>ID</th>
//       <th>Name</th>
//       <th>Email</th>
//       <th>Status</th>
//     </tr>
//   `;

//   for (let i = 0; i < 10; i++) {
//     const user = data[i];
//     const status = i % 2 === 0 ? 'Active' : 'Inactive';

//     html += `
//       <tr>
//         <td>${user.id}</td>
//         <td>${user.name}</td>
//         <td>${user.email}</td>
//         <td>${status}</td>
//       </tr>
//     `;
//   }

//   html += '</table>';

//   container.innerHTML = html;
// }

// createUserTable();

// const API_URL = 'https://jsonplaceholder.typicode.com/users';

// async function createUserTable() {
//   const response = await fetch(API_URL);
//   const data = await response.json();

//   const container = document.getElementById('table-container');

//   const table = document.createElement('table');
//   table.style.borderCollapse = 'collapse';
//   table.style.width = '100%';

//   const headerRow = document.createElement('tr');
//   const headers = [ 'ID', 'Name', 'Email', 'Status' ];

//   for(let i = 0; i < headers.length;i++){
//    const th = document.createElement('th');
//     th.textContent = headers[i];
//     th.style.border = '3px solid red';
//     th.style.padding = '8px';
//     headerRow.appendChild(th);
//   }
//   table.appendChild(headerRow);

//   for (let i = 0; i < 10; i++) {
//     const user = data[i];
//     const row = document.createElement('tr');

//     const id = document.createElement('td');
//     id.textContent = user.id;

//     const name = document.createElement('td');
//     name.textContent = user.name;

//     const email = document.createElement('td');
//     email.textContent = user.email;

//     const status = document.createElement('td');
//     status.textContent = i % 2 === 0 ? 'Active' : 'Inactive';

//     const updateArrey =  [ id, name, email, status ];

//     for(let i = 0; i < updateArrey.length; i++){
//       let cell = updateArrey[i];
//        cell.style.border = '1px solid black';
//       cell.style.padding = '8px';
//       row.appendChild(cell);
//     }

//     table.appendChild(row);
//   }

//   container.appendChild(table);
// }

// createUserTable();

// создать функцию которая принимает аргумент, проверяет его на тип , если тип string
// то тогда цикл for будет на 10 инераций, все другое 5 итераций

// function getData(info) {
// let counter = typeof(info) === "string" ? 10 : 5 ;
// console.log("njnj",counter);
// for(let i = 0; i < counter; i++){
// if(i % 2 === 0){
//       console.log(i);
// }
// }

// }

// getData("jnjnknkn");

// const objData = {
//       name:"Luna",
//       age:5,
//       color:"grey-white",
//       weight:6,
//       type:"cat"
// }

// const updateobjData = JSON.stringify(objData); //преобразуем обьект в строку
// localStorage.setItem("dataCat",updateobjData); //сохраняем в локалсторич эту строку
// const getdataCat = localStorage.getItem("dataCat"); //забираем обьект с локалсторич
// const getupdatedataCat = JSON.parse(getdataCat); //преобразовуем строку в обьект назад
// console.log(getdataCat);
// console.log(getupdatedataCat);

// async function fetchInfo() {
//       const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             .then(json => json)
//       console.log("this is data", data.title);
//       localStorage.setItem("data", JSON.stringify(data));
//       const json = '{"result":true, "count":42}';
//       const convertData = JSON.parse(json);
//       console.log(convertData);
//       const infoData = document.getElementById("firstInfo");
//       infoData.textContent = data.title;
//       const infoDat = document.getElementById("secondInfo");
//       infoDat.textContent = data.id;
//       const infoBlock = document.getElementById("thirdInfo");
//       infoBlock.textContent = data.userId;
//       const infoText = document.getElementById("fourthInfo");
//       infoText.textContent = data.completed;
//       console.log("hjhnujhuh", infoData);
// }

// async function getData(){
// const data = await fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => json)
//       const anotherData = data.slice(0, 10);
//       const getInfo = document.getElementById("table-container");
//       getInfo.textContent = anotherData.title;
// }

// getData();

// const arrOne = [ 1, 2, 3 ];
// const arrSecond = [ 3, 4, 5 ];

// let res = 0;

// for(let i = 0; i < arrOne.length; i++){
//       res = res + arrOne[i] + arrSecond[i];
// }
// console.log(res);

function useDisabled(flag) {
  if (flag === true) {
    const dataGet = document.querySelector(".block");
    setTimeout(() => {
      dataGet.style.backgroundColor = "blue";
    }, 3000);
  } else {
    alert(`Your flag is ${flag}`);
  }
}

const dataId = document.querySelectorAll(".info__block [id]");
console.log(dataId);

function colorChange(colorData, number) {
  if (colorData.length !== 0) {
    let firstEl = colorData[0];
    let secondElement = colorData[1];
    // firstEl.style.backgroundColor = "green";
    switch (number) {
      case 0:
        firstEl.style.backgroundColor = "green";
        break;
      case 1:
        secondElement.style.backgroundColor = "blue";
        break;
    }
  }
}

// colorChange(dataId,1);

const fruits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res1 = [];

const res2 = [];

for (let i = 0; i <= fruits.length - 1; i++) {
  if (fruits[i] % 2 === 0) {
    res1.push(fruits[i]);
  }
}

for (let i = fruits.length - 1; i >= 0; i--) {
  if (fruits[i] % 2 !== 0) {
    res2.push(fruits[i]);
  }
}

// dataObj["fullprice"] = "50";
// dataObj.price = 25;
// // dataObj = delete dataObj.age; /// удаление и добавление ключа

// console.log(dataObj);

// function checkData(obj){
//   if( obj.hasOwnProperty("fullname")){
//       alert("Yes, there is a key");
//   }else {
//       alert("There is no key");
//   }
// }

// checkData(dataObj);

// const dataobjAssign = Object.assign({}, dataObj);

// dataobjAssign.nickname = "Solnce";

// const newObj = dataObj;

// newObj.nickname = "Solnce";

// const infoObj = {...dataObj};

// console.log(dataobjAssign, "hjbjbjhb");
// console.log(dataObj, "dataobj");
// console.log(infoObj);

// let dataObj = {
//       nickname: "luna",
//       fullname: "luntiao luntic",
//       age: 55,
//       gender: "cat"
// }

// const dataInfo = JSON.stringify(dataObj);

// localStorage.setItem("informacia",dataInfo);

// const resultObj = localStorage.getItem("informacia");

// const infoObj = JSON.parse(resultObj);

// console.log(infoObj);

async function getdataUser() {
  const dataUserList = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => json);
  console.log(dataUserList);
  const getInfo = document.getElementById("user__name");
  const getDataEmail = document.getElementById("user__email");
  for (let i = 0; i < dataUserList.length; i++) {
    console.log("dataUserList");
    const createLi = document.createElement("li");
    const createLiEmail = document.createElement("li");
    getInfo.appendChild(createLi);
    getDataEmail.appendChild(createLiEmail);
    createLi.textContent = dataUserList[i].name;
    createLiEmail.textContent = dataUserList[i].email;
  }
}

setTimeout(() => {
  console.log("before");
  getdataUser();
  console.log("after");
}, 2000);

async function showTask() {
  const allTasks = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => json);
  console.log(allTasks);
  const firstTask = allTasks.slice(0, 10);
  console.log(firstTask);
  for (let i = 0; i < firstTask.length; i++) {
      const mainTitle = document.getElementById("task__ten");
      const createDiv = document.createElement("div");
      mainTitle.append(createDiv);
      createDiv.textContent = firstTask[i].title;
    if (firstTask[i].completed === true) {
      createDiv.classList.add("done");
    }
  }
}

showTask();
