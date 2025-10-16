# String vs &str

Se tem algo que o rust faz bem e pensar em otimizacao de codigo e em como mudancas pequenas podem fazer um diferenca no projeto final, acho que essa discussao nao e sobre ser uma linguagem melhor ou pior que outras, apenas que as vezes parece algo simples, mas ao mesmo tempo pode acabar sendo bem inteligente no resultado final.

Essa pergunta e bem simples e para usuarios iniciantes na linguagem e que as vezes podem se perguntar quando devo usar String e quando usar &str.

E a resposta e mais simples doque parece: se os dados podem ser jogados no lixo e nao precisa ser guardados em memoria entao use &str.

Vamos ao exemplo extremamente simples e que pode fazer voce entender:

Imagine que esta escrevendo um codigo em que vai precisar receber um valor do usuario e sempre que pedir vai mostrar a ele a seguinte mensagem: Poderia informar o numero?

Vamos criar um codigo generico e simples:

```rust
use std::io;

fn function_input(prompt: String) -> f32 {
    //
    loop {
        println!("{}", prompt);
        let mut input = String::new();

        match io::stdin().read_line(&mut input) {
            Err(_) => {
                println!("Data entry error!");
                continue;
            }

            Ok(_) => match input.trim().parse::<f32>() {
                Ok(number) => return number,
                Err(_) => {
                    println!("'{}' is not a valid number!", input.trim());
                    continue;
                }
            },
        }
    }
}

fn main() {
    //
    let number = function_input(String::from("Enter number:"));
    println!("Number chosen: {}", number);
}
```

Toda vez que eu precisar pedir um numero para o usuario terei que imprimir a messagem: Poderia informar o numero? Mas nao vou usar essa mesagem para nada e mesmo assim estou alocando ela em memoria, sem qualquer necessidade. Agora imagine que eu precise seguir pedindo numero e tenho 1 milhao de usuarios, a alocacao de memoria vai acabar sendo desnecessaria. Agora vamos fazer uma mudanca pequena e que pode melhorar consideravelmente o codigo:

```rust
use std::io;

fn function_input(prompt: &str) -> f32 {
    //
    loop {
        println!("{}", prompt);
        let mut input = String::new();

        match io::stdin().read_line(&mut input) {
            Err(_) => {
                println!("Data entry error!");
                continue;
            }

            Ok(_) => match input.trim().parse::<f32>() {
                Ok(number) => return number,
                Err(_) => {
                    println!("'{}' is not a valid number!", input.trim());
                    continue;
                }
            },
        }
    }
}

fn main() {
    //
    let number = function_input("Enter number:");
    println!("Number chosen: {}", number);
}
```
