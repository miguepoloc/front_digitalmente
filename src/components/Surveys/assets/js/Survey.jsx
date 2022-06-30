
const { Question } = require('./Question')
//ignore-no-unused-expressions
export class Survey {
    constructor(json) {
        this.id_survey = json.id_survey;
        this.name = json.name;
        this.desc = json.desc;
        this.color = json.color;
        this.questions = [];
        this.questionRecent = null;
        this.addQuestion(json); //el json trae una pregunta, entonces la apregamos. añado ese objeto al reciente.
    }


    updateQuestionRecent(objQuestion) {
        this.questionRecent = objQuestion;
    }

    pushQuestion(question) {
        this.questions.push(question); //Las agrego en orden...
        this.questions.sort(function (a, b) {
            return a.id_question - b.id_question;
        });
    }

    addQuestion(json) {
        if (!this.questions.length) {
            let objQuestion = new Question(json);
            this.pushQuestion(objQuestion);
            this.updateQuestionRecent(objQuestion);
        } else {
            //Si la pregunta existe en la lista, entonces , añadimos una posible respuesta.
            if (this.questionRecent.id_question === json.id_question) {
                this.questionRecent.addAnswer(json)
            } else {
                //Como el array ya contiene preguntas (quesions), procedo a buscar la pregunta (si existe) 
                let objQuestion = this.searchQuestion(json.id_question);
                //Pregunto si search tiene algun elemento.
                if (objQuestion) {
                    objQuestion.addAnswer(json)
                } else {
                    objQuestion = new Question(json)
                    this.pushQuestion(objQuestion);
                }
                //actualizo la pregunta reciente (questionRecente)
                this.updateQuestionRecent(objQuestion)
            }
        }
    }

    searchQuestion(id) {
        let search = this.questions.filter(question => question.id_question === id);
        return (search.length) ? search[0] : null;
    }

    strQuestions() {
        //pass
    }


    toString() {
        return {
            "id_survey": this.id_survey,
            "name": this.name,
            "desc": this.desc,
            "color": this.color,
            "questions": this.questions
        }
    }

}
