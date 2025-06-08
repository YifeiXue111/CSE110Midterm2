// script.js
// GloboCorp GPT Genie chat functionality
// Version 1.0, loaded at runtime

// Mock replies simulating AI responses
const REPLIES = [
  "Cool!",
  "Awesome!",
  "Noice",
  "Killer idea",
  "Lowkey fire",
  "Fire",
  "Goated idea",
  "I hear you...",
  "Sounds like a plan"
];

// Sanitizes input to prevent XSS
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// Adds a message to the chat container
function addMessage(content, type) {
  const chat = document.getElementById('chat');
  if (!chat) {
    console.error('Chat container not found');
    return;
  }
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', type);
  messageDiv.textContent = `${type === 'user' ? 'You' : 'Bot'}: ${content}`;
  chat.appendChild(messageDiv);
  chat.scrollTop = chat.scrollHeight;
}

// Simulates a bot response with a delay
function simulateBotResponse(prompt) {
  setTimeout(() => {
    const reply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    addMessage(reply, 'bot');
  }, 500);
}

// Handles form submission
function handleSubmit(event) {
  event.preventDefault();
  const input = document.getElementById('input');
  if (!input) {
    console.error('Input field not found');
    return;
  }
  const prompt = sanitizeInput(input.value.trim());
  if (prompt === '') {
    alert('Please type a message!');
    return;
  }
  addMessage(prompt, 'user');
  input.value = '';
  simulateBotResponse(prompt);
}

// Initialize the app
function init() {
  const form = document.getElementById('chat-form');
  if (!form) {
    console.error('Form not found');
    return;
  }
  form.addEventListener('submit', handleSubmit);
  console.log("GloboCorp's GPT Genie 1.0 loaded @ " + new Date());
}

document.addEventListener('DOMContentLoaded', init);
