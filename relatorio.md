# XPrism

## Introdução
INTRO

## Indice
- [XPrism](#xprism)
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
    - [Controle de memória / riscos](#controle-de-memória--riscos)
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
O XPrism é um projeto de software que segue a filosofia suckless, que defende a simplicidade, clareza e frugalidade no desenvolvimento de software. O objetivo do projeto é criar um ambiente de trabalho para linux que seja simples, minimalista e usável, destinado a utilizadores avançados e técnicos de TI. O projeto procura evitar a complexidade desnecessária do código que são comuns na indústria de software atual.

A filosofia suckless baseia-se na ideia de que o software genial é simples e elegante, e que o progresso se mede pela redução das linhas de código. A filosofia inspira-se nos ideais Unix, que valorizam a modularidade, a portabilidade e a interoperabilidade dos programas.

O XPrism faz parte da comunidade open-source, que pode contribuir para o desenvolvimento do projeto através de sugestões, correções e melhorias. O projeto oferece uma interface rápida e eficiente para gerir o ambiente de trabalho, sem menus e botões gráficos, mas sim teclas de atalho e comandos personalizáveis. O projeto, após compilado, também não tem configurações externas e usa o mínimo de dependências externas possíveis.

## Open-source / GPL-3
Todo o código no projeto XPrism é distribuído com a licença GPL-3. 
Esta é uma licença de software livre que garante aos utilizadores finais as quatro liberdades de executar, estudar, partilhar e modificar o software.

Os utilizadores são livres de consultar a licensa pelo *link* abaixo, ou pelo ficheiro __LICENSE__ localizado no repositório principal.
[LICENSE](https://github.com/TrudeEH/XPrism/blob/main/LICENSE)

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
*Exemplo: Stack do Ubuntu*
![Linux GUI Stack](https://res.cloudinary.com/practicaldev/image/fetch/s--ySluFo3J--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/nibmz7/portfolio/main/blog/From_Windows_To_Linux/Basics_of_Linux_GUI_stack/assets/webp/x11.webp)

Explanation

### [Kernel](#o-que-é-linux)

### Xorg

### GUI Shell / WM (Gestor de janelas)

### X Clients

## Componentes do XPrism

### DWM (Dynamic Window Manager)

### ST (Simple Terminal)

### Dmenu ()

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

### Controle de memória / riscos
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