const amountMMk = document.getElementById("mmkamount");
      const currentrate = document.getElementById("currentrate");
      const resultElement = document.getElementById("result");
      const btn = document.getElementById("btn");
      const Store = document.getElementById("store");
      const results = document.getElementById("results");
      const clear = document.getElementById("clear");

      btn.onclick = () => {
        const result = mmkamount.value / currentrate.value;

        resultElement.innerText = `${result.toFixed(2)}USD`;
        mmkamount.value = currentrate.value = null;
      };
      Store.onclick = () => {
        results.innerHTML += `<li>${resultElement.innerText}</li>`;
        resultElement.innerText = null;
      };
      clear.onclick = () => {
        resultElement.innerText = null;
      };