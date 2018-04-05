
var numberCases = 0;
var arrayObjectSentence = [];
var wordChecked = []; //para não verificar a mesma palavra na sentença
function upperCase(sentences, words) {
    numberCases = 0;
    arrayObjectSentence = [];

    var numberObjectS = sentences.length;
    
    for (i = 0; i < sentences.length; i++) {

        var S = new Object();
        S.index = i;
        S.sentence = sentences[i];
        S.score = 0;
        S.upperCase = 0;

             
        for (j = 0; j < words.length; j++) {
            var ucase = new RegExp("^[A-Z]",);
            
            if (words[j].match(ucase)) {
               
                if (wordChecked.length > 0) {
                      
                    if (wordChecked.includes(words[j])) {} 
                    else {
                    var regexp = new RegExp("\\b" + words[j] + "\\b", 'g');
                        if (sentences[i].match(regexp).length > 0) {
                            var result = sentences[i].match(regexp);
                            S.upperCase += result.length;
                            
                            numberCases += result.length;
                            wordChecked.push(words[j]);
                        }
                    }
                } else {
                    var regexp = new RegExp("\\b" + words[j] + "\\b", 'g');
                   
                    if (sentences[i].match(regexp).length > 0) {
                        var result = sentences[i].match(regexp);
                        S.upperCase += result.length;
                        wordChecked.push(words[j]);
                        numberCases += result.length;
                        
                        
                        
                        
                    }
                }
            }
        }



        
        arrayObjectSentence.push(S);
        wordChecked = [];
        
    }
    
    for (k = 0; k < arrayObjectSentence.length; k++) {
        alert("depois do push: "+arrayObjectSentence[k].upperCase+"/"+numberCases);
        if (arrayObjectSentence[k].upperCase > 0 ) {
            alert('score: '+arrayObjectSentence[k].score);
            alert(arrayObjectSentence[k].index+"depois do push: "+arrayObjectSentence[k].upperCase+"/"+numberCases);
            arrayObjectSentence[k].score = arrayObjectSentence[k].upperCase / numberCases;

        }
    }

}
