const adviceNumber = document.getElementById("advice-number");
const advice = document.getElementById("advice");
const MainButton = document.getElementById("button");


const adviceList = [
  "სწავლის ძირი მწარე არის კენწეროში გატკბილდების.",
  "ათასჯერ კაცი დაფასდა ათიათასჯერ ნათქვამი .",
  "გველსა ხვრელით ამოიყვან ენა ტკბილად მოუბარი.",
  "ვინც ეძებს ის პოულობს.",
  "სწავლა და ბრძოლა.",
  "Be kind to yourself and others.",
  "Focus on the present moment.",
  "Stay positive and keep moving forward.",
  "Learn from your mistakes and failures.",
 
  "Don't be afraid to ask for help when you need it."
];


const randomNumber = [
  " ADVICE#111", 
  "ADVICE#11",
  " ADVICE#110",
   "ADVICE#121",
   "ADVICE#131",
   "ADVICE#158",
   "ADVICE#1521",
   "ADVICE#7",
   "ADVICE#21",
   "ADVICE#29",
]

MainButton.addEventListener("click", ()=>{
  const randomIndex = Math.floor(Math.random() * adviceList.length);
  const randomAdvice = adviceList[randomIndex];
  advice.textContent = randomAdvice;
  const randomIndex2 = Math.floor(Math.random() * randomNumber.length);
  const randomAdvicenum = randomNumber[randomIndex];
  adviceNumber.textContent =randomAdvicenum;
})




