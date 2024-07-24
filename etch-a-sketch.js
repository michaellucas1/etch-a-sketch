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
            
        });
        gridArray[i].appendChild(gridItem);
    }
    gridContainer.appendChild(gridArray[i]);
}
function getRandomColor(){
    const red = Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const alpha = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue}, ${alpha})`;
}

