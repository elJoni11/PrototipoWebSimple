// Datos de los 34 partidos de liga
const partidos = [
  {equipo1:{nombre:'Bermeo FT', logo:'images/equipos/bermeo.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '1', fecha:'20/09/2025', hora:'12:00', L:'2', V:'0'},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'SD Amorebieta', logo:'images/equipos/amorebieta.png'}, jornada: '2', fecha:'27/09/2025', hora:'18:30', L:'0', V:'0'},
  {equipo1:{nombre:'Aurrera KE', logo:'images/equipos/aurrera.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '3', fecha:'05/10/2025', hora:'12:00', L:'2', V:'1'},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'Zalla UC', logo:'images/equipos/zalla.png'}, jornada: '4', fecha:'11/10/2025', hora:'16:00', L:'', V:''},
  {equipo1:{nombre:'Balmaseda FC', logo:'images/equipos/balmaseda.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '5', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'SD San Pedro', logo:'images/equipos/sanpedro.png'}, jornada: '6', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'Urduliz FT', logo:'images/equipos/urduliz.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '7', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'JD Somorrostro', logo:'images/equipos/somorrostro.png'}, jornada: '8', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'Santutxu FC', logo:'images/equipos/santutxu.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '9', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'Sodupe UC', logo:'images/equipos/sodupe.png'}, jornada: '10', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'Abanto CF', logo:'images/equipos/abanto.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '11', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'SD Indautxu', logo:'images/equipos/indautxu.png'}, jornada: '12', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'SD Erandio', logo:'images/equipos/erandio.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '13', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'CD Padura', logo:'images/equipos/padura.png'}, jornada: '14', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'SD Iturrigorri', logo:'images/equipos/iturrigorri.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '15', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'Uritarra KT', logo:'images/equipos/uritarra.png'}, jornada: '16', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Getxo ', logo:'images/equipos/getxo.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '17', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'Bermeo FT', logo:'images/equipos/bermeo.png'}, jornada: '18', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'SD Amorebieta', logo:'images/equipos/amorebieta.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '19', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'Aurrera KE', logo:'images/equipos/aurrera.png'}, jornada: '20', fecha:'', hora:'16:00', L:'', V:''},
  {equipo1:{nombre:'Zalla UC', logo:'images/equipos/zalla.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '21', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'Balmaseda FC', logo:'images/equipos/balmaseda.png'}, jornada: '22', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'SD San Pedro', logo:'images/equipos/sanpedro.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '23', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'Urduliz FT', logo:'images/equipos/urduliz.png'}, jornada: '24', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'JD Somorrostro', logo:'images/equipos/somorrostro.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '25', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'Santutxu FC', logo:'images/equipos/santutxu.png'}, jornada: '26', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'Sodupe UC', logo:'images/equipos/sodupe.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '27', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'Abanto CF', logo:'images/equipos/abanto.png'}, jornada: '28', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'SD Indautxu', logo:'images/equipos/indautxu.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '29', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'SD Erandio', logo:'images/equipos/erandio.png'}, jornada: '30', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Padura', logo:'images/equipos/padura.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '31', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'SD Iturrigorri', logo:'images/equipos/iturrigorri.png'}, jornada: '32', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'Uritarra KT', logo:'images/equipos/uritarra.png'}, equipo2:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, jornada: '33', fecha:'', hora:'', L:'', V:''},
  {equipo1:{nombre:'CD Basconia', logo:'images/equipos/basconia.png'}, equipo2:{nombre:'CD Getxo', logo:'images/equipos/getxo.png'}, jornada: '34', fecha:'', hora:'', L:'', V:''},
];

const sliderTrack = document.getElementById('slider-track');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

// Generar slides dinámicamente
partidos.forEach(p => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.innerHTML = `
    <p>J ${p.jornada}</p>
    <div class="match-score">
      <div class="team">
        <img src="${p.equipo1.logo}" alt="${p.equipo1.nombre}" class="team-logo">
        <p>${p.equipo1.nombre}</p>
      </div>
      <p>${p.L} - ${p.V}</p>
      <div class="team">
        <img src="${p.equipo2.logo}" alt="${p.equipo2.nombre}" class="team-logo">
        <p>${p.equipo2.nombre}</p>
      </div>
    </div>
    <br>
    <p>Fecha: ${p.fecha}</p>
    <p>Hora: ${p.hora}</p>
  `;
  sliderTrack.appendChild(slide);
});

// Función para actualizar slide
function actualizarSlider() {
  sliderTrack.style.transform = `translateX(-${index * 100}%)`;
}

// Eventos flechas
prev.addEventListener('click', () => {
  index = (index - 1 + partidos.length) % partidos.length;
  actualizarSlider();
});

next.addEventListener('click', () => {
  index = (index + 1) % partidos.length;
  actualizarSlider();
});