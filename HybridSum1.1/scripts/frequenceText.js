
function wordFrequenceText(string, objectWord) { // check if that word in ArrayRelevantWords includes in rest string
    var frequence = new RegExp("\\b"+objectWord.word+"\\b", 'gi'); // Type of regular expression that will return an arrayWordsText with how many times this word resemble in the text  
    var result = string.match(frequence);

    objectWord.frequenceText = result.length;

};

function checkArrayRelevantWordsString(string, arrayObjectWord) {
    
    for (i = 0; i < arrayObjectWord.length; i++) {
        
        wordFrequenceText(string, arrayObjectWord[i]);
        
    }

}




