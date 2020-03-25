const add = (a,b)=> a+b ; 
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers optional description',()=>{
    const result = add(3,4);
    
    //1) one way 
    /*if(result !== 7){
        throw new Error(`add 3+4 result is ${result}. Expected 7 `);
    }*/

    //2) 
    expect(result).toBe(7);

});

test('should generate greeting', ()=>{
    const name = 'Mike';
    const res = generateGreeting(name);
    expect(res).toBe(`Hello ${name}`);
});