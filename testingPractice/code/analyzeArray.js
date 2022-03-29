function analyzeArray( arr ){

    let analysis = {
        min: 0, max: 0, average: 0, length: 0
    };

    analysis.length = arr.length;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    analysis.average = sum / arr.length;
    analysis.min = Math.min(...arr);
    analysis.max = Math.max(...arr);


    return analysis;
}

export default analyzeArray;