function sendMessage(message) {
  fetch('https://vocab-trainer-ashy.vercel.app/api/chat', {  // your Vercel link here
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: message
        }
      ]
    })
  })
  .then(response => response.json())
  .then(data => {
    const reply = data.choices[0].message.content;
    displayMessage(reply, "assistant");
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
