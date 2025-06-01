import { test, expect } from '@playwright/test';

test('My Typescript', async({page}) => {
  function sum(a:number,b:number):number {
    return a+b
  }
  // console.log(sum(4,9));

  function mergeSortedArrays(arr1: (number | undefined)[], arr2: (number | undefined)[]): number[] {
    let mergedArr = removeUndefined([...arr1,...arr2]);
    for(let i = 0; i < mergedArr.length - 1; i++){
      for(let j = i + 1; j < mergedArr.length; j++){
        if(mergedArr[i] > mergedArr[j]){
          let tmp = mergedArr[i];
          mergedArr[i] = mergedArr[j];
          mergedArr[j] = tmp;
        }
      }
    }
    return mergedArr;
  }

  // function removeUndefined(arr: (number | undefined)[]): number[] {
  //   return arr.filter(element => element!==undefined);
  // }
  function removeUndefined(arr: any[]): number[] {
    return arr.filter( item=>item );
  }
  console.log(mergeSortedArrays([9,8,,undefined,NaN,-1,,,4,],[5,,3]));
  // let x = undefined;
  // let y = null;
  // let n = NaN;
  // console.log("x = " + x);
  // console.log("typeof x " + typeof x);
  // console.log("!x = " + !x);
  // console.log("typeof !x = " + typeof !x);
  // console.log("!!x = " + !!x);
  // console.log("y = " + y);
  // console.log("typeof y = " + typeof y);
  // console.log("!y = " + !y);
  // console.log("n = " + n);
  // console.log("typeof n = " + typeof n);
  // console.log("!n = " + !n);
  // console.log((n == NaN));
});


test.only('My JS', async({page}) => {
  function sum(a,b) {
    return a+b
  }
  console.log(sum(3,9));

  function mergeSortedArrays(arr1, arr2){
    let mergedArr = removeUndefined([...arr1,...arr2]);
    for(let i = 0; i < mergedArr.length - 1; i++){
      for(let j = i + 1; j < mergedArr.length; j++){
        if(mergedArr[i] > mergedArr[j]){
          let tmp = mergedArr[i];
          mergedArr[i] = mergedArr[j];
          mergedArr[j] = tmp;
        }
      }
    }
    return mergedArr;
  }

  // function removeUndefined(arr: (number | undefined)[]): number[] {
  //   return arr.filter(element => element!==undefined);
  // }
  function removeUndefined(arr) {
    return arr.filter( item=>item );
  }
  console.log(mergeSortedArrays([9,8,,undefined,NaN,-1,,,4,],[5,,3]));

});