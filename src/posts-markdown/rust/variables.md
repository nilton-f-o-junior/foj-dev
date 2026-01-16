# Variáveis

Programar nada mais é do que dar instruções para que um computador execute tarefas. Para que isso aconteça, a máquina utiliza dois recursos fundamentais que trabalham juntos: a memória e o processamento.

- Memória: funciona como um 'caixa' onde armazenamos informações, sejam elas números, textos ou imagens;
- Processamento: é o 'cérebro' que realiza cálculos e manipula os dados guardados na memória para gerar um resultado.

Como o computador é uma máquina eletrônica, ele se comunica através de sinais elétricos: a presença ou a ausência de corrente. Para traduzir isso para o mundo lógico, utilizamos o sistema binário, composto por apenas dois dígitos: 0 (desligado) e 1 (ligado).

Cada um desses dígitos é chamado de bit (a menor unidade de informação). Combinando esses bits, o computador consegue representar números maiores e instruções complexas:

- O número 0 em binário é 0
- O número 1 em binário é 1
- O número 2 em binário é 10
- O número 3 em binário é 11

Seguindo essa lógica, a unidade básica de informação é o Bit, que representa um único dígito binário (0 ou 1). Para representar informações mais complexas, combinamos vários bits em grupos. A combinação mais comum é o Byte, um conjunto de 8 bits.

Imagine um Byte como uma sequência de 8 interruptores. Se todos estiverem desligados (00000000), temos o número 0. Se apenas o último estiver ligado (00000001), temos o número 1. A maior combinação possível é quando todos os 8 bits estão ligados (11111111), o que representa o número 255.

Como cada um dos 8 bits tem duas possibilidades (0 ou 1), um Byte pode representar 256 valores diferentes (de 0 a 255).

É aqui que entram as variáveis. De forma simples, uma variável é um espaço reservado na memória para armazenar esses valores. Como o próprio nome diz, o conteúdo desse espaço pode 'variar' ao longo do tempo, mas o 'rótulo' que damos a ele permanece o mesmo.

Para entender como isso funciona na prática, imagine a memória do computador como um grande armário cheio de gavetas. Inicialmente, essas gavetas estão vazias e não possuem nenhuma etiqueta.

[Armário - 01](../../assets/images/posts-rust/variaveis/rust-variaveis-img-01.png)

Se você decidir guardar três informações diferentes, sua tendência natural seria colocá-las em gavetas sequenciais (uma ao lado da outra) para manter a organização.

[Armário - 02](../../assets/images/posts-rust/variaveis/rust-variaveis-img-02.png)

No entanto, o computador nem sempre consegue fazer isso. Como muitos programas rodam ao mesmo tempo, as gavetas vizinhas podem já estar ocupadas. Por isso, os dados acabam ficando espalhados em lugares distintos do 'armário'.

[Armário - 03](../../assets/images/posts-rust/variaveis/rust-variaveis-img-03.png)

Agora, imagine que em vez de 16 gavetas, tivéssemos 45 ou até milhões delas. Ficaria impossível lembrar de cabeça onde cada dado foi guardado, certo?

[Armário - 04](../../assets/images/posts-rust/variaveis/rust-variaveis-img-04.png)

Para resolver esse caos, a memória utiliza endereços. Cada gaveta possui um código único e exclusivo. Assim, o computador não apenas guarda a informação, mas registra exatamente em qual 'endereço' ela foi colocada para poder buscá-la depois.

[Armário - 05](../../assets/images/posts-rust/variaveis/rust-variaveis-img-05.png)

Um detalhe crucial: na memória, cada gaveta suporta exatamente 1 Byte. Se a informação que você quer guardar for pequena, ela ocupa uma gaveta. Mas, se a informação for grande (como uma foto ou um texto longo), o sistema a divide em pedaços e ocupa duas, três ou quantas gavetas forem necessárias para armazenar o dado completo.

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

Seria interessante explicar tambem como funciona Scope e Lifetima, depois explicar tambem Shadowing em rust. Pode ser um complemento legal para garantir que esta tudo aqui
