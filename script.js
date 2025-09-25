const tableElement = document.createElement("table");

let columnas

let nombres = [
  "Adriana", "Miguel", "Camila", "Sofía", "Luis", "Valeria", "José", "Marcela", "Ricardo", "Ana",
  "Carlos", "Isabel", "María", "Victoria", "Leonardo", "Javier", "Rosa", "Pedro", "Daniela", "Andrés"
];

const trElement = document.createElement("tr");
const maxColumns = 2;
    

for (let th = 0; th < maxColumns; th++) {
    maxColumns.innerText = "nombre","edad";
    const thElement = document.createElement("th");
    thElement.innerText = nombres[th];
    tableElement.appendChild(thElement)
}

tableElement.appendChild(trElement);
document.body.appendChild(tableElement);

const buttonElement = document.createElement("button");
buttonElement.innerText = "Añade otra fila";

function newRow() {//nuevafila
    const trElement = document.createElement("tr");//creamos el elemento fila

        let randomId = Math.floor(Math.random() * nombres.length);
        let randomName = nombres[randomId]
        const tdElement = document.createElement("td");
        tdElement.innerText = randomName;
    
    
    trElement.appendChild(tdElement);
    tableElement.appendChild(trElement);
  
}


buttonElement.addEventListener("click",newRow);
document.body.appendChild(buttonElement)



