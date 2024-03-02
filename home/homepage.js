document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login');
    const loginDropdown = document.getElementById('login_dropdown');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // ป้องกันการเปลี่ยนหน้าเว็บเมื่อคลิกที่ลิงก์

        // เปลี่ยนการแสดงผลของ dropdown เป็น block หรือ none ตามปัจจุบัน
        if (loginDropdown.style.display === 'block') {
            loginDropdown.style.display = 'none';
        } else {
            loginDropdown.style.display = 'block';
        }
    });
});





