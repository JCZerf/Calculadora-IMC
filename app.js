function calcularImc() {
  // Obtém os valores dos campos
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  // Validação dos campos
  if (!altura || !peso) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (altura <= 0 || peso <= 0) {
    alert("Por favor, insira valores válidos!");
    return;
  }

  if (altura > 2.5 || altura < 0.5) {
    alert("Por favor, insira uma altura válida (entre 0.5m e 2.5m)!");
    return;
  }

  // Calcula o IMC
  const imc = (peso / (altura * altura)).toFixed(1);

  // Obtém a classificação
  const classificacao = obterClassificacao(imc);

  // Exibe o resultado
  exibirResultado(imc, classificacao);
}

function obterClassificacao(imc) {
  if (imc < 16) {
    return {
      texto: "Magreza Grau III",
      classe: "magreza-iii",
      cor: "#17a2b8",
    };
  } else if (imc >= 16 && imc <= 16.9) {
    return {
      texto: "Magreza Grau II",
      classe: "magreza-ii",
      cor: "#17a2b8",
    };
  } else if (imc >= 17 && imc <= 18.4) {
    return {
      texto: "Magreza Grau I",
      classe: "magreza-i",
      cor: "#17a2b8",
    };
  } else if (imc >= 18.5 && imc <= 24.9) {
    return {
      texto: "Adequado",
      classe: "adequado",
      cor: "#28a745",
    };
  } else if (imc >= 25 && imc <= 29.9) {
    return {
      texto: "Pré-Obeso",
      classe: "pre-obeso",
      cor: "#ffc107",
    };
  } else if (imc >= 30 && imc <= 34.9) {
    return {
      texto: "Obesidade Grau I",
      classe: "obesidade-i",
      cor: "#fd7e14",
    };
  } else if (imc >= 35 && imc <= 39.9) {
    return {
      texto: "Obesidade Grau II",
      classe: "obesidade-ii",
      cor: "#fd7e14",
    };
  } else {
    return {
      texto: "Obesidade Grau III",
      classe: "obesidade-iii",
      cor: "#dc3545",
    };
  }
}

function exibirResultado(imc, classificacao) {
  // Elementos do resultado
  const resultadoDiv = document.getElementById("resultado");
  const valorImc = document.getElementById("valor-imc");
  const classificacaoImc = document.getElementById("classificacao-imc");

  // Atualiza o conteúdo
  valorImc.textContent = imc;
  classificacaoImc.textContent = classificacao.texto;
  classificacaoImc.className = classificacao.classe;
  classificacaoImc.style.color = classificacao.cor;

  // Exibe o resultado com animação
  resultadoDiv.classList.remove("hidden");

  // Destaca a linha correspondente na tabela
  destacarLinhaTabela(classificacao.classe);
}

function destacarLinhaTabela(classeClassificacao) {
  // Remove destaque anterior
  const linhasDestacadas = document.querySelectorAll(".linha-tabela.destacada");
  linhasDestacadas.forEach((linha) => linha.classList.remove("destacada"));

  // Adiciona destaque à linha correspondente
  const spanClassificacao = document.querySelector(`.${classeClassificacao}`);
  if (spanClassificacao) {
    const linhaTabela = spanClassificacao.closest(".linha-tabela");
    if (linhaTabela) {
      linhaTabela.classList.add("destacada");
      linhaTabela.style.background = "rgba(102, 126, 234, 0.1)";
      linhaTabela.style.border = "2px solid #667eea";
    }
  }
}

// Adiciona event listeners para calcular quando pressionar Enter
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        calcularImc();
      }
    });
  });
});
