document.getElementById("loadButton").addEventListener("click", loadUsers);

async function loadUsers() {
    // Tampilkan pesan loading
    const userListDiv = document.getElementById("userList");
    userListDiv.innerHTML = "Membaca data pengguna...";

    try {
        // Ambil data pengguna dengan delay (simulasi)
        const users = await getUsers();
        // Tampilkan data pengguna
        displayUsers(users);
    } catch (error) {
        // Tampilkan pesan error jika terjadi kesalahan
        userListDiv.innerHTML = "Gagal memuat data pengguna.";
    }
}

function getUsers() {
    // Fungsi ini meniru pengambilan data dari API dengan delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;  // Ubah menjadi false untuk mensimulasikan error
            if (success) {
                resolve([
                    { name: "Alice", age: 25 },
                    { name: "Bob", age: 30 },
                    { name: "Charlie", age: 22 }
                ]);
            } else {
                reject("Gagal mengambil data.");
            }
        }, 5000); // Simulasi delay 2 detik
    });
}

function displayUsers(users) {
    const userListDiv = document.getElementById("userList");
    userListDiv.innerHTML = ''; // Hapus teks loading

    // Tampilkan setiap pengguna
    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user");
        userDiv.innerHTML = `<strong>${user.name}</strong> (Age: ${user.age})`;
        userListDiv.appendChild(userDiv);
    });
}
