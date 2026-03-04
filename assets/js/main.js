(function () {
  // Mobile menu
  const burger = document.querySelector('[data-burger]');
  const mobile = document.querySelector('[data-mobile]');
  if (burger && mobile) {
    burger.addEventListener('click', () => {
      const isOpen = mobile.getAttribute('data-open') === 'true';
      mobile.setAttribute('data-open', String(!isOpen));
      mobile.style.display = isOpen ? 'none' : 'block';
      burger.textContent = isOpen ? '☰' : '✕';
    });

    // default hidden
    mobile.style.display = 'none';
    mobile.setAttribute('data-open', 'false');
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path) a.classList.add('active');
  });

  // WhatsApp form -> send message
  const form = document.querySelector('#quoteForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const nome = (data.get('nome') || '').toString().trim();
      const empresa = (data.get('empresa') || '').toString().trim();
      const cidade = (data.get('cidade') || '').toString().trim();
      const telefone = (data.get('telefone') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const material = (data.get('material') || '').toString().trim();
      const msg = (data.get('mensagem') || '').toString().trim();

      const texto =
`Olá, gostaria de solicitar cotação de Ráfia moída e lavada PP.

• Nome: ${nome || '-'}
• Empresa: ${empresa || '-'}
• Cidade/UF: ${cidade || '-'}
• Telefone: ${telefone || '-'}
• E-mail: ${email || '-'}
• Variação do material: ${material || '-'}

Mensagem:
${msg || '-'}

(Enviado pelo site do Grupo CLK)`;

      const phone = '554299954347';
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }
})();