// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formCadastro');
  const lista = document.getElementById('listaCadastros');
  const contagem = document.getElementById('contagem');
  const btnLimpar = document.getElementById('btnLimpar');

  // carregar dados do localStorage
  let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
  renderLista();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const idade = Number(form.idade.value);
    const peso = Number(form.peso.value);
    const altura = Number(form.altura.value);

    let valido = true;
    if (nome.length < 3){ setError('nome','Nome deve ter ao menos 3 caracteres'); valido=false; }
    if (!validateEmail(email)){ setError('email','E-mail inválido'); valido=false; }
    if (!Number.isInteger(idade) || idade < 0 || idade > 120){ setError('idade','Idade inválida'); valido=false; }
    if (isNaN(peso) || peso <= 0){ setError('peso','Peso inválido'); valido=false; }
    if (isNaN(altura) || altura <= 0){ setError('altura','Altura inválida'); valido=false; }

    if (!valido) return;

    const imc = calcularIMC(peso, altura);
    const categoriaIMC = categoriaDoIMC(imc);

    const registro = {
      id: Date.now(),
      nome, email, idade, peso, altura, imc: imc.toFixed(2), categoriaIMC
    };

    cadastros.push(registro);
    localStorage.setItem('cadastros', JSON.stringify(cadastros));
    form.reset();
    renderLista();
  });

  btnLimpar.addEventListener('click', () => {
    form.reset();
    clearErrors();
  });

  function renderLista(){
    lista.innerHTML = '';
    if (cadastros.length === 0){
      contagem.textContent = 'Nenhum registro.';
      return;
    }
    contagem.textContent = `${cadastros.length} registro(s).`;
    // mostra do mais novo para o mais antigo
    [...cadastros].reverse().forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div>
          <strong>${escapeHtml(item.nome)}</strong>
          <div class="small">${escapeHtml(item.email)} — ${item.idade} anos</div>
          <div class="small">IMC: ${item.imc} (${item.categoriaIMC})</div>
        </div>
        <div>
          <button class="btnExcluir" data-id="${item.id}" title="Excluir">Excluir</button>
        </div>
      `;
      lista.appendChild(li);
    });

    // delegação de evento para exclusão
    lista.querySelectorAll('.btnExcluir').forEach(btn => {
      btn.addEventListener('click', (ev) => {
        const id = Number(ev.currentTarget.getAttribute('data-id'));
        cadastros = cadastros.filter(c => c.id !== id);
        localStorage.setItem('cadastros', JSON.stringify(cadastros));
        renderLista();
      });
    });
  }

  function setError(fieldName, message){
    const input = document.getElementById(fieldName);
    const error = input.parentElement.querySelector('.error');
    if (error) error.textContent = message;
    input.setAttribute('aria-invalid','true');
  }
  function clearErrors(){
    form.querySelectorAll('.error').forEach(e => e.textContent = '');
    form.querySelectorAll('[aria-invalid]').forEach(i => i.removeAttribute('aria-invalid'));
  }
  function validateEmail(e){
    // validação simples: deve conter @ e .
    return /\S+@\S+\.\S+/.test(e);
  }
  function calcularIMC(peso, altura){
    return peso / (altura * altura);
  }
  function categoriaDoIMC(imc){
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25) return 'Normal';
    if (imc < 30) return 'Sobrepeso';
    return 'Obesidade';
  }
  function escapeHtml(text){
    return (text + '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
});
