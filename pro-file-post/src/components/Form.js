import React from 'react'

const Form = ()=> {

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
          <fieldset>
            <p id="legend" className="form-headers">Submissions</p>
            <legend className="form-field-submission">Name <span className="orange">*</span></legend>
              <input className="form-small-input" type="text" name="text"/>
            <legend className="form-field-submission">Email <span className="orange">*</span></legend>
              <input className="form-small-input" type="email" name="email"/>
            <legend className="form-field-submission">Title <span className="orange">*</span></legend>
              <textarea className="form-large-input" name="title"></textarea>
          </fieldset>
          <fieldset>
            <legend className="form-field-submission">Text <span className="orange">*</span></legend>
              <textarea id="article-submission-text"  className="form-large-input" name="text"></textarea>
          </fieldset>
            <legend className="form-field-submission">Image URL</legend>
              <input className="form-small-input" type="text" name="image"/>
            <input className="form-button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Form
