let buttons = document.querySelectorAll(".produto button");

buttons.forEach(bt => {
    bt.addEventListener("click", onRemoverBtClick)
})

async function onRemoverBtClick(evt) {
    let id = evt.target.id;
    let response = await fetch(`/carrinho/${id}`, {method:"DELETE"})
    let resposta = await response.json();
    let containerDoProduto = document.getElementById(`produto_${id}`)
    containerDoProduto.remove()
}
