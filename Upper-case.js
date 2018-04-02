
var numberCases = 0;
var objectSentence = new Object();
var arrayObjectSentence = [];

function upperCase(sentences, arrayObjectWord){
    numberCases = 0;
    arrayObjectSentence = [];
    
    for(i = 0; i < sentences.length; i++){
        
        
        
        objectSentence.sentence =  sentences[i];
        objectSentence.score = 0;
        objectSentence.upperCase = 0;
        
        
        for(j = 0; j < arrayObjectWord.length; j++){
            var regexp = new RegExp("\\b"+arrayObjectWord[j]+"\\b");
            var result = sentences[i].match(regexp);
            alert(result); 
            if(result.length > 0){
                var l = 0; // counter;
                while(l < result.length){

                    objectSentence.score += arrayObjectWord[j].tf_idf;
                    var regexp1 = /^[A-Z]/;
                    if(result[l].match(regexp1)){
                        objectSentence.upperCase += 1;
                        numberCases++;
                    
                
                    }
                    l++;
                }
            } 
            
        }   alert(objectSentence.upperCase);
            arrayObjectSentence.push(objectSentence);
        

    }

    for(k = 0; k < arrayObjectSentence.length; k++){
        if(arrayObjectSentence[k].upperCase > 0){

            arrayObjectSentence[k].score += arrayObjectSentence[k].upperCase / numberCases; 

        }   
    }

}