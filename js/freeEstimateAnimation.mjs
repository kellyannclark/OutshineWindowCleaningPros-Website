export function startPulseAnimation() {
    console.log('Start pulse animation');
    const pulseElement = document.querySelector('.pulse');
    console.log("pulse element", pulseElement);

    if (pulseElement) {
        pulseElement.classList.add('animate-pulse');

        // Set a timeout for 10 seconds
        setTimeout(function () {
            pulseElement.classList.remove('animate-pulse');
        }, 10000);
    } else {
        console.error('Pulse element not found!');
    }
}




  
  