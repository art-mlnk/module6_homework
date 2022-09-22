function primeNum (number) {
    if (number > 1000) {
    throw new Error('Данные неверны')
    };
    for (let i = 2; i < number; i++) {
    if (number % i == 0) return false
    };
    return true
    };
    console.log(primeNum());