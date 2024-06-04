import contarPalabras from "./contadorPalabra.js";

describe("Contar palabras de frase", () => {
  it("Deberia de contar una palabra", () => {
    expect(contarPalabras("hola")).toEqual(["hola",1]);
  });

});
