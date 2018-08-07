/**
 * Retourne un nombre aléatoire entre min et max
 * @param min
 * @param max
 * @returns {number}
 */
function getRandomNumber(min, max){
    return Math.floor((Math.random() * (max-min)))+ min;
}

function getStats(data) {
    var result = {
        min: null,
        max: 0,
        total: 0,
        moyenne: 0,
    };

    for (let i = 0; i < data.length; i++) {
        let val = data[i];
        result.total += val;

        if(val < result.min || result.min == null){
            result.min = val;
        }

        if(val > result.max){
            result.max = val;
        }
    }

    result.moyenne = result.total / data.length;

    return result;
}