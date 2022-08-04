let btns = document.getElementsByClassName('btn');
let inputText = document.getElementById('inputtext');




let calculate=(number)=>{
    inputText.value += number;
    console.log('clicked')
};

let result=()=>{
    try{
        inputText.value= eval(inputText.value);
    }
    catch(error){
        alert('Please put the input correctly');
    }
};

function clr(){
    console.log('clear');
    inputText.value = " ";
};
function del(){
    console.log('clicked');
    inputText.value = inputText.value.slice(0, -1);
}
function per(){
    let inputTextValue = inputText.value;
    inputText.value = inputTextValue/100;
    console.log('clicked')
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s ;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


  const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    const section = document.getElementById('section');
    section.classList.toggle('dark');
});
 
