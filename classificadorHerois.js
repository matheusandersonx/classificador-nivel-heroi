let nomes = ['Batman', 'Homem de ferro', 'Goku']
let exp = [5041, 1000, 20000]
const ranks = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante']


for (let index = 0; index < nomes.length; index++) {
    if (exp[index] <= 1000) {
        console.log(`O Herói de nome ${nomes[index]} está no nível de ${ranks[0]}`)
    } else if (exp[index] > 1000 && exp[index] < 2000) {
        console.log(`O Herói de nome ${nomes[index]} está no nível de ${ranks[1]}`)
    } else if (exp[index] > 2001 && exp[index] < 5000) {
        console.log(`O Herói de nome ${nomes[index]} está no nível de ${ranks[2]}`)
    } else if (exp[index] > 5000 && exp[index] < 7000) {
        console.log(`O Herói de nome ${nomes[index]} está no nível de ${ranks[3]}`)
    } else if (exp[index] > 7000 && exp[index] < 8000) {
        console.log(`O Herói de nome ${nomes[index]} está no nível de ${ranks[4]}`)
    } else if (exp[index] > 8000 && exp[index] < 9000) {
        console.log(`O Herói de nome ${nomes[index]} está no nível de ${ranks[5]}`)
    } else if (exp[index] > 9000 && exp[index] < 10000) {
        console.log(`O Herói de nome ${nomes[index]} está no nível de ${ranks[6]}`)
    } else {
        console.log(`O Herói de nome ${nomes[index]} está no nível de ${ranks[7]}`)
    }
}
