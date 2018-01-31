import React from 'react'
import { MenuItem, DropdownButton } from 'react-bootstrap'


const Form = ({createArticle})=> {

  return (
    <div>
      <div className='guidelines-container'>
        <h1 id="form-title">Curious about submitting an article?</h1>
        <p className="form-text">Welcome to The Post! We welcome all submissions from experienced athletes. Please read the submission guidelines below. </p>
        <p className="form-headers">Submission Guidelines</p>
        <p className="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="submission-form">
        <form>
          <p id="legend" className="form-headers">Submissions</p>
          <legend className="form-field-submission">Name <span className="orange">*</span></legend>
            <input id="name" className="form-small-input" type="text" name="text" required/>
          <legend className="form-field-submission">Title <span className="orange">*</span></legend>
            <textarea id="title" className="form-large-input" name="title" required></textarea>
          <legend className="form-field-submission">Summary <span className="orange">*</span></legend>
          <legend id="summary" className="form-field-submission">Please summarize your article in 1-2 sentences.</legend>
            <textarea id="summary" className="form-large-input" name="summary" required></textarea>
          <legend className="form-field-submission">Text <span className="orange">*</span></legend>
            <textarea id="article-body" id="article-submission-text" className="form-large-input" name="text" required></textarea>
          <legend className="form-field-submission">Sport <span className="orange">*</span></legend>
            <select id="dropdown">
              <option value="baseball">baseball</option>
              <option value="basketball">basketball</option>
              <option value="soccer">soccer</option>
              <option value="hockey">hockey</option>
              <option value="football">football</option>
            </select>
          <legend className="form-field-submission">Image URL</legend>
            <input id="image" className="form-small-input" type="text" name="image" />
          <div onClick={()=>{createArticle()}}>
            <input className="form-button" type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
