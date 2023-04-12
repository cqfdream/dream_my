let arr = [5, 1, 3, 6, 2, 0, 7]

// [5, 1, 3, 0, 2, 6, 7]
// [1, 2, 0, 3, 5]  [6, 7]
// [1, 2, 0,] [3, 5]

function quickSort(arr, left = 0, right = arr.length - 1) {

  if (arr.length > 1) {
    // 帮我找分裂数组的下标
    const lineIndex = partition(arr, left, right)

    if (left < lineIndex - 1) {
      quickSort(arr, left, lineIndex - 1)
    }

    if (lineIndex < right) {
      quickSort(arr, lineIndex, right)
    }
  }

  return arr
}

// 将比基准值小的放在左边，比基准值大的放在右边
function partition(arr, left, right) {
  let piovtValue = arr[Math.floor(left + (right - left) / 2)]
  let i = left, j = right
  while(i <= j) {
    // 左指针指向的元素和基准值对比
    while(arr[i] < piovtValue) {
      i++
    }

    while (arr[j] > piovtValue) {
      j--
    }

    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }
  }
  return i
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}


console.log(quickSort(arr));