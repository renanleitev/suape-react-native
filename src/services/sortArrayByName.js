export const sortArrayByName = (array) => {
    const originalArray = [];
    array.forEach(element => {
        originalArray.push(element?.Nome);
    })
    return originalArray.sort();
}