function updateHarga() {
    const selectedOption = document.getElementById("tujuan").options[document.getElementById("tujuan").selectedIndex];
    const hargaTiketInput = document.getElementById("hargaTiket");
    hargaTiketInput.value = selectedOption.getAttribute("data-harga");
  }

  function hitungTotal(){
    const nama = document.getElementById("nama").value;
    const hargaTiket = parseFloat(document.getElementById("hargaTiket").value);
    const jumlahTiket = parseInt(document.getElementById("jumlahTiket").value);
    const member = document.getElementById("member").checked;
    const diskon = parseFloat(document.getElementById("diskon").value);

    let totalBayar = hargaTiket * jumlahTiket;

    if (member) {
      totalBayar *= 0.9; // Diskon 10% for members
    }

    if (!isNaN(diskon) && diskon > 0 && diskon <= 100) {
      totalBayar *= (100 - diskon) / 100;
    }

    document.getElementById("totalBayar").value = totalBayar;

    // Menampilkan popup
    const namaPemesan = document.getElementById("namaPemesan");
    const totalHarga = document.getElementById("totalHarga");

    namaPemesan.textContent = "Nama Pemesan: " + nama;
    totalHarga.textContent = "Total Harga: Rp " + totalBayar.toFixed(2);

    const popupModal = new bootstrap.Modal(document.getElementById('popupModal'));
    popupModal.show();
}