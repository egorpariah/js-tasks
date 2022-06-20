var vowels = ['а', 'у', 'о', 'ы', 'э', 'я', 'ю', 'ё', 'и', 'е'];
const input = 'Все любят своеволие, но страшатся свободы.';

function getVowels(string) {
  var output = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (string[i] == vowels[j]) {
        output += string[i];
      }
    }
  }

  return output;
}

console.log('Гласные из фразы: ', getVowels(input))