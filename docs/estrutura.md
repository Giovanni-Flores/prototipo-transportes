# Organização do protótipo de transportes

## Responsabilidades

- `index.html`: conteúdo semântico e seções navegáveis da página.
- `assets/css/styles.css`: identidade visual, componentes, layout, responsividade e acessibilidade.
- `assets/js/script.js`: configuração opcional de contato e tratamento dos links.
- `assets/img/`: imagens WebP na resolução principal e versões de 768 pixels.

O projeto abre diretamente no navegador. Não exige instalação, etapa de build, framework ou fontes externas.

## Imagens

As três imagens principais passaram de 7.420.236 bytes em PNG para 529.956 bytes em WebP, uma redução de aproximadamente 92,9%. As três variantes para celular somam 144.098 bytes. Incluindo todas as variantes, os arquivos de imagem somam 674.054 bytes.

O HTML declara `srcset`, `sizes`, largura e altura. A primeira imagem tem `fetchpriority="high"`; as demais usam `loading="lazy"`. Os arquivos principais mantêm as dimensões originais. A conversão usa compressão com perda; o visual ainda deve ser conferido no navegador antes de publicar.

## Conteúdo e contato

Textos comerciais, experiência, horários e endereço são ilustrativos. Ao adaptar o site para uma empresa real, revise essas informações e use somente contatos autorizados para divulgação.

Um `numeroWhatsApp` vazio apresenta um aviso e impede a abertura de uma conversa com número fictício. Quando configurado, o script gera a URL e inclui `noopener noreferrer` nos links que abrem outra aba.

## Layout responsivo

As colunas de grid usam `minmax(0, …)` e seus itens podem encolher com `min-width: 0`, evitando que a largura intrínseca das imagens ou dos textos amplie a página. Textos longos podem quebrar dentro dos componentes, e os ícones dos botões preservam o tamanho.

Até 980 pixels, os blocos de apresentação dos serviços e de contato passam para uma coluna. Até 680 pixels, a tipografia e os botões se adaptam ao celular. O cartão de experiência passa a fazer parte do fluxo da apresentação, cuja altura pode crescer com o conteúdo. A correção não usa `overflow-x: hidden` no documento para esconder elementos excedentes.

Ao conferir uma alteração visual, teste larguras de 320, 360, 390, 430, 768, 980 e 1280 pixels. Verifique se todos os textos e botões ficam visíveis e se não é possível rolar a página lateralmente. A conferência visual no navegador continua necessária.

## Manutenção

Os comentários no CSS identificam as seções. Cores e fontes começam nas variáveis de `:root`. Para substituir uma imagem, gere uma versão WebP principal e outra de 768 pixels, atualize suas dimensões no HTML e mantenha os caminhos declarados em `src` e `srcset`.
