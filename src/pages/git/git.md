# Git e GitHub

- **Git:** sistema de controle de versão para monitorar alterações no código localmente;
- **GitHub:** plataforma na nuvem que hospeda repositórios e facilita a colaboração entre múltiplos desenvolvedores.

## Conceitos básicos

- **Versionamento:** prática de gerenciar diferentes estágios de um projeto, permitindo recuperar versões anteriores e evitar perda de dados;
- **Controle de versão:** cria um histórico detalhado que identifica quem alterou o quê e quando, garantindo a integridade do código-fonte.

## Instalação (Debian/Ubuntu)

```bash
sudo apt-get install git
```

## Configuração — usuário único

```bash
# Usuário
git config --global user.name "Seu Nome"

# E-mail
git config --global user.email "seu@email.com"

# Gerar chave SSH
ssh-keygen -t ed25519 -C "seu@email.com"
# Pressione Enter nas perguntas para usar os valores padrão

# Exibir a chave pública para copiar e colar no GitHub
cat ~/.ssh/id_ed25519.pub

# GitHub > Settings > SSH and GPG keys > New SSH key > Cole e salve
```

## Configuração — múltiplos usuários (pessoal + trabalho)

**1. Gerar as chaves SSH**

```bash
# Pessoal
ssh-keygen -t ed25519 -C "pessoal@email.com"
# Quando solicitado o arquivo, digite: id_pessoal

# Generate public/private ed25519 key pair.
# Enter file in which to save the key (/c/Users/pessoal.ssh/id_ed25519): id_pessoal
# Enter passpharse (empty for no passpharse):

# Pressione Enter para deixar a passphrase em branco (ou defina uma)
```

```bash
# Trabalho
ssh-keygen -t ed25519 -C "trabalho@email.com"
# Quando solicitado o arquivo, digite: id_trabalho

# Generate public/private ed25519 key pair.
# Enter file in which to save the key (/c/Users/pessoal.ssh/id_ed25519): id_trabalho
# Enter passpharse (empty for no passpharse):

# Pressione Enter para deixar a passphrase em branco (ou defina uma)
```

**2. Adicionar as chaves ao SSH agent**

```bash
eval "$(ssh-agent -s)"
# Agent pid XXXX

ssh-add ~/.ssh/id_pessoal
# Identity added: id_pessoal

ssh-add ~/.ssh/id_trabalho
# Identity added: id_trabalho
```

**3. Adicionar as chaves públicas ao GitHub**

```bash
# Copie cada chave e adicione em:
# GitHub > Settings > SSH and GPG keys > New SSH key > Cole e salve

cat ~/.ssh/id_pessoal.pub
cat ~/.ssh/id_trabalho.pub
```

**4. Criar o arquivo de configuração SSH**

Crie ou edite o arquivo `~/.ssh/config`:

```bash
# Conta pessoal
Host github.com-pessoal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_pessoal

# Conta de trabalho
Host github.com-trabalho
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_trabalho
```

**5. Testar as conexões**

```bash
ssh -T git@github.com-pessoal
# Hi <usuario-pessoal>! You've successfully authenticated...

ssh -T git@github.com-trabalho
# Hi <usuario-trabalho>! You've successfully authenticated...
```

**6. Clonar repositórios usando o host correto**

```bash
git clone git@github.com-pessoal:usuario-pessoal/repositorio.git
git clone git@github.com-trabalho:usuario-trabalho/repositorio.git
```

## Criando Respositório

- GitHub > Repositories > New
- Repository name\*: Nome simples e direto (ex: meu-projeto, my-project)
- Description: Breve descrição do projeto (opcional, mas recomendado)
- Choose visibility\*: Public (recomendado) ou Private
- Add a README file: Apresenta o projeto na página inicial (recomendado)
- Add .gitignore: Escolha o template da linguagem do projeto
  - Gerador: https://www.toptal.com/developers/gitignore
- Choose a license: Defina como seu código pode ser usado por outros
  - Referência: https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository

## .gitignore

```bash
# Ignorar uma pasta inteira (ex: dependências do Node)
node_modules/

# Ignorar arquivos de configuração sensíveis (senhas)
.env

# Ignorar todos os arquivos que terminam com .log
*.log

# Ignorar arquivos específicos do sistema operacional
Thumbs.db
.DS_Store

# Ignorar TODOS os arquivos .log
*.log

# "!" Abre a exceção para o arquivo específico
!config_fixo.log
```

# Comandos

## Iniciando uma área de trabalho

`git clone`

```bash
# Clonar um repositório existente
git clone https://github.com/usuario/projeto.git
```

`git init`

```bash
# Criar um repositório novo do zero
git init meu-projeto
```

## Trabalhando com mudanças

`git add`

```bash
# Adicionar arquivos para o próximo commit
git add index.html        # um arquivo específico
git add .                 # todos os arquivos alterados
```

`git mv`

```bash
# Mover ou renomear um arquivo
git mv velho-nome.txt novo-nome.txt
```

`git restore`

```bash
# Descartar alterações não commitadas
git restore arquivo.txt   # desfaz mudanças no arquivo
```

`git rm`

```bash
# Remover um arquivo do projeto e do índice
git rm arquivo.txt
```

## Examinando histórico e estado

`git bisect`

```bash
# Encontrar qual commit introduziu um bug
git bisect start

git bisect bad            # commit atual tem o bug
git bisect good v1.0      # essa versão estava OK

# O Git navega automaticamente; você testa e repete:
git bisect good           # ou: git bisect bad
```

`git diff`

```bash
# Ver o que mudou
git diff                  # mudanças ainda não adicionadas
git diff HEAD~1           # comparar com o commit anterior
```

`git grep`

```bash
# Buscar texto no código
git grep "função login"
```

`git log`

```bash
# Ver histórico de commits
git log --oneline         # resumido, uma linha por commit
```

`git show`

```bash
# Ver detalhes de um commit
git show a3f5c1b          # hash do commit
```

`git status`

```bash
# Ver estado atual dos arquivos
git status
```

## Gerenciando histórico e branches

`git backfill`

```bash
# Baixar objetos faltando (clone parcial)
git backfill
```

`git branch`

```bash
# Criar ou listar branches
git branch                # lista todas as branches
git branch nova-feature   # cria uma branch nova
```

`git commit`

```bash
# Salvar as mudanças no histórico
git commit -m "Adiciona página de login"
```

`git merge`

```bash
# Unir uma branch na atual
git merge nova-feature
```

`git rebase`

```bash
# Reaplicar commits sobre outra base
git rebase main           # reaplica commits em cima da main
```

`git reset`

```bash
# Desfazer commits ou unstage arquivos
git reset HEAD~1          # desfaz o último commit (mantém arquivos)
```

`git switch`

```bash
# Trocar de branch
git switch nova-feature
git switch -c outra-branch  # cria e já troca
```

`git tag`

```bash
# Marcar uma versão
git tag v1.0.0
```

## Colaborando

`git fetch`

```bash
# Baixar atualizações sem aplicar
git fetch origin
```

`git pull`

```bash
# Baixar e já aplicar atualizações
git pull origin main
```

`git push`

```bash
# Enviar commits para o repositório remoto
git push origin main
```

# Padronização de Commits Git

## O que é Conventional Commits?

É uma convenção leve para mensagens de commit que segue um formato estruturado. Facilita a leitura do histórico, geração automática de changelogs e versionamento semântico (SemVer).

Especificação oficial: https://www.conventionalcommits.org

## Estrutura do Commit

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

### Regras gerais

- A **descrição** deve estar em letras minúsculas
- Não terminar com ponto final
- Usar o **imperativo** ("adiciona", não "adicionado" ou "adicionando")
- Linha do cabeçalho com no máximo **72 caracteres**
- Separar o corpo do cabeçalho com uma **linha em branco**

## Tipos Principais

| Tipo       | Quando usar                                                  |
| ---------- | ------------------------------------------------------------ |
| `feat`     | Nova funcionalidade                                          |
| `fix`      | Correção de bug                                              |
| `docs`     | Alterações apenas em documentação                            |
| `style`    | Formatação, ponto e vírgula, espaços (sem mudança de lógica) |
| `refactor` | Refatoração de código (sem bug fix nem feature)              |
| `perf`     | Melhoria de performance                                      |
| `test`     | Adição ou correção de testes                                 |
| `build`    | Mudanças no sistema de build ou dependências externas        |
| `ci`       | Mudanças em arquivos e scripts de CI/CD                      |
| `chore`    | Tarefas de manutenção que não alteram src ou testes          |
| `revert`   | Reverte um commit anterior                                   |

## Exemplos Práticos

### Commits simples (sem escopo)

```bash
feat: adiciona autenticação via OAuth2
fix: corrige cálculo de desconto no carrinho
docs: atualiza README com instruções de instalação
style: aplica formatação do prettier nos arquivos ts
refactor: extrai lógica de validação para módulo separado
perf: substitui loop por operação de batch no banco
test: adiciona testes unitários para UserService
chore: atualiza dependências para versões mais recentes
```

### Commits com escopo

O escopo indica **qual parte** do projeto foi afetada.

```bash
feat(auth): adiciona suporte a login com Google
fix(cart): corrige arredondamento de valores decimais
docs(api): documenta endpoint de criação de pedidos
test(payment): cobre cenários de falha na integração com Stripe
refactor(database): migra queries para uso de ORM
ci(github-actions): adiciona job de lint no pipeline de PR
build(docker): otimiza imagem para reduzir tamanho final
```

### Commits com corpo

Use o corpo para explicar **o quê** e **por quê**, não o como.

```bash
fix(auth): corrige expiração incorreta do token JWT

O token estava sendo gerado com timezone UTC+0 fixo,
causando expiração antecipada para usuários em fusos
negativos. Agora usa o timestamp do servidor corretamente.
```

```bash
refactor(orders): separa responsabilidades do OrderService

O serviço estava acumulando lógica de negócio, persistência
e envio de e-mail. Extraído para OrderRepository,
OrderNotifier e mantida apenas a orquestração no service.
```

### Breaking Changes

Mudanças que quebram compatibilidade devem ser sinalizadas com `!` no cabeçalho e/ou `BREAKING CHANGE:` no rodapé.

```bash
feat(api)!: remove endpoint legado /v1/users

BREAKING CHANGE: O endpoint /v1/users foi removido.
Migre para /v2/users que retorna o mesmo contrato
com campos adicionais de paginação.
```

```bash
refactor!: altera assinatura do método processPayment

BREAKING CHANGE: processPayment agora retorna uma Promise<PaymentResult>
ao invés de void. Todos os chamadores precisam ser atualizados.
```

### Múltiplos rodapés

```bash
fix(billing): corrige cobrança duplicada em planos anuais

Detectado em produção via alertas do Datadog. A cobrança
ocorria duas vezes quando o webhook de confirmação do
gateway era recebido com delay superior a 30s.

Closes #482
Reviewed-by: Maria Silva
Co-authored-by: João Souza <joao@empresa.com>
```

### Revert

```bash
revert: feat(auth): adiciona suporte a login com Google

Refs: abc1234

Revertido por instabilidade no fluxo de callback em
ambientes com proxy reverso. Será retomado na próxima sprint.
```

## Exemplos de Commits Ruins

```bash
# Sem contexto algum
fix: bug

# Muito genérico
feat: melhorias

# Modo passado (use imperativo)
fixed: corrigido erro na tela de login

# CamelCase e ponto final
Fix: Corrigiu o erro de autenticação.

# Múltiplas responsabilidades num único commit
feat: adiciona login, corrige bug do carrinho e atualiza docs
```

## Boas Práticas Avançadas

### 1. Um commit = uma responsabilidade

Cada commit deve representar **uma única mudança lógica**. Se você se pegar escrevendo "e" na descrição, provavelmente são dois commits.

### 2. Commits atômicos

O repositório deve compilar e os testes devem passar em **qualquer commit** do histórico. Isso é essencial para `git bisect` funcionar bem.

### 3. Prefira `git commit --amend` a commits de correção

Se você ainda não fez push, emende o commit ao invés de criar um `fix: corrige typo do commit anterior`.

```bash
git add .
git commit --amend --no-edit   # mantém a mensagem atual
git commit --amend             # abre editor para alterar mensagem
```

### 4. Use `git rebase -i` para limpar o histórico antes do merge

Agrupe, reordene ou edite commits de uma branch antes de abri-la para revisão.

```bash
git rebase -i HEAD~5   # abre editor para os últimos 5 commits
```

Ações disponíveis no editor interativo:

| Ação     | Efeito                                     |
| -------- | ------------------------------------------ |
| `pick`   | Mantém o commit                            |
| `reword` | Mantém, mas edita a mensagem               |
| `edit`   | Para e permite emendas                     |
| `squash` | Une ao commit anterior (mantém mensagens)  |
| `fixup`  | Une ao commit anterior (descarta mensagem) |
| `drop`   | Remove o commit                            |
