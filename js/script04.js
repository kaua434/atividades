// O que é uma estrutura de repetição

/*

- É usada quando queremos fazer a realização de uma ação repetidas vezes.
- É importante ressaltarque a estrutura de repetição é conhecida como laço
ou loop

- Existem algumas estruturas de repetição:
    - for
    - while
    - do...while
    - for...of
    - for...in
    - foreach

    */

    // FOR

    /**
     * A sintaxe do for:
      -> for(palavra-chave) + (variável; condição + incremento/decremento) {bloco}
     */

      //for(let i = 0; i < 10; i < 10; i++) {
      // console.log(i);
      // }

     // while
     
     /*
         - O bloco de código dentro do while será executado enquanto a condição
         for verdadeira
     */

    //  let i = 0;

    //  while(i < 10) {
        // bloco de código

        // i++;
    //  }

    // do {
   // i++;
    // }while(i < 10)

    let esportes = ["futebol", "vôlei", "basquete", "skate"];
    
    for(let esporte of esportes) {
        console.log(esporte)
    } 