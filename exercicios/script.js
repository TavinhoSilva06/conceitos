let form = document.getElementById("form");
let input = document.getElementById("input");
let msgErro = document.getElementById("msgErro");
let posts = document.getElementById("posts");


form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    validarFormulario();
});

let validarFormulario = () => {
    if (input.value === "") {
        msgErro.innerHTML = "Preencha o campo!";
        input.focus();
    } else {
        msgErro.innerHTML = ""; // Limpando a mensagem de erro
        posts.innerHTML += "<li>" +input.value+ "</li>";
        aceitarDados();
    }
};

let aceitarDados = () => {
    let dados = {};
    dados["Valor de Entrada"] = input.value;
    console.log(dados);
};

let limpardados = () => {
    posts.innerHTML = null;
    console.log("reset");
}