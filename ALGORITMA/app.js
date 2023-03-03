// #1 =====================================================
let _string =  "NEGIE1"

function ReverseWithoutNumber (str) {
   const cutString = str.slice(0, 5);
   const cutNumber = str.slice(-1);
   const splitString = cutString.split("")
   const reverseArray = splitString.reverse()
   const joinArray = reverseArray.join("");
   return joinArray + cutNumber;
}

console.log(ReverseWithoutNumber(_string));

// #2 =====================================================

const sentence = "Saya sangat senang mengerjakan soal algoritma"

function getLongest (str) {
   let arrayNumber = []
   const _array =  str.split(" ")
    _array.map(elm => {
      arrayNumber.push(elm.length)
   })
return `${Math.max(...arrayNumber)} character`
}

console.log(getLongest(sentence));

// #3 =====================================================

const INPUT = ['xc', 'dz', 'bbb', 'dz']  
const QUERY = ['bbb', 'ac', 'dz']  


function getQuery(query){
   const getQueryInINPUT = INPUT.filter(elm => elm === query)
   if (getQueryInINPUT.length != 0) {
      return `"${query}" ada ${getQueryInINPUT.length}`
   } else {
      return  `"${query}" tidak ada`
   }
}

function getResult(query) {
   const getQueryInINPUT = INPUT.filter(elm => elm === query)
   return getQueryInINPUT.length
}

function conclusion(query) {
   const _array =  query.map( elm => getResult(elm))
   const conclus =  query.map( elm => getQuery(elm))
   return `OUTPUT [${_array}] = ${conclus.join(' ')}`
}

console.log(conclusion(QUERY));

// #4 =====================================================

const Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

function getDiagonal1 (matrix) {
   let diagonalArray = []
   let index = 0
   matrix.forEach(el => {
      diagonalArray.push(el[index])
      index++
   })
   return diagonalArray
}

function getDiagonal2 (matrix) {
   let diagonalArray = []
   let index = matrix.length -1
   matrix.map(el => {
      diagonalArray.push(el[index]);
      index--
   });
   return diagonalArray
}

function sumDiagonal(_array) {
   return _array.reduce((a,b) => {return a + b});
};

const ResultDiagonal1Sum = sumDiagonal(getDiagonal1(Matrix))
const ResultDiagonal2Sum = sumDiagonal(getDiagonal2(Matrix));
const ResultMatrixSub = ResultDiagonal1Sum - ResultDiagonal2Sum

console.log(`hasilnya adalah ${ResultMatrixSub}`)

// Terimakasih