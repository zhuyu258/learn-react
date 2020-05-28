import React from 'react';

// 创建上下文
const ctx = React.createContext();
// 导出上下文中的生产和消费者
export const { Provider,Consumer } = ctx;

export default ctx;
