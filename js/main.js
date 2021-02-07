const btn = document.querySelector("#button");
const text = document.querySelector("#text");
btn.addEventListener("click", () => {
    console.log("click")


    fetch("https://cat-fact.herokuapp.com/facts")
        .then(res => res.json())
        .then(function (data) {
            console.table(data);
            const date = data[2].updatedAt;
            const fact = data[0].text;
            text.textContent = fact;
        })
})