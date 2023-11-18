export const capitalizeFirstLetter = (word) => {
    if (typeof word === 'string' || word instanceof String) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return word;
}