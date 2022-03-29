import reverseString from "../code/reverseString";

test('reverse one word', () => {
    expect(reverseString('team')).toBe('maet');
});

test('two words', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('full sentence', () =>{
    expect(reverseString('The quick brown fox jumps over the lazy dog.')).toBe('.god yzal eht revo spmuj xof nworb kciuq ehT');
});