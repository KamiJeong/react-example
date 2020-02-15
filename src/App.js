import React, { Component } from 'react';
import * as commonUtils from './utils/common';

import TodoList from './components/TodoList';
import Btn from './components/Btn';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { id: 1, text: 'name 1' },
        { id: 2, text: 'name 2' },
        { id: 3, text: 'name 3' },
        { id: 4, text: 'name 4' },
      ],
      btnText: 'Primary',
    };
  }

  onClickPrimaryBtn = () => {
    this.setState({ btnText: 'wawa' }, () => commonUtils.alertMessage('wawawa'));
  };

  render() {
    const { todoList, btnText } = this.state;
    return (
      <div>
        <Btn className="default">Default</Btn>
        <Btn className="primary" color="primary" onClick={this.onClickPrimaryBtn}>
          {btnText}
        </Btn>
        <Btn className="danger" color="danger" onClick={() => commonUtils.alertMessage('danger')}>
          Danger
        </Btn>
        {/* Input */}
        <div>
          <form action={e => e.preventDefault()}>
            <input type="text" /> <button type="button">button</button>
          </form>
        </div>
        {/* Todos */}
        <TodoList list={todoList} />
      </div>
    );
  }
}

export default App;
