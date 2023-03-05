const chatLog = document.querySelector(".chat-log");
const chatInput = document.querySelector(".chat-input input");
const sendButton = document.querySelector(".chat-input button");

function sendMessage() {
  const message = chatInput.value.trim();
  if (message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "outgoing");
    messageElement.innerHTML = `
      <div class="message-text">${message}</div>
      <div class="message-time">${getTime()}</div>
    `;
    chatLog.appendChild(messageElement);
    chatInput.value = "";
    chatLog.scrollTop = chatLog.scrollHeight;
  }
}

function getTime() {
  const now = new Date();
  const hours = now
