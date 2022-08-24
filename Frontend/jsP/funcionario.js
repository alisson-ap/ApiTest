// const btn = document.getElementById("submitF");

// btn.addEventListener("click", async function(e){

//     e.preventDefault();

//     const funcao = document.getElementById("funcao")
    

// });

async function categorias(){

    const select = document.getElementById("floatingSelect");
    
    const responseC = await fetch("http://localhost:8080/funcao")
    const dataC = await responseC.json();

    dataC.map((categorias)=>{
        const option = document.createElement("option")
        option.setAttribute("value", categorias.id)
        option.innerText = categorias.nomeFuncao;

        select.appendChild(option);
    });

}

async function listarP(){
    
    const dataFunc = document.getElementById("dataFunc");
    const response = await fetch("http://localhost:8080/pessoa");
    const data = await response.json();

    data.map((funcionarios)=>{
        const tr = document.createElement("tr");
        const thId = document.createElement("th");
        const tdIdade = document.createElement("td");
        const tdFuncao = document.createElement("td");
        const tdName = document.createElement("td");

        thId.innerText = funcionarios.id;
        tdName.innerText = funcionarios.name;
        tdIdade.innerText = funcionarios.idade;
        tdFuncao.innerText = funcionarios.funcao.nomeFuncao;

        tr.appendChild(thId);
        tr.appendChild(tdName);
        tr.appendChild(tdIdade);
        tr.appendChild(tdFuncao);

        dataFunc.appendChild(tr);
        
    });
}

categorias();
listarP();
