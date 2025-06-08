class ChatManager {
	constructor() {
		this.chatElement = document.getElementById('chat-box');
		this.form = document.getElementById('message-form');
		this.input = document.getElementById('input');
		this.initEventListeners();
		this.loadInitialMessages();
	}

	initEventListeners() {
		this.form.addEventListener('submit', (e) => this.handleSubmit(e));
	}

	handleSubmit(e) {
		e.preventDefault();
		const prompt = this.input.value.trim();

		if (!prompt) return;

		this.addMessage('YOU', prompt);
		this.input.value = '';
		this.simulateReply();
	}

	addMessage(sender, text) {
		const message = document.createElement('div');
		message.className = `message ${sender.toLowerCase()}`;
		message.innerHTML = `<div class="label">${sender}</div>${text}`;
		this.chatElement.appendChild(message);
		this.chatElement.scrollTop = this.chatElement.scrollHeight;
	}

	simulateReply() {
		setTimeout(() => {
			const replyText = 'Presto...100 points!';
			this.addMessage('GENIE', replyText);
		}, 600);
	}
}

document.addEventListener('DOMContentLoaded', () => new ChatManager());
