const photo = {
  strada: ["https://www.autocerto.com/fotos/2475/3925059/1_025011.jpg", "https://imgserver.autocarro.com.br/fotos/grande/1920285_fiat-strada-1-3-freedom-8v-cd-2022-branca_26419e.jpg", "https://catarina-prd.s3.sa-east-1.amazonaws.com/079cdf2baca463dfa5bb9612816a2822.jpeg"],
  onix: ["https://www.autocerto.com/fotos/213/2416478/1_060554.jpg", "https://carango.com.br/f.php?cc=0&h=620&src=https%3A%2F%2Fcarango.nyc3.digitaloceanspaces.com%2Fimages%2Fveiculos%2F2022%2F07%2Fchevrolet-onix-2021-1-0-turbo-flex-premier-automatico-gasolina-e-alcool-104750-2dmfyj.jpg&w=810&zc=1", "https://s3.ecompletocarros.dev/images/lojas/385/veiculos/255661/veiculoInfoVeiculoImagesMobile/vehicle_image_1758915916_d41d8cd98f00b204e9800998ecf8427e.jpeg"],
  tcross: ["https://www.autocerto.com/fotos/176/1731454/13.jpg", "https://i.vrum.com.br/wrtEgmJa4Lh2MIgwN4m9LFFW_mE%3D/fit-in/1200x1200/imgs.patio.vrum.com.br/anuncio/vrum/8/d/e/8debfbd9193e609ebce794392c167e4f/353594336_246834660_g.jpg", "https://uploads.vrum.com.br/2022/08/6dd53d94-vw-t-cross-comfortline-200-tsi-branco-com-tampa-traseira-aberta-deixando-porta-malas-a-mostra.jpg"],
  tracker: ["https://www.autocerto.com/fotos/5/1869180/15.jpg", "https://ms.sbwebservices.net/photos/8e50753d-d5ef-4717-a116-6aa98001087f.jpg?h=502&w=825", "https://cdn.autopapo.com.br/box/uploads/2020/05/11211852/chevrolet-tracker-premier-2021-porta-malas.jpg"],
  polo: ["https://www.autocerto.com/fotos/5967/4329343/1_025751.jpg", "https://cdn.autopapo.com.br/box/uploads/2022/10/04161531/volkswagen-polo-1.0-mpi-2023-interior-painel.jpg", "https://images.usadosbr.com/manipulatedImages/media/gallery/86/20/ee/volkswagen-polo-hatch-1-0-200-tsi-comfortline-2022-recife-pe-8ee9c7c3-FT--5-image-760x570-crop.webp"],
  corolla: ["https://autobusiness.com.br/_next/image?q=100&url=https%3A%2F%2Fd20f7dynuzdeeg.cloudfront.net%2Frykmotors%2F6006%2Falbum-Album-de-TOYOTA-COROLLA-A5328-6242056d3eaf1.jpg&w=828", "https://images.usadosbr.com/manipulatedImages/media/gallery/79/31/06/toyota-corolla-2-0-xei-2019-sao-jose-do-rio-preto-sp-a3a454dc-uv-image-760x570-crop.jpg", "https://s2-autoesporte.glbimg.com/W4imY6ZqpiS9irziea2pIHxqvbQ%3D/0x0%3A620x413/1000x0/smart/filters%3Astrip_icc%28%29/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/E/B/xucPBUQLC0arDAAVzVQA/2019-09-19-portamalas.jpg"],
  toro: ["https://www.autocerto.com/fotos/1983/3647641/1_060404.jpg", "https://cdn.acritica.net/upload/dn_arquivo/2020/07/fiat-toro-freedom-20-turbodiesel-at9.jpg", "https://www.autocerto.com/fotos/3501/4331399/9_055950.jpg"],
  hb20s: ["https://cdn.carzin.com.br/_upload/carros/2024/03/09/hyundai-hb20s-2023-branco-346186-2.jpg", "https://www.autocerto.com/fotos/5913/3880862/1_103415.jpg", "https://img.olx.com.br/thumbs700x500/21/214528827728184.webp"],
  kwid: ["https://www.autocerto.com/fotos/3484/2423116/1.jpg?u=20250104093957", "https://www.autocerto.com/fotos/3484/2423116/11.jpg?u=20250104093957", "https://www.autocerto.com/fotos/3484/2423116/6.jpg?u=20250104093957"],
  renegade: ["https://s3.ecompletocarros.dev/images/lojas/171/veiculos/32376/veiculoInfoVeiculoImagesMobile/vehicle_image_1596746469_b0625b6afef083d1f2ced8dde2a6cbd0.jpeg", "https://media.ed.edmunds-media.com/jeep/renegade/2020/izmo/2020_jeep_renegade_4dr-suv_altitude_fd_izmo_1_500.jpg", "https://media.ed.edmunds-media.com/jeep/renegade/2020/izmo/2020_jeep_renegade_4dr-suv_trailhawk_ca_izmo_1_500.jpg"],
  hrv: ["https://images.usadosbr.com/manipulatedImages/media/gallery/a6/86/5f/honda-hr-v-1-8-exl-2020-cuiaba-mt-188691e7-kF--0-image-760x570-crop.webp", "https://cdcssl.ibsrv.net/autodata/images/?img=CDC_2020HOS070008.jpg&width=536", "https://cdcssl.ibsrv.net/autodata/images/?img=CDC_2020HOS070011.jpg&width=536"],
  kicks: ["https://s3.ecompletocarros.dev/images/lojas/222/veiculos/151525/veiculoInfoVeiculoImagesMobile/vehicle_image_1688636003_d41d8cd98f00b204e9800998ecf8427e.jpeg", "https://carango.com.br/f.php?cc=0&h=620&src=https%3A%2F%2Fcarango.nyc3.digitaloceanspaces.com%2Fimages%2Fveiculos%2F2024%2F03%2Fnissan-kicks-2020-1-6-16v-flex-sv-4p-xtronic-122840-ndx469.jpg&w=810&zc=1", "https://www.autocerto.com/fotos/245/778263/19.jpg"],
  nivus: ["https://cdn.motor1.com/images/mgl/7ZZ8Z6/s3/volkswagen-nivus-highline-200tsi-2022.jpg", "https://www.autoo.com.br/fotos/2020/10/1280_960/volkswagen_nivus_2021_1_25102020_35391_1280_960.jpg", "https://www.autoo.com.br/fotos/2021/7/1280_960/volkswagen_nivus_2022_7_29072021_49802_1280_960.jpg"],
  s10: ["https://www.carpointnews.com.br/wp-content/uploads/2019/10/Chevrolet-S10-High-Country-2020-CPN-8.jpg", "https://www.carpointnews.com.br/wp-content/uploads/2019/10/Chevrolet-S10-High-Country-2020-CPN-13.jpg", "https://www.carpointnews.com.br/wp-content/uploads/2019/10/Chevrolet-S10-High-Country-2020-CPN-9.jpg"],
  hilux: ["https://imgserver.autocarro.com.br/fotos/grande/1557552_toyota-hilux-2-8-srv-cd-4x4-2020-branca_348f2a.jpg", "https://img.olx.com.br/images/59/599570628032909.webp", "https://www.autocerto.com/fotos/2769/3811688/1_021020.jpg"],
  virtus: ["https://athenamotors.com.br/media/c%3Aoriginal/6/8/6/0bb7879b3efffabecebd05f8c070b.jpg", "https://autoagora.com.br/wp-content/uploads/2022/12/5-avaliacao-vw-virtus-highline-comfortline-2022-painel-highline-autoagora-com-br.jpg.jpg", "https://autoagora.com.br/wp-content/uploads/2022/12/8-avaliacao-vw-virtus-highline-comfortline-2022-porta-malas-autoagora-com-br.jpg-300x225.jpg"],
  argo: ["https://upload.wikimedia.org/wikipedia/commons/6/6d/2023_Fiat_Argo_1.3_Drive_%28facelift%2C_Brazil%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/2/2e/Interior_Fiat_Argo_1.0_2022_2.jpg", "https://uploads.vrum.com.br/2023/03/11a2c48d-fiat-argo-automatico-2023-vermelho-porta-malas-1024x683.jpg"],
  civic: ["https://upload.wikimedia.org/wikipedia/commons/9/9f/2020_Honda_Civic_1.5_TC-P.jpg", "https://cdcssl.ibsrv.net/autodata/images/?img=CDC_2020HOC020038.jpg&width=536", "https://cdcssl.ibsrv.net/autodata/images/?img=CDC_2020HOC020041.jpg&width=536"],
  creta: ["https://cdn.motor1.com/images/mgl/7qYg7/s3/hyundai-creta-2022.jpg", "https://cdn.motor1.com/images/mgl/yrXVo/s1/painel-do-hyundai-creta-platinum-1.0t-2022.jpg", "https://s2-autoesporte.glbimg.com/j6iQvSzVfqK8wixe3WN1pC228-w%3D/1400x0/smart/filters%3Astrip_icc%28%29/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/n/r/zYPcTNRlWtBPtrdkeSfQ/hyundai-creta-2022-19.jpg"],
  yaris: ["https://upload.wikimedia.org/wikipedia/commons/c/cd/2021_Toyota_Yaris_1.5_S_GR_Sport_NSP151R_%2820211117%29_01.jpg", "https://upload.wikimedia.org/wikipedia/commons/2/25/2021_Toyota_Yaris_1.5_S_GR_Sport_NSP151R_interior_%2820211117%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/4/43/2021_Toyota_Yaris_1.5_S_GR_Sport_NSP151R_trunk_%2820211117%29.jpg"],
  tucson: ["https://cdn.salaodocarro.com.br/_upload/carros/2024/07/16/hyundai-tucson-2014-prata-346493-1.jpg", "https://imgserver.autocarro.com.br/fotos/grande/1825946_hyundai-tucson-2-0-mpfi-gls-16v-2wd-2013-prata_18f5bb.jpg", "https://img.olx.com.br/images/60/609641602435854.jpg"],
  punto: ["https://upload.wikimedia.org/wikipedia/commons/7/70/Fiat_Punto_1.4_Easy_2014_%2813998410333%29.jpg", "https://img2.icarros.com/dbimg/galeriaimgmodelo/0/11554_1.jpg", "https://images.usadosbr.com/manipulatedImages/media/gallery/e8/0c/f9/fiat-punto-1-4-attractive-8v-manual-2014-sao-bernardo-do-campo-sp-f7e119bf-JL--7-image-760x570-crop.webp"],
  cruze: ["https://imgserver.autocarro.com.br/fotos/grande/1933513_chevrolet-cruze-1-4-ltz-16v-2017-preta_26959b.jpg", "https://cdcssl.ibsrv.net/autodata/images/?img=CDC_2018CHC300108.jpg&width=536", "https://cdcssl.ibsrv.net/autodata/images/?img=CDC_2018CHC300112.jpg&width=536"],
};

