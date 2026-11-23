import { JUEGOS } from './juegos.js';
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const lista = document.getElementById('juegos');
lista.innerHTML = JUEGOS.map(j => `<li><a class="juego" href="${esc(j.ruta)}" style="--c:${esc(j.color)}"><div class="portada"><span>${esc(j.letra)}</span></div><div class="info"><b>${esc(j.nombre)}</b><span>${esc(j.texto)}</span></div></a></li>`).join('')
  + `<li><div class="juego pronto" aria-disabled="true"><div class="portada">PRÓXIMAMENTE</div><div class="info"><b>Nuevo juego</b><span>Aquí aparecerán los próximos juegos.</span></div></div></li>`;
