fetch("http://localhost:8080/funcao").then(
    (respota) => respota.json()
    ).then(data => console.log(data));