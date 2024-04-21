export const filterArray = (target, arr) => {
    const newArr = arr.filter((el) => el !== target);

    return newArr
}

export const isInArray = (arr, target) => {
    const index = arr.indexOf(target);
    if (index !== -1) {
        return true
    }

    return false
}