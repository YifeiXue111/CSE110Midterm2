// Handle chat functionality for GloboCorp GPT Genie
// Author: Refactored by xAI Team
// Contact: support@xai.com for further assistance

class ChatManager {
	constructor() {
		this.messages = [];
		this.chatElement = document.getElementById('chat');
		this.form = document.getElementById('message-form');
		this.input = document.getElementById('input');
		this.initEventListeners();
		console.log('GloboCorp GPT Genie 2.0 loaded @', new Date());
	}

	initEventListeners() {
		this.form.addEventListener('submit', (e) => this.handleSubmit(e));
	}

	handleSubmit(e) {
		e.preventDefault();
		const prompt = this.input.value.trim();

		if (!prompt) {
			alert('Please enter a wish!');
			return;
		}

		this.addMessage('You', prompt);
		this.input.value = '';
		this.simulateReply();
	}

	addMessage(sender, message) {
		this.messages.push({ sender, message });
		this.chatElement.innerHTML += `<div class="message ${sender.toLowerCase()}">${sender}: ${message}</div>`;
		this.chatElement.scrollTop = this.chatElement.scrollHeight;
	}

	simulateReply() {
		const replies = ["Cool!", "Awesome!", "Noice", "Killer idea", "Lowkey fire", "Fire", "Goated idea", "I hear you...", "Sounds like a plan"];
		setTimeout(() => {
			const reply = replies[Math.floor(Math.random() * replies.length)];
			this.addMessage('Bot', reply);
		}, 500);
	}
}

document.addEventListener('DOMContentLoaded', () => new ChatManager());
