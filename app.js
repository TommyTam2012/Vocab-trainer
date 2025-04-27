async function sendMessage() {
  const input = document.getElementById("user-input").value;

  const response = await fetch('https://your-proxy-server.vercel.app/api/chat', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: input
        }
      ]
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div class="user-msg">You: ${input}</div>`;
  chatBox.innerHTML += `<div class="ai-msg">AI: ${reply}</div>`;

  document.getElementById("user-input").value = ""; // Clear input
}
