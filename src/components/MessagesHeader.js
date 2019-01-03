import React from 'react'

const MessagesHeader = ({ messagesCount }) => (
  <div>
    <div className="flex justify-between items-center">
      <h1>MobX Messages</h1>
      <span className="text-xs">{messagesCount} messages</span>
    </div>
    <p className="mt-4 text-grey text-sm">A simple message list using MobX.</p>
  </div>
)

export default MessagesHeader