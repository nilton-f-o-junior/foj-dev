# Coleções

Uma das questões mais importantes da programação é a organização de informações e, quanto maior a quantidade de dados, mais desafiadora essa tarefa se torna. Imagine que esses dados serão adicionados e removidos constantemente e que você precisa acessá-los de forma rápida, nesse cenário, uma simples lista pode não ser mais a solução ideal.

## Introdução

Uma coleção é uma estrutura de dados que armazena múltiplos valores na Heap, permitindo que a quantidade de itens mude durante a execução do programa.

Tipos:

- Vec<T>: Array dinâmico;
- Stack (via Vec): Pilha LIFO;
- VecDeque<T>: Fila FIFO / Deque;
- HashMap<K,V>: Chave-valor (hash);
- HashSet<T>: Conjunto (hash);
- BinaryHeap<T>: Fila de prioridade;
- BTreeMap<K,V>: Chave-valor (ordenado);
- BTreeSet<T>: Conjunto (ordenado);
- LinkedList<T>: Lista encadeada.

## Básico

Antes de começar, vou definir alguns conceitos comuns e importantes:

- <T> (Type): ao criar um vetor em Rust, podemos omitir o tipo, quando o compilador consegue inferir pelo contexto, porém o recomendável é colocar;

- <K, V> (Key, Value): o conceito de chave-valor é bem simples, imagine que ao chegar no trabalho você encontra diversos armários e cada um deles possui uma chave única, e o valor é o que você armazena dentro do armário. Em Rust, todas as chaves devem ser do mesmo tipo e todos os valores devem ser do mesmo tipo;

- O(1): o tempo é constante independente da quantidade de dados. Imagine o armário: você tem um armário com etiquetas. Para pegar algo, você vai direto na etiqueta certa, não importa se tem 10 ou 10 milhões de armários, você sempre vai direto ao ponto;

- O(n): o tempo é linear, cresce proporcionalmente a quantidade de dados. Imagine o armário: os armários não têm etiqueta. Para achar o que você quer, você precisa abrir um por um até encontrar. Se tiver 10 armários, abre até 10. Se tiver 1000, abre até 1000.

- LIFO (Last in, first out): O último a entrar é o primeiro a sair. Imagine uma pilha de pratos, a medida que eles vão sujando e vão sendo colocados para lavar, o último a entrar será o primeiro a ser lavado.

- FIFO (First in, first out): O primeiro a entrar, é o primeiro a sair. Para facilitar o entendimento, imagine uma fila de um supermercado, a primeira pessoa a chegar no caixa é a primeira a ser atendida. 

Conceitos importantes definidos, vamos começar entender cada um dos tipos de coleção.

## Vetor

Pode aumentar ou diminuir de tamanho, conforme a entrada e saida de dados, os dados podem ser inseridos ou removidos de qualquer posição do vetor.

```rust
fn main () {
    let mut vetor_str: Vec<&str> = vec!["a", "b", "c"];
    println!("Vetor = {:#?}", vetor_str);

    // inserindo dados
    vetor_str.insert(1, "D");
    println!("Vetor = {:#?}", vetor_str);

    // remover dados
    vetor_str.remove(1);
    println!("Vetor = {:#?}", vetor_str);
}
```

## Stack

Não temos a opção "Stack (Pilha)" em Rust, isso se dar pelo fato que o Vetor já possui esse comportamento por padrão, vimos no exemplo anterior a adição de dados em qualquer posição do vetor, mas ele também pode se comportar como uma pilha.

```rust
fn main () {
    let mut stack_str: Vec<&str> = vec!["a", "b", "c"];
    println!("Stack = {:#?}", stack_str);

    // inserindo dados
    stack_str.push("D");
    println!("Stack = {:#?}", stack_str);

    // remover dados
    stack_str.pop();
    println!("Stack = {:#?}", stack_str);

    // último item
    println!("Stack = {:#?}", stack_str.last());
}
```

# VecDeque
