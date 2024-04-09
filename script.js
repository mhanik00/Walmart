
function addTask() {
    const password= document.getElementById("password").value;
   
    if(
        password==="admin123"
    ){
        const inputBox = document.getElementById("input-box");
       
                const result= document.getElementById("result");
                result.innerHTML =
                `<a href="${inputBox.value}"><button class="btn">click me<button></a>`;
                
                saveData()
                inputBox.value = "";
                password.value="";
    }

    else{
        alert("log in failed");
    }
    // TASK input box
   
    
}

function saveData(){
    localStorage.setItem("data", result.innerHTML);
}

function loadData(){
    const data = localStorage.getItem("data");
    result.innerHTML = data;
}

loadData();