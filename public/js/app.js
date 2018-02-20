$(document).ready(function() {
  $('#createTheme').on('click', function() {
    name = $('#name').val();
    messages = $('#message').val();
    $.ajax({
      data: {
        author_name: name,
        content: messages
      },
      type: 'POST',
      dataType: 'json',
      url: 'http://private-anon-7df87ec8eb-foroapi.apiary-proxy.com/topics',
    })
      .done(function(msg) {
        $('.card').prepend(`<div class="card-body">
          <p class="card-text">${msg.content}</p>
          <a href="#" class="card-link">${msg.author_name}</a>
          <a href="#" class="card-link" id="response-post">${msg.responses_count}</a>
          <div id="container-response">
            <!-- contiene respuestas -->
          </div>
        </div>`);
      });
  });
  $.ajax({
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
    method: 'GET',
    contentType: 'application/json',
    crossOrigin: true,
    success: function(response) {
      console.log(response);
      $.each(response, function(i, data) {
        let listForum = `<div class="card-body">
          <p class="card-text">${data.content}</p>
          <a href="#" class="card-link">${data.author_name}</a>
          <a href="#" class="card-link" id="response-post">${data.responses_count}</a>
          <div id="container-response">
            <!-- contiene respuestas -->
          </div>
        </div>`;
        $('.card').append(listForum);
      });
    },
    fail: function(request) { }
  });
  $('#search-foro').on('click', function(event) {
    $('.card').empty();
    var searchForo = $('#textSearch-foro').val();
    event.preventDefault();
    $.getJSON('http://examen-laboratoria-sprint-5.herokuapp.com/topics', function(find) {
      var findFilter = find.filter(function(find) {
        return find.content.toLowerCase().indexOf(searchForo) >= 0;
      });
      console.log(findFilter);
      $.each(findFilter, function(i, data) {
        let themeFind = `<div class="card-body">
          <p class="card-text">${data.content}</p>
          <a href="#" class="card-link">${data.author_name}</a>
          <a href="#" class="card-link" id="response-post">${data.responses_count}</a>
          <div id="container-response">
            <!-- contiene respuestas -->
          </div>
        </div>`;
        $('.card').append(themeFind);
      });
    });
  });

  // $('#response-post').on('click', function() {
  //   const responsePost = `
  //   <div class = "col-12 s-reponse">
  //     <div class = "row">
  //       <div class="col-6">
  //         <h4 class="title">Respuestas</h4>
  //       </div>
  //       <div class"col-6">
  //         <a href="#" id="rsp-response">Responder</a>
  //       </div>
  //     </div>
  //     <div class="s-response">
  //       <div class = "col-12">
  //         <h4 class="title">Roxana</h4>
  //       </div>
  //       <div class = "col-12">
  //         <p>Me gusta buscar temas en internet</p>
  //       </div>
  //     </div>
  //     <div id="id-rsp2x"></div>
  //   </div>
  //   `;
  //   $('#container-response').html(responsePost);
  //   $('#rsp-response').on('click', function() {
  //     const rspResponse = `
  //     <form>
  //       <div class="form-group">
  //         <label for="name">Nombre:</label>
  //         <input type="text" class="form-control" id="name" placeholder="Ingrese su nombre">
  //       </div>
  //       <div class="form-group">
  //         <label for="message">Ingrese su mensaje</label>
  //         <textarea class="form-control" id="message" rows="3"></textarea>
  //       </div>
  //     </form>
  //     `;
  //     $('#id-rsp2x').append(rspResponse);
  //   });
  // });

  /* ******************************************************************************************************************************/
  // $.ajax({
  //   url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
  //   method: 'GET',
  //   contentType: 'application/json',
  //   crossOrigin: true,
  //   success: function(response) {
  //     console.log(response);
  //     $.each(response, function(i, data) {
  //       let output = `<div class="row"><div class="col s6 l6"><span>${data.content}</span></div><div class="col s3 l3"><span>Por: </span><strong>${data.author_name}</strong></div><div class="col s3 l3"><a class="waves-effect waves-light btn indigo lighten-5 black-text text-black">${data.responses_count}<span> Respuestas </span> </a></div></div>`;
  //       $('.foro').append(output);
  //     });
  //   },
  //   fail: function(request) { }
  // });
  //
  // $.ajax({
  //   data: {
  //     author_name: 'Vanessa',
  //     content: 'Usando API para foro'},
  //   type: 'POST',
  //   dataType: 'json',
  //   url: 'http://private-anon-7df87ec8eb-foroapi.apiary-proxy.com/topics',
  // })
  //   .done(function(msg) {
  //     alert('Data Saved: ' + msg.author_name);
  //   });
});
