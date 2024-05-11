
// Variable Declearations

const SeticonEl =document.getElementById("Seticon");
const inputBtnCon = document.getElementById("inputBTNCont");
let togg_value = false;

const DatInput = document.getElementById("Input");
const btnEl = document.getElementById("btn");
const secondViewEl = document.getElementById("secondView");
const firstViewEl = document.getElementById("firstView");
let UserInput;

let yearEl =document.getElementById("year");
let monthEl =document.getElementById("month");
let dayEl =document.getElementById("day");
let hourEl =document.getElementById("hour");
let minuteEl =document.getElementById("minute");
let secondEl =document.getElementById("second");



// Add 0 If Number Is less Than 9

const twoDigitNum =(num)=>{
    return num >9 ? num :`0${num}`;
    }
    


// click Setting Icon To Show Date Input && Button

const toogleSetItem = () => {

    if(togg_value){
        inputBtnCon.classList.add("hide");
    }
  else{
 inputBtnCon.classList.remove("hide")
  }

togg_value = !togg_value;


};



// Calculation Of Date And Import Front Page

const upDateAge =() =>{
  
    const currentDate = new Date();
    const dateDiff = currentDate - UserInput;
  
    const year =  Math.floor(dateDiff/(1000 * 60 * 60 * 24 * 365));
    const month = Math.floor((dateDiff/(1000 * 60 * 60 * 24 * 365)) % 12);
    const date  = Math.floor(dateDiff/(1000 * 60 * 60 * 24)) % 30;
    const hour=   Math.floor(dateDiff/(1000 * 60 * 60 )) % 24;
    const minute =Math.floor(dateDiff/(1000 * 60 )) % 60;
    const second =Math.floor(dateDiff/1000) % 60;

    yearEl.innerHTML=  twoDigitNum(year);
    monthEl.innerHTML= twoDigitNum(month);
    dayEl.innerHTML  = twoDigitNum(date);
    hourEl.innerHTML = twoDigitNum(hour);
    minuteEl.innerHTML=twoDigitNum(minute);
    secondEl.innerHTML=twoDigitNum(second);



}


// local storage get Method

const localGetStorage = () =>{
  
    const year = localStorage.getItem("year");
    const month = localStorage.getItem("month");
    const date = localStorage.getItem("date");


    if(year && month && date){
        UserInput = new Date(year, month, date)
        
    }
  upDateAge();

}








// If User Import date The Content Page Will Change


const contentPage_Toggle = () =>{

    const dateString = DatInput.value;
    UserInput = dateString? new Date(dateString):null; 

upDateAge();
if(UserInput){
    firstViewEl.classList.add("hide");
    secondViewEl.classList.remove("hide");
    

}
else{
    firstViewEl.classList.remove("hide");
    secondViewEl.classList.add("hide");
}

};

console.log(UserInput)


// local storage set Method


const FirSecPag_Toggle =() =>{
    const dateString = DatInput.value;
    UserInput = dateString? new Date(dateString):null; 
   
     
    if(UserInput){
    
        localStorage.setItem("year",UserInput.getFullYear().toString());
        localStorage.setItem("month",UserInput.getMonth().toString());
        localStorage.setItem("date",UserInput.getDate().toString());
    }

    


    setInterval(()=> upDateAge(), 1000);
    localGetStorage()
    contentPage_Toggle();
    // localGetStorage()


    
};



FirSecPag_Toggle()

// localGetStorage();
// contentPage_Toggle()




SeticonEl.addEventListener("click",toogleSetItem);
btnEl.addEventListener("click",FirSecPag_Toggle);




