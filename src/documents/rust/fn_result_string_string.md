# fn name (&self, value: f64) -> Result<String, String>

Vamos conversar sobre o uso do Result<String,String>

Esse e aquele detalhe que acaba pegando alguns de supresa por conta das especificades do rust, entao necessario deixar uma explicacao de como funciona esses detalhes pequenos.

```rust
Result<String, String>
       ^^^^^^  ^^^^^^
         |       |
      Sucesso  Erro
```

Bem parecido com o Match, voce simplifica isso, mas depois tem fazer a adocao tanto caso der error quanto caso der certo.

```rust
fn processar_pagamento(&self, valor: f64) -> Result<String, String> {
    if tudo_ok {
        return Ok(String::from("Pagamento aprovado!"));
        //     ^^
    } else {
        return Err(String::from("Cartão recusado"));
        //     ^^  
    }
}

match metodo.processar_pagamento(100.0) {
    Ok(mensagem) => println!("Deu certo: {}", mensagem),
    Err(erro) => println!("Deu errado: {}", erro),
}
```
