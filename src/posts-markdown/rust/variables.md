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

O texto simplica bem o conceito inicial de como a memória funciona e de como ela armazena e organiza essa informação, porém o resultado desse processo é um dado e temos 3 tipos de dados, sendo eles:

Escalares - int, float, bool, char
Compostos - Array, Tuplas
Referência - Guarda a posição de um dado ("Ponteiro")

Caso queria continuar estudando e entender como a memória lida com esse dado, segue o link. Bons estudos!

"A beleza que vive no ato de compartilhar algo com o outro." Monja Coen
