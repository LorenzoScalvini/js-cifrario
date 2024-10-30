function farfallino(str) {
    let result = '';
    const vowelsMap = {
        'a': 'afa',
        'e': 'efe',
        'i': 'ifi',
        'o': 'ofo',
        'u': 'ufu'
    };

    for (let char of str) {
        if (vowelsMap[char.toLowerCase()]) {
            result += vowelsMap[char.toLowerCase()];
        } else {
            result += char;
        }
    }

    return result;
}

const input = "Marco";
const output = farfallino(input);
console.log(output);
