// script.js
document.getElementById('timeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const minutes = parseFloat(document.getElementById('minutes').value) || 0;
    const seconds = parseFloat(document.getElementById('seconds').value) || 0;
    const time = (minutes * 60) + seconds;
    const power = parseFloat(document.getElementById('power').value);
    const powers = [500, 600, 700];
    let results = {};

    for (let p of powers) {
        if (p !== power) {
            let newTime = (time * power) / p;
            let newMinutes = Math.floor(newTime / 60);
	    
            let newSeconds = Math.floor(newTime % 60);
            results[p + 'W'] = `${newMinutes}分 ${newSeconds.toFixed(0)}秒`;
        }
    }

    displayResults(results);
});

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h2>計算結果:</h2>';
    for (let [power, time] of Object.entries(results)) {
        resultsDiv.innerHTML += `<p>${power}: ${time}</p>`;
    }
}
