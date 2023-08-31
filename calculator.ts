
// Creamos un tipo
type Operation = 'multiply'  | 'add' | 'divide';
type Result = number

const calculator = (a: number, b: number, op: Operation): Result => {
    
    if( op === 'multiply' ){
        return a * b;
    }

    if( op === 'add' ){
        return a + b;
    }

    if( op === 'divide' ){
        if( b == 0 ){
            throw new Error('Can\t devide by 0!');
        }
        return a / b;
    }

    throw new Error('Operation is not valid!');
}


try{

    console.log( calculator(4, 2, 'multiply') );

} catch(e){
    console.log('Something wnt wrong!', e);
}
