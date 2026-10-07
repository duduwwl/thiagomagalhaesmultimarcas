const assetBase = 'https://raw.githubusercontent.com/duduwwl/thiagomagalhaesmultimarcas/main/';
const image = (path) => assetBase + path;
const cars = [
  {id:'polo-preto', brand:'Volkswagen', name:'Polo', version:'1.0 MPI · 2023/2023', category:'Hatch', transmission:'Manual', year:'2023/2023', mileage:'42.800 km', price:'R$ 78.900', images:['assets/car-01-polo-black-front.png','assets/car-01-polo-black-rear.png','assets/car-01-polo-black-dashboard.png','assets/car-01-polo-black-interior.png','assets/car-01-polo-black-rear-seat.png'].map(image)},
  {id:'toro-cinza', brand:'Fiat', name:'Toro', version:'Freedom 1.3 Turbo · 2022/2022', category:'Picape', transmission:'Automático', year:'2022/2022', mileage:'58.600 km', price:'R$ 128.900', images:['assets/car-02-toro-gray-front.png','assets/car-02-toro-gray-side.png','assets/car-02-toro-gray-dashboard.png','assets/car-02-toro-gray-rear-seat.png'].map(image)},
  {id:'montana-branca', brand:'Chevrolet', name:'Montana', version:'LT 1.2 Turbo · 2023/2023', category:'Picape', transmission:'Manual', year:'2023/2023', mileage:'31.900 km', price:'R$ 119.900', images:['assets/car-03-montana-white-front.png','assets/car-03-montana-white-rear.png','assets/car-03-montana-white-interior.png','assets/car-03-montana-white-seat.png'].map(image)},
  {id:'cruze-cinza', brand:'Chevrolet', name:'Cruze', version:'LTZ 1.4 Turbo · 2020/2020', category:'Sedã', transmission:'Automático', year:'2020/2020', mileage:'67.400 km', price:'R$ 96.900', images:['assets/car-04-cruze-dark-front.png','assets/car-04-cruze-dark-rear.png'].map(image)},
  {id:'renegade-preto', brand:'Jeep', name:'Renegade', version:'Longitude 1.8 · 2021/2021', category:'SUV', transmission:'Automático', year:'2021/2021', mileage:'54.200 km', price:'R$ 105.900', images:['assets/car-05-renegade-black-front.png','assets/car-05-renegade-black-rear.png','assets/car-05-renegade-black-front-seat.png','assets/car-05-renegade-black-dashboard.png','assets/car-05-renegade-black-rear-seat.png'].map(image)},
  {id:'polo-branco', brand:'Volkswagen', name:'Polo', version:'Comfortline 200 TSI · 2022/2023', category:'Hatch', transmission:'Automático', year:'2022/2023', mileage:'46.700 km', price:'R$ 89.900', images:['assets/car-06-polo-white-front.png','assets/car-06-polo-white-rear.png'].map(image)}
];

const grid = document.querySelector('#car-grid');
const search = document.querySelector('#inventory-search');
const count = document.querySelector('#inventory-count');
const empty = document.querySelector('#empty-state');
const modal = document.querySelector('#car-modal');
let activeFilter = 'all';
let activeCar = null;
let activeImage = 0;

function cardTemplate(car){
  return `<article class="car-card" data-car-id="${car.id}" tabindex="0" role="button" aria-label="Ver detalhes de ${car.brand} ${car.name}">
    <div class="car-photo"><img src="${car.images[0]}" alt="${car.brand} ${car.name} — foto principal" loading="lazy"><span class="car-badge">DISPONÍVEL</span><span class="car-category">${car.category.toUpperCase()}</span></div>
    <div class="car-info"><h3>${car.brand} ${car.name}</h3><p class="car-version">${car.version}</p><div class="car-details"><span>▦ ${car.year}</span><span>◷ ${car.mileage}</span><span>⚙ ${car.transmission}</span></div><div class="car-price"><div><small>VALOR DE APRESENTAÇÃO</small><strong>${car.price}</strong></div><span class="car-arrow" aria-hidden="true">↗</span></div></div>
  </article>`;
}

