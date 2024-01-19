import React from 'react'


const CreateNote = ({inputText, setInputText, saveHandler}) => {
    const char= 250; // limit is 250 character 
    const charLimit = char - inputText.length; //  limited character 
  return (
    <div className='note'>
        <textarea
        cols={10}
        rows={5}
        placeholder='Add notes is here....'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={250}
        >
        </textarea>
        <div className='note_footer'>
            <span className='label'>{charLimit} Left</span>
            <button className='note_save' onClick={saveHandler}>Add Block</button>
        </div>
    </div>
  )
}

export default CreateNote