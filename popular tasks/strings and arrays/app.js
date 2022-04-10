//Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: ‘a’ и ‘A’ разные символы.

function isUnique(string) {
    let uniqueStr = new Set(string);
    return uniqueStr;
}

// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false