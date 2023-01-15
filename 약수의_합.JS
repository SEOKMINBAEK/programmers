/**
 * 입력받은 정수의 모든 약수의 합을 반환한다.
 * @author seokmin Baek
 * @param {number} num 
 * @returns {number}
 */

const divisorAdder = num => {
  let sum = 0;
  for(let i=0; i<num+1; i++) {
    sum = num%i ? sum : sum+=i;
  }
  return sum;
}