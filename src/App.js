import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

import MessagesHeader from './components/MessagesHeader'
import MessageForm from './components/MessageForm'
import Message from './components/Message'

class App extends Component {

  handleRemoveMessage = i => {
    this.props.Store.removeMessage(i)
  }

  render() {
    const { messages, messageCount } = this.props.Store
    return (
      <div className="min-h-screen bg-darker font-sans text-white">
        <div className="py-12 container mx-auto">
          <div className="bg-dark p-8">
            <MessagesHeader messagesCount={messageCount} />
            <MessageForm />
          </div>
          <div className="mt-6">
            {messages.map((message, i) => 
              <Message
                key={i}
                message={message}
                removeMessage={() => this.handleRemoveMessage(i)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default inject('Store')(observer(App));
