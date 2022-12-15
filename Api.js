const urlApi = 'https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees'

let inputName = document.getElementById('name');
let inputId = document.getElementById('id')
let inputCity = document.getElementById('city');
let inputBday = document.getElementById('bday');
let inputEmail = document.getElementById('email');

let btnAdd = document.getElementById("btnA"); 

fetch(urlApi)
  .then(response => response.json())
  .then(data => {
     DatosApi = data;

     CargaEmpleados(DatosApi)
})
.catch(error => console.error(error))

function CargaEmpleados(DatosApi){
  for (let index = 0; index < DatosApi.length; index++) {
    const element = DatosApi[index];
                  
    let tr = document.createElement('tr');
    let thID = document.createElement('th');
    let tdName = document.createElement('td');
    tdName.classList.add('edit');

    let tdCity = document.createElement('td');
    tdCity.classList.add('edit');
        
    let tdBirthday = document.createElement('td');
    tdBirthday.classList.add('edit');

    let tdEmail = document.createElement('td');
    tdEmail.classList.add('edit');

    let botonEdit = document.createElement("button");
    botonEdit.innerText = "Editar";
    botonEdit.className = 'btn btn-info';

    let botonDelete = document.createElement("button");
    botonDelete.innerText = "Eliminar";
    botonDelete.className = "btn btn-danger";

    thID.innerText = element.id;
    tdName.innerText = element.name;
    tdCity.innerText = element.city;
    tdBirthday.innerText = element.birthday;
    tdEmail.innerText = element.email;
    
    let tbody = document.querySelector('#tab');
    tbody.appendChild(tr);
    tr.appendChild(thID);
    tr.appendChild(tdName);
    tr.appendChild(tdCity);
    tr.appendChild(tdBirthday);
    tr.appendChild(tdEmail);
    tr.appendChild(botonEdit);
    tr.appendChild(botonDelete);


  botonEdit.addEventListener("click",() => {
      let edit = botonEdit.parentElement;
       edit = edit.childNodes
         if (botonEdit.innerText == "Editar") {
             editar(edit);
             botonEdit.innerText = "Aceptar";
            } else {
             guardar(edit)
             botonEdit.innerText = "Editar";
          }
      });  
  botonDelete.addEventListener("click", () => {
         tr.remove();
  })
}        
    
function editar(fila) {
  fila.forEach(elemento => {
    if (elemento.className === "edit") {
        let celdasEditables = document.createElement("input");
        celdasEditables.value = elemento.innerText;
        elemento.replaceWith(celdasEditables);
        celdasEditables.classList.add("edit")
    }
})
}

function guardar(fila) {
    fila.forEach(elemento => {
      if (elemento.className === "edit") {
          let celdaFinal = document.createElement("td");
          celdaFinal.innerText = elemento.value;
          elemento.replaceWith(celdaFinal);
          celdaFinal.classList.add("edit")
        };
      });
  };
}

btnAdd.addEventListener('click', addUser);

function addUser() {
  let tr = document.createElement('tr');
  let tdId = document.createElement('td');
  let tdName = document.createElement('td');
  let tdCity = document.createElement('td');
  let tdEmail = document.createElement('td');
  let tdBday = document.createElement('td');
    
  let tbody = document.getElementById('tab');
  tbody.appendChild(tr);
  tr.appendChild(tdId);
  tr.appendChild(tdName);
  tr.appendChild(tdCity);
  tr.appendChild(tdBday);
  tr.appendChild(tdEmail);
    
  tdId.innerText = inputId.value;
  tdName.innerText = inputName.value;
  tdCity.innerText = inputCity.value;
  tdEmail.innerText = inputEmail.value;
  tdBday.innerText = inputBday.value;  
} 