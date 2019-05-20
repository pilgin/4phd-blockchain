import React from 'react'

function SuccessMessage (props) {
  return (
    <div className='form__error-wrapper js-form__err-animation'>
      <p className='form__success'>
        {props.message}
      </p>
    </div>
  )
}

SuccessMessage.propTypes = {
  message: React.PropTypes.string
}

export default SuccessMessage
