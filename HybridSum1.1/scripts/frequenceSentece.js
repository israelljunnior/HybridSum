
function wordFrequenceSentence(sentence, object) {
    var frequence = new RegExp("\\b"+object.word+"\\b", 'gi'); // Type of regular expression that will return an arrayCheckWord with how many times this word resemble in the text  
    var result = sentence.match(frequence);

     
    if (result === null) {
        //arrayFrequenceSentence.push(0);
        object.frequenceSen.push(0); //this is cause the words there isn't in sentence
        
    } else {
        //arrayFrequenceSentence.push(result.length);
        object.frequenceSen.push(result.length);
    }
    
};

function checkArrayRelevantWordsSentences(sentences, arrayRelevantWords) {
    
    for (i = 0; i < arrayRelevantWords.length; i++) {
        
            for (j = 0; j < sentences.length; j++) { //for para percorrer as sentenças
                
               //number to indecate the which sentence 
                arrayRelevantWords[i].numberSentence.push(j);

                wordFrequenceSentence(sentences[j], arrayRelevantWords[i]);

            } 
            
            
            //release the object word for other word
            
        } 
    }



