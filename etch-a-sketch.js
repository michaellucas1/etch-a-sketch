const gridContainer = document.querySelector(".grid-container");
let currentGridSize=16;
function createGrid(gridCount){
    setCurrentGridSize(gridCount);
    for(let i=0; i<gridCount;i++){
        const gridArray=new Array(gridCount);
        gridArray[i]= document.createElement("div");
        gridArray[i].classList.add("grid-row");
        for(let j=0;j<gridCount;j++){
            const gridItem = document.createElement("div");
            gridItem.style.padding=`${calculateSquareSize(gridCount)}px`;
            gridItem.classList.add("grid-item");
            
            gridArray[i].appendChild(setGridShadow(gridItem)); 
            gridItem.addEventListener("mouseover",(event)=>{
                event.stopImmediatePropagation();
                const backColor=String(window.getComputedStyle(gridItem).backgroundColor);
                if(backColor==='rgba(0, 0, 0, 0)'){
                    gridItem.style.backgroundColor=getRandomColor();
                }
                else{
                    gridItem.style.backgroundColor=getDarkerColor(gridItem);
                }
                
            });
            gridArray[i].appendChild(gridItem);
        }
        gridContainer.appendChild(gridArray[i]);
    }
}
function calculateSquareSize(gridCount){
    return 250 / gridCount;
}
function setCurrentGridSize(gridCount){
    currentGridSize = gridCount;
}
function getCurrentGridSize(){
    return currentGridSize;
}
function setGridShadow(gridItem){
    gridItem.style.boxShadow='0px 0px 0.8px rgba(0,0,0,0.5)';
    return gridItem;
}
function getRandomColor(){
    const red = Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgba(${red}, ${green}, ${blue}, 1)`;
}
function getDarkerColor(gridItem){
    
    const rgbValues=window.getComputedStyle(gridItem).backgroundColor.match(/\d+/g);//stores the rgb values of current bg color of an element to an array
    const backColor=String(window.getComputedStyle(gridItem).backgroundColor);
    const rgbArray=new Array(3);
    let result='';
    if(backColor==='rgb(0, 0, 0)'){//check if the bg color is already black. It returns the rgba equivalent to black and skip the else statement for less processing.
        result = 'rgba(0, 0, 0, 1)'
    }
    else{
        for(let i=0;i<rgbValues.length;i++){
            rgbArray[i]=rgbValues[i]-14;// reduce color by 10%
            if(rgbArray[i]<0){ 
                rgbArray[i]=0;//if the rgb values of the element is negative, set it to 0.
            }
        }
        result = `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, 1)`;
    }
    return result;
}
const gridSetButton=document.querySelector(".grid-size-button");
gridSetButton.addEventListener("click",()=>{
    const newGridSize=prompt("Enter a number");
    if(typeof newGridSize !== 'undefined' && newGridSize <=100 ){
        const  gridContainer=document.querySelector('.grid-container');
        gridContainer.textContent="";
        createGrid(newGridSize);
    }
    
});
const gridResetButton=document.querySelector(".grid-reset");
gridResetButton.addEventListener("click",()=>{
    gridContainer.textContent="";
    createGrid(currentGridSize);
});
createGrid(currentGridSize);