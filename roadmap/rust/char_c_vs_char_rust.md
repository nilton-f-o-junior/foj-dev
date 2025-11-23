O tipo char no C tem 1 byte, enquanto no Rust tem sempre 4 bytes de tamanho, o que permite representar qualquer valor escalar unicode.

Em C: O tipo char geralmente tem 1 byte (8 bits) de tamanho. Historicamente, ele é usado para armazenar um único caractere no conjunto de caracteres ASCII (ou estendido, dependendo da implementação). Isso significa que um char em C pode não ser suficiente para representar a maioria dos caracteres Unicode modernos.

Em Rust: O tipo char sempre tem 4 bytes (32 bits) de tamanho e representa um Valor Escalar Unicode (Unicode Scalar Value). Um Valor Escalar Unicode é qualquer ponto de código Unicode, exceto os substitutos (surrogates), no intervalo de $0x0$ a $0xD7FF$ e $0xE000$ a $0x10FFFF$.
