const btn = document.getElementById("sendC");

const tableId = document.getElementById("dataBody");

async function listar() {

    const results = await fetch("http://localhost:8080/funcao");
    const data = await results.json();

    data.map((post) => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const td = document.createElement("td");
        const tdDel = document.createElement("td");
        const btnDel = document.createElement("button");
        const tdEdit = document.createElement("td");
        const btnEdit = document.createElement("button");

        tr.setAttribute("id", "dataTable")
        th.setAttribute("scope", "col");
        btnDel.setAttribute("class", "btn btn-danger");
        btnDel.setAttribute("id", "btnDel");
        btnDel.setAttribute("onCLick", "excluir(" + post.id + ")");

        btnEdit.setAttribute("class", "btn btn-success");
        btnEdit.setAttribute("id", "btnEdit");



        th.innerText = post.id;
        td.innerText = post.nomeFuncao;
        btnDel.innerText = "Deletar";
        btnEdit.innerText = "Editar";

        tdDel.appendChild(btnDel);
        tdEdit.appendChild(btnEdit);
        tr.appendChild(th);
        tr.appendChild(td);
        tr.appendChild(tdDel);
        tr.appendChild(tdEdit);
        tableId.appendChild(tr);

    });
}

listar();


async function excluir(id) {

    const init = {
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json'
        }
    }
    const response = await fetch("http://localhost:8080/funcao/" + id, init);

    const dataTable = document.querySelectorAll("#dataTable");

    dataTable.forEach(e => e.remove());

    listar();

}


btn.addEventListener("click", async function (e) {

    e.preventDefault();

    const name = document.getElementById("name");
    const value = name.value;

    if (value == "") {
        alert("Por favor preencher o campo");
    } else {

        const funcao = {
            nomeFuncao: name.value
        }

        const init = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(funcao)
        }

        const response = await fetch("http://localhost:8080/funcao", init);

    }

    const dataTable = document.querySelectorAll("#dataTable");

    dataTable.forEach(e => e.remove());

    listar();

    name.value = "";
});