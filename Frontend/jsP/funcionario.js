const btn = document.getElementById("submitF");

btn.addEventListener("click", async function (e) {

    e.preventDefault();

    const funcao = document.getElementById("funcao");
    const valueF = funcao.options[funcao.selectedIndex].value;
    const name = document.getElementById("name");
    const idade = document.getElementById("idade");

    if (name.value == "" || idade.value == "") {
        alert("Por favor preencher todos os campos");
    } else {

        const funcionario = {
            name: name.value,
            idade: idade.value,
            funcao: {
                id: valueF
            }
        }

        const init = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(funcionario)
        }

        const response = await fetch("http://localhost:8080/pessoa", init);

        const dataTable = document.querySelectorAll("#dataTable")

        dataTable.forEach(e => e.remove());

        listarP();
    }

    name.value = "";
    idade.value = "";

});

async function categorias() {

    const select = document.getElementById("funcao");

    const responseC = await fetch("http://localhost:8080/funcao")
    const dataC = await responseC.json();

    dataC.map((categorias) => {
        const option = document.createElement("option")
        option.setAttribute("value", categorias.id)
        option.innerText = categorias.nomeFuncao;

        select.appendChild(option);
    });

}

async function listarP() {

    const dataFunc = document.getElementById("dataFunc");
    const response = await fetch("http://localhost:8080/pessoa");
    const data = await response.json();

    data.map((funcionarios) => {
        const tr = document.createElement("tr");
        const thId = document.createElement("th");
        const tdIdade = document.createElement("td");
        const tdFuncao = document.createElement("td");
        const tdName = document.createElement("td");
        const tdDelete = document.createElement("td");
        const buttonDelete = document.createElement("button");
        const tdEdit = document.createElement("td");
        const btnEdit = document.createElement("button");

        buttonDelete.setAttribute("class", "btn btn-danger")
        buttonDelete.setAttribute("onClick", "excluir(" + funcionarios.id + ")");

        btnEdit.setAttribute("class", "btn btn-success")

        tr.setAttribute("id", "dataTable");

        thId.innerText = funcionarios.id;
        tdName.innerText = funcionarios.name;
        tdIdade.innerText = funcionarios.idade;
        tdFuncao.innerText = funcionarios.funcao.nomeFuncao;
        buttonDelete.innerText = "Deletar";
        btnEdit.innerText = "Edit";

        tdDelete.appendChild(buttonDelete);
        tdEdit.appendChild(btnEdit);

        tr.appendChild(thId);
        tr.appendChild(tdName);
        tr.appendChild(tdIdade);
        tr.appendChild(tdFuncao);
        tr.appendChild(tdDelete);
        tr.appendChild(tdEdit);


        dataFunc.appendChild(tr);

    });
}

async function excluir(id) {
    const init = {
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json'
        }
    }

    const response = await fetch("http://localhost:8080/pessoa/" + id, init);

    const dataTable = document.querySelectorAll("#dataTable");

    dataTable.forEach(e => e.remove());

    listarP()

}
categorias();
listarP();
