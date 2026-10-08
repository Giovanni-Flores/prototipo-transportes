// Opcional: informe um telefone comercial autorizado, com país e DDD, somente números.
// Exemplo de formato: código do país + DDD + número. Vazio mantém a demonstração sem contato real.
const numeroWhatsApp = '';
const mensagemWhatsApp = 'Olá! Gostaria de solicitar um orçamento.';
const contatoConfigurado = /^\d{10,15}$/.test(numeroWhatsApp) && !/^0+$/.test(numeroWhatsApp);

document.querySelectorAll('.whatsapp-link').forEach((link) => {
  if (contatoConfigurado) {
    link.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.href = '#contato';
    link.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Este é um protótipo de apresentação. O contato comercial ainda não está disponível.');
    });
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => document.activeElement?.blur());
});
