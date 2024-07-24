const gridContainer = document.querySelector(".grid-container");
for(let i=0; i<16;i++){
    const gridArray=new Array(16);
    gridArray[i]= document.createElement("div");
    gridArray[i].classList.add("grid-row");
    for(let j=0;j<16;j++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.textContent=`${j+1}`;
        gridArray[i].appendChild(gridItem);   
    }
    gridContainer.appendChild(gridArray[i]);
}
    