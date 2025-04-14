document.addEventListener('DOMContentLoaded', function() {
    const continueLink = document.getElementById('continueLink');

    continueLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.open("tasknit.htm", "output", "toolbar=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes");
    });
});