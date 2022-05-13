import React from 'react';
import ReactDOM from 'react-dom';
//for version 18 >
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/todo.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//     <StrictMode>
//       <App />
//     </StrictMode>,
//   );
