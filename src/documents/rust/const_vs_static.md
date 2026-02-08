# Const vs Static

Esse topico vai ser bem curto, apenas para que eu possa adicionar no livro no futuro, por hora de forma simples.

Quando devemos usar const e quando devemos usar static em rust! 



#####


Quero adicionar mais um topico que posso acabar usando aqui no futuro ja que ele vai um pouco mais completo agora:


Assim como variáveis imutáveis, constantes são valores que são designados para serem de um tipo e não podem ser alterados. Mas há algumas diferenças entre constantes e variáveis:

Primeiramente você não pode usar mut com constantes, elas sempre serão imutáveis, e para criar uma constante você usa const ao invés de let, seu tipo de valor sempre será anotado, mas vamos ver mais pra frente.

Constantes podem ser declaradas em qualquer escopo, inclusive no global. O que faz elas serem úteis para serem usadas em várias partes do código.

A última diferença é que constantes só podem ser associadas a uma expressão constante, e não o resultado de algo que só vai ser computado na hora de rodar o código.


const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;


Operações em constantes são feitas na hora de compilar o código e tem os valores salvo nos binários, deixando assim o código mais rápido.


NOTA de gente burra:

É uma ótima pergunta! A razão pela qual alguém usaria a expressão $60 * 60 * 3$ em vez de simplesmente $10800$ (o resultado) é principalmente por clareza e manutenibilidade do código.

Exemplo: Definição de Tamanhos em UI/UX

Imagine que você está definindo constantes para o layout de uma interface de usuário (UI), onde todos os espaçamentos são múltiplos de uma unidade base, como $8$ pixels.

Opção 1: Usando Apenas o Valor Final (Difícil de Ler)

Nesta opção, o desenvolvedor precisa saber ou calcular mentalmente que $32$ é o resultado de $8 \times 4$.

// Unidade base: 8
const BASE_UNIT: u32 = 8; 

// Espaçamentos
const SPACING_SMALL: u32 = 8;   // OK, mas e 1x?
const SPACING_MEDIUM: u32 = 16; // 
const SPACING_LARGE: u32 = 32;  // ? Por que 32? 
const SPACING_XL: u32 = 64;     // ? Por que 64? 

// Tamanho de um ícone
const ICON_SIZE: u32 = 24;      // ? Por que 24? É 3x8?



Opção 2: Usando a Expressão Constante (Claro e Manutenível)

Nesta opção, a expressão constante deixa a intenção cristalina e amarra o valor à BASE_UNIT.

// Unidade base
const BASE_UNIT: u32 = 8; 

// Espaçamentos (Multiplicadores em negrito)
const SPACING_SMALL: u32 = BASE_UNIT * 1; 
const SPACING_MEDIUM: u32 = BASE_UNIT * 2; 
const SPACING_LARGE: u32 = BASE_UNIT * 4;  // Fica claro: é 4x a unidade base!
const SPACING_XL: u32 = BASE_UNIT * 8;     // Fica claro: é 8x a unidade base!

// Tamanho de um ícone
const ICON_SIZE: u32 = BASE_UNIT * 3;      // Fica claro: o ícone tem 3x o tamanho base.


Clareza de Intenção: Você vê o multiplicador (1, 2, 4, 8) e entende o significado e o relacionamento entre as constantes (elas são todas baseadas em $8$).

Manutenibilidade: Se você precisar mudar o sistema de espaçamento para uma base de 10 pixels, basta mudar um lugar: const BASE_UNIT: u32 = 10;. O compilador recalculará automaticamente SPACING_LARGE para $40$, SPACING_XL para $80$, e assim por diante, sem chance de erro humano no cálculo.

Em ambos os casos, o código executável final é idêntico — a constante apenas armazena o valor final ($32$, $64$, etc.). A diferença é totalmente sobre facilitar a vida do desenvolvedor (legibilidade e segurança contra erros).