function filteredCars(){
  const term = search.value.trim().toLowerCase();
  return cars.filter(car => {
    const matchesFilter = activeFilter === 'all' || car.category === activeFilter;
    const matchesTerm = !term || `${car.brand} ${car.name} ${car.version} ${car.category}`.toLowerCase().includes(term);
    return matchesFilter && matchesTerm;
  });
}

function renderCars(){
  const result = filteredCars();
  grid.innerHTML = result.map(cardTemplate).join('');
  count.textContent = `${result.length} ${result.length === 1 ? 'veículo encontrado' : 'veículos encontrados'}`;
  empty.hidden = result.length > 0;
  grid.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.carId));
    card.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openModal(card.dataset.carId); } });
  });
}

function openModal(id){
  activeCar = cars.find(car => car.id === id); activeImage = 0;
  document.querySelector('#modal-title').textContent = `${activeCar.brand} ${activeCar.name}`;
  document.querySelector('#modal-subtitle').textContent = activeCar.version;
  document.querySelector('#modal-category').textContent = activeCar.category.toUpperCase();
  document.querySelector('#modal-year').textContent = activeCar.year;
  document.querySelector('#modal-mileage').textContent = activeCar.mileage;
  document.querySelector('#modal-transmission').textContent = activeCar.transmission;
  document.querySelector('#modal-price').textContent = activeCar.price;
  document.querySelector('#modal-whatsapp').href = `https://api.whatsapp.com/send?phone=5535988433231&text=${encodeURIComponent(`Olá! Tenho interesse no ${activeCar.brand} ${activeCar.name}.`)}`;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
  renderGallery(); document.querySelector('.modal-close').focus();
}

function closeModal(){modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; activeCar=null;}
function renderGallery(){
  const image = activeCar.images[activeImage]; const modalImage = document.querySelector('#modal-image');
  modalImage.src = image; modalImage.alt = `${activeCar.brand} ${activeCar.name} — foto ${activeImage+1}`;
  document.querySelector('#gallery-dots').innerHTML = activeCar.images.map((_, i) => `<button class="${i===activeImage?'active':''}" aria-label="Abrir foto ${i+1}" data-gallery-index="${i}"></button>`).join('');
  document.querySelectorAll('[data-gallery-index]').forEach(dot => dot.addEventListener('click', () => {activeImage=Number(dot.dataset.galleryIndex); renderGallery();}));
}

document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {document.querySelectorAll('.filter-button').forEach(item=>item.classList.remove('active')); button.classList.add('active'); activeFilter=button.dataset.filter; renderCars();}));
search.addEventListener('input', renderCars);
document.querySelector('#clear-filters').addEventListener('click', () => {search.value=''; activeFilter='all'; document.querySelectorAll('.filter-button').forEach(item=>item.classList.toggle('active', item.dataset.filter==='all')); renderCars();});
document.querySelector('#hero-search-form').addEventListener('submit', e => {e.preventDefault(); search.value=document.querySelector('#hero-query').value; document.querySelector('#estoque').scrollIntoView({behavior:'smooth'}); renderCars();});
document.querySelector('#gallery-prev').addEventListener('click', () => {activeImage=(activeImage-1+activeCar.images.length)%activeCar.images.length; renderGallery();});
document.querySelector('#gallery-next').addEventListener('click', () => {activeImage=(activeImage+1)%activeCar.images.length; renderGallery();});
document.querySelectorAll('[data-close-modal]').forEach(item=>item.addEventListener('click', closeModal));
document.addEventListener('keydown', e => {if(e.key==='Escape' && modal.classList.contains('open')) closeModal(); if(e.key==='ArrowLeft' && activeCar){activeImage=(activeImage-1+activeCar.images.length)%activeCar.images.length;renderGallery();} if(e.key==='ArrowRight' && activeCar){activeImage=(activeImage+1)%activeCar.images.length;renderGallery();}});
const menuToggle = document.querySelector('.menu-toggle'); const header = document.querySelector('.site-header');
menuToggle.addEventListener('click', () => {const isOpen=header.classList.toggle('menu-open'); menuToggle.setAttribute('aria-expanded', String(isOpen));});
document.querySelectorAll('.main-nav a,.header-cta').forEach(link=>link.addEventListener('click',()=>{header.classList.remove('menu-open');menuToggle.setAttribute('aria-expanded','false');}));
renderCars();

