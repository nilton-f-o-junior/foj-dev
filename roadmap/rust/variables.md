# +Variables

Quando programamos, estamos dando instruções a um computador para que ele execute uma determinada tarefa. Para isso, ele usa dois recursos essenciais: a memória e o processamento.

- Memória: serve para armazenar informações, como números, textos ou imagens.
- Processamento: é usado para realizar cálculos e manipular as informações que estão na memória.

O computador é uma máquina eletrônica e, por isso, só entende a passagem ou a ausência de corrente elétrica. Para representar isso, usamos o sistema binário, que consiste em apenas dois dígitos: 0 e 1.

- O número 0 em binário é 0.
- O número 1 em binário é 1.
- O número 2 em binário é 10.
- O número 3 em binário é 11.

E assim por diante...

A unidade básica de informação é o Bit, que é um único dígito binário (um 0 ou um 1). Para representar informações mais complexas, combinamos vários bits. A combinação mais comum é o Byte, que é um conjunto de 8 bits.

Por exemplo, um byte pode ser a sequência 00000000 (que representa o número 0) ou 00000001 (o número 1). A maior sequência de 8 bits é 11111111, que representa o número 255. Com um byte, podemos representar 2^8=256 valores diferentes (de 0 a 255), pois cada um dos 8 bits pode ser 0 ou 1.

A forma mais simples de se definir uma variável é: um espaço reservado na memória para armazenar informações. Como as informações "podem variar, logo variável".

Porém, temos que entender também como funciona a memória em um computador:

Como Funciona a Memória

Pense em uma memória como várias caixinhas - espaços vazios em que você vai guardar algo.

Imagine um armário onde você vai guardar algo, porém ele não tem um identificador! Como você vai encontrar o que você guardou? Difícil, né?

A memória funciona com espaços que vão guardar a informação, e cada espaço possui um endereço. Mas lembre-se: cada espaço possui apenas 1 Byte. Logo, se a informação não cabe em 1 caixa, o sistema a quebra e guarda em 2; se não der, quebra e guarda em 3, e assim por diante..

1 Byte   = [00000000]
Endereço = 0xCB20
[00000000] + 0xCB20 = Dado

Exemplo:

[00000001] 0xCB20
[00000010] 0xCB21
[00000011] 0xCB22
[00000101] 0xCB23
[00000111] 0xCB24

Segmentos da Memória

- Code - Código do programa
- Static - Dados estáticos
- Free - Espaço livre
- Heap - Todos os dados cujo tamanho não sabemos previamente (Strings, Vec)
- Stack - Todos os dados cujo tamanho pode ser definido em tempo de compilação (int, float, bool, tuplas)

Tipos de Dados

Escalares - int, float, bool, char
Compostos - Array, Tuplas
Referência - Guarda a posição de um dado ("Ponteiro")

###

Escalares

A memoria sabe o tamanho que ocupa um dado escalar, logo reservando um espaco definido para aquele dado

Exemplo:

Bool so possui 2 valores: true ou false!
Char: usa a tabela ASCII para saber quais os valores podem ser armazenados
Int: com um unico comando e possivel saber o valor minimo e maximo possivel: ![Precede ordination]()

Segue o codigo:

`min and max`

```rust
println!("u8: Min = {} | Max = {}", std::u8::MIN, std::u8::MAX);
```

Usando escalares na pratica

```rust
let valor_a: u8 = 10;
let valor_b = valor_a;
println!(A = {}\n B = {}, valor_a, valor_b);
```

Nesse caso o rust faz uma copia da variavel `valor_a` e armazena na variavel `valor_b`

Isso evita erros:

Double Free: tentando liberar a mesma memória duas vezes
Use After Free: Acesso a memória inválida
Memory Leaks: Perdemos a referência original

Em rust a variavel `valor_a` pode ser usada e modificada e nao ira interferir na variavel `valor_b`

Porem, quando lidamos com String e Vec, estamos lidando com tipos compostos.

Compostos

O valor e armazedao na memoria heap, pois nao temos como saber quanto de memoria deve ser alocado pois podemos receber apenas 1 caractere ou podemoos receber 1 livro.

Quando fazemos a mesma coisa usando uma String ou um Vector

```rust
let valor_a: String = String::from("Valor A");
let valor_b = valor_a;
println!(A = {}\n B = {}, valor_a, valor_b);
```
O resultado e um error!

```md


```

Isso se dar pelo fato que o rust para impedir que isso aconteca, ele move oo valor de lugar, ele nao faz uma copia, ele move o `valor_a` para a varivel `valor_b`

```rust
let valor_a: String = String::from("Valor A");
let valor_b = valor_a;
println!(B = {},  valor_b);
```
O resultado e:

```md


```
