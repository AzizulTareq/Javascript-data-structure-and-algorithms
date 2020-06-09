const myFunc = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i;
        }
    }

    return -1;
}

myFunc([6, 5, 7, 4, 8], 7);
