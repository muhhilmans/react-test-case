// Soal 1
function reverseAlphabetKeepNumber(str) {
  const alphabetPart = str.slice(0, -1);
  const numberPart = str.slice(-1);

  const reversedAlphabet = alphabetPart.split("").reverse().join("");
  return reversedAlphabet + numberPart;
}

const inputString = "NEGIE1";
const hasil = reverseAlphabetKeepNumber(inputString);
console.log("Soal 1:");
console.log(`Hasil = "${hasil}"`);

// Soal 2
const sentence = "Saya sangat senang mengerjakan soal algoritma";

let charCount = 0;

function longest(str) {
  const words = str.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
      charCount = longestWord.length;
    }
  }

  return longestWord;
}

const longestWord = longest(sentence);
console.log("Soal 2:");
console.log(`${longestWord}: ${charCount} character`);

// Soal 3
const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];

function findWords(words, queries) {
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < words.length; j++) {
      if (queries[i] === words[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

const output = findWords(input, query);
console.log("Soal 3:");
console.log(
  `Output= [${output}] karena kata '${query[0]}' ${
    output[0] ? `ada ${output[0]} pada INPUT` : "tidak ada pada INPUT"
  }, kata '${query[1]}' ${
    output[1] ? `ada ${output[1]} pada INPUT` : "tidak ada pada INPUT"
  }, kata '${query[2]}' ${
    output[2] ? `ada ${output[2]} pada INPUT` : "tidak ada pada INPUT"
  }`
);

//  Soal 4
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

function decrementMatrix(matrix) {
  const n = matrix.length;
  let matrixFirstSum = 0;
  let matrixSecondSum = 0;
  const matrixFirstEl = [];
  const matrixSecondEl = [];

  for (let i = 0; i < n; i++) {
    matrixFirstSum += matrix[i][i];
    matrixFirstEl.push(matrix[i][i]);
    matrixSecondSum += matrix[i][n - 1 - i];
    matrixSecondEl.push(matrix[i][n - 1 - i]);
  }

  return {
    sumMatrixFirst: matrixFirstSum,
    elMatrixFirst: matrixFirstEl,
    sumMatrixSecond: matrixSecondSum,
    elMatrixSecond: matrixSecondEl,
    resultMatrix: matrixFirstSum - matrixSecondSum,
  };
}

const outputMatrix = decrementMatrix(matrix);

console.log("Soal 4:");
console.log(
  `Jumlah diagonal pertama = ${outputMatrix.elMatrixFirst.join(
    " + "
  )} = ${outputMatrix.sumMatrixFirst}`
);
console.log(
  `Jumlah diagonal kedua = ${outputMatrix.elMatrixSecond.join(
    " + "
  )} = ${outputMatrix.sumMatrixSecond}`
);
console.log(
  `Maka hasilnya adalah ${outputMatrix.sumMatrixFirst} - ${outputMatrix.sumMatrixSecond} = ${outputMatrix.resultMatrix}`
);
