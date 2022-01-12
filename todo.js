// const form = document.querySelector('.form-group')
// const taskInput = document.querySelector('#inlineCheckbox1')
// const taskList = document.querySelector('.list-group')
// const clearBtn = document.querySelector('#clear-task')
//
//
//
// loadEventListeners();




//
// function loadEventListeners(){
// add task event
//     form.addEventListener('submit', addTask)
// }
//
// function addTask(e){
//
//         const li = document.createElement('li')
//         li.className = 'list-group-item d-flex align-items-center';
//         li.appendChild(document.createTextNode(taskInput.value));
//         const i = document.createElement('i')
//         i.className = 'fas fa-times delete-item';
//         li.appendChild(i);
//         taskList.appendChild(li);
//         taskInput.value = '';
//         e.preventDefault()
//     }
var listLis=document.getElementById('list');
const addbutton=document.querySelector('.fa')
const inputBar=document.querySelector('.show')
const delAll = document.querySelector('.deleteAll')



function showInput(e){

        inputBar.classList.toggle('List-group')

}

addbutton.addEventListener('click',showInput);
document.getElementById('myText').value='';
inputBar.addEventListener('keypress',seeToIt);

delAll.addEventListener('click', ()=>{ listLis.innerHTML = ''})


function seeToIt(e){
        var textInInput= document.getElementById('myText');
        const li = document.createElement('li')
        li.className = 'List-group';
        li.appendChild(document.createTextNode(taskInput.value));
        // var linode = document.createElement('li');
        // li.className = 'List-group';
        if(e.code=='Enter'){
                linode.innerHTML = `${textInInput.value}<button class='del' onclick="this.parentNode.remove()"><i class="fas fa-window-close"></i></i></i></button>`
                listLis.appendChild(linode)
                textInInput.value='';
        }
}
