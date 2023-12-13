export function phoneNumberPulse() {
    const btnPulsePhone = document.querySelector(".btn-pulse-phone");

    // Add the "pulse" class initially
    btnPulsePhone.classList.add("pulse");

    // Set a timeout to remove the "pulse" class after 5 seconds
    setTimeout(() => {
        btnPulsePhone.classList.remove("pulse");
    }, 5000);
}





  
  