import React from 'react';
import ReactDOM from 'react-dom';
//for version 18 >
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

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
