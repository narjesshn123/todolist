//select element
const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const input = document.getElementById('input');

const list = document.getElementById('list');

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "line-through";


//variable
let LIST, id;

let data = localStorage.getItem('TODO');

    LIST = JSON.parse(data)
    loadToDo(LIST)
    id = LIST.length


function loadToDo( array ){
    array.forEach(function (item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}


//show today date
const options = {weekday: "long", month: "short", day: "numeric"}
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString('en-US', options)

//insertAdjacentHTL()

function addToDo(toDo, id, done, trash) {
    if(trash){
        return;
    }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const item = `
    <li class="item row">
                <i class="fa ${DONE} col-1 complete" job="complete" id="${id}">

                </i>
                <p class="text col-9 ${LINE}">${toDo}</p>
                <i class="fa-check-circle col-2" job="delete" id="${id}"></i>

           </li> `


    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

//add item with press Enter
document.addEventListener('keyup', (even) =>{
    if(even.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false,
                });
            localStorage.setItem("TODO", JSON.stringify(LIST))

            id++
        }
        input.value = "";
    }

}  );



function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false :true;
}




function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}
list.addEventListener("click", function (event){
    const element = event.target;
    const elementJob = element.attributes.job.value;
    if(elementJob == "complete"){
        completeToDo(element);
    }
    else if(elementJob == "delete"){
        removeToDo(element);
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));
})


