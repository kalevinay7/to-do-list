let text = document.getElementById('text');
let btn = document.getElementById('btn');
let ul = document.getElementById('ul')


// Without Condition 

// btn.addEventListener('click', function(){
//     let inputValue = text.value;
//         ul.innerHTML += `<li>${inputValue} <button onclick="edit(this)" class="edit">Edit</button> <button onclick="del(this)" class="delete">Delete</button> </li>`;

//         console.log(inputValue);

//         text.value = ""

// })





// Condition  
btn.addEventListener('click', function(){
    let inputValue = text.value;
    console.log(inputValue);
    
    if (inputValue == '') {
        alert('enter your text')
    }else{
        ul.innerHTML += `<li>${inputValue} <button onclick="edit(this)" class="edit">Edit</button> <button onclick="del(this)" class="delete">Delete</button> </li>`;
        text.value = ""

        }
})




    // Remove List
    function del(e) {
        e.parentElement.remove();
    }


    // Edit List 
    function edit(e) {
        let li = e.parentElement;
        let inputValue = prompt("Edit your text:", li.firstChild.nodeValue.trim());
        if (inputValue !== null) {
            li.firstChild.nodeValue = inputValue + ' ';
        }
    }
