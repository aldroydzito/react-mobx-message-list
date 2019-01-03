import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

class MessageForm extends Component {

  handleAddMessage = e => {
    e.preventDefault()
    const message = this.refs.message
    if (message.value === '') return
    this.props.Store.addMessage(message.value)
    message.value = ''
  }

  render() {
    return (
      <form onSubmit={e => this.handleAddMessage(e)}>
        <div className="flex w-1/2 items-center mt-4 items-stretch">
          <div
            className="rounded flex flex-1 items-center bg-darker text-lg text-white p-2"
          >
            <i className="fas fa-search text-grey-darker ml-1 text-xs"></i>
            <input
              ref="message"
              type="text"
              placeholder="Add message..."
              className="w-full bg-transparent text-white border-transparent active:border-none px-2"
            />
          </div>
          <button
            type="submit"
            className="rounded flex items-center bg-blue hover:bg-blue-dark p-2 px-4 ml-2 text-white text-sm font-bold outline-none"
          >
            <i className="fas fa-paper-plane text-xs"></i>
            <span className="ml-2">Add message</span>
          </button>
        </div>
      </form>
    )
  }
}

export default inject('Store')(observer(MessageForm));