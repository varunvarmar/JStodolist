const addBtn = document.querySelector('.addBtn');
var input = document.querySelector('.input'); 
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }  
    createDiv(itemName){
        let input = document.createElement('input');
        input.type = "text";
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
    
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editBtn = document.createElement('button');
        editBtn.innerHTML = "Edit";
        editBtn.classList.add('editBtn');

        let rmBtn = document.createElement('button');
        rmBtn.innerHTML =  "Remove";
        rmBtn.classList.add('rmBtn');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editBtn);
        itemBox.appendChild(rmBtn);

        editBtn.addEventListener('click', () => this.edit(input));
        rmBtn.addEventListener('click', () => this.rm(itemBox));
    }

    edit(input){
        input.disabled = !input.disabled;
    }

    rm(item){
        container.removeChild(item);
    }

}
function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }else{
        alert('It\'s Empty, Type anything you want.');
    }
}

addBtn.addEventListener('click', check);

window.addEventListener('keydown',(e) => {
    if(e.which == 13){
        check();
    }
});