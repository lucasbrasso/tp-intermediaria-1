import { validarCPF } from "./ValidacaoCPF";

describe("Validacao do CPF", () => {
    test("CPF válido", () => {
        expect(validarCPF("12345678909")).toBe(true);
        expect(validarCPF("123.456.789-09")).toBe(true);
    });

    test("CPF invalido verificadores incorretos", () => {
        expect(validarCPF("12345678900")).toBe(false);
        expect(validarCPF("123.456.789-00")).toBe(false);
    });

    test("CPF invalido formato incorreto", () => {
        expect(validarCPF("123.456.789")).toBe(false);
        expect(validarCPF("12345678")).toBe(false);
        expect(validarCPF("abcdefghijk")).toBe(false);
        expect(validarCPF("111.111.111-11")).toBe(false);
    });
});