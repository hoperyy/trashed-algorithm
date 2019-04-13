const data = require('./data');

function run(s) {
    const stack = [];

    const map = {
        '}': '{',
        ')': '(',
        ']': '['
    };

    let letter = '';
    for (let i = s.length - 1; i >= 0; i--) {
        letter = s[i];

        if (map[letter]) { // 右侧字符直接入栈
            stack.unshift(letter);
        } else { // 左侧字符进行匹配，匹配到的出栈，匹配不到的，左侧字符入栈
            // 获取 stack 第一个元素
            const firstLetter = stack[0];
            if (map[firstLetter] == letter) {
                stack.shift();
            } else {
                stack.unshift(letter);
            }
        }
    }

    return !stack.length;
}

const result = run('{()}');

console.log('result: ', result);