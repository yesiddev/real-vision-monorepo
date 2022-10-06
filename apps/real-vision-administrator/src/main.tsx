import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Application'
import './styles/variables.css'
import './styles/main.css'
import './styles/general.css'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
