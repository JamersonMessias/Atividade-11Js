vaso = 7
litroDeoleo = 4
Telefone = 780
mesaDeJantar = 1000

function desconto(produto) {
    produto = produto - (produto * 0.15)
    if(produto < 500){
    preco = 'Barato'
    } else{
        preco = 'Caro'
    }
    return console.log('Preço com desconto: ' + produto + ' Estado pós desconto: ' + preco)
}

function PrecosAtuais(prod) {
    return console.log(prod)
}
console.log('Preços atuais dos produtos:')
PrecosAtuais(vaso)
PrecosAtuais(litroDeoleo)
PrecosAtuais(Telefone)
PrecosAtuais(mesaDeJantar)

console.log('Preços com desconto:')

desconto(vaso)
desconto(Telefone)
desconto(mesaDeJantar)
desconto(litroDeoleo)