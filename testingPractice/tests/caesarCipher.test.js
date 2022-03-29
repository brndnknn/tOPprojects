import caesarCipher from "../code/caesarCipher";

test('7 spots changed', () => {
    expect(caesarCipher('hello world', 7)).toBe('olssv dvysk');
});

test('13 spots changed', () =>{
    expect(caesarCipher('hello world', 13)).toBe('uryyb jbeyq');
});

test('5 spots changed, keep case', () =>{
    expect(caesarCipher('Hello World', 5)).toBe('Mjqqt Btwqi');
});

test('punctuation', () =>{
    expect(caesarCipher('hello world!', 7)).toBe('olssv dvysk!');
})


