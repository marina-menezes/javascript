import clientes from './clientes.js'

// Filtra clientes
const filteredClientes = clientes.filter((clientes) => {
    return clientes.idade === 25
});

console.log(filteredClientes)

let toPrint = ''

// Lista clientes
filteredClientes.forEach(cliente => {
    toPrint += cliente.cliente + ', '
});

console.log(toPrint)

// Reduce - função com todos os itens do array e devolve um valor único
// let meses = [30, 30] /array comum
let sumTotal = filteredClientes.reduce((prev, next) => {
    return prev + next.total;
}, 0);

// Map - funções em arrays de múltiplo individual (cada valor do array)

let taxaCambio = 5;
let comprasEmBrl = filteredClientes.map((cliente => {
    return cliente.total * taxaCambio
}))

let sumBrl = comprasEmBrl.reduce((first, second) => {
    return first + second;
}, 0);

document.getElementById('array').innerHTML = toPrint + 
'<br> O total dos clientes filtrados foi de: ' + 
sumTotal + '<br> Após conversão cada cliente pagará '
+ comprasEmBrl + ' totalizando ' + sumBrl
