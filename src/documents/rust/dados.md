# Layout de Memória

"Ao longo da nossa carreira, é comum ouvirmos termos como Stack e Heap. Muitas vezes, acabamos deixando esse conhecimento para depois, por acreditar que seja algo exclusivo de 'baixo nível'. Hoje, vou explicar um pouco sobre o layout da memória e mostrar onde esses conceitos — e tantos outros — se encaixam."

Antes de começarmos, deixo aqui uma imagem ilustrativa do layout de memória. Vamos seguir nosso estudo partindo do endereço mais baixo até o mais alto.


Endereços Altos (0xFFFFFFFF)
┌─────────────────────────────────────┐
│         KERNEL SPACE                │
│    (Espaço do Sistema Operacional)  │
├─────────────────────────────────────┤  0xC0000000
│                                     │
│         VARIÁVEIS DE AMBIENTE       │
│    (Environment Variables)          │
│  • PATH=/usr/bin:/bin               │
│  • HOME=/home/user                  │
│  • LANG=pt_BR.UTF-8                 │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         ARGUMENTOS DO PROGRAMA      │
│    (Command Line Arguments)         │
│  • argc (quantidade)                │
│  • argv[0] = "./programa"           │
│  • argv[1] = "arg1"                 │
│  • argv[2] = "arg2"                 │
│  • argv[n] = NULL                   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         STACK (Pilha)               │
│         ↓ Cresce para baixo         │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  Frame da função main()       │  │
│  │  • Variáveis locais           │  │
│  │  • Parâmetros (argc, argv)    │  │
│  │  • Endereço de retorno        │  │
│  │  • Base pointer anterior      │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  Frame da função calcular()   │  │
│  │  • Variáveis locais (a, b)    │  │
│  │  • Parâmetros da função       │  │
│  │  • Endereço de retorno        │  │
│  │  • Registradores salvos       │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  Frame da função atual        │  │
│  │  • Variáveis locais           │  │
│  │  • Parâmetros recebidos       │  │
│  └───────────────────────────────┘  │
│         ↓                           │
│                                     │
│         ...                         │
│      (Espaço disponível)            │
│         ...                         │
│                                     │
│         ↑                           │
│         Heap (Memória Dinâmica)     │
│         ↑ Cresce para cima          │
│                                     │
│  • malloc/calloc/realloc            │
│  • new/delete (C++)                 │
│  • Objetos alocados dinamicamente   │
│  • Arrays dinâmicos                 │
│  • Estruturas de dados              │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         BSS (Dados não inicializ.)  │
│    (Block Started by Symbol)        │
│                                     │
│  • Variáveis globais não inicializ. │
│  • Variáveis estáticas não inicializ│
│  • Inicializado com zeros           │
│                                     │
│  Exemplo:                           │
│  int contador;                      │
│  static int total;                  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         DATA (Dados inicializados)  │
│                                     │
│  • Variáveis globais inicializadas  │
│  • Variáveis estáticas inicializadas│
│  • Constantes literais              │
│  • Strings literais                 │
│                                     │
│  Exemplo:                           │
│  int max = 100;                     │
│  static char nome[] = "App";        │
│  const char* msg = "Olá";           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         TEXT (Código do Programa)   │
│                                     │
│  • Instruções executáveis           │
│  • Código das funções               │
│  • Código compilado                 │
│  • Somente leitura                  │
│                                     │
│  Funções:                           │
│  • main()                           │
│  • calcular()                       │
│  • processar()                      │
│  • outras funções...                │
│                                     │
└─────────────────────────────────────┘
Endereços Baixos (0x00000000)

