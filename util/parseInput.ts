import fs from 'fs/promises';

export const parseInput = async (day: number) => {
  return (await fs.readFile(`./day${day}/input.txt`)).toString().split('\r\n');
};
