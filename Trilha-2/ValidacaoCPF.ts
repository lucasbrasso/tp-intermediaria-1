function validarCPF(cpf: string): boolean {
    // Verifica se o formato está correto (com pontos e hífen)
    const regexFormato = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!regexFormato.test(cpf) && !/^[0-9]{11}$/.test(cpf)) {
        return false;
    }

    // Remove caracteres não numéricos para validação
    cpf = cpf.replace(/[^\d]/g, "");

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    const calcDigito = (cpfArray: number[], pesoInicial: number): number => {
        let soma = 0;
        for (let i = 0; i < cpfArray.length; i++) {
            soma += cpfArray[i] * pesoInicial--;
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const cpfArray = cpf.split("" ).map(num => parseInt(num));
    const digito1 = calcDigito(cpfArray.slice(0, 9), 10);
    const digito2 = calcDigito(cpfArray.slice(0, 10), 11);

    return digito1 === cpfArray[9] && digito2 === cpfArray[10];
}

export { validarCPF };