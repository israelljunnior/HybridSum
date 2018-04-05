
function  TF(objectWord, sentences, i, arrayRelevantWords){
    
    var amountWordsSentence = 0;   
    
    for(j = 0; j < arrayRelevantWords.length; j++){
            
          
            if(sentences.toUpperCase().match("\\b"+arrayRelevantWords[j].word.toUpperCase()+"\\b", 'g') != null){
                
                
                 amountWordsSentence += arrayRelevantWords[j].frequence[i];         
                        
                }
        }
        
        
    return (objectWord.frequence[i] / amountWordsSentence);
}

function IDF(sentences, objectWord){
    var sentenceWithObjectWord = 0;
    for(i = 0; i < objectWord.numberSentence.length; i++){
        if(objectWord.frequence[i] > 0)
        sentenceWithObjectWord++;  

    }
    
   
    return  Math.log((sentences.length / sentenceWithObjectWord));
    
}

function TF_IDF(objectWord, sentences, arrayRelevantWords){
    
    objectWord.tf_idf = [];
    
    const idf = IDF(sentences, objectWord);
    for(i = 0; i < sentences.length; i++){
        if(objectWord.frequence[i] > 0 ){
            
            objectWord.tf_idf.push(" S"+(i+1)+": "+(TF(objectWord, sentences[i], i, arrayRelevantWords) * idf)); 
        } else {
            objectWord.tf_idf.push(" S"+(i+1)+": "+0);

        }
    }
}


function rankingTF_IDF(arrayObject){
    if(arrayObject.length < 2 ){
        return arrayObject;
    }
    var medium = parseInt(arrayObject.length / 2);
    var left = arrayObject.slice(0,medium);
    var right = arrayObject.slice(medium,arrayObject.length);

    return merge(rankingTF_IDF(left), rankingTF_IDF(right));

}

function merge(left, right){
    var ranking = [];
    while(left.length && right.length){
        
        if(left[0].tf_idf <= right[0].tf_idf){
            ranking.push(left.shift());          
        } else{
            ranking.push(right.shift());
        }
    }
    while(left.length){
    ranking.push(left.shift());
    }
    while(right.length){
        ranking.push(right.shift())
    }
    console.log(ranking);
    return ranking;

}

