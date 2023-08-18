function calculate() {
    const portuguese = parseFloat(document.getElementById('portuguese').value);
    const math = parseFloat(document.getElementById('math').value);
    const science = parseFloat(document.getElementById('science').value);
    const history = parseFloat(document.getElementById('history').value);
    const geography = parseFloat(document.getElementById('geography').value);
  
    const totalScore = portuguese + math + science + history + geography;
    const average = totalScore / 2;
  
    const resultElement = document.getElementById('result');
    if (average < 6) {
      resultElement.textContent = `Aluno reprovado - Média: ${average.toFixed(2)}`;
      resultElement.style.color = 'red';
    } else {
      resultElement.textContent = `Aluno aprovado - Média: ${average.toFixed(2)}`;
      resultElement.style.color = 'green';
    }
  
    // Check if any of the input fields are empty
    const inputs = ['portuguese', 'math', 'science', 'history', 'geography'];
    for (const input of inputs) {
      const value = document.getElementById(input).value;
      if (value === '') {
        resultElement.textContent = 'Digite as notas';
        resultElement.style.color = 'red';
        return;
      }
    }
  }