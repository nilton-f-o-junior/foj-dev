# Direct Creation vs Construction Method

Queria escrever um pouco sobre mais um daqueles detalhes simples que muita gente pode se perguntar qual o melhor caminho ou qual mais faz sentido em cada situacao, entao vamos conversar deboas e aprender um pouco mais sobre codigo.

A pergunta e simples: Opcao 1 VS Opcao 2?

```rust
use std::io;

struct Number {
    value: i32,
}

impl Number {
    //
    fn new_number(value: i32) -> Number {
        Number { value }
    }
}

fn main() {
    // opcao 1
    let num = Number { value: 14 };

    // opcao 2
    let num = Number::new_number(14);
}
```

Para responder essa pergunta voce precisa entender como voce esta escrevendo seu codigo e o quao complexo e a estrutura dele, depois que tiver essa resposta fica facil saber qual melhor.

Opcao 1:

A struct é realmente simples (só dados, sem lógica). Exemplo:

```rust
let point = Point { x: 1, y: 2 };
```

Opcao 2:

Todas as outras situacoes!

Nao quero complicar muito, mas existem muitas limitacoes ao usar a opcao 1, por exemplo: funciona apenas com dados publicos! Por mais que a opcao 2 tenha a necessidade de escrever um pouco mais de codigo, escrever codigo em rust e pensar no projeto final como uma estrutura que foi planejada como um todo e que cada parte seja usada da melhor forma para cada situacao, entao quando e algo simples, faco uso do simples e quando nao, use o outro.

Nota: Eu sempre faco uso da opcao 2, pois depois que voce se acostuma a escrever o codigo completo, dificilmente voce vai escrever o codigo mais simples. 
