const btn = document.getElementById("sendC");

const tableId = document.getElementById("dataBody");

async function listar() {

    const results = await fetch("http://localhost:8080/funcao");
    const data = await results.json();

    data.map((post) => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const td = document.createElement("td");

        th.setAttribute("scope", "col");

        th.innerText = post.id;
        td.innerText = post.nomeFuncao;

        tr.appendChild(th);
        tr.appendChild(td);
        tableId.appendChild(tr);

    });
}

listar();


function adiconar(datas) {

    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td = document.createElement("td");

    th.setAttribute("scope", "col");

    th.innerText = datas.id;
    td.innerText = datas.nomeFuncao;

    tr.appendChild(th);
    tr.appendChild(td);
    tableId.appendChild(tr);

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
        console.log(response);

    }

    name.value = "";
});