import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(response => response.json())
    .then(data => setQuestionList(data))
    .catch(error => console.error(`fetch request failed, ${error}`));
  },[])

  function addNewQuestion(question) {
    const updatedQuestionList = [...questionList, question];
    setQuestionList(updatedQuestionList);
  }

  function onDelete(id) {
    const updatedQuestionList = questionList.filter(question => question.id !== id);
    setQuestionList(updatedQuestionList);
  }

  function onChange(updatedQuestion) {
    const updatedQuestionList = questionList.map(question => {
      if(question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    setQuestionList(updatedQuestionList);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addNewQuestion={addNewQuestion} /> : <QuestionList questionList={questionList} onDelete={onDelete} onChange={onChange} />}
    </main>
  );
}

export default App;