const cars = [
  ["Fiat Strada", "Freedom 1.3 CD", "2022/2023", "48.900 km", "Manual", "Picape", "Estoque próprio", 92900, "Cinza", "Flex", "strada", ["Ar-condicionado", "Direção assistida", "Vidros elétricos", "Capota marítima", "Câmera de ré"]],
  ["Chevrolet Onix", "Premier 1.0 Turbo", "2021/2022", "52.400 km", "Automático", "Hatch", "Consignado", 78900, "Preto", "Flex", "onix", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
  ["Volkswagen T-Cross", "Comfortline 200 TSI", "2020/2021", "61.800 km", "Automático", "SUV", "Estoque próprio", 99900, "Prata", "Flex", "tcross", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
  ["Chevrolet Tracker", "LT 1.0 Turbo", "2021/2022", "57.200 km", "Automático", "SUV", "Consignado", 104900, "Branco", "Flex", "tracker", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
  ["Volkswagen Polo", "1.0 MPI", "2022/2023", "43.100 km", "Manual", "Hatch", "Estoque próprio", 69900, "Prata", "Flex", "polo", ["Ar-condicionado", "Direção assistida", "Vidros elétricos", "Freios ABS"]],
  ["Toyota Corolla", "XEi 2.0 Flex", "2019/2020", "72.600 km", "Automático", "Sedã", "Consignado", 112900, "Prata", "Flex", "corolla", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
  ["Fiat Toro", "Freedom 1.8", "2020/2021", "66.300 km", "Automático", "Picape", "Estoque próprio", 103900, "Cinza", "Flex", "toro", ["Central multimídia", "Câmera de ré", "Capota marítima", "Controle de estabilidade"]],
  ["Hyundai HB20S", "Comfort Plus 1.0", "2022/2023", "39.800 km", "Manual", "Sedã", "Consignado", 76900, "Prata", "Flex", "hb20s", ["Ar-condicionado", "Direção assistida", "Vidros elétricos", "Freios ABS"]],
  ["Renault Kwid", "Zen 1.0", "2021/2022", "39.500 km", "Manual", "Hatch", "Estoque próprio", 51900, "Branco", "Flex", "kwid", ["Ar-condicionado", "Direção assistida", "Vidros elétricos", "Freios ABS"]],
  ["Jeep Renegade", "Longitude 1.8", "2019/2020", "68.200 km", "Automático", "SUV", "Consignado", 86900, "Cinza", "Flex", "renegade", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
  ["Honda HR-V", "EX 1.8", "2019/2020", "58.700 km", "Automático", "SUV", "Estoque próprio", 107900, "Branco", "Flex", "hrv", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
  ["Nissan Kicks", "SV 1.6", "2020/2021", "54.600 km", "Automático", "SUV", "Consignado", 96900, "Prata", "Flex", "kicks", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
  ["Volkswagen Nivus", "Comfortline 200 TSI", "2021/2022", "46.100 km", "Automático", "SUV", "Estoque próprio", 112900, "Cinza", "Flex", "nivus", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
  ["Chevrolet S10", "LT 2.8 Turbo Diesel", "2019/2020", "84.300 km", "Automático", "Picape", "Consignado", 152900, "Branco", "Diesel", "s10", ["Central multimídia", "Tração 4x4", "Capota marítima", "Controle de descida"]],
  ["Toyota Hilux", "SRV 2.8 4x4", "2020/2021", "76.900 km", "Automático", "Picape", "Estoque próprio", 189900, "Prata", "Diesel", "hilux", ["Central multimídia", "Tração 4x4", "Controle de descida", "Câmera de ré"]],
  ["Volkswagen Virtus", "Comfortline 200 TSI", "2021/2022", "49.800 km", "Automático", "Sedã", "Consignado", 89900, "Branco", "Flex", "virtus", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
  ["Fiat Argo", "Drive 1.0", "2022/2023", "37.200 km", "Manual", "Hatch", "Estoque próprio", 73900, "Vermelho", "Flex", "argo", ["Ar-condicionado", "Direção assistida", "Vidros elétricos", "Freios ABS"]],
  ["Honda Civic", "EXL 2.0", "2019/2020", "63.500 km", "Automático", "Sedã", "Consignado", 139900, "Preto", "Flex", "civic", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
  ["Hyundai Creta", "Action 1.6", "2021/2022", "51.400 km", "Automático", "SUV", "Estoque próprio", 104900, "Branco", "Flex", "creta", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
  ["Toyota Yaris", "XL Plus 1.5", "2020/2021", "47.900 km", "Automático", "Hatch", "Consignado", 88900, "Prata", "Flex", "yaris", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
  ["Hyundai Tucson", "GLS 2.0", "2013/2014", "118.000 km", "Automático", "SUV", "Consignado", 58900, "Prata", "Flex", "tucson", ["Ar-condicionado", "Direção assistida", "Vidros elétricos", "Freios ABS"]],
  ["Fiat Punto", "Attractive 1.4", "2013/2014", "104.300 km", "Manual", "Hatch", "Estoque próprio", 47900, "Branco", "Flex", "punto", ["Ar-condicionado", "Direção assistida", "Vidros elétricos", "Freios ABS"]],
  ["Chevrolet Cruze", "LTZ 1.4 Turbo", "2017/2018", "79.600 km", "Automático", "Sedã", "Estoque próprio", 92900, "Preto", "Flex", "cruze", ["Central multimídia", "Câmera de ré", "Bancos em couro", "Controle de estabilidade"]],
].map((item, index) => ({ id: index + 1, name: item[0], photoKey: item[10], version: item[1], year: item[2], km: item[3], transmission: item[4], category: item[5], origin: item[6], price: item[7], color: item[8], fuel: item[9], photos: photo[item[10]], features: item[11] }));
const fullFramePhotos = new Set(["virtus", "yaris"]);

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const grid = document.getElementById("car-grid");
const dialog = document.getElementById("vehicle-dialog");
const dialogContent = document.getElementById("dialog-content");
let selectedOrigin = "Todos";
let selectedCategory = "Todos";
let dialogCar = null;

function showCars() {
  const term = document.getElementById("query").value.trim().toLocaleLowerCase("pt-BR");
  const transmission = document.getElementById("transmission").value;
  let min = Number(document.getElementById("min-price").value);
  let max = Number(document.getElementById("max-price").value);
  if (min > max) [min, max] = [max, min];
  document.getElementById("price-label").textContent = `${brl.format(min)} — ${brl.format(max)}`;
  const visible = cars.filter(car => {
    const matchText = !term || `${car.name} ${car.version} ${car.category}`.toLocaleLowerCase("pt-BR").includes(term);
    return matchText && (selectedOrigin === "Todos" || car.origin === selectedOrigin) && (selectedCategory === "Todos" || car.category === selectedCategory) && (transmission === "Todos" || car.transmission === transmission) && car.price >= min && car.price <= max;
  });
  document.getElementById("result-count").textContent = visible.length;
  const changed = Boolean(term || selectedOrigin !== "Todos" || selectedCategory !== "Todos" || transmission !== "Todos" || min !== 40000 || max !== 200000);
  document.getElementById("clear-filters").hidden = !changed;
  grid.innerHTML = visible.length ? visible.map(car => `<article class="car-card"><button type="button" data-car-id="${car.id}" aria-label="Ver detalhes de ${car.name} ${car.version}"><div class="car-image ${fullFramePhotos.has(car.photoKey) ? "full-frame" : ""}"><img loading="lazy" src="${car.photos[0]}" alt="${car.name} ${car.version}" onerror="this.onerror=null;this.src='${car.photos[1]}'"><span class="origin-pill ${car.origin === "Consignado" ? "consignado" : ""}">${car.origin}</span></div><div class="car-info"><span class="category-label">${car.category}</span><h3>${car.name}</h3><p class="version">${car.version}</p><div class="car-meta"><span>▦ ${car.year}</span><span>◷ ${car.km}</span><span>⚙ ${car.transmission}</span></div><div class="car-price"><div><small>Valor anunciado</small><strong>${brl.format(car.price)}</strong></div><span class="details-link">Ver detalhes <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10" /></svg></span></div></div></button></article>`).join("") : `<div class="no-results">Nenhum veículo com esses filtros.<br><button class="gold-button" onclick="document.getElementById('clear-filters').click()">Ver todo o estoque</button></div>`;
}

function openCar(id) {
  dialogCar = cars.find(car => car.id === id);
  if (!dialogCar) return;
  showPhoto(0);
  dialog.showModal();
}

function showPhoto(index) {
  const car = dialogCar;
  const labels = ["Exterior", "Interior", car.category === "Picape" ? "Caçamba" : "Porta-malas"];
  dialogContent.innerHTML = `<div class="dialog-hero"><img id="dialog-main-photo" src="${car.photos[index]}" alt="${car.name} — ${labels[index]}" onerror="this.onerror=null;this.src='${car.photos[(index + 1) % car.photos.length]}'"><span>${labels[index]}</span></div><div class="gallery-thumbs">${car.photos.map((url, i) => `<button data-photo="${i}" class="${i === index ? "active" : ""}" aria-label="Mostrar ${labels[i]}"><img src="${url}" alt="" onerror="this.onerror=null;this.src='${car.photos[0]}'"><span>${labels[i]}</span></button>`).join("")}</div><div class="dialog-body"><div class="dialog-top"><div><span class="category-label">${car.origin} · ${car.category}</span><h2>${car.name}</h2><p>${car.version}</p></div><div class="dialog-price">${brl.format(car.price)}</div></div><div class="detail-grid"><div class="detail-cell"><small>Ano</small><b>${car.year}</b></div><div class="detail-cell"><small>Quilometragem</small><b>${car.km}</b></div><div class="detail-cell"><small>Câmbio</small><b>${car.transmission}</b></div><div class="detail-cell"><small>Combustível</small><b>${car.fuel}</b></div><div class="detail-cell"><small>Cor</small><b>${car.color}</b></div></div><h3>Itens e acessórios</h3><div class="feature-list">${car.features.map(item => `<span>✓ ${item}</span>`).join("")}</div><div class="dialog-actions"><a href="https://wa.me/5535991733888?text=${encodeURIComponent(`Olá! Tenho interesse no ${car.name} ${car.version}.`)}" target="_blank" rel="noreferrer">Consultar no WhatsApp</a><a href="https://www.google.com/maps/search/?api=1&query=Rua+Rui+Barbosa+383+Lavras+MG" target="_blank" rel="noreferrer">Ver localização</a></div><a class="source-link" href="${car.source || "https://www.google.com/search?q=" + encodeURIComponent(car.name + " " + car.year + " fotos")}" target="_blank" rel="noreferrer">Fonte / referência das fotografias <svg class="inline-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10" /></svg></a><p class="disclaimer">Fotos de referência do modelo. Confirme cor, versão, itens, preço e disponibilidade com a loja.</p></div>`;
  dialogContent.querySelectorAll("[data-photo]").forEach(button => button.addEventListener("click", () => showPhoto(Number(button.dataset.photo))));
}

document.getElementById("query").addEventListener("input", showCars);
document.getElementById("transmission").addEventListener("change", showCars);
document.getElementById("min-price").addEventListener("input", showCars);
document.getElementById("max-price").addEventListener("input", showCars);
document.getElementById("hero-search").addEventListener("submit", event => { event.preventDefault(); document.getElementById("query").value = document.getElementById("hero-query").value; showCars(); document.getElementById("estoque").scrollIntoView({ behavior: "smooth" }); });
document.querySelectorAll("#origin-filter button").forEach(button => button.addEventListener("click", () => { selectedOrigin = button.dataset.origin; document.querySelectorAll("#origin-filter button").forEach(item => item.classList.toggle("active", item === button)); showCars(); }));
document.querySelectorAll("#category-filter button").forEach(button => button.addEventListener("click", () => { selectedCategory = button.dataset.category; document.querySelectorAll("#category-filter button").forEach(item => item.classList.toggle("active", item === button)); showCars(); }));
document.getElementById("clear-filters").addEventListener("click", () => { document.getElementById("query").value = ""; document.getElementById("hero-query").value = ""; document.getElementById("transmission").value = "Todos"; document.getElementById("min-price").value = 40000; document.getElementById("max-price").value = 200000; selectedOrigin = "Todos"; selectedCategory = "Todos"; document.querySelectorAll("#origin-filter button,#category-filter button").forEach(item => item.classList.toggle("active", item.dataset.origin === "Todos" || item.dataset.category === "Todos")); showCars(); });
grid.addEventListener("click", event => { const button = event.target.closest("[data-car-id]"); if (button) openCar(Number(button.dataset.carId)); });
document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
showCars();

