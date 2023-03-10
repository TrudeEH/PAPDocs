# XPrism

## Nota ao leitor
Seja bem vindo(a) ao projeto XPrism!
Este relatório cobre como, e porque XPrism foi criado, bem como outros projetos similares e a base de conhecimento necessária para os entender.

Se possível, é recomendado que o leitor utilize as funções de pesquisa (ou os *links* em cada secção / [Índice](#indice)) para mais facilmente responder a perguntas que possam surgir sobre [Linux](#o-que-é-linux) e outros [componentes do sistema](#componentes-do-xprism).

Obrigado, 
José Simões (_aka TrudeEH_)

## Introdução
XPrism é um [ambiente de trabalho](#ambiente-de-trabalho) de [código aberto](#open-source--gpl-3) para [Linux](#o-que-é-linux), projetado com desempenho e personalização em mente.
Em vez de utilizar janelas flutuantes, XPrism organiza-as automaticamente, o que permite utilizar o sistema exclusivamente com o teclado, de forma a melhorar a produtividade. XPrism suporta qualquer equipamento capaz de iniciar o [Kernel Linux](#o-que-é-linux), incluindo ARM e processadores x86 (32 bits). A leveza do ambiente torna-o ideal para servidores, que podem ter recursos limitados para a DE.

## Indice
- [XPrism](#xprism)
  - [Nota ao leitor](#nota-ao-leitor)
  - [Introdução](#introdução)
  - [Indice](#indice)
  - [Filosofia](#filosofia)
  - [Open-source / GPL-3](#open-source--gpl-3)
  - [Linux](#linux)
    - [O que é Linux?](#o-que-é-linux)
    - [O que é uma distribuição Linux?](#o-que-é-uma-distribuição-linux)
    - [Porquê Linux?](#porquê-linux)
  - [Linux "stack"](#linux-stack)
    - [Kernel](#kernel)
    - [Xorg](#xorg)
    - [GUI Shell / WM (Gestor de janelas)](#gui-shell--wm-gestor-de-janelas)
    - [X Clients](#x-clients)
    - [Ambiente de trabalho](#ambiente-de-trabalho)
  - [Componentes do XPrism](#componentes-do-xprism)
    - [DWM (Dynamic Window Manager)](#dwm-dynamic-window-manager)
    - [ST (Simple Terminal)](#st-simple-terminal)
    - [Dmenu](#dmenu)
    - [Slstatus](#slstatus)
    - [Slock](#slock)
  - [Componentes adicionais](#componentes-adicionais)
    - [Nitrogen (Wallpaper Setter)](#nitrogen-wallpaper-setter)
    - [TrudeVim](#trudevim)
      - [Introdução](#introdução-1)
      - [Funções](#funções)
      - [Instalação](#instalação)
    - [GitHub / Wiki](#github--wiki)
    - [XPrism Web](#xprism-web)
      - [Construção do site](#construção-do-site)
      - [Hospedagem / GitHub Pages](#hospedagem--github-pages)
  - [Configuração do XPrism](#configuração-do-xprism)
    - [config.h (global)](#configh-global)
    - [componente/config.h (específico)](#componenteconfigh-específico)
    - [Código-Fonte (mais específico)](#código-fonte-mais-específico)
  - [Recursos do sistema / Performance](#recursos-do-sistema--performance)
    - [Porquê C?](#porquê-c)
    - [Segurança](#segurança)
  - [Produtividade](#produtividade)
    - [Vim](#vim)
    - [Atalhos de teclado](#atalhos-de-teclado)
  - [Aplicações possíveis](#aplicações-possíveis)
    - [No servidor](#no-servidor)
    - [No computador pessoal](#no-computador-pessoal)
  - [Guia de utilização](#guia-de-utilização)
    - [Instalação](#instalação-1)
    - [Workflow](#workflow)
      - [Menu principal](#menu-principal)
        - [Atualização](#atualização)
        - [Atalhos de teclado](#atalhos-de-teclado-1)
        - [Papel de parede](#papel-de-parede)
        - [Encerrar a máquina](#encerrar-a-máquina)
      - [Lançador de programas](#lançador-de-programas)
      - [Tags](#tags)
      - [Layout](#layout)
        - [Master/Stack layout \[\]=](#masterstack-layout-)
        - [Floating layout \>\<\>](#floating-layout-)
        - [Grid layout \[\]=](#grid-layout-)
        - [Horizontal layout \[\]=](#horizontal-layout-)
        - [Monocle layout \[\]](#monocle-layout-)
      - [System bar](#system-bar)
        - [Status bar](#status-bar)
        - [System tray](#system-tray)
  - [Linha do tempo](#linha-do-tempo)
    - [201X - 2018](#201x---2018)
    - [2018 - 2019](#2018---2019)
    - [2019 - 2020](#2019---2020)
    - [2020 - 2021](#2020---2021)
    - [2021 - 2022](#2021---2022)
    - [2022 - 2023](#2022---2023)
  - [Dificuldades encontradas](#dificuldades-encontradas)
  - [Repositórios do projeto](#repositórios-do-projeto)
  - [Conclusão / Futuro do projeto](#conclusão--futuro-do-projeto)
  - [Agradecimentos finais](#agradecimentos-finais)

## Filosofia
O XPrism é um projeto de software que segue a filosofia *suckless*, que defende a simplicidade, clareza e frugalidade no desenvolvimento de software. O objetivo do projeto é criar um ambiente de trabalho para linux que seja simples, minimalista e usável, destinado a utilizadores avançados e técnicos de TI. O projeto procura evitar a complexidade desnecessária do código que são comuns na indústria de software atual.

A filosofia *suckless* baseia-se na ideia de que o software genial é simples e elegante, e que o progresso se mede pela redução das linhas de código. A filosofia inspira-se nos ideais Unix, que valorizam a modularidade, a portabilidade e a interoperabilidade dos programas.

O XPrism faz parte da comunidade open-source, que pode contribuir para o desenvolvimento do projeto através de sugestões, correções e melhorias. O projeto oferece uma interface rápida e eficiente para gerir o ambiente de trabalho, sem menus e botões gráficos, mas sim teclas de atalho e comandos personalizáveis. O projeto, após compilado, também não tem configurações externas e usa o mínimo de dependências externas possíveis.

## Open-source / GPL-3
Todo o código no projeto XPrism é distribuído com a licença GPL-3. 
Esta é uma licença de software livre que garante aos utilizadores finais as quatro liberdades de executar, estudar, partilhar e modificar o software.

Os utilizadores são livres de consultar a licensa pelo *link* abaixo, ou pelo ficheiro [LICENSE](https://github.com/TrudeEH/XPrism/blob/main/LICENSE) localizado no repositório principal.


## Linux
O componente mais fundamental de XPrism é a base Linux.
No entanto, antes de consultar a relação entre ambos projetos, é importante entender o que Linux representa no contexto do projeto.

### O que é Linux?
Linux muitas vezes é reconhecido como um sistema operativo, no entanto, no contexto deste projeto, refere-se ao Kernel, ou seja, ao núcleo do sistema.
O Kernel inicia e gere outros programas que fornecem o acesso aos recursos do sistema, como as shells, compiladores, bibliotecas-padrão e os comandos que fazem parte do Projeto GNU, entre outros.

### O que é uma distribuição Linux?
Uma distribuição Linux é um sistema operativo criado a partir de uma coleção de software, que utiliza o núcleo Linux, ferramentas do GNU, alguns programas adicionais e um gestor de pacotes. As ferramentas do GNU são um conjunto de programas livres que fornecem funções básicas como um editor de texto (normalmente vi), compilador e shell.

Existem muitas distribuições Linux disponíveis para diferentes propósitos e públicos. Algumas das mais populares são o Ubuntu, Linux Mint, Arch e Debian. Cada distribuição pode ter diferentes interfaces gráficas, aplicações pré-instalados, configurações de segurança e privacidade, suporte técnico e atualizações. XPrism é compatível com **todas** as distribuições Linux, e pode ser usado tanto em servidor como computadores pessoais.

### Porquê Linux?
Linux foi utilizado como base por causa da sua natureza de código aberto e possibilidade de ser personalizado até ao limite da imaginação. Além disso, é o sistema mais popular em servidores na web.

## Linux "stack"
O *stack* gráfico de tecnologia Linux são os componentes que, ao comunicar entre si, desenham e controlam janelas e as suas interações com o sistema.

*Exemplo: Stack do Ubuntu*
![Linux GUI Stack](https://res.cloudinary.com/practicaldev/image/fetch/s--ySluFo3J--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/nibmz7/portfolio/main/blog/From_Windows_To_Linux/Basics_of_Linux_GUI_stack/assets/webp/x11.webp)

### [Kernel](#o-que-é-linux)

### Xorg
Xorg é um programa que permite a interação entre os utilizadores e os programas com interface gráfica através de um monitor, teclado e rato. Xorg é baseado no sistema X, que é um padrão para a comunicação entre aplicações gráficas e servidores de janelas.

Xorg é o padrão em sistemas Linux atualmente, e é compatível com muitas aplicações e gestores de janelas diferentes. No entanto, Xorg também tem algumas desvantagens, como a complexidade da configuração e a falta de suporte para alguns recursos modernos como o Wayland.

No futuro, o Xorg será substituído pelo Wayland, mas por enquanto, o Xorg oferece maior compatíbilidade com hardware mais antigo e servidores.
### GUI Shell / WM (Gestor de janelas)
Um gestor de janelas é um software que controla a posição e a aparência das janelas. O gestor de janelas permite ao utilizador mover, redimensionar, fechar janelas e executar outros comandos. O gestor de janelas também pode fornecer efeitos visuais como transparência, sombras, animações e miniaturas.

O XPrism inclui um gestor de janelas (DWM) e um compositor, responsavél pelas sombras, transparência e aparência das janelas. O DWM controla cores e posições automáticas.

### X Clients
O Xclient é qualquer programa exibido no XServer (Xorg), embora este programa seja separado do servidor.
### Ambiente de trabalho
Um Desktop Environment (Ambiente de trabalho - DE) é o conjunto das tecnologias anteriores, o que inclui um gestor de janelas, mas também outros componentes como painéis, menus, ícones, widgets e aplicações integradas, etc... e tem como objetivo oferecer uma interface gráfica completa.

No caso do XPrism, incluí o wallpaper padrão e todos os utilitários e componentes presentes no repositório.

## Componentes do XPrism
Devido à complexidade do projeto, XPrism está dividido em diversos sub-projetos, cada um responsável por um componenten diferente do sistema. Isto incluí o terminal, gestor de janelas, bloqueador de ecrã, etc...

Todos os componentes príncipais foram escritos em C e baseados no Xorg, para atingir maior performance e facilitar gestão de memória. No entanto, escrever código em C vem com diversos riscos de segurança. Com o apoio da equipa *suckless* e a comunidade Linux, quase, senão todos os possíveis erros de memória foram resolvidos. Recomendo a leitura do tópico [Segurança](#segurança) do relatório para mais informações.

### DWM (Dynamic Window Manager)
O componente DWM pode ser considerado o "mais importante", pois é responsável por gerir janelas e comunicar com o servidor X através da biblioteca Xlib. Ele usa o protocolo ICCCM/EWMH para interagir com outras aplicações e seguir os padrões de gestão de janelas. Ele também usa o Xinerama para suportar vários monitores.

O DWM é composto por três partes principais: o 'main loop', o 'handler' e o 'arranger'. O main loop é responsável por receber e processar os eventos do servidor X, como criar ou destruir janelas, pressionar teclas ou botões do rato, etc. O handler é responsável por executar as funções correspondentes aos eventos recebidos pelo main loop, como colocar uma janela em foco, mudar de layout, enviar um sinal para uma aplicação, etc. E o arranger é responsável por organizar as janelas no ecrã de acordo com o layout escolhido pelo utilizador.

O DWM usa uma estrutura de dados chamada Client para armazenar as informações sobre cada janela gerenciada pelo programa. Cada Client tem um *pointer* para o próxima e anterior Client na lista ligada de Clients. Cada Client também tem um *pointer* para o Monitor ao qual pertence. Um Monitor é outra estrutura de dados que representa um monitor físico ligado ao computador. Cada Monitor tem um *pointer* para a Tag ao qual está associado. Uma Tag é outra estrutura de dados que representa um grupo lógico de Clients que podem ser mostrados ou escondidos pelo utilizador (similar aos ambientes de trabalho virtuais do Windows).

O DWM usa uma abordagem minimalista e modular. Ele define apenas algumas funções básicas e valores que podem ser combinadas ou modificadas pelo utilizador através do arquivo config.def.h. Por exemplo, a função focus() muda o foco da janela atual para a próxima ou anterior na lista ligada de Clients; a função tile() organiza as janelas no layout de master/stack; a função monocle() organiza as janelas em layout *fullscreen*; etc.

O código-fonte do DWM é organizado no ficheiro dwm.c. Ele contém a maioria das definições das estruturas de dados, variáveis globais, funções e atalhos usados pelo programa. Ele também inclui alguns arquivos header como config.h (que é gerado a partir do config.def.h), util.h (que contém algumas funções auxiliares) e drw.h (que contém algumas funções relacionadas ao desenho das janelas). Também importa várias funções da pasta plugins, que contém funções "extras", como transparễncia, personalização de cores avançada, etc.

### ST (Simple Terminal)
O ST é um terminal simples que funciona no Xorg. Ele comunica-se com o servidor X através da biblioteca Xlib e usa a biblioteca de fontes Xft para desenhar os caracteres no ecrã. Ele também usa a biblioteca util-linux para manipular os *pseudoterminais* (pty) que permitem executar programas num ambiente CLI.

O ST implementa a maior parte das sequências de escape VT10X, que são códigos que controlam o comportamento do terminal, como mover o cursor, mudar a cor do texto e outras funções. Ele também suporta UTF-8, que é um padrão para codificar caracteres em multiplas línguas.

A plugins age de forma similar ao DWM, contém funções opcionais que também podem ser configuradas no ficheiro config.def.h.

### Dmenu
Dmenu é um menu dinâmico e leve para X. Ele tem como objetivo facilitar a pesquisa no sistema, lançar aplicações, executar comandos e *scripts* personalizados. O Dmenu substitui um menu tradicional no XPrism.

Dmenu lê texto da entrada padrão (`stdin`) e cria um menu com um item por cada linha. O utilizador pode então selecionar um item, com as teclas de seta ou por escrever uma parte do nome, e a linha é impressa na saída padrão (stdout). Dmenu_run é um script padrão do Dmenu que permite usá-lo como um lançador de programas.

Dmenu usa a biblioteca Xlib para se comunicar com o servidor X e a biblioteca Xft para desenhar as fontes na tela. Ele também usa a função `popen` da biblioteca padrão C para executar os comandos selecionados pelo utilizador.

### Slstatus
Slstatus é um monitor de status do sistema para gestores de janelas que usam `WM_NAME` ou `stdin` para preencher a barra de status.
Slstatus lê os dados de diferentes fontes, como arquivos no sistema, comandos ou bibliotecas, e formata-os de acordo com as funções e argumentos definidos no arquivo config.def.h. Em seguida, ele atualiza o `WM_NAME` da janela raiz do X11 ou escreve na saída padrão a cada intervalo especificado na configuração.
### Slock
Slock é um bloqueador de ecrã simples para o X11 que segue a filosofia suckless. Ele bloqueia o ecrã e pede a senha do utilizador atual para desbloquear.
Slock utiliza a biblioteca *Xlib* para criar uma janela que cobre o ecrã inteiro e captura todos os eventos do teclado e do rato. Ele usa a função `crypt(3)` para verificar se a senha introduzida pelo utilizador corresponde à senha guardada no sistema. Ele também usa o *Xrandr* para suportar vários monitores e o *DPMS* para desligar o monitor após um tempo de inatividade.
## Componentes adicionais

### Nitrogen (Wallpaper Setter)
Nitrogen é um programa que permite mudar o papel de parede do ambiente de trabalho. Ele é rápido e leve, e usa a biblioteca GTK2 para a interface gráfica. Ele suporta *Multihead* e *Xinerama*, que são recursos para lidar com múltiplos monitores. Ele também tem um modo de memória que guarda o último papel de parede usado e um modo de linha de comando.
### TrudeVim
TrudeVim é um editor de texto altamente extensível para Linux, configurado a partir do NeoVim. Suporta *linting*, servidores de linguagens de programação, autocompletação de código, *snippets* personalizados, entre outras funções. Por padrão trás o servidor `tsserver` e *snippets* para TypeScript e JavaScript, e `lua_ls` para lua.
Este projeto não faz parte do repositório XPrism por ser considerado um componente adicional.
TrudeVim também está disponível para MacOS, Windows e qualquer distribuição Linux.

#### Introdução
Por padrão, XPrism usa as teclas de atalho do Vim para facilitar a navegação e manipulação de janelas. Por exemplo: `h`, `j`, `k` e `l` substituem as setas no teclado. Estes e outros atalhos não só permitem navegar mais rápido, executar mais funções com o teclado (todas as teclas podem ser usadas como atalho), mas também são mais ergonômicos para utilizadores que praticam *touch typing* (escrever no teclado com as duas mãos, apenas com recurso à memória muscular.) Estes atalhos podem ser alterados, no entanto, para acompanhar as definições padrão, é recomendado usar o Vim como editor de texto.
Vim é adequado para muitas das necessidades de qualquer utilizador, mas o seu minimalismo dificulta a sua utilização por técnicos e programadores, que precisam de funções mais avançadas, como as presentes no VScode (por extensões).
NeoVim resolve este problema. É configurado em lua e suporta diversas extensões, escritas em VimScript, lua, e até algumas adaptações do VScode, para além de suportar *multithreating*, para obter maior performance com tarefas intensivas.
A maior desvantagem do NeoVim é a dificuldade e tempo necessário para o configurar. O utilizador deve instalar um plugin manager e configurar cada extensão de acordo com as suas necessidades. TrudeVim foi criado para remover esta barreira de dificuldade.

#### Funções
Para além de todas as funções do NeoVim padrão, TrudeVim adiciona:
- Atalhos personalizados (`jk` para voltar ao modo Normal, etc...)
- Leader key (espaço)
- Lazy plugin manager pré-configurado
- Instalação automática com scripts
- Autocompletação de código
- Suporte a *snippets*
- *Snippets* pré configurados para dezenas de linguagens
- Folha de atalhos de teclado
- Suporte a GIT e GitHub
- Linha de comandos GIT no modo de Comandos. (:git ...)
- Indicadores Git e GitBlame
- Dashboard personalizada
- Suporte a diversos temas e cores
- Statusline com powerline e integração com outros plugins
- Explorador de ficheiros
- Guias de identação
- Comandos para comentar código automaticamente
- *Fuzzy Finder* - Pesquisa para ficheiros, grep, menus, etc...
- Diversas opções pré-definidas
- Suporte a GUIs como Neovide e GVim
- JavaScript, Html/CSS, C e lua suportados por padrão, com suporte a dezenas de linguagens com apenas alguns cliques
- Terminal integrado
- "Tabs" gráficas para *buffers*
- Suporte completo a rato / eventos de clique
- Icones gráficos em menus, ficheiros e pastas
- Fácilmente extensível com qualquer outro plugin, tanto do Vim, Nvim, como adaptações do VScode
#### Instalação
As instruções de instalação estão localizadas no repositório [TrudeVim](https://github.com/TrudeEH/TrudeVim).

### GitHub / Wiki
O GitHub foi bastante utilizado durante o desenvolvimento do XPrism, e serve como histórico de versões, página de *downloads* e atualizações. Além disso, a Wiki contém mais informações e instruções para utilizar o XPrism.
### [XPrism Web](https://trudeeh.github.io/XPrismWeb/XPrism.html)
XPrism Web é o site official do projeto. Serve como hub de informação e está hospedado no seu próprio repositório do GitHub. Todo o código do site está licensiado debaixo da mesma licensa do projeto original (GPL-3). Também é a página inicial do projeto do Henrique Esteves, que desenvolveu aplicações que podem ser integradas com o XPrism.
#### Construção do site
XPrism Web foi desenvolvido durante várias aulas do curso e de forma autónoma, e foi criado de raiz com HTML, CSS e JavaScript.

#### Hospedagem / GitHub Pages
O código fonte do site está disponível num [repositório do GitHub](https://github.com/trudeeh/XPrismWeb). Para hospedar o site, foi utilizada uma automação do GitHub pages, que automaticamente atualiza o site online quando o código fonte é alterado. Também existem diversas automações para garantir que não são partilhadas informações confidenciais quando o código é publicado, e que não existem erros de segurança com os scripts em JavaScript.

## Configuração do XPrism
Existem 3 ficheiros de configuração do XPrism para cada componente: config.h, componente/config.h e fonte. Estes fichiros estão divididos para facilitar a partilha de configurações e aumentar a modularidade, e devem ser editados de acordo com o tipo de modificação que o utilizador deseja efetuar, dependendo do nível de complexidade.

### config.h (global)
config.h representa o nível mais simples em complexidade, e é altamente modular. Utiliza instruções `#define` para o pré-processador de C substituir dados das configurações no componente/config.h.
É utilizado para definir opções de aparência, estilos, tamanho de componentes e algumas opções da barra do sistema.
Esta configuração deve ser usada apenas para alterar estilos e não para atalhos de teclado e definições pessoais. Isto permite que qualquer pessoa possa partilhar a sua config.h ou implementar estilos criados por outro utilizador.

### componente/config.h (específico)
componente/config.h são configurações para *cada componente*, que contêm estilos muito específicos, atalhos de teclados, tags e outras configurações pessoais do sistema. Por exemplo, as configurações do DWM estão em dwm/config.h.
Estas configurações não devem ser aplicadas no código global, pois cada componente tem estruturas de dados diferentes, e/ou é configurado com parâmetros unicos.
Estas configurações são mais avançadas, e, por isso, é recomendado proceder com atenção para evitar erros que danifiquem o ambiente.

### Código-Fonte (mais específico)
No caso de não existir uma configuração muito específica, função ou integração com uma aplicação, é recomendado editar o código fonte de cada componente. Esta opção é a mais complexa, sendo necessário algum conhecimento sobre programação em C.
Para facilitar estas operações, pode ser utilizado o comando `patch -p1 < patch.diff`, sendo que patch.diff é um patch ao código a ser aplicado. Estes patches podem ser criados pela comunidade e ser aplicados diretamente ao código fonte, de forma automática. No caso de não existir um patch para uma determinada alteração, é recomendado criar um patch de raiz, ou criar um fork ao código no GitHub para efetuar essas alterações. Se o utilizador desejar contribuír para o código do projeto, poderá efetuar um pull request após terminar as suas alterações.

## Recursos do sistema / Performance
Esta secção cobre preocupações de segurança e performance do ambiente, e as soluções a essas dificuldades, e o mitovo de C ser escolhido como linguagem de programação.

### Porquê C?
Foi escolhida a linguagem de programação C por vários motivos: C é uma das linguagens mais rápidas disponíveis, e é a linguagem mais utilizada no Kernel Linux (Alguns headers já são incluídos no sistema, o que reduz o tamanho final do executavél). Além disso, é bastante flexivel e conhecida, o que ajuda na adoção e facilidade de modificação do XPrism. C também permite gerir memória de forma bastante eficiente, e executar outras operações de "baixo nível", ou seja, mais "próximo" ao hardware.

### Segurança
A maior desvantagem de escrever código em C é as preocupações de segurança. Um simples erro em gestão de memória pode introduzir uma vulnerabilidade que comprometa o ambiente, ou até a máquina como um todo. Esta preocupação é ainda mais grave em servidores, que são alvos de ataques contantemente. XPrism minimizou estas preocupações de diversas formas: O código base, escrito pela equipa Suckless, é open-source e está disponível há vários anos. Todo o tempo que foi utilizado e testado eliminou a maioria, senão todos os bugs possíveis. As adições do XPrism representam cerca de 2k-3k linhas de código, que também estão disponíveis publicamente. Devido à sua natureza open-source, erros podem ser reportados e corrigidos em minutos, antes de um atacante ter tempo de utilizar essa vulnerabilidade. No entanto, nenhum software é perfeito, e estes riscos aplicam-se a qualquer ambiente Linux. Devido à simplicidade do código do XPrism (~5k linhas em componentes críticos), é mais fácil detetar um erro do que em software mais complexo, o que elimina a maioria das preocupações com segurança.

## Produtividade
Um dos objetivos fundamentais de XPrism é contribuír para aumentar a produtividade de técnicos de informática e programadores. Para atingir esse objetivo, a maioria dos atalhos de teclado padrão baseiam-se no Vim e são projetados para evitar conflitos com editores CLI e multiplexadores de terminal.

### Vim
É recomendado consultar a secção [TrudeVim](#trudevim) para obter mais informações sobre o que é e como funciona o Vim.

### Atalhos de teclado
XPrism usa apenas o teclado para navegação, redimensionar janelas, executar comandos, etc. É possível utilizar o cursor para alterar entre tabs, mover janelas e executar comandos específicos dentro de menus. No entanto, o cursor serve apenas como apoio, ao contrário da maioria dos ambientes modernos.
Muitas tarefas são automatizadas ou muito otimizadas para o teclado, o que torna o ambiente mais produtivo, comparado com a maioria dos ambientes gráficos. A desvantagem passa pela necessidade de memorizar os atalhos. A curva de aprendizagem é particularmente acentuada no caso do XPrism, mas após algum tempo de treino, um utilizador rápidamente se torna mais produtivo do que era antes, em ambientes como o GNOME ou KDE. Para ajudar nessa fase, existe um script no menu principal que lê a configuração do XPrism e procura atalhos de teclado, e mostra-os numa lista. Esta opção é acessível pela combinação: `MOD+A - "Keyboard Shortcuts"`. Utilizadores do Vim não terão dificuldades em aprender os atalhos, pois são bastante similares aos do editor e intuitivos.

__NOTA:__ O XPrism respeita as teclas de atalho padrão do Vim, mas esse comportamento pode ser alterado pelo utilizador através dos ficheiros de configuração do sistema.

## Aplicações possíveis
XPrism pode ser instalado tanto em computadores pessoais como em servidores.
### No servidor
XPrism apresenta diversas vantagens para servidores. Em primeiro lugar, o ambiente é muito leve, e é ideal para servidores com capacidades limitadas. Além disso, ele apresenta poucos bugs, pois o código é pequeno e simples (comparado com o GNOME e KDE, por exemplo), o que também facilita a manutenção e atualização do sistema. Isso é particularmente importante em ambientes de servidor, onde a estabilidade e a confiabilidade são fundamentais.

Outra vantagem do XPrism é que ele permite que o utilizador trabalhe de forma mais produtiva por utilizar apenas o teclado. Isso é especialmente útil para administradores de sistema que precisam realizar diversas tarefas repetitivas de forma rápida e eficiente. Além disso, o XPrism funciona mesmo que o servidor não possua um rato, o que é comum em servidores remotos.

### No computador pessoal
O XPrism também é excelente para computadores pessoais. Uma das suas principais vantagens é ser extremamente leve. Isso é ótimo para computadores mais antigos ou com capacidades limitadas, que podem ser utilizados por mais tempo, sem a necessidade de substituição.

Esse facto também é importante do ponto de vista ambiental, pois o descarte prematuro de equipamentos eletrónicos pode gerar impactos negativos no meio ambiente. Com o XPrism, é possível prolongar a vida útil de computadores antigos, contribuindo para a redução da produção de resíduos eletrónicos e diminuição das emissões de carbono.

Além disso, o XPrism tem uma interface minimalista que permite ao utilizador concentrar-se nas tarefas em vez de se distrair com elementos desnecessários. Isso torna o XPrism uma excelente opção para utilizadores que buscam uma experiência de uso mais fluida e eficiente.

## Guia de utilização

### Instalação
As intruções de instalação do XPrism estão disponíveis no [repositório oficial no GitHub](https://github.com/TrudeEH/XPrism/wiki).

### Workflow
#### Menu principal
O menu principal de XPrism é chamado por MOD+A, por padrão, e contém diversas funções úteis e atalhos. Este menu é altamente personalizável, e permite ao utilizador adicionar novas opções e remover opções existentes, simplesmente por editar um ficheiro em bash.
##### Atualização
A primeira opção do menu é um atualizador. Após selecionar a opção, um novo terminal será aberto, que verifica se existem atualizações ao repositório no GitHub, e, se sim, atualiza o sistema. No caso de o utilizador já ter aplicado configurações personalizadas, o script pergunta se estas deve ser substituídas, ou se devem ser incrementadas à atualização.
##### Atalhos de teclado
A segunda opção: "Keyboard Shortcuts", abre uma secção com todos os atalhos de XPrism. Estes atalhos são dinânicos, e atualizam de acordo com os ficheiros de configuração. Este comportamento é possível por utilizar comandos padrão em distribuições Linux para filtrar, procurar e formatar texto.
##### Papel de parede
A opção seguinte, "Change Wallpaper", abre uma nova janela do `nitrogen` que permite ao utilizador alterar o papel de parede do ambiente.

##### Encerrar a máquina
Por fim, "Shutdown System" desliga a máquina.
__Nota:__ Para encerrar sessão em vez de desligar, é necessário fechar todos os programas em execução e usar o atalho: MOD+SHIFT+q.
#### Lançador de programas
O lançador de programas (dmenu), suporta execução de comandos, scripts personalizavéis e pode ser chamado por outros programas para criar menus gráficos. Por padrão, pode ser chamado por: MOD+p
#### Tags
As tags comportam-se de forma semelhante a ambientes de trabalho virtuais. O utilizador pode alternar entre tags com o atalho: MOD+?? (?? - número da tag). Cada tag pode conter programas, layouts e estilos diferentes (por exemplo: largura da borda das janelas).
Como exemplo, a tag 1 poderia conter um navegador em tela cheia, e a tag 2 poderia conter dois terminais em modo flutuante, etc. O objetivo das tags é ajudar o utilizador a organizar-se de forma mais eficiente e abrir programas que não devem ocupar espaço no ecrã. (Não existe forma de minimizar janelas por padrão, as tags substituem essa funcionalidade.) É possível definir tags padrão para certas aplicações, alterar a aparência das tags, mudar atalhos em cada tag e até alterar o comportamento padrão com vários monitores.
#### Layout
XPrism suporta diversos layouts (disposições) automáticos para janelas. Existem 4 layouts: Master/Stack, Floating, Grid e Monocle. Para alterar entre layouts, pode ser usado o atalho MOD+SPACE, ou MOD+M para monocle, MOD+T para tiling (Master/Stack), etc...

##### Master/Stack layout []=
Master/Stack define uma janela como o Master (a mais recente por padrão) e todas as restantes como o Stack. As janelas em stack dividem-se entre si para ocupar o restante do ecrã.

##### Floating layout ><>
O layout flutuante é o mais comum em ambientes gráficos. As janelas flutuam livremente e podem ser redimensionadas com MOD+RClick e movidas com MOD+LClick. Este layout foi projetado para ser utilizado com o rato, e é útil no príodo de transição para o XPrism, já que o utilizador provavelmente estará habituado a esse layout, e também com certas aplicações que não devem ser redimensionadas de forma automática, por exemplo, alguns jogos.

##### Grid layout []=
O grid layout é uma variante do Master/Stack, e é ativado quando o utilizador adiciona uma nova janela ao Master. Por exemplo, se o utilizador abrir uma janela no Master e três no stack, pode mover uma das janelas no stack para o Master. Dessa forma, o layout transforma-se numa grelha, em que 2 janelas ocupam o Master stack ao mesmo tempo. O resultado final é cada janela ocupar 1/4 do espaço disponível.

##### Horizontal layout []=
O layout horizontal também é criado a partir do Master/Stack, e é ativado quando o utilizador move todas as janelas para o Master. Dessa forma, uma única coluna contém todas as janelas.

##### Monocle layout []
Monocle é o equivalente a tela cheia no XPrism. Quando ativo, as janelas sobrepõem-se, e as teclas de navegação trocam a janela em foque. Este layout comporta-se como um navegador em tela cheia, que usa tabs para alternar entre janelas. Neste caso, o processo é controlado pelo teclado.

#### System bar
A barra de sistema mostra informação relevante como as tags, título da janela em foque, status bar e system tray. Esta barra pode ser escondida com MOD+b.

##### Status bar
A status bar mostra informações sobre o sistema, como a taxa de utilização do CPU, RAM, bateria (em portáteis), data e hora. Esta secção é muito personalizavél e módulos podem ser adicionados, removidos, e é possível alterar o estilo.

##### System tray
O system tray é uma área à direita da status bar onde aplicações podem adicionar icones. Por padrão, o controle de volume e internet estão localizados no system tray.

## Linha do tempo
Esta secção tem como objetivo mostrar o desenvolvimento de XPrism, desde a ideia inicial, protótipos e versões anteriores.


### 201X - 2018
Tudo começou alguns anos antes de 2018. Eu já tinha ouvido falar de Linux, mas nunca o tinha utilizado. No entanto, devido a problemas com o meu computador com Windows 10, finalmente decidi experimentar. Até 2018, testei dezenas de distribuições Linux, como o Debian, Ubuntu, Arch, e diversas variações, mas nenhuma me agradou completamente. Durante essa busca pelo "sistema perfeito", aprendi bastante sobre Linux e os seus componentes fundamentais, mas não foi até 2018 que realmente começei a fazer algum progresso em direção ao projeto que deu origem ao XPrism.

### 2018 - 2019
No ínicio de 2018, percebi que nenhuma distribuição Linux poderia chegar ao meu ideal de performance e funcionalidade, e decidi pesquisar mais a fundo sobre cada componente Linux, com a esperança de modificar uma distribuição existente para alcançar os meus objetivos.
Esse esforço levou-me ao estudo de ambientes gráficos, Xorg e gestores de janelas, bem como os seus diversos componentes. No início, utilizava o XFCE como ambiente gráfico, mas com o tempo, começei a utilizar o terminal para a maioria das minhas tarefas diárias, e o ambiente gráfico servia apenas para o navegador. Utilizar apenas o terminal provou ser mais eficiente do que ambientes gráficos, mas não era possível realizar todas as minhas tarefas apenas com a consola, o que me obrigava a manter um ambiente gráfico disponível a qualquer momento.
Com o tempo, estudei sobre ambientes de trabalho e gestores de janelas, o que me permitiu escolher os componentes da distribuição Linux que utilizava, e torná-la mais leve e eficiente.
### 2019 - 2020
Em 2019 decidi testar o AwesomeWM, um gestor de janelas automático, mais leve e eficiente do que gestores com janelas flutuantes. AwesomeWM é configurado em lua, e pode ser extendido com um conjunto de programas para menus, barra de sistema e tray.
Essa foi a minha introdução ao mundo de "tiling WMs", que foi a inspiração para o XPrism. Nesse tempo, para além de aprender lua, testei vários gestores de janelas como o QTile, configurado em Python, XMonad, configurado em Haskell e i3, com a sua própria linguagem, entre outros. No entanto, acabava sempre por voltar ao Awesome, que era o mais "completo" de todos os que testei.
O sistema de base (sem contar com o Xorg e o Kernel), ocupava cerca de 400MB de RAM, num computador com 4GB alocados.
Por mais que o ambiente já me deixasse satisfeito, eu planeava melhorar a performance, e reduzir o consumo de CPU.

### 2020 - 2021
A 16 de Agosto de 2020, decidi publicar a [primeira versão de TrudeOS](https://github.com/TrudeEH/AwesomeWM-desktop) (que mais tarde iria dar origem ao XPrism).
O ambiente já suportava um modo flutuante, automático (master/stack), grid (2+master/stack) e full (tela cheia), mas não suportava transparência, atualizações de repositório, e não possuia uma lockscreen ou terminal padrão. (O XTerm era uma dependência).
![screenshot1](https://user-images.githubusercontent.com/48379395/91666608-14339280-eaf6-11ea-918e-3f06747516ed.png)
![screenshot2](https://user-images.githubusercontent.com/48379395/91666609-185fb000-eaf6-11ea-9246-e3de3623ce5b.png)
![screenshot3](https://user-images.githubusercontent.com/48379395/91666610-18f84680-eaf6-11ea-9ea0-970d910cca2b.png)
### 2021 - 2022
2021 foi um ano de testes e modificações. Testei o Slax e desenvolvi deversos módulos, mas não tive sucesso em implementar o AwesomeWM com a distribuição. Após diversos testes, decidi escolher todas. Criar um ambiente que funcionasse em qualquer distribuição Linux. Também criei uma [versão do ambiente baseado no LXQT](https://github.com/TrudeEH/LXQT-desktop), que não foi mantida por muito tempo, pois rapidamente começei a desenvolver a versão 3 do sistema.
Também realizei diversos [testes com o OpenBox](https://github.com/TrudeEH/Openbox-desktop) e terminei a versão 3 do sistema, que infelizmente foi perdida com o tempo. Finalmente, descobri algo que mudou o projeto completamente: o DWM. O DWM parecia tudo o que procurava: Um gestor de janelas simples, extremamente leve e altamente extensível. Não demorou muito até o tentar utilizar, mas sem sucesso, devido à complexidade do código fonte escrito em C.
Passei o resto do ano a estudar C, adicionar alguns componentes e desenvolver um instalador universal.
Finalmente, publiquei duas versões do ambiente: [TruDE-1](https://github.com/TrudeEH/TruDE-old), ainda baseado no AwesomeWM, a 20 de agosto de 2021 e [TruDE-2](https://github.com/TrudeEH/TruDE-old2), a 30 de novembro do mesmo ano.

### 2022 - 2023
Este ano, após meses de estudo e desenvolvimento, apresento XPrism, contruído com base no DWM e com o mínimo de dependências possíveis. Adicionei diversas opções de estilo, transparência e outros efeitos visuais, bem como um código fonte mais limpo e bem estruturado. A nível de performance, o que começou por ocupar 400MB de RAM no sistema, agora ocupa >1MB (sem contar com o Xorg e Kernel) e não tem praticamente nenhum impacto no processador. (O sistema apresenta 0% - 0.1%, pois não consegue aproximar o número real).
Após isto, desenvolvi um editor de texto/código baseado no NVIM para acompanhar os atalhos padrão do XPrism, configurado em lua.
No entanto, este não será o fim desta jornada. Com a mudança do Xorg para a Wayland, o potêncial para um sistema ainda mais leve e eficiente aumenta, e com isso o desenvolvimento de uma nova versão do XPrism, que possivelmente começará com o lançamento da primeira versão estável do Wayland.

## Dificuldades encontradas
Apareceram diversas dificuldades ao longo do projeto, como por exemplo:
- Falta de orientação: Não foi fácil aprender conceitos muito específicos sobre Xorg e DWM, e não existe um guia para criar um ambiente de trabalho. O projeto só foi possível devido a muita tentativa e erro, pesquisas que levaram a becos sem saída e horas gastas a ler documentação e fazer perguntas em fórums.
- Conhecimentos em C: O curso profissional não aborda conceitos mais avançados de C como structs, pointers e como o compilador funciona, e não aprendemos lógica avançada. Todo o conhecimento que tenho em C foi adquirido durante o desenvolvimento do XPrism.
- Base extensa: O DWM, ST e SLstatus, por mais que simples em funcionalidade, são compostos por milhares de linhas de código em C, sem qualquer tipo de documentação, exceto comentários no código, o que dificultou muito a compreensão e extensão dos projetos.
- Algo novo: Até recentemente, não existia nenhuma "competição" ao XPrism (que eu conheça). Já existiam gestores de janelas automáticos, mas nenhum ambiente completo estava disponível, e, por isso, foi necessário pensar em situações, problemas e soluções completamente novas, sem documentação sobre o assunto. A comunidade Linux foi fundamental para resolver alguns erros e garantir a segurança do código, mas raramente estava disponível.

## Repositórios do projeto
- [XPrism GitHub](https://github.com/TrudeEH/XPrism)
- [TrudeVim](https://github.com/TrudeEH/TrudeVim)
- [XPrism Website](https://trudeeh.github.io/XPrismWeb/XPrism.html)

## Conclusão / Futuro do projeto
A nível pessoal, este projeto foi muito útil, não só devido às novas aprendizagens adquiridas sobre C e computação em geral, mas também a nível de organização de projeto, boas práticas com sistemas de controle de versão e desenvolvimento web.
O resultado final também atingiu as espectativas: Um ambiente extremamente leve, disponivel para qualquer pessoa.
No futuro, XPrism continuará a ser mantido e atualizado.
Quando o Wayland atingir a maturidade, XPrism será reconstruído para funcionar com a nova tecnologia, com o objetivo de continuar a melhorar efeitos gráficos e suporte a novos equipamentos.

- Maior conhecimento de low level e C
- Transição para Wayland

## Agradecimentos finais
Este projeto não seria possível sem o código base fornecido pela equipa Suckless e outros projetos da comunidade open-source. Além disso, o tempo de aulas do curso permitiram testar e corrigir erros que, de outra forma poderiam passar despercebidos. E, por fim, familiares e amigos forneceram o apoio necessário para o projeto ser desenvolvido.
