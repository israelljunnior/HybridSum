
function  TF(objectWord, objectSentence, i, arrayObjectWord){
    
    var amountWordsSentence = 0;   
    
    for(k = 0; k < arrayObjectWord.length; k++){
        
    if(objectSentence.sentence.toUpperCase().match("\\b"+arrayObjectWord[k].word.toUpperCase()+"\\b", 'g') != null){
                
                
                 amountWordsSentence += 1;         
                       
                
        }


    }  
    
        
    return (objectWord.frequenceSen[i] / amountWordsSentence);
}

function IDF(objectSentence, objectWord){
    
    var sentenceWithObjectWord = 0;
    
    for(l = 0; l < objectWord.numberSentence.length; l++){
        if(objectWord.frequenceSen[l] > 0) sentenceWithObjectWord++;  
        
    }
    
    return Math.log(objectSentence.length / sentenceWithObjectWord);
    
}

function TF_IDF(arrayObjectSentence, arrayObjectWord){
    
    for(i = 0; i < arrayObjectSentence.length; i++){
        arrayObjectSentence[i].tf_idf = 0;
           //objectWord.tf_idf.push(" S"+(i+1)+": "+(TF(objectWord, arrayObjectSentence[i].sentence, i, arrayRelevantWords) * idf)); 
           for(j = 0; j < arrayObjectWord.length; j++){
            
            if(arrayObjectSentence[i].sentence.toUpperCase().match("\\b"+arrayObjectWord[j].word.toUpperCase()+"\\b", 'g') != null){
            arrayObjectWord[j].tf_idf.push(TF(arrayObjectWord[j], arrayObjectSentence[i], i, arrayObjectWord) * IDF(arrayObjectSentence, arrayObjectWord[j]));
            
            arrayObjectSentence[i].tf_idf += arrayObjectWord[j].tf_idf[i];       
            } else {
                arrayObjectWord[j].tf_idf.push(0);
                arrayObjectSentence[i].tf_idf += 0;
            }
            
        }
    }
}


