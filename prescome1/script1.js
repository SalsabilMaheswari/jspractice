document.getElementById("registerButton").addEventListener("click", async function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const statusDiv = document.getElementById("status");

    // Periksa apakah input kosong
    if (!name || !email) {
        statusDiv.innerHTML = "Harap lengkapi semua data.";
        statusDiv.className = "status error";
        statusDiv.style.display = "block";
        return;
    }

    // Tampilkan pesan loading
    statusDiv.innerHTML = "Proses pendaftaran sedang berlangsung...";
    statusDiv.className = "status";
    statusDiv.style.display = "block";

    try {
        // Proses pendaftaran dengan delay simulasi
        await registerUser(name, email);
        // Tampilkan pesan sukses setelah pendaftaran selesai
        statusDiv.innerHTML = `Pendaftaran berhasil! Selamat datang, ${name}.`;
        statusDiv.className = "status success";
    } catch (error) {
        // Tampilkan pesan error jika gagal
        statusDiv.innerHTML = `Pendaftaran gagal: ${error.message}`;
        statusDiv.className = "status error";
    }
});

// Fungsi untuk mensimulasikan proses pendaftaran dengan delay
function registerUser(name, email) {
    return new Promise((resolve, reject) => {
        // Simulasi delay menggunakan setTimeout
        setTimeout(() => {
            const isSuccessful = Math.random() > 0.2; // 80% chance sukses
            if (isSuccessful) {
                resolve();
            } else {
                reject(new Error("Terjadi kesalahan pada server. Silakan coba lagi."));
            }
        }, 2000); // Simulasi pendaftaran selama 2 detik
    });
}
