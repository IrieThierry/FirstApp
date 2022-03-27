import React from 'react';
import { message } from 'antd';

const Messages = () => {
const info = () => {
  message.info('This is a normal message');
}

    return {info}
}

export default Messages;