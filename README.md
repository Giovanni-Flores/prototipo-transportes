# Protótipo de Transportes

Site institucional de demonstração para uma empresa de transportes e serviços. Organiza a apresentação de fretes, retroescavadeira, borracharia e produtos automotivos em uma página responsiva.

Desenvolvido com HTML, CSS e JavaScript, sem frameworks, dependências externas ou etapa de build.

[Contexto e estudo de caso no portfólio](https://giovanniflores.com.br/projects/empresa-transporte.html)

## Executar

Abra `index.html` no navegador. Os arquivos e as imagens estão incluídos no repositório.

## Funcionalidades

- Página inicial com apresentação dos serviços e chamadas para contato.
- Seções sobre a empresa, borracharia, serviços e contato.
- Navegação por âncoras e layout responsivo.
- Botões de WhatsApp com destino configurável.
- Ícones SVG internos e suporte à preferência de movimento reduzido.

## Personalizar

| Arquivo                 | Conteúdo                                    |
| ----------------------- | ------------------------------------------- |
| `index.html`            | Nome, textos, serviços, endereço e horários |
| `assets/css/styles.css` | Cores, tipografia, espaçamentos e layout    |
| `assets/js/script.js`   | Número e mensagem do WhatsApp               |
| `assets/img/`           | Imagens da apresentação                     |

O número de WhatsApp está vazio por padrão. Nesse estado, os botões informam que o contato comercial não está disponível e não abrem uma conversa com número fictício. Para habilitar o contato, defina `numeroWhatsApp` com o código do país, DDD e número, somente dígitos, usando um telefone autorizado para divulgação.

## Escopo

É um protótipo de front-end, não um serviço comercial em operação. Nome, endereço, horários, tempo de experiência e descrições comerciais são conteúdo ilustrativo. As imagens fazem parte da apresentação fornecida; não há declaração de licença de terceiros no material original. Não há backend, formulário de envio, sistema de orçamentos ou integração com a API do WhatsApp. O botão configurado apenas abre um link externo.

## Estrutura

```text
prototipo-transportes/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── css/styles.css
│   ├── js/script.js
│   └── img/
└── docs/estrutura.md
```

## Organização e desempenho

O CSS está agrupado em base, cabeçalho, apresentação, sobre, borracharia, serviços, contato, responsividade e acessibilidade. O JavaScript concentra somente a configuração do contato e seus eventos.

As colunas e imagens se ajustam à largura disponível. Em telas menores, os serviços e o contato ficam em uma coluna, os títulos usam tamanhos proporcionais e a apresentação cresce com seu conteúdo, mantendo o cartão de experiência no fluxo da página no celular.

As imagens usam WebP, variantes de 768 pixels para telas menores e dimensões explícitas. A imagem principal tem prioridade de carregamento; as demais carregam sob demanda. Não há fontes ou bibliotecas baixadas de serviços externos. A configuração do editor e a formatação ficam em `.editorconfig` e `.prettierrc.json`.

Para detalhes da estrutura e dos tamanhos dos arquivos, consulte [a documentação](docs/estrutura.md).

## Protótipo Navegável

[página navegável deste projeto](https://giovanni-flores.github.io/prototipo-transportes/)

## Autor

[Giovanni Flores](https://github.com/Giovanni-Flores) · [Portfólio](https://giovanniflores.com.br/)
