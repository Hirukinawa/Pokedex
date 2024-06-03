import {
  MoveAPI,
} from "../App";

export function formataName(word: string) {
  const str1 = word.replace("-", " ");
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}

export function formataNumber(num: number): string {
  if (num < 10 && num > 0) {
    return `00${num}`;
  } else if (num < 100) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
}

export function formataMove(move: MoveAPI) {

  const str1 = move.effect_entries[0].effect.replace(
    "$effect_chance",
    `${move.effect_chance}`
  );

  return str1;
}

export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
