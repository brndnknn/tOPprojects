import capitalize from "../code/capitalize";

test('capitalize team', () => {
    expect(capitalize('team')).toBe('Team');
    
}); 

test('capitalize first word', () =>{
    expect(capitalize('jest works')).toBe('Jest works');
})
