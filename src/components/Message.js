import React from 'react'

const Message = ({ message, removeMessage }) => (
  <div className="rounded flex justify-between items-center w-full bg-dark text-white mt-2 p-4 shadow">
    <span className="text-xl">{message.message}</span>
    <div>
      <button className="rounded bg-red-light hover:bg-red p-2 text-white font-bold" onClick={() => removeMessage()}>
        <i className="fas fa-trash text-white"></i>
        <span className="ml-2">Remove</span>
      </button>
    </div>
  </div>
)

export default Message