/**
 * 입력받은 정수가 하샤드 수 인지 검사한다.
 * @author seokmin Baek
 * @param {number} num
 * @returns {boolean}
 */

const harshadChecker = num => {
  const arr = [...`${num}`];
  const sum = arr.reduce((acc, cur) => acc + Number(cur), 0);
  return !(num%sum);
}