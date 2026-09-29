// Open Booking Pop-up Modal
function openBooking(zoneName) {
    const modal = document.getElementById('bookingModal');
    const zoneTitle = document.getElementById('selectedZone');
    
    zoneTitle.innerText = zoneName.toUpperCase();
    modal.style.display = 'flex';
}

// Close Modal
function closeBooking() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Confirm Booking Form Submission
function confirmBooking(event) {
    event.preventDefault(); // Page refresh hone se rokega
    alert('🔥 Slot Reserved Successfully! We will send confirmation on your phone number.');
    closeBooking();
}

// Close Modal when clicking outside the box
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        closeBooking();
    }
}