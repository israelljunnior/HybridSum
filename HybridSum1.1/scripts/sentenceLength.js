function sentenceLength(arrayObjectSentence){
    var allWordsR;
    arrayObjectSentence.forEach(sentence => {
        sentenceSize = sentence.match(/\b[a-aA-Z]+\b/g).length;
        sentence.size = sentenceSize;
        allWordsR +=  sentenceSize;
    });

    var avarageSize = allWordsR / arrayObjectSentence.length();
    rankinSize(arrayObjectSentence);
    arrayObjectSentence.forEach(sentence =>{
        var size = (avarageSize * sentence.size);
        if(sentence.size > ranking[ranking.length]*0.8){
            penalidade = sentence.size + (ranking[ranking.length] * 0.8);
        } else if(sentence.size < ranking[ranking.length]*0.2){
            penalidade = sentence.size + ranking[ranking.length]*0.2;
        }  
        sentence.score = size-penalidade;
    });
     

}

function rankingSize(arrayObjectSentence){
    if(arrayObjectSentence.length < 2 ){
        return arrayObjectSentence;
    }
    var medium = parseInt(arrayObjectSentence.length / 2);
    var left = arrayObjectSentence.slice(0,medium);
    var right = arrayObjectSentence.slice(medium,arrayObjectSentence.length);

    return merge(rankingFrequence(left), rankingFrequence(right));

}

function merge(left, right){
    var ranking = [];
    while(left.length && right.length){
        
        if(left[0].size <= right[0].size){
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

}