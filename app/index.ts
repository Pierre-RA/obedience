import Character from './character';
import DigitalBattle from './digital-battle';

let user, adversary;

console.log('Game of Obedience');
console.log('=================');
for (let i = 0; i < 10; i++) {
  user = new Character();
  adversary = new Character();
  console.log(
    user + ' vs ' + adversary + ' > ' + DigitalBattle.solve(user, adversary)
  );
}
