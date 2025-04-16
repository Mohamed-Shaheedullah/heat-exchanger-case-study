// Function to load content into a target element
async function loadContent(url, elementId) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("HTTP error " + response.status);
        const content = await response.text();
        document.getElementById(elementId).innerHTML = content;
    } catch (error) {
        document.getElementById(elementId).innerHTML = `<p>Error loading ${url}</p>`;
        console.error(error);
    }
}

function finish() {
    if (confirm("Are you sure you wish to exit the case study and close this window?")) {
        window.close();
    }
}



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tasknit-link').addEventListener('click', function(event) {
        event.preventDefault();
    
        const rightColumn = document.getElementById('right-column');
        rightColumn.innerHTML = '';
        const img = document.createElement('img');
        img.src = 'images/plant.gif';
        img.alt = 'Plant';
        rightColumn.appendChild(img);

        const text = document.createElement('p');
        text.textContent = 'This is a general schematic of the plant. The particular component of interest is the economizer towards the right';
        rightColumn.appendChild(text);
    });

    document.getElementById('taskecon-link').addEventListener('click', function(event) {
        event.preventDefault();
        const rightColumn = document.getElementById('right-column');
        rightColumn.innerHTML = '';
        const img = document.createElement('img');
        img.src = 'images/htschm.gif';
        img.alt = 'HTSCHM';
        rightColumn.appendChild(img);

        const text = document.createElement('p');
        text.textContent = "The economizer is a shell and tube heat exchanger. There are many components but the materials selection exercise will apply to the four labelled above."
        rightColumn.appendChild(text);
    });

    document.getElementById('index-link').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });

    document.getElementById('continue-link').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '../operate/hwork1.htm';
    });
});