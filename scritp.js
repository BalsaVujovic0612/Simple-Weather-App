function Weather() {
    // Dobijanje vrednosti unete u input polje
    let city = document.getElementById('city').value;
    let apiKey = 'f419c7ef64e34c05f4af21d240873389';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Slanje zahteva API-ju
    fetch(apiUrl)
        .then(response => {
            // Provera da li je odgovor uspešan
            if (!response.ok) {
                // Bacanje greške ako grad nije pronađen
                throw new Error('There is no city with that name');
            }
            // Pretvaranje odgovora u JSON format
            return response.json();
        })
        .then(data => {
            // Izvlačenje temperature iz JSON odgovora
            const temperature = data.main.temp;
            const humidity1 = data.main.humidity
            // Prikazivanje temperature u HTML elementu
            document.getElementById('result').innerHTML = `Current temperature in ${city} is ${temperature} °C `;
            document.getElementById('humidity').innerText = `Humidity: ${humidity1}%`
            
        })

        .catch(error => {
            // Prikazivanje poruke o grešci
            document.getElementById('result').innerHTML = error.message;
        });
}
