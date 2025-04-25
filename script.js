const dicas = [
    "Comente seu código — até você pode esquecer o que fez.",
    "Evite repetir código: use funções.",
    "Use o console.log como seu melhor amigo para debug.",
    "Aprenda Git. Vai salvar sua vida um dia.",
    "Não copie e cole sem entender.",
    "Faça pausas. Mente cansada não resolve bugs.",
    "Documentação é ouro. Leia ela.",
    "Aprender dev é maratona, não corrida.",
    "Erro? Ótimo, é assim que se aprende.",
    "Organize seus arquivos. Bagunça dá dor de cabeça.",
    "Use nomes claros para variáveis e funções.",
    "Pratique todo dia, nem que seja 20 minutos."
  ];
  
  function mostrarDica() {
    const indice = Math.floor(Math.random() * dicas.length);
    document.getElementById("dica").textContent = dicas[indice];
  }
  