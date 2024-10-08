document.addEventListener('DOMContentLoaded', () => {
    const destinationForm = document.getElementById('destinationForm');
    if (destinationForm) {
        destinationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const destinationInput = document.getElementById('destination').value;
            localStorage.setItem('locationNode', destinationInput);
            window.location.href = 'display.html';
        });
    }

    const locationOutput = document.getElementById('text-2');
    const storedLocation = localStorage.getItem('locationNode');
    locationOutput.textContent = storedLocation; 

    const destinaionOutput = document.getElementById('node-out');
    destinaionOutput.textContent = 'dsaa';
    

});

document.addEventListener('DOMContentLoaded', function(event) {

    window.addEventListener('deviceorientation', (eventData) => {
    // gamma: Tilting the device from left to right. Tilting the device to the right will result in a positive value.
    const tiltLR = eventData.gamma;
    // beta: Tilting the device from the front to the back. Tilting the device to the front will result in a positive value.
    const tiltFB = eventData.beta;
    // alpha: The direction the compass of the device aims to in degrees.
    const dir = eventData.alpha
    // Call the function to use the data on the page.
    deviceOrientationHandler(tiltLR, tiltFB, dir);
    }, false);
    
    function deviceOrientationHandler(tiltLR, tiltFB, dir) {
        const compassDisc = document.getElementById('compassDiscImg');
        compassDisc.style.transform = `rotate(${dir}deg)`;
        compassDisc.style.webkitTransform = `rotate(${dir}deg)`;
        compassDisc.style.MozTransform = `rotate(${dir}deg)`;
    }
  
  });