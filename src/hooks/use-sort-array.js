export const useSortArrayByName = (array) => {
    const originalArray = [];
    array.forEach(element => {
        if (element?.Nome) originalArray.push(element?.Nome);
        if (element?.Name) originalArray.push(element?.Name);
    })
    return originalArray.sort();
}