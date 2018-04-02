var arrayObjectWord = [];

var arrayCheckWord = [];

function wordFrequenceSentence(sentence, object) {
    var frequence = new RegExp("\\b"+object.word+"\\b", 'gi'); // Type of regular expression that will return an arrayCheckWord with how many times this word resemble in the text  
    var result = sentence.match(frequence);

    if (arrayCheckWord.includes(word)) { //dont put the same words many times

    } else {
        arrayCheckWord.push(word);
        
    } if (result === null) {
        //arrayFrequenceSentence.push(0);
        object.frequence.push(0); //this is cause the words there isn't in sentence
        
    } else {
        //arrayFrequenceSentence.push(result.length);
        object.frequence.push(result.length);
    }
    
};

function checkArrayRelevantWordsSentences(sentences, arrayRelevantWords) {
    arrayCheckWord = [];
    arrayObjectWord = [];
    for (i = 0,word = ""; i < arrayRelevantWords.length; i++) {
        
            word = arrayRelevantWords[i];
            arrayRelevantWords[i] = new Object(); // change the word to object
            arrayRelevantWords[i].word = word;
            arrayRelevantWords[i].numberSentence = [];
            arrayRelevantWords[i].frequence = [];
            for (j = 0; j < sentences.length; j++) { //for para percorrer as sentenças
                
               //number to indecate the which sentence 
                arrayRelevantWords[i].numberSentence.push(j);

                wordFrequenceSentence(sentences[j], arrayRelevantWords[i]);

            } 
            
            arrayObjectWord.push(arrayRelevantWords[i]);
            //release the object word for other word
             word = "";
        } 
    }
    


