import React from 'react';
import openSocket from 'socket.io-client';

class WebSocket extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subscribed: false,
      count: 0,
    }
  }

  componentDidMount() {
    const { subscribed } = this.state;

    if (!subscribed) {
      const  socket = openSocket('http://localhost:8000');
      socket.on('timer', value => {
        this.setState({
          subscribed: true,
          values: value,
          count: this.state.count + 1,
        });
      });
      socket.emit('subscribeToTimer', 4000);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if( prevState.count !== this.state.count) {
      this.props.onChange(this.state.values);
    }    
  }

  render (){
    return (
      <button onClick={() => console.log(this.state)}>click</button>
    );
  }
}

export default WebSocket;
