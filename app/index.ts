import Character from './character';
import Battle from './battle';

let user, adversary;

console.log('Game of Obedience');
console.log('=================');
for (let i = 0; i < 10; i++) {
  user = new Character();
  adversary = new Character();
  console.log(
    user + ' vs ' + adversary + ' > ' + Battle.solve(user, adversary)
  );
}
