import { useDispatch } from "react-redux"
import { getNewArray } from "../store/CreateFighter/action"

export function SHuffleArr(arr) {
  // const dispatch = useDispatch()
  let len = Math.ceil(arr.length)
  let stars = shuffleArray(arr.filter(item => item.isFavorite == true))
  let nostars = shuffleArray(arr.filter(item => item.isFavorite != true))
  let j = 0
  let k = 0
  let arr3 = []
  for (let i = 0; i < len; i++) {
    if (i == 0 || i == len - 1) {
      console.log(i)
      arr3[i] = stars[j]
      j++
    }
    else if (stars.length > 2 && i == Math.floor((len / 2 - 1))) {
      arr3[i] = stars[j]
      j++
    }
    else if (stars.length > 3 && i == Math.ceil((len / 2))) {
      arr3[i] = stars[j]
      j++
    }

  }
  let iter = 0
  for (let i = 0; i < nostars.length; i++) {
    if (!arr3[iter]) {
      arr3[iter] = nostars[i]

    }
    else {
      i--
    }
    iter++

  }

  let funct = [length_2, length_3, length_4, length_5, length_6, length_7, length_8, length_9, length_10, length_11, length_12, length_13, length_14, length_15, length_16, length_17, length_18, length_19, length_20];
  console.log(funct)
  for (let i = 0; i < funct.length; i++) {
    let count = funct[i].name.split("_");
    for (let j = 0; j < count.length; j++) {
      console.log("stex mtela 1")
      if (arr.length === +(count[count.length - 1])) {
        let arr_last = funct[i](arr3);
        console.log("This is ARRLIST", arr_last)
        // return dispatch(getNewArray({ arr: arr_last }))
        return arr_last

      }

    }

  }
}


export function Completed(arr) {
  let funct = [length_2, length_3, length_4, length_5, length_6, length_7, length_8, length_9, length_10, length_11, length_12, length_13, length_14, length_15, length_16, length_17, length_18, length_19, length_20];
  console.log(funct)
  for (let i = 0; i < funct.length; i++) {
    let count = funct[i].name.split("_");
    for (let j = 0; j < count.length; j++) {
      console.log("stex mtela 1")
      if (arr.length === +(count[count.length - 1])) {
        let arr_last = funct[i](arr);
        console.log("This is ARRLIST", arr_last)
        return arr_last

      }
    }
  }
}













function shuffleArray(arr) {
  for (let c = arr.length - 1; c > 0; c--) {
    let b = Math.floor(Math.random() * (c + 1));
    let a = arr[c];
    arr[c] = arr[b];
    arr[b] = a;
  }
  return arr
};
function length_2(arr) {
  let ARRALL = []
  let arrfirst = []

  let arr1 = []
  arr1.push(arr.slice(0, 2));

  arrfirst.push(arr1)
  ARRALL.push(arrfirst)
  return ARRALL;
}
function length_3(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []

  let arr1 = []
  let arr2 = []
  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 3));


  arrfirst.push(arr1)
  arrsecond.push(arr2)

  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_4(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []
  let arr1 = []
  let arr2 = []
  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 4));

  arrfirst.push(arr1)
  arrsecond.push(arr2)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_5(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []
  let arr1 = []
  let arr2 = []
  let arr3 = []
  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 3));
  arr3.push(arr.slice(3, 5));

  arrfirst.push(arr1, arr2)
  arrsecond.push(arr3)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_6(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []
  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  arr1.push(arr.slice(0, 1));
  arr2.push(arr.slice(1, 3));

  arr3.push(arr.slice(3, 4));
  arr4.push(arr.slice(4, 6));

  arrfirst.push(arr1, arr2)
  arrsecond.push(arr3, arr4)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}

function length_7(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []
  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 4));

  arr3.push(arr.slice(4, 5));
  arr4.push(arr.slice(5, 7));

  arrfirst.push(arr1, arr2)
  arrsecond.push(arr3, arr4)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_8(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []
  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 4));

  arr3.push(arr.slice(4, 6));
  arr4.push(arr.slice(6, 8));

  arrfirst.push(arr1, arr2)
  arrsecond.push(arr3, arr4)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_9(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []
  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []
  arr1.push(arr.slice(0, 1));
  arr2.push(arr.slice(1, 3));
  arr3.push(arr.slice(3, 5));
  arr4.push(arr.slice(5, 7));
  arr5.push(arr.slice(7, 9));
  arrfirst.push(arr1, arr2, arr3)
  arrsecond.push(arr4, arr5)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_10(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []
  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []

  let arr6 = []


  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 4));
  arr3.push(arr.slice(4, 5));

  arr4.push(arr.slice(5, 7));
  arr5.push(arr.slice(7, 9));
  arr6.push(arr.slice(9, 10));




  arrfirst.push(arr1, arr2, arr3)
  arrsecond.push(arr4, arr5, arr6)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_11(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []


  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []

  let arr6 = []
  let arr7 = []


  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 3));

  arr3.push(arr.slice(3, 5));
  arr4.push(arr.slice(5, 6));

  arr5.push(arr.slice(6, 8));
  arr6.push(arr.slice(8, 9));

  arr7.push(arr.slice(9, 11));



  arrfirst.push(arr1, arr2, arr3, arr4)
  arrsecond.push(arr5, arr6, arr7)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_12(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []


  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []

  let arr6 = []
  let arr7 = []
  let arr8 = []


  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 3));

  arr3.push(arr.slice(3, 5));
  arr4.push(arr.slice(5, 6));

  arr5.push(arr.slice(6, 8));
  arr6.push(arr.slice(8, 9));

  arr7.push(arr.slice(9, 10));
  arr8.push(arr.slice(10, 12));



  arrfirst.push(arr1, arr2, arr3, arr4)
  arrsecond.push(arr5, arr6, arr7, arr8)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_13(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []


  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []

  let arr6 = []
  let arr7 = []
  let arr8 = []


  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 3));

  arr3.push(arr.slice(3, 5));
  arr4.push(arr.slice(5, 6));

  arr5.push(arr.slice(6, 8));
  arr6.push(arr.slice(8, 10));

  arr7.push(arr.slice(10, 11));
  arr8.push(arr.slice(11, 13));



  arrfirst.push(arr1, arr2, arr3, arr4)
  arrsecond.push(arr5, arr6, arr7, arr8)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_14(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []


  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []

  let arr6 = []
  let arr7 = []
  let arr8 = []


  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 3));

  arr3.push(arr.slice(3, 5));
  arr4.push(arr.slice(5, 7));

  arr5.push(arr.slice(7, 8));
  arr6.push(arr.slice(8, 10));

  arr7.push(arr.slice(10, 12));
  arr8.push(arr.slice(12, 14));



  arrfirst.push(arr1, arr2, arr3, arr4)
  arrsecond.push(arr5, arr6, arr7, arr8)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_15(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []


  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []

  let arr6 = []
  let arr7 = []
  let arr8 = []


  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 4));

  arr3.push(arr.slice(4, 6));
  arr4.push(arr.slice(6, 8));

  arr5.push(arr.slice(8, 10));
  arr6.push(arr.slice(10, 11));

  arr7.push(arr.slice(11, 13));
  arr8.push(arr.slice(13, 15));



  arrfirst.push(arr1, arr2, arr3, arr4)
  arrsecond.push(arr5, arr6, arr7, arr8)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_16(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []


  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []

  let arr6 = []
  let arr7 = []
  let arr8 = []


  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 4));

  arr3.push(arr.slice(4, 6));
  arr4.push(arr.slice(6, 8));

  arr5.push(arr.slice(8, 10));
  arr6.push(arr.slice(10, 12));

  arr7.push(arr.slice(12, 14));
  arr8.push(arr.slice(14, 16));



  arrfirst.push(arr1, arr2, arr3, arr4)
  arrsecond.push(arr5, arr6, arr7, arr8)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;

}
function length_17(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []


  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []

  let arr6 = []
  let arr7 = []
  let arr8 = []
  let arr9 = []


  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 4));

  arr3.push(arr.slice(4, 6));
  arr4.push(arr.slice(6, 8));
  arr5.push(arr.slice(8, 9));

  arr6.push(arr.slice(9, 11));
  arr7.push(arr.slice(11, 13));

  arr8.push(arr.slice(13, 15));
  arr9.push(arr.slice(15, 17));



  arrfirst.push(arr1, arr2, arr3, arr4, arr5,)
  arrsecond.push(arr6, arr7, arr8, arr9)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_18(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []


  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []
  let arr6 = []
  let arr7 = []
  let arr8 = []
  let arr9 = []
  let arr10 = []


  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 4));

  arr3.push(arr.slice(4, 5));
  arr4.push(arr.slice(5, 7));
  arr5.push(arr.slice(7, 9));

  arr6.push(arr.slice(9, 11));
  arr7.push(arr.slice(11, 13));

  arr8.push(arr.slice(13, 14));
  arr9.push(arr.slice(14, 16));

  arr10.push(arr.slice(16, 18));


  arrfirst.push(arr1, arr2, arr3, arr4, arr5,)
  arrsecond.push(arr6, arr7, arr8, arr9, arr10)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_19(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []


  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []
  let arr6 = []
  let arr7 = []
  let arr8 = []
  let arr9 = []
  let arr10 = []
  let arr11 = []


  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 4));
  arr3.push(arr.slice(4, 5));

  arr4.push(arr.slice(5, 6));
  arr5.push(arr.slice(6, 8));
  arr6.push(arr.slice(8, 10));

  arr7.push(arr.slice(10, 12));
  arr8.push(arr.slice(12, 13));
  arr9.push(arr.slice(13, 15));

  arr10.push(arr.slice(15, 17));
  arr11.push(arr.slice(17, 19));

  arrfirst.push(arr1, arr2, arr3, arr4, arr5, arr6)
  arrsecond.push(arr7, arr8, arr9, arr10, arr11)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
function length_20(arr) {
  let ARRALL = []
  let arrfirst = []
  let arrsecond = []


  let arr1 = []
  let arr2 = []
  let arr3 = []
  let arr4 = []
  let arr5 = []
  let arr6 = []
  let arr7 = []
  let arr8 = []
  let arr9 = []
  let arr10 = []
  let arr11 = []
  let arr12 = []


  arr1.push(arr.slice(0, 2));
  arr2.push(arr.slice(2, 4));
  arr3.push(arr.slice(4, 5));

  arr4.push(arr.slice(5, 6));
  arr5.push(arr.slice(6, 8));
  arr6.push(arr.slice(8, 10));

  arr7.push(arr.slice(10, 12));
  arr8.push(arr.slice(12, 13));
  arr9.push(arr.slice(13, 15));

  arr10.push(arr.slice(15, 16));
  arr11.push(arr.slice(16, 18));
  arr12.push(arr.slice(18, 20));

  arrfirst.push(arr1, arr2, arr3, arr4, arr5, arr6)
  arrsecond.push(arr7, arr8, arr9, arr10, arr11, arr12)
  ARRALL.push(arrfirst, arrsecond)
  return ARRALL;
}
