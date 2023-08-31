const multiplicator = (a: number, b:number, printText:string) => {
    console.log(printText, a * b);
}

const parseArgs = (args): Array<number> => {
    if(args.length !== 4) throw new Error('Wrong number of arguments');

    const firstNumber = Number(args[2]);
    const secondNumber = Number(args[3]);

    if(!isNaN(firstNumber) && !isNaN(secondNumber)){
        return [
            firstNumber,
            secondNumber
        ]
    }
    
    throw new Error('Provided values were not numbers');

}

// Con el process.argv recuperamos los argumentos
// NOTA: El process.argv inicia desde la posición 2
const cleanArguments = parseArgs(process.argv);

const a: number = Number(cleanArguments[0]);
const b: number = Number(cleanArguments[1]);

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is: `);