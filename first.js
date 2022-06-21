const vowels = ['а', 'у', 'о', 'ы', 'э', 'я', 'ю', 'ё', 'и', 'е'];
const input = 'Все любят своеволие, но страшатся свободы.';

const getVowels = string => {
  string = string.toLowerCase();
  let output = '';

  for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        output += string[i];
      }
    }

  return output;
}

console.log('Гласные из фразы: ', getVowels(input))