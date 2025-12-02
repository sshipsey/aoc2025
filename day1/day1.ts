import { parseInput } from '@util/parseInput';

type Direction = 'L' | 'R';
type TurnString = `${Direction}${number}`;

const directionValue = {
  L: -1,
  R: 1,
} as const;

const turnValue = (turn: TurnString) =>
  directionValue[turn[0] as Direction] * +turn.slice(1);

const part1 = async () => {
  const input = (await parseInput(1)) as TurnString[];

  let zerosCount = 0;
  let pos = 50;
  for (let turn of input) {
    const value = turnValue(turn);
    pos = (((pos + value) % 100) + 100) % 100;

    if (pos === 0) {
      zerosCount++;
    }
  }
  return zerosCount;
};

const part2 = async () => {
  const input = (await parseInput(1)) as TurnString[];

  let zerosCount = 0;
  let pos = 50;
  for (let turn of input) {
    const prevPos = pos;
    const value = turnValue(turn);
    zerosCount += Math.floor(Math.abs(value) / 100);
    const rawPos = pos + (value % 100);
    if (prevPos !== 0 && (rawPos === 0 || rawPos >= 100 || rawPos < 0)) {
      zerosCount++;
    }

    pos = ((rawPos % 100) + 100) % 100;
  }
  return zerosCount;
};

(async () => {
  console.log(await part1());
  console.log(await part2());
})();
