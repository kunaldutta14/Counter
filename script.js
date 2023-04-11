const decreaseBtn = document.getElementById ("decreaseBtn");
const displayValue = document.getElementById ("displayValue");
const resetBtn = document.getElementById ("resetBtn");
const increaseBtn = document.getElementById ("increaseBtn");
decreaseBtn.addEventListener = ("click", () => {
    const value=Number(displayValue.innerText);
    if (value>0) {
        displayValue.innerText=value-1;
    }
    else
    {
        alert("Negative value not allowed!");
}
});
increaseBtn.addEventListener ("click", () => {
    const value=Number(displayValue.innerText);
    if(value>=10) {
        alert("Values greater than 10 are not allowed!");
    }
    else {
        displayValue.innerText=value+1;
    }
});
resetBtn.addEventListener ("click",()=>{
    displayValue.innerText=0;
}
);