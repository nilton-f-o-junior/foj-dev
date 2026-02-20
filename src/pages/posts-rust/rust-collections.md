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

## Vec<T>

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

    // push() - inserindo dados
    stack_str.push("D");
    println!("Stack = {:#?}", stack_str);

    // pop() - remover dados
    stack_str.pop();
    println!("Stack = {:#?}", stack_str);

    // last() - último item
    println!("Stack = {:#?}", stack_str.last());
}
```

# VecDeque<T>

É um vetor excelente quando você precisa manipular elementos nos dois extremos da coleções com frenquênciam, funciona como uma fila dupla (double-ended queue) significa que você pode adicionar e remover elementos tanto no início quanto no final de forma eficiente. 

```rust
use std::collections::VecDeque;

fn main() {
    let mut vecdeque: VecDeque<i32> = VecDeque::new();

    // push_back() - inserindo dados no final
    vecdeque.push_back(10);
    vecdeque.push_back(20);

    // push_front() - inserindo dados inicio
    vecdeque.push_front(5);

    // [5, 10, 20]
    println!("VecDeque: {:?}", vecdeque);

    // pop_front() - removendo do início
    let primeiro = vecdeque.pop_front();
    println!("Removido do início: {:?}", primeiro); // Some(5)

    // pop_back() - removendo do fim
    let ultimo = vecdeque.pop_back();
    println!("Removido do fim: {:?}", ultimo); // Some(20)

    //
    println!("Restou apenas: {:?}", vecdeque); // [10]
}
```

# HashMap<K, V>

```rust
use std::collections::HashMap;

fn main() {
    let mut config: HashMap<&str, &str> = HashMap::new();

    // insert - inseridos dados
    config.insert("tema", "escuro");
    println!("Tema: {:?}", config.get("tema"));

    // entry - só será inseridos dados se a chave tiver vazia
    config.entry("idioma").or_insert("português");
    println!("Idioma: {:?}", config.get("idioma"));

    // "tema" já é "escuro", ele vai ignorar o "claro"
    config.entry("tema").or_insert("claro");
    println!("Tema: {:?}", config.get("tema"));

    //
    println!("Configurações atuais:");
    println!("Tema: {:?}", config.get("tema"));
    println!("Idioma: {:?}", config.get("idioma"));
}
```

## HashSet<T>

Quando você entende bem o conceito de chave e valor, fica fácil entender Hashset, aqui só existe apenas o valor e ele não pode se repetir. Imagina um sistema em que você tem uma lista de CPFs de diversos usuários, o CPF de 2 usuários não pode ser igual.

```rust
use std::collections::HashSet;

fn main() {
    // criando um HashSet de Strings
    let mut nomes: HashSet<&str> = HashSet::new();

    // adicionando nomes
    nomes.insert("Alice");
    nomes.insert("Bruno");
    nomes.insert("Carla");
    println!("{:#?}", nomes);
        
    let adicionando_novamente = nomes.insert("Alice");
    println!("Conseguiu adicionar 'Alice'? {}", adicionando_novamente);

    // removendo alguém
    nomes.remove("Bruno");

    // contem na lista
    println!("Existe 'Carla' na lista? {}", nomes.contains("Carla"));
}
```

Até aqui está bem fácil né? Se tem algo que gostaria de deixar claro é que: esse texto é para conversar um pouco sobre collections de forma mais acessível e não trabalhando detalhadamente cada ponto de cada um dos itens, buscando colocar exemplos fáceis de entender e que qualquer pessoa possa visualizar e não se perde. Caso deseje visualizar melhor e mais detalhadamente na prática cada um dos itens, recomendo ler o livro, além de diversos exemplos, conta também com questões para exercitar o conhecimento.

### Tabela

| Estrutura          | Inserção/Remoção         | Observação             |
|--------------------|--------------------------|------------------------|
| Vec<T>             | O(1) no final            | O(n) ao redimensionar  |
| Vec<T> como Stack  | O(1) no final            | O(n) ao redimensionar  | 
| VecDeque<T>        | O(1) nos dois extremos   | O(n) ao redimensionar  |
|--------------------|--------------------------|------------------------|


