const countValue=document.getElementById("counter");
function increment(){
    let value=parseInt(countValue.innerText);
    value+=1;
    countValue.innerText=value;
}
const decrement=()=>{
    let value=parseInt(countValue.innerText);
    value-=1;
    countValue.innerText=value;
}