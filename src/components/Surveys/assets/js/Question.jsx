class Question{
  constructor(json){
    this.id_question = json.id_question;
    this.question = json.question;
    this.itemId_question = json.itemid_question;
    this.answer = [];
    this.addAnswer(json); //Cuando crean una pregunta el json trae una posible respuesta. entonces la creamos.
    this.selected = null; // aquí guardaré la respuesta para esta pregunta
    this.objSelected = null; 
  }
  
  setSelected(id_answer){
    this.selected = id_answer
    this.objSelected = this.answer.filter((answer) => answer.id_answer == id_answer)[0];
  }
  getSelected(){
    return this.selected
  }
  getObjSelected(){
    return this.objSelected
  }
  getItemId(){
    return this.itemId_question ;
  }
  addAnswer(json){
    this.answer.push({
      "id_answer":json.id_answer,
      "answer":json.answer,
      "value":json.value,
    })
  }

}

module.exports = { Question }