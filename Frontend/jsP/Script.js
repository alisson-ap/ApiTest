const btn = document.getElementById("sendC");

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

    name.value = "";
});