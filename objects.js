process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!
let dog = {
    name: 'sparky',
    age: '14',
    bark : function(){
        console.log('bark'); 
        
    },
    run: function(){ 
        console.log('there goes');
    }
};

console.log(dog.bark());


let person = {
    
    'firstname' : 'Jubae',
    'lasyname' : 'Ramsey',
    age: 28,
    greet: function(){
        return 'Hows it Going';
    },
    sayBye : function(){
        return 'Catch You Later.';
    }
};


const cat = {
    name: 'fluffy',
    age: 2,
    scratch: function(){
        return this.name + ' is scratching';
    }
};

//Object.freeeze(cat);

let c1 = Object.create(cat);
c1.name = 'rumble';
cat.poop =function(){
    return this.name + ' kitty is pooping';
}
//c1.poop();

let kittyArray = [];
for(let i = 0; i <10; i++){
    let newKitty =Object.create(cat);
    newKitty.age = Math.floor(Math.random() * 15 + 1);
    kittyArray.push(newKitty);
}

console.log(kittyArray.id);

