const gridContainer = document.querySelector(".grid-container");
for(let i=0; i<16;i++){
    const gridArray=new Array(16);
    gridArray[i]= document.createElement("div");
    gridArray[i].classList.add("grid-row");
    for(let j=0;j<16;j++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridArray[i].appendChild(gridItem); 
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
function getRandomColor(){
    const red = Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgba(${red}, ${green}, ${blue}, 1)`;
}
function getDarkerColor(gridItem){
    const rgbValues=window.getComputedStyle(gridItem).backgroundColor.match(/\d+/g);
    const backColor=String(window.getComputedStyle(gridItem).backgroundColor);
    const rgbArray=new Array(3);
    let result='';
    if(backColor==='rgb(0, 0, 0)'){
        result = 'rgba(0, 0, 0, 1)'
    }
    else{
        for(let i=0;i<rgbValues.length;i++){
            rgbArray[i]=rgbValues[i]-14;// reduce color by 10%
            if(rgbArray[i]<0){ 
                rgbArray[i]=0;//if the rgb values of the element is negative, its set to 0.
            }
        }
        result = `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, 1)`;
    }
    
    return result;
}


