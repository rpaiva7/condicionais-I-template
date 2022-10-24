
// EXERCÍCIO if e if/else
//1. Crie duas variáveis booleanas, bool1 e bool2, e atribua respectivamente false e true.
//2. Crie um if para verificar se bool1 é true, exiba um ALERT caso seja true.
//3. Crie um else que exiba um ALERT caso não seja

const bool1 = false
const bool2 = true

/*if (bool1) { //Se for true entra aqui.
    alert('Entrei no If, sou true')
} else { //Se for false entra aqui.
    alert('Entrei no else, sou false')
}*/

// EXERCÍCIO if e else/if
//4. Crie uma terceira variável chamada bool3, com valor true.
//5. Crie um if que verifica se bool1 e bool2 são iguais e exiba um alert.
//6. Crie um else if que verifica se bool2 e bool3 são iguais e exiba um alert.
//7. Crie mais um else if que verifica se bool1 e bool3 são iguais e exiba um alert.
//Crie um else que exiba um alert caso não existam valores iguais.

const bool3 = true

/*if (bool1 === bool2) {
    alert('1 e 2 são iguais!')

} else if (bool2 === bool3) { 
    alert('2 e 3 são iguais!')

} else if (bool1 === bool3) {
    alert('1 e 3 são iguais!')

} else { 
    alert('Nenhuma das condições foi atendida!')*/

// EXERCÍCIO if/else if/else (if else encadeado)
/* Vamos verificar se o candidato já pode tirar seu título de eleitor!
8. Crie uma variável idade e atribua uma valor a ela.
9. Agora crie uma lógica com os requisitos abaixo:
 - Pode emitir título de eleitor: pessoas com 18 anos ou mais.
 - Não pode emitir título de eleitor: pessoas menores de 18 anos.
 - Casos facultativos: 
   - Pessoas com 60 anos ou mais;
   - Pessoas com idade entre 16 e 17 anos;*/

   //const idade = 17
   // as exceções (casos facultativos) devem sempre começar primeiro

   /*if (idade >= 60) {
    alert('O voto é facultativo')
   } else if (idade >= 16 && idade < 18) {
    alert('O voto é facultativo')
   } else if (idade >= 18) {
    alert('Pode e deve emitir o título')
   } else {
    alert('Não pode emitir o título')
   }*/

   // Existe também essa outra forma para deixar o código mais legível e intuitivo:

   /*if (idade >= 60 || (idade >= 16 && idade < 18)) {
    alert('O voto é facultativo')
   } else if (idade >= 18) {
    alert('Pode e deve emitir o título')
   } else {
    alert('Não pode emitir o título')
   }*/

   // EXERCÍCIO DE FIXAÇÃO

   /* 1. Crie uma variável chamada média, e atribua a ela um valor numérico entre 0 e 10. 
   Crie um if que verifica se o valor é maior ou igual a 5. Caso seja, imprima que a pessoa foi aprovada. Adicione um else que imprime que a pessoa foi reprovada se a condição não foi atendida.

   2. Adicione um else if antes de reprovar, que verifica se a nota é maior ou igual a 3. Caso seja, imprima "Recuperação".

   3. Altere o último else para que ele também seja um else if que verifica se a nota é menor que três para exibir "Reprovado".

   4. Adicione um último else, que imprima "dado inválido" caso nenhuma das condições anteriores seja atendida.*/

   const média = 7

   if (média >= 5) {
    alert('Aprovado(a)!')
   
} else if (média >= 3) {
    alert('Recuperação!')
   
} else if (média < 3) {
    alert('Reprovado(a)!')
  
} else {
    alert("Dado inválido!")
   
}