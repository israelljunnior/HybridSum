
var arrayWordsText = [];
var arrayFrequenceText = [];
function wordFrequenceText(string, word) { // check if that word in ArrayRelevantWords includes in rest string
    var frequence = new RegExp("\\b"+word+"\\b", 'gi'); // Type of regular expression that will return an arrayWordsText with how many times this word resemble in the text  
    var result = string.match(frequence);


    arrayWordsText.push(word);
    arrayFrequenceText.push(result.length);


};

function checkArrayRelevantWordsString(string, arrayRelevantWords) {
    arrayWordsText = [];// reset array
    arrayFrequenceText = [];// reset array
    for (i = 0; i < arrayRelevantWords.length; i++) {
        
        wordFrequenceText(string, arrayRelevantWords[i]);
        
    }

}




