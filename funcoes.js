
function pegaNumeroDoUsuario(texto) {
    return parseFloat(prompt(texto).replace(",","."));
}

function formataPreco(preco) {
    return "R$" + preco.toFixed(2).replace(".",",");
}