import { decorate, observable, action, computed } from 'mobx'

class Store {
  messages = [
    { message: 'Example message.' },
  ]

  addMessage = message => {
    this.messages.push({
      message
    })
  }

  removeMessage = index => {
    this.messages.splice(index, 1)
  }

  get messageCount() {
    return this.messages.length
  }
}

decorate(Store, {
  messages: observable,
  addMessage: action,
  messageCount: computed
})

export default new Store()