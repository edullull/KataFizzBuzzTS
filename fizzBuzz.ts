

export function FizzBuzz(n:number){
    if( n % 15 == 0){
        return "FIZZBUZZ";
    }
    if(n % 3 == 0){
        return "FIZZ";
    }

    if( n % 5 == 0){
        return "BUZZ";
    }
    return 1;
}