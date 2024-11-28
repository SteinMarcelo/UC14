function testaTexto(palavra) {
  // Remove acentos e caracteres especiais
  const palavraTratada = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\w]|_/g, "");

  // Verifica se é um palíndromo
  const palindromo = palavraTratada.split("").reverse().join("");

  return palindromo === palavraTratada;
}

module.exports = { testaTexto };
