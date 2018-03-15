var arrayObejctWord = [];
var objectWord = {
    word:"",numberSentence:[],frequence:[]
};
var arrayWordsSentence = [];
var numberSentence = [];
var arrayFrequenceSentence = [];
function wordFrequenceSentence(sentence, word) {
    var frequence = new RegExp(word + '+', 'gi'); // Type of regular expression that will return an arrayWordsSentence with how many times this word resemble in the text  
    var result = sentence.match(frequence);

    if (arrayWordsSentence.includes(word)) { //dont put the same words many times
    
}   else {
            arrayWordsSentence.push(word);
            obejectWord.word = word;
    }
    if(result === null){
        arrayFrequenceSentence.push(0); //this is cause the words there isn't in sentence
     } else arrayFrequenceSentence.push(result.length);
};

function checkArrayRelevantWordsSentences(sentences, arrayRelevantWords) {
    arrayWordsSentence = [];// reset array
    arrayFrequenceSentence = [];// reset array
    numberSentence = [];
    
    for (i = 0; i < arrayRelevantWords.length; i++) {

        if (arrayWordsSentence.includes(arrayRelevantWords[i])) { //verifection if the Word in ArrayRelevant is already included;  
            
            
        } else {
            for (j = 0; j < sentences.length; j++) { //for para percorrer as sentenças
                
                numberSentence.push(j); //number to indecate the which sentence 
                
                wordFrequenceSentence(sentences[j], arrayRelevantWords[i]);
                
            }
        }

    }

}


