// ===== STATE MANAGEMENT =====
let conversationHistory = [];
const CURRENT_PROVIDER = 'claude';

// ===== DOM ELEMENTS =====
const apiKeyInput = document.getElementById('apiKey');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const conversationDiv = document.getElementById('conversation');
const statusDiv = document.getElementById('status');

// ===== STATUS UPDATES =====
function setStatus(message, type = 'idle') {
    console.log(`Status: ${message} (${type})`);
    statusDiv.textContent = message;
    statusDiv.className = `status ${type}`;
}

// ===== DISPLAY MESSAGE =====
function displayMessage(role, content) {
    console.log(`Displaying ${role} message:`, content);
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;
    
    const label = document.createElement('div');
    label.className = 'message-label';
    label.textContent = role === 'user' ? 'You' : 'Assistant';
    
    const text = document.createElement('div');
    text.textContent = content;
    
    messageDiv.appendChild(label);
    messageDiv.appendChild(text);
    conversationDiv.appendChild(messageDiv);
    
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
}

// ===== LLM API CALL =====
async function sendMessage(userMessage) {
    const apiKey = apiKeyInput.value.trim();
    
    if (!apiKey) {
        throw new Error('API key is required');
    }

    conversationHistory.push({
        role: 'user',
        content: userMessage
    });

    const assistantMessage = await sendMessageToLLM(
        CURRENT_PROVIDER,
        apiKey,
        conversationHistory
    );
    
    conversationHistory.push({
        role: 'assistant',
        content: assistantMessage
    });

    return assistantMessage;
}

// ===== SEND MESSAGE HANDLER =====
async function handleSend() {
    const userMessage = messageInput.value.trim();
    
    if (!userMessage) {
        console.log('Empty message, ignoring');
        return;
    }

    try {
        setStatus('Sending message...', 'working');
        sendButton.disabled = true;
        
        displayMessage('user', userMessage);
        messageInput.value = '';

        setStatus('Thinking...', 'working');
        
        const response = await sendMessage(userMessage);
        
        displayMessage('assistant', response);
        setStatus('Ready', 'idle');
        
    } catch (error) {
        console.error('Error:', error);
        setStatus(`Error: ${error.message}`, 'error');
    } finally {
        sendButton.disabled = false;
        messageInput.focus();
    }
}

// ===== EVENT LISTENERS =====
sendButton.addEventListener('click', handleSend);

messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
    }
});

console.log('Uncover app loaded - Increment 3 (Provider Abstraction)');
