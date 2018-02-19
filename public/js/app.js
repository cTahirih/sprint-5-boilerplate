$(document).ready(function(){
    $('#response-post').on('click', function() {
      const responsePost = `
      <div class = "col-12 s-reponse">
        <div class = "row">
          <div class="col-6">
            <h4 class="title">Respuestas</h4>
          </div>
          <div class"col-6">
            <a href="#" id="rsp-response">Responder</a>
          </div>
        </div>
        <div class="s-response">
          <div class = "col-12">
            <h4 class="title">Roxana</h4>
          </div>
          <div class = "col-12">
            <p>Me gusta buscar temas en internet</p>
          </div>
        </div>
        <div id="id-rsp2x"></div>
      </div>
      `;
      $('#container-response').html(responsePost);
      $('#rsp-response').on('click',function() {
        const rspResponse = `
        <form>
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" class="form-control" id="name" placeholder="Ingrese su nombre">
          </div>
          <div class="form-group">
            <label for="message">Ingrese su mensaje</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
        </form>
        `;
        $('#id-rsp2x').append(rspResponse);  
      });
    })
});