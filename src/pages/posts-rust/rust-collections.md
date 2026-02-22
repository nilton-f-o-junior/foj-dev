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

- LIFO (Last in, first out): O último a entrar é o primeiro a sair. Imagine uma pilha de pratos, à medida que eles vão sujando e vão sendo colocados para lavar, o último a entrar será o primeiro a ser lavado.

- FIFO (First in, first out): O primeiro a entrar é o primeiro a sair. Para facilitar o entendimento, imagine uma fila de supermercado, a primeira pessoa a chegar no caixa é a primeira a ser atendida.

Conceitos importantes definidos, vamos começar a entender cada um dos tipos de coleção.

## Vec<T>

Pode aumentar ou diminuir de tamanho, conforme a entrada e saída de dados, os dados podem ser inseridos ou removidos de qualquer posição do vetor.

```rust
fn main () {
    let mut vetor_str: Vec<&str> = vec!["a", "b", "c"];
    println!("Vetor = {:#?}", vetor_str);

    // inserindo dados
    vetor_str.insert(1, "D");
    println!("Vetor = {:#?}", vetor_str);

    // removendo dados
    vetor_str.remove(1);
    println!("Vetor = {:#?}", vetor_str);
}
```

## Stack

Não temos a opção "Stack (Pilha)" em Rust, isso se dá pelo fato de que o Vetor já possui esse comportamento por padrão, vimos no exemplo anterior a adição de dados em qualquer posição do vetor, mas ele também pode se comportar como uma pilha.

```rust
fn main () {
    let mut stack_str: Vec<&str> = vec!["a", "b", "c"];
    println!("Stack = {:#?}", stack_str);

    // push() - inserindo dados
    stack_str.push("D");
    println!("Stack = {:#?}", stack_str);

    // pop() - removendo dados
    stack_str.pop();
    println!("Stack = {:#?}", stack_str);

    // last() - último item
    println!("Stack = {:#?}", stack_str.last());
}
```

## VecDeque<T>

É um vetor excelente quando você precisa manipular elementos nos dois extremos da coleção com frequência, funciona como uma fila dupla (double-ended queue), o que significa que você pode adicionar e remover elementos tanto no início quanto no final de forma eficiente.

```rust
use std::collections::VecDeque;

fn main() {
    let mut vecdeque: VecDeque<i32> = VecDeque::new();

    // push_back() - inserindo dados no final
    vecdeque.push_back(10);
    vecdeque.push_back(20);

    // push_front() - inserindo dados no início
    vecdeque.push_front(5);

    // [5, 10, 20]
    println!("VecDeque: {:?}", vecdeque);

    // pop_front() - removendo do início
    let primeiro = vecdeque.pop_front();
    println!("Removido do início: {:?}", primeiro); // Some(5)

    // pop_back() - removendo do fim
    let ultimo = vecdeque.pop_back();
    println!("Removido do fim: {:?}", ultimo); // Some(20)

    println!("Restou apenas: {:?}", vecdeque); // [10]
}
```

## HashMap<K, V>

O HashMap é a forma mais rápida de acessar um valor a partir de uma chave. Lembra do exemplo do armário? A partir do momento que você guarda algo e atribui a esse item uma chave, você pode acessar o dado rapidamente, independente do tamanho do mapa. Só um detalhe importante: não podemos ter duas chaves iguais. Se você tentar adicionar um novo valor a uma chave que já existe, o valor antigo será sobrescrito.

```rust
use std::collections::HashMap;

fn main() {
    let mut config: HashMap<&str, &str> = HashMap::new();

    // insert - inserindo dados
    config.insert("tema", "escuro");
    println!("Tema: {:?}", config.get("tema"));

    // entry - só serão inseridos dados se a chave estiver vazia
    config.entry("idioma").or_insert("português");
    println!("Idioma: {:?}", config.get("idioma"));

    // "tema" já é "escuro", ele vai ignorar o "claro"
    config.entry("tema").or_insert("claro");
    println!("Tema: {:?}", config.get("tema"));

    println!("Configurações atuais:");
    println!("Tema: {:?}", config.get("tema"));
    println!("Idioma: {:?}", config.get("idioma"));
}
```

## HashSet<T>

Quando você entende bem o conceito de chave e valor, fica fácil entender o HashSet, aqui só existe o valor e ele não pode se repetir. Imagine um sistema em que você tem uma lista de CPFs de diversos usuários, o CPF de 2 usuários não pode ser igual.

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

    // verificando se contém na lista
    println!("Existe 'Carla' na lista? {}", nomes.contains("Carla"));
}
```

Até aqui está bem fácil né? Se tem algo que gostaria de deixar claro é que: esse texto é para conversar um pouco sobre collections de forma mais acessível e não trabalhando detalhadamente cada ponto de cada um dos itens, buscando colocar exemplos fáceis de entender e que qualquer pessoa possa visualizar sem se perder. Caso deseje visualizar melhor e mais detalhadamente na prática cada um dos itens, recomendo ler o livro, além de diversos exemplos, conta também com questões para exercitar o conhecimento.

## BinaryHeap<T>

Se você está criando uma lista em que a prioridade é algo importante, o Binaryheap acaba sendo a melhor opção, por ser extremamente eficiente quando precisamos acessar o maior ou o menor valor.

```rust
use std::collections::BinaryHeap;

fn main() {
    let mut fila_hospital: BinaryHeap<u8> = BinaryHeap::new();

    // entrada aleatória por idade
    fila_hospital.push(25); // jovem
    fila_hospital.push(80); // idoso (vai para o topo)
    fila_hospital.push(40); // meia-idade
    fila_hospital.push(95); // muito idoso (vai para o topo agora!)

    println!("Estado interno: {:?}", fila_hospital);

    // o próximo a entrar
    // mesmo que o 95 tenha sido o ÚLTIMO a chegar, ele será o PRIMEIRO a sair
    while let Some(paciente) = fila_hospital.pop() {
        println!("Atendendo paciente de {} anos.", paciente);
    }
}
```

## BTreeMap<K, V>

O BTreeMap é como juntar o HashMap com BinaryHeap, com uma pequena diferença os valores ao entrar se organizam, já no BinaryHeap eles ao entrar apenas se organizam para o maior ou menor ficar facilmente acessível.

```rust
use std::collections::BTreeMap;

fn main() {
    // criando mapa
    let mut chamados: BTreeMap<u8, &str> = BTreeMap::new();

    // inserindo dados de forma "desorganizada"
    chamados.insert(3, "Bug crítico no login");
    chamados.insert(1, "Trocar cor do botão");
    chamados.insert(5, "Explosão no servidor");
    chamados.insert(2, "Ajustar rodapé");

    // as chaves se organizam automaticamente: 1, 2, 3, 5
    println!("Fila de chamados (ordenada por ID):");
    
    for (id, tarefa) in &chamados {
        println!("ID {}: {}", id, tarefa);
    }
}
```

## BTreeSet<T>

O BTreeSet funciona seguindo a mesma lógica do BTreeMap, porém não temos valores associados, apenas chaves. Pense em uma lista de convidados: por mais que tente adicionar o mesmo nome várias vezes, ele guarda apenas 1. Não importa a ordem que foi adicionada, a lista irá se organizar sozinha e por fim a busca por um nome ou grupo de nomes é muito eficiente, pois os dados ficam organizados em ordem na árvore, evitando percorrer a lista inteira.

```rust
use std::collections::BTreeSet;

fn main() {
    // lista de convidados
    let mut convidados: BTreeSet<&str> = BTreeSet::new();

    // adicionamos pessoas em ordem aleatória
    convidados.insert("Tiago");
    convidados.insert("Ana");
    convidados.insert("Bruno");
    
    // tentamos adicionar o mesmo nome várias vezes
    convidados.insert("Ana"); 
    convidados.insert("Tiago");

    // lista se organiza sozinha
    // duplicatas são ignoradas automaticamente
    println!("Lista oficial de convidados: {:?}", convidados);
}
```

## LinkedList<T>

Quando você tem uma coleção em que precisa inserir ou remover elementos no meio com frequência, a LinkedList pode ser uma boa opção. Você cria um link entre os elementos, que pode ser simplesmente encadeada, onde cada elemento conhece apenas o próximo ou duplamente encadeada, onde cada elemento conhece o anterior e o próximo.

```rust
use std::collections::LinkedList;

fn main() {
    // lista de pessoas
    let mut lista: LinkedList<&str> = LinkedList::new();

    // push_back adiciona no final
    lista.push_back("Carlos");
    lista.push_back("João");
    lista.push_back("Pedro");

    // push_front adiciona no início
    lista.push_front("Ana");

    // Ana → Carlos → João → Pedro
    println!("{:?}", lista);
}
```

Nota: A própria equipe do Rust desencoraja o uso de LinkedList na maioria dos casos. Na documentação eles chegam a dizer que é quase sempre melhor usar um "Vec" ou "VecDeque". Isso porque listas encadeadas têm péssima performance de cache em hardware moderno, já que os nós ficam espalhados na memória heap ao invés de contíguos.

### Tabela

| Estrutura           | Inserção/Remoção          | Acesso                | Observação              |
|---------------------|---------------------------|-----------------------|-------------------------|
| Vec<T>              | O(1) no final             | O(1) por índice       | O(n) ao redimensionar   |
| Vec<T> como Stack   | O(1) no final             | O(1) no topo          | O(n) ao redimensionar   |
| VecDeque<T>         | O(1) nos dois extremos    | O(1) por índice       | O(n) ao redimensionar   |
| HashMap<K, V>       | O(1) médio                | O(1) médio por chave  | Sem ordem garantida     |
| HashSet<T>          | O(1) médio                | O(1) médio            | Sem ordem, sem duplicatas |
| BinaryHeap<T>       | O(log n)                  | O(1) no máximo        | Fila de prioridade      |
| BTreeMap<K, V>      | O(log n)                  | O(log n) por chave    | Ordenado por chave      |
| BTreeSet<T>         | O(log n)                  | O(log n)              | Ordenado, sem duplicatas |
| LinkedList<T>       | O(1) nos extremos         | O(n) por posição      | Pouco usada em Rust     |


O material ele foi escrito para dar um panorama geral de como funciona as coleções em Rust, quero deixar claro que, ainda será escrito um material explicando cada um dos itens detalhadamente e que no livro você vai encontrar diversos exemplos e formas de uso para que possa entender como aplicar isso no seu programa em desenvolvimento.
