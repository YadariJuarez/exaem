const API_KEY = "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",
prompt = document.querySelector("#pregunta"),
 button = document.querySelector("#buscar"),
 res = document.querySelector("#music");
 
 button.addEventListener("click", async () => {
  const response = await getCompletion(prompt.value);
  res.innerHTML = response.choices[0].text;
});

async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: "dame la infpormacion de donde provienen y el top 10 de las mejor" +prompt,
      max_tokens: 150,
    }),
  }); 

  const data = await response.json();
  return data;
}


