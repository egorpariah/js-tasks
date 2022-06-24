const path = '/users/egorpariah/project/index.html';

const isHtml = p => p.slice(-5) == '.html';

console.log('Путь ведёт к HTML?:', isHtml(path));