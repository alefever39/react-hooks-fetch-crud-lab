import React from "react";
import QuestionItem from './QuestionItem';

function QuestionList({ questionList, onDelete, onChange }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList.map(question => <QuestionItem key={question.id} question={question} onDelete={onDelete} onChange={onChange} />)}</ul>
    </section>
  );
}

export default QuestionList;
