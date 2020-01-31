// takes two areguments, name of the sort you want and the data
exports.sort = function(name, arrOne, arrTwo) {
    // QUICKSORT SECTIONS
    // This is an importable quicksort file, this function takes an array and sorts it 
// takes two areguments, name of the sort you want and the data
    // QUICKSORT SECTIONS
    // This is an importable quicksort file, this function takes an array and sorts it 
    let quicksort = (arr, min, max) => {
        // set the quicksort pointer to the first element in the array
        if (min === undefined) {
            min = 0
        }

        // set the quicksort max pointer to the last element in the array
        if (max === undefined) {
            max = arr.length - 1
        }

        // if the arr pointer's aren't at each other yet then continue recursively iterating
        if (min < max) {
            let pivot = partition(arr, min, max)
            quicksort(arr, min, pivot)
            quicksort(arr, pivot + 1, max)
        }

        // return the arr after it has been sorted
        return arr
    }

    let partition = (arr, min, max) => {
        // set the pivot in the middle of the array
        let pivotNumber = Math.floor(min + (max - min) / 2) 
        let pivot = arr[pivotNumber]

        // for each of these later there are do-while loops impemented to we set them out of range
        let i = min - 1
        let j = max + 1

        // infinite loop until conditions are met
        while (true) {
            // while i is refrencing a point lower than the middle of the array iterate up unitl the middle is reached
            do {
                i++
            } 
            while (arr[i] < pivot)

            // while j is higher than the middle index of the array iterate down towards the middle
            do {
                j--
            } 
            while (arr[j] > pivot)

            // if the point is reached where both indices are pointing at the middle point then do a switch and put the numbers on the other side of the pivot
            if (i >= j) {
              return j
            }
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp 
        }
    }

    let twoArraySort = (arr1, arr2) => {
        let arr3 = arr1.concat(arr2)
        return quicksort(arr3)
    }

    // part for returning different sorts
    if (name === 'q') {
        return quicksort(arrOne)
    } else if (name === 'm') {
        return twoArraySort(arrOne, arrTwo)
    }
    else {
        return 'please specify type of sort as first argument, and the array or arrays as the second. for example: " sorter.sort(`q`, [5, 2, 7, 1])"'
    }
}



