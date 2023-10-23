document.getElementById('fetchMyBioButton').addEventListener('click', () => {
    fetch('C:/Users/J RAKESH KUMAR/OneDrive/Desktop/assignemnt/Assignment2/nbk.json')
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
            const jsonDisplay = document.getElementById('jsonDisplay');
            jsonDisplay.innerHTML = 'Name mani';
        });
});

document.getElementById('fetchDummyDataButton').addEventListener('click', () => {
    fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
            const jsonDisplay = document.getElementById('jsonDisplay');
            jsonDisplay.innerHTML = 'Error fetching JSON data. Please try again.';
        });
});

function displayData(data) {
    const jsonDisplay = document.getElementById('jsonDisplay');
    jsonDisplay.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}