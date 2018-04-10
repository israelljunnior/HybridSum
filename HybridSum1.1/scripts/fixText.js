function fixText(string){
    
    string = string.replace("  "," ");
    string = string.replace(" ,",",");
    string = string.replace(" .",".");
    string = string.replace("   "," ");
    string = string.replace("  ,",",");
    string = string.replace("  .",".");
    string = string.replace(" :",":");
    string = string.replace(" ;",";");
    string = string.replace(" ?","?");
    string = string.replace("  :",":");
    string = string.replace("  ;",";");
    string = string.replace("  ?","?");
    string = string.replace(" (","(");
    string = string.replace("  (","(");
    string = string.replace(" )",")");
    string = string.replace("  )",")");
    string = string.trim();
    return string;
    
}
    