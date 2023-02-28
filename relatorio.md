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
    - [Dmenu ()](#dmenu-)
    - [Slstatus ()](#slstatus-)
    - [Slock ()](#slock-)
  - [Componentes adicionais](#componentes-adicionais)
    - [Nitrogen (Wallpaper Setter)](#nitrogen-wallpaper-setter)
    - [TrudeVim (Configuração de Neovim personalizada)](#trudevim-configuração-de-neovim-personalizada)
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
    - [Instalação](#instalação)
    - [Workflow](#workflow)
      - [Tags](#tags)
      - [Layout](#layout)
        - [Master/Stack layout \[\]=](#masterstack-layout-)
        - [Floating layout \>\<\>](#floating-layout-)
        - [Grid layout \[\]=](#grid-layout-)
        - [FullScreen layout \[M\]](#fullscreen-layout-m)
      - [System bar](#system-bar)
        - [Status bar](#status-bar)
        - [System tray](#system-tray)
    - [Atualização](#atualização)
    - [Alteração do papel de parede](#alteração-do-papel-de-parede)
    - [Formas de encerrar / voltar ao DM (Display Manager)](#formas-de-encerrar--voltar-ao-dm-display-manager)
  - [Linha do tempo](#linha-do-tempo)
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

### Dmenu ()
Dmenu é um menu dinâmico e leve para X. Ele tem como objetivo facilitar a pesquisa no sistema, lançar aplicações, executar comandos e *scripts* personalizados. O Dmenu substitui um menu tradicional no XPrism.

Dmenu lê texto da entrada padrão (stdin) e cria um menu com um item por cada linha. O utilizador pode então selecionar um item, com as teclas de seta ou por escrever uma parte do nome, e a linha é impressa na saída padrão (stdout). Dmenu_run é um script padrão do Dmenu que permite usá-lo como um lançador de programas.

Dmenu usa a biblioteca Xlib para se comunicar com o servidor X e a biblioteca Xft para desenhar as fontes na tela. Ele também usa a função `popen` da biblioteca padrão C para executar os comandos selecionados pelo utilizador.

### Slstatus ()

### Slock ()

## Componentes adicionais

### Nitrogen (Wallpaper Setter)

### TrudeVim (Configuração de Neovim personalizada)

### GitHub / Wiki
### XPrism Web
#### Construção do site
#### Hospedagem / GitHub Pages

## Configuração do XPrism

- foco em portabilidade, etc...

### config.h (global)

### componente/config.h (específico)

### Código-Fonte (mais específico)

## Recursos do sistema / Performance

### Porquê C?

### Segurança
- Base estável suckless, etc...

## Produtividade

### Vim

### Atalhos de teclado
- Padrão compatível com Vim
- Podem ser alterados

## Aplicações possíveis

### No servidor

### No computador pessoal

## Guia de utilização
- Respode a perguntas: Como fazer x?

### Instalação

### Workflow
#### Tags
#### Layout
##### Master/Stack layout []=
##### Floating layout ><>
##### Grid layout []=
##### FullScreen layout [M]
#### System bar
##### Status bar
##### System tray

### Atualização

### Alteração do papel de parede

### Formas de encerrar / voltar ao DM (Display Manager)

## Linha do tempo
- Versões do projeto
- Inicio (2018) - Atualidade

## Dificuldades encontradas

## Repositórios do projeto
- [XPrism GitHub](https://github.com/TrudeEH/XPrism)
- [TrudeVim](https://github.com/TrudeEH/TrudeVim)
- [XPrism Website](https://trudeeh.github.io/XPrism-Website)

## Conclusão / Futuro do projeto
- Maior conhecimento de low level e C
- Transição para Wayland

## Agradecimentos finais
- Equipa Suckless
- Professores
- etc...
- Comunidade open-source