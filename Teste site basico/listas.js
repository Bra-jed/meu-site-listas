document.querySelectorAll(".lista").forEach(section => {
    const input = section.querySelector("input");
    const button = section.querySelector("button");
    const ul = section.querySelector("ul");
  
    button.addEventListener("click", () => {
      const text = input.value.trim();
      if (text === "") return;
  
      const li = document.createElement("li");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
  
      const span = document.createElement("span");
      span.textContent = text;
  
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "✖";
  
      checkbox.addEventListener("change", () => {
        li.classList.toggle("completed", checkbox.checked);
      });
  
      removeBtn.addEventListener("click", () => {
        li.remove();
      });
  
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(removeBtn);
  
      ul.appendChild(li);
      input.value = "";
    });
  });

  document.querySelectorAll(".lista").forEach(section => {
    const id = section.id; // Ex: "tarefas", "compras"...
    const input = section.querySelector("input");
    const button = section.querySelector("button");
    const ul = section.querySelector("ul");
  
    // 🔄 Carregar lista salva
    const savedList = JSON.parse(localStorage.getItem(id)) || [];
    savedList.forEach(item => {
      criarItem(item.text, item.checked);
    });
  
    // ➕ Ao clicar em adicionar
    button.addEventListener("click", () => {
      const text = input.value.trim();
      if (text === "") return;
      criarItem(text, false);
      salvarLista();
      input.value = "";
    });
  
    // 👉 Cria um item da lista com checkbox e botão de remover
    function criarItem(text, checked) {
      const li = document.createElement("li");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = checked;
  
      const span = document.createElement("span");
      span.textContent = text;
  
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "✖";
  
      checkbox.addEventListener("change", () => {
        li.classList.toggle("completed", checkbox.checked);
        salvarLista();
      });
  
      removeBtn.addEventListener("click", () => {
        li.remove();
        salvarLista();
      });
  
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(removeBtn);
  
      if (checked) li.classList.add("completed");
  
      ul.appendChild(li);
    }
  
    // 💾 Salva a lista atual no localStorage
    function salvarLista() {
      const itens = [];
      ul.querySelectorAll("li").forEach(li => {
        const text = li.querySelector("span").textContent;
        const checked = li.querySelector("input").checked;
        itens.push({ text, checked });
      });
      localStorage.setItem(id, JSON.stringify(itens));
    }
  });
  