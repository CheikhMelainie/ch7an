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
  const service = document.getElementById("service").value;
  const options = document.getElementById("options");

  options.innerHTML = "";

  if (!data[service]) return;

  data[service].forEach(item => {
    const opt = document.createElement("option");
    opt.value = item;
    opt.text = item;
    options.appendChild(opt);
  });
}

function send() {
  const service = document.getElementById("service").value;
  const option = document.getElementById("options").value;
  const id = document.getElementById("id").value;

  if (!service || !option || !id) {
    alert("❌ أكمل البيانات");
    return;
  }

  const message = `🔥 طلب جديد:
الخدمة: ${service}
الباقة: ${option}
ID: ${id}

💳 طرق الدفع:
📲 بنكيلي: 47085852
🏦 مصريفي: 43296090
🏦 السداد: 43296090
🏦 أمانتي: 43296090
🏦 كليك: 43296090

📸 يرجى إرسال لقطة شاشة التحويل`;

  const phone = "22243296090";

  // ✅ التصحيح المهم هنا
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}