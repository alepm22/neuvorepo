import contarPalabras from "./contadorPalabra.js";

describe("Contar palabras de frase", () => {
  it("Deberia de contar una palabra", () => {
    expect(contarPalabras("hola")).toEqual(["hola",1]);
  });

 it("Deberia de contar dos veces la misma palabra", () => {
    expect(contarPalabras("hola hola")).toEqual(["hola",2]);
  });

  it("Deberia de una vez la primera palabra", () => {
    expect(contarPalabras("hola hla")).toEqual(["hola",1]);
  });
});
