import React from 'react';
import PropTypes from 'prop-types';
import Message from './Messages'

const MessagesList = ({messages}) => (
    <section id="messages-list">
        <ul>
            {messages.map(message => (
                <Message 
                key={message.id}
                {...message}
                />
            ))}
        </ul>
    </section>
)

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MessagesList
