const workers = [
  {"name":"Иван","salary":300},
  {"name":"Михаил","salary":1100},
  {"name":"Лида","salary":1500}];

function getTopWorkers(w) {
  let tw = [];

  w.forEach(worker => {
    if (worker.salary > 1000) {
      tw.push(worker.name);
    }
  });

  return tw;
}

console.log('Зарплата больше 1000:', getTopWorkers(workers).toString());