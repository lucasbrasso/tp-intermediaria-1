function calcularContaEnergia(kwh: number, tarifa: number, imposto: number, bandeira: string): number {
    let valorBase = kwh * tarifa;
    let acrescimoBandeira = 0;

    if (bandeira === "amarela") {
        acrescimoBandeira = 0.02 * kwh;
    } else if (bandeira === "vermelha") {
        acrescimoBandeira = 0.05 * kwh;
    }

    let valorTotal = valorBase + acrescimoBandeira;
    let valorComImposto = valorTotal + (valorTotal * (imposto / 100));

    return valorComImposto;
}

const consumo = 250;
const tarifa = 0.50;
const imposto = 15;
const bandeira = "amarela";

console.log(calcularContaEnergia(consumo, tarifa, imposto, bandeira));
