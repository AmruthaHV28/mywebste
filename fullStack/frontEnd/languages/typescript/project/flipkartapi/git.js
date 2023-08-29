document.addEventListener("DOMContentLoaded", async () => {
    const dataContainer = document.getElementById("data-container");

    try {
        const response = await fetch("https://api.github.com/users");
        const apiData = await response.json();

        // Assuming the API response is an array of objects
        apiData.forEach((item) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("data-item");

            itemElement.innerHTML = 
                <h2>${item.login}</h2>
                
            

            dataContainer.appendChild(itemElement);
        });
    } catch (error) {
        console.error("Error fetching API data:", error);
    }
});
