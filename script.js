const dayText = document.getElementById('day');
const timeText = document.getElementById('time');

function hari() {
    const namaHari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'];
    const getTanggal = new Date();
    let hari = namaHari[getTanggal.getDay()];

    const tanggal = { day: 'numeric', month: 'long', year: 'numeric' };
    const formatTanggal = getTanggal.toLocaleDateString('id-ID', tanggal);
    dayText.innerText = `${hari}, ${formatTanggal}`
}
function waktu() {
    const getTanggal = new Date();
    const waktu = getTanggal.toLocaleTimeString('id-ID');
    timeText.innerText = waktu
}
hari();
waktu()
setInterval(() => {
    hari();
    waktu()
}, 1000)