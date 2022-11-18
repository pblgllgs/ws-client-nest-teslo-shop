import { connectToServer } from './socket-client'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Websocket-client</h2>

    <input id="jwt-token" placeholder="Json web token" />
    <button id="btn-connect">Connect</button>
    <br />
    <span class="server-status" id="server-status">offline</span>
    <ul id="client-ul">
    </ul>
    <form id="message-form">
      <input id="message-input" placeholder="message" type="input" />
    </form>
    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
  </div>

`
// connectToServer()

const jwtToken = document.querySelector<HTMLInputElement>('#jwt-token')
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect')

btnConnect?.addEventListener('click', () => {

  if (jwtToken!.value.trim().length <= 0) return alert('Ingresa un JWT válido');

  connectToServer(jwtToken!.value)
})