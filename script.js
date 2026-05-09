const data = {
  pubg: [
    "60UC - 50MRU","120UC - 100MRU","180UC - 150MRU","360UC - 250MRU",
    "420UC - 300MRU","660UC - 450MRU","720UC - 500MRU",
    "1200UC - 850MRU","1800UC - 1000MRU","3850UC - 2000MRU"
  ],
  fifa: [
    "100 - 50MRU","520 - 250MRU","1070 - 500MRU",
    "2200 - 1000MRU","5750 - 2500MRU","12000 - 5000MRU"
  ],
  efootball: [
    "130 - 60MRU","300 - 150MRU","550 - 250MRU",
    "750 - 350MRU","1040 - 500MRU","2130 - 1000MRU",
    "3250 - 1350MRU","5700 - 2200MRU"
  ],
  snap: ["MOIS3 - 300MRU","MOIS6 - 600MRU","MOIS12 - 1200MRU"],
  netflix: ["MOIS1 - 250MRU","MOIS3 - 600MRU","MOIS6 - 1100MRU"],
  appstore: ["250MRU - 5$","500MRU - 10$","1000MRU - 20$","1500MRU - 30$"],
  tiktok: ["70 - 50MRU","350 - 200MRU","700 - 400MRU","1000 - 550MRU","1500 - 800MRU"]
};

function loadOptions() {
  let service = document.getElementById("service").value;
  let options = document.getElementById("options");

  options.innerHTML = "";

  if (!data[service]) return;

  data[service].forEach(item => {
    let opt = document.createElement("option");
    opt.text = item;
    options.add(opt);
  });
}

function send() {
  let service = document.getElementById("service").value;
  let option = document.getElementById("options").value;
  let id = document.getElementById("id").value;

  if (!service || !option || !id) {
    alert("❌ أكمل البيانات");
    return;
  }

  let message = `🔥 طلب جديد:
الخدمة: ${service}
الباقة: ${option}
ID: ${id}

💳 بنكيلي: 47085852
🏦 مصريفي: 47085852
🏦 السداد: 47085852
🏦 كليك: 47085852

📸 يرجى إرسال لقطة شاشة التحويل`;

  let phone = "22247085852";
  let url = "https://wa.me/${phone}?text=${encodeURIComponent(message)}";

  window.open(url, "_blank");
}