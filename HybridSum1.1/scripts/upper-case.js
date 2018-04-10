
var numberCases = 0;
var wordChecked = []; //para não verificar a mesma palavra na sentença
function upperCase(arrayObjectSentence, words, arrayObjectWord) {
    numberCases = 0;

    wordChecked = [1];
    
    for (i = 0; i < arrayObjectSentence.length; i++) {
        
        
        
        arrayObjectSentence[i].upperCase = 0;
        
        for (j = 0; j < words.length; j++) {
            var ucase = new RegExp("^[A-Z]");
            
            if (words[j].match(ucase)) {
                var isRelevantWord = false;
                arrayObjectWord.forEach(word => {
                    
                if(word.word.toUpperCase() == words[j].toUpperCase()){
                    isRelevantWord = true;
                    
                }
                });
                

                if(isRelevantWord == true){
                    if (wordChecked.length > 0) { 
                        if (wordChecked.includes(words[j])) {} 
                        else {
                            
                        var regexp = new RegExp("\\b" + words[j] + "\\b",'g');
                         
                        if(arrayObjectSentence[i].sentence.match(regexp) != null)
                        if (arrayObjectSentence[i].sentence.match(regexp).length > 0) {
                            var result = arrayObjectSentence[i].sentence.match(regexp);
                            arrayObjectSentence[i].upperCase += result.length;
                            
                            numberCases += result.length;
                            wordChecked.push(words[j]);
                        }
                    }
                } else {
                    
                var regexp = new RegExp("\\b" +words[j]+"\\b",'gi');
                    // ERROR JOOJ AQUI;
                    
                    if(arrayObjectSentence[i].sentence.match(regexp) != null)
                    if (arrayObjectSentence[i].sentence.match(regexp).length > 0) {
                        var result = arrayObjectSentence[i].sentence.match(regexp);
                        arrayObjectSentence[i].upperCase += result.length;
                        wordChecked.push(words[j]);
                        numberCases += result.length;
                        
                        
                        
                        
                }
                }
            }
        } 
    }     
}
    
    for (k = 0; k < arrayObjectSentence.length; k++) {
       
        if (arrayObjectSentence[k].upperCase > 0 ) {
            
            
            arrayObjectSentence[k].upperCaseScore = arrayObjectSentence[k].upperCase / numberCases;

        }
    }

}
