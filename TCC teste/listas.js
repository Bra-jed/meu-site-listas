document.querySelectorAll('.lista').forEach(section => {
    const input = section.querySelector('input');
    const button = section.querySelector('button');
    const ul = section.querySelector('ul');
  
    button.addEventListener('click', () => {
      const value = input.value.trim();
      if (value === '') return;
  
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      const span = document.createElement('span');
      span.textContent = value;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remover';
  
      removeBtn.addEventListener('click', () => li.remove());
  
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(removeBtn);
  
      ul.appendChild(li);
      input.value = '';
    });
  });
  