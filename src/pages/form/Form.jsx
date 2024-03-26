import React, { useState } from 'react';

const FormBuilder = () => {
    const [questions, setQuestions] = useState([]);
    const [questionInput, setQuestionInput] = useState('');
    const [title, setTitle] = useState('');
    const [questionType, setQuestionType] = useState('text');

    const addQuestion = () => {
        const newQuestion = { question: questionInput, type: questionType };
        setQuestions([...questions, newQuestion]);
        // Clear input fields after adding question
        setQuestionInput('');
        setQuestionType('text');
    };

    return (
        <div className='ml-52'>
            <div className="form-builder">

                <h2>Form Builder</h2>
                <div>

                    <input
                        type="text"
                        id="title"
                        className='border p-3'
                        placeholder="Enter form title"
                        value={title}
                        onChange={(e) =>  setTitle(e.target.value)}
                    />
                </div>
                {/* single question box  */}
                <div className='border flex h-36 justify-between p-4'>
                    <div>

                        <input
                            type="text"
                            id="question"
                            className='border p-3'
                            placeholder="Enter your question"
                            value={questionInput}
                            onChange={(e) => setQuestionInput(e.target.value)}
                        />
                    </div>
                    <div>

                        <select
                            id="type"
                            value={questionType}
                            onChange={(e) => setQuestionType(e.target.value)}
                            className='border p-3'
                        >
                            <option value="text">Text</option>
                            <option value="checkbox">Checkbox</option>
                            <option value="radio">Radio</option>
                            <option value="file">File Upload</option>
                        </select>
                    </div>
                </div>

                <button onClick={addQuestion}>Add Question</button>
            </div>

            <div className="form-preview">
                <h2>Form Preview</h2>
                <form>
                    {questions.map((q, index) => (
                        <div key={index}>
                            <label>{q.question}:</label>
                            {q.type === 'checkbox' || q.type === 'radio' ? (
                                <input type={q.type} name={`question_${index}`} />
                            ) : q.type === 'file' ? (
                                <input type="file" name={`question_${index}`} />
                            ) : (
                                <input type="text" name={`question_${index}`} />
                            )}
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default FormBuilder;
