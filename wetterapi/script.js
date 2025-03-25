document.getElementById("fetchWeather").addEventListener("click", function() {
    // Ort aus dem Eingabefeld
    const location = document.getElementById("locationInput").value.trim();

    if (location === "") {
        alert("Bitte einen gültigen Ort eingeben!");
        return;
    }

    // Anfrage an die API
    fetch(`https://wttr.in/${location}?format=%C+%t+%w+%p`)
        .then(response => response.text())
        .then(data => {
            // Ergebnis anzeigen
            document.getElementById("weatherResult").textContent = `Das Wetter in ${location}: ${data}`;
        })
        .catch(error => {
            console.error("Fehler beim Abrufen des Wetters:", error);
            alert("Das Wetter konnte nicht abgerufen werden. Bitte versuche es erneut.");
        });
});
