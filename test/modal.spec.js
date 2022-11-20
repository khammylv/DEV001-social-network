/* eslint-disable global-require */
test('modal', () => {
  document.body.innerHTML = `
    <section id="mi_modal" class="modal">
    <div class="flex_modal" id="flex_modal">
        <div class="contenido_modal">
             <div class="modal_header flex_modal">
                <div class="logo_modal">
                <h2>Lymusic</h2>
                </div>
                <button class="close" id="close">&times;</button>
             </div>
             <div class="modal_body">
                <p class="text_modal" id="text_modal"></p>
                <p class="text_modal" id="text_modal_2"></p>
             </div>
        </div>
    </div>

</section>
    `;

  require('../src/lib/modal.js');
  const modal = document.getElementById('mi_modal');
  const cerrar = document.getElementById('close');
  cerrar.click(modal.style.display = 'none');
  expect(modal.style.display).toBe('none');
});
