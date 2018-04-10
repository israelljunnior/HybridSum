
function summarizer(arrayObjectSentence, summarizerLength){
    var summ = [];
    var rankingS = arrayObjectSentence.sort(function (a, b) { return b.score - a.score;});
    /*rankingS.forEach(element => {
        alert(element.sentence+"  "+element.score);
    });*/
   
    for(i = 0; i < summarizerLength; i++ ){
        summ.push(rankingS.shift());
    }

    summ.sort(function (a,b){return a.index - b.index;});
    

    
    return summ;
    

};