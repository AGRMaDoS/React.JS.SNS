export const riquired = value => {
    if (value) {
        return undefined
    }
    return "Обязательное поле!";
}

export const maxLengthCreator = (maxLength, numberOfCharacters = `Максимальное кол-во символов ${maxLength}!`) => (value) => {
    if (value.length > maxLength) return `${numberOfCharacters}`;
    return undefined;
}
export const minLengthCreator = (minLength, numberOfCharacters=
    `Минимальное кол-во символов ${minLength}!`) => (value) => {
    if (value.length < minLength) return (`${numberOfCharacters}`)
    return undefined;
}