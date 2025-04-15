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

// Load content on page load
// window.onload = function () {
//     loadContent('first.html', 'main');
//     loadContent('homdat.html', 'output');
// }

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tasknit-link').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'tasknit.htm';
    });

    document.getElementById('taskecon-link').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'taskecon.htm';
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