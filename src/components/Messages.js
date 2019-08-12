import React from 'react'
import PropTypes from 'prop-types'

const Messages = ({message, author}) => {
    <p>
        <i>{author}</i> : {message}
    </p>
}

Messages.PropTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Messages