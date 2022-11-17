import { connectToServer } from './socket-client'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Websockets-client</h1>
    <span id="server-status">offline</span>
    <ul id="client-ul">
      
    </ul>
  </div>
`

connectToServer()