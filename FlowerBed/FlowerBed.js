/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
//   let count = 0;
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (flowerbed[i] == 1) {
//       continue;
//     } else if (flowerbed[i] == 0) {
//       if (flowerbed.length == 1) {
//         return true;
//       } else if (
//         flowerbed[i + 1] == undefined &&
//         flowerbed[i] == flowerbed[i - 1]
//       ) {
//         count++;
//       } else if (
//         flowerbed[i - 1] == undefined &&
//         flowerbed[i + 1] == flowerbed[i]
//       ) {
//         count++;
//         flowerbed[i] = 1;
//       } else if (
//         flowerbed[i] == flowerbed[i - 1] &&
//         flowerbed[i] == flowerbed[i + 1]
//       ) {
//         count++;
//         console.log(count);
//         flowerbed[i] = 1;
//       }
//     }
//   }

//   return count >= n;
//   console.log(count >= n);
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++){
        if (flowerbed[i] == 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            count++
        }
    }
    console.log(count>=n)
};
canPlaceFlowers([0, 0, 1, 0, 0],1);