function contarPalabras(frase) {
    let palabras=frase.split(" ");
    if(palabras.length > 1)
        {
            if(palabras[0]==palabras[1])
                {
                    return [palabras[0],2];
                }
        }
    return [palabras[0],1];

  }
  
  export default contarPalabras;
