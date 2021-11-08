const inputiSheno = document.getElementById('sheno')
const klikoButton = document.querySelector('.butoniKliko')
const todoLista = document.querySelector('.todolista')
const alerti = document.querySelector('.alert-popup')


  //me shtu 
  klikoButton.addEventListener('click',addList)
  //me fshi
  todoLista.addEventListener('click', removeList)


function addList(event)
{
  if(inputiSheno.value == "")
{
    alerti.style.opacity = 1;
    setTimeout(() => document.querySelector('.alert-popup').style.opacity=0, 3000);
}
else
{
    // console.log('a m klikove')
    //divi per todo
    const divToDo = document.createElement('div')
    divToDo.classList.add('divtodo')

    //krijimi i li 

    const todoLi = document.createElement('li')

    todoLi.innerText = inputiSheno.value

    divToDo.appendChild(todoLi)

    //buttoni check
    // const checkButtoni = document.createElement('button')
    // checkButtoni.innerHTML = '<i class="fas fa-check"></i>'
    // checkButtoni.classList.add('complete-btn')

    // divToDo.appendChild(checkButtoni)

    //buttoni delete
    const deleteButtoni = document.createElement('button')
    deleteButtoni.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButtoni.classList.add('delete-btn')
    divToDo.appendChild(deleteButtoni)


    todoLista.appendChild(divToDo)
    //me reset mbasi e shenon
    inputiSheno.value = ""

}  
}


function removeList (e)
{
  const item  = e.target
  if(item.classList[0] === 'delete-btn')
  {
    const todo = item.parentElement;
    todo.remove();
  }
}