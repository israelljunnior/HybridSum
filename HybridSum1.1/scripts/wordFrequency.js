
/*function rankingFrequence(arrayObject){
    if(arrayObject.length < 2 ){
        return arrayObject;
    }
    var medium = parseInt(arrayObject.length / 2);
    var left = arrayObject.slice(0,medium);
    var right = arrayObject.slice(medium,arrayObject.length);

    return merge(rankingFrequence(left), rankingFrequence(right));

}

function merge(left, right){
    var ranking = [];
    while(left.length && right.length){
        
        if(left[0].frequenceText <= right[0].frequenceText){
            ranking.push(left.shift());          
        } else{
            ranking.push(right.shift());
        }
    }
    while(left.length){
    ranking.push(left.shift());
    }
    while(right.length){
        ranking.push(right.shift());
    }
    console.log(ranking);
    return ranking;

}*/
