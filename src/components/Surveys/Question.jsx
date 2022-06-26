import React from 'react'
import PropTypes from 'prop-types'
import Answer from './Answer'

const Question = ({
  question,
  name,
  index,
  color,
  selectOption,
  answerSelected
}) => {
  return (
    <div className="mb-4  col-12  col-lg-6">
      <div
        className="card-header  d-flex align-items-center"
        style={{ backgroundColor: color }}
      >
        <h5 className="my-0 font-weight-normal text-white  ">
          {(index+1) + ". " + question.question}
        </h5>
      </div>
      <div className="border shadow w-100 card-body float-left pt-0">
        <div className="float-left d-flex flex-column">
          {question.answer.map((answer, i) => {
            return (
              <Answer
                _name={`${name}_${index}`}
                _text_answer={answer.answer}
                _id={`answer_${answer.id_answer}`}
                key={`${answer.id_answer}`}
                handleClickAnswer={() => selectOption(
                  question.id_question,
                  answer.id_answer
                )}
                id_answerDB = {answer.id_answer}
                answerSelected= {answerSelected}
                index = {index}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

Question.propTypes = {
  name: PropTypes.string,
  question: PropTypes.object
}

export default Question
