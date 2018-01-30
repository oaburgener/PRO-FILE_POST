import React from 'react'

const Form = ()=> {

  return (
    <div>
      <div className='guidelines-container'>
        <h2 className="form-headers">Curious about submitting an article?</h2>
        <p className="form-text">Welcome to The Post! We welcome all submissions from experienced athletes. Please read the submission guidelines below. </p>
        <h3 className="form-headers">Submission Guidelines</h3>
        <p className="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="form-style-5">
        <form>
          <fieldset>
          <legend>Author Info</legend>
          <legend>Name</legend>
          <input type="text" name="field1" placeholder="Your Name *"/>
          <input type="email" name="field2" placeholder="Your Email *"/>
          <legend>Submission</legend>
          <textarea name="field3" placeholder="Title*"></textarea>
          </fieldset>
          <fieldset>
          <textarea name="field3" placeholder="Text*"></textarea>
          </fieldset>
        <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Form
