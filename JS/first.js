const vowels = ['а', 'у', 'о', 'ы', 'э', 'я', 'ю', 'ё', 'и', 'е'];
const input = 'Все любят своеволие, но страшатся свободы.';

const getVowels = string => {
  return string.toLowerCase().split('').filter(e => 
    vowels.includes(e) ? e : '').join();
  }
  
console.log('Гласные из фразы: ', getVowels(input));