module.exports.noticias = function (application, req, res) {
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  /* dentro da variável noticias ele guarda o resultado da consulta e disponibiliza ela na view */
  noticiasModel.getNoticias(function (error, result) {
    res.render("noticias/noticias", { noticias: result });
  });
};

module.exports.noticia = function (application, req, res) {
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  /* dentro da variável noticia ele guarda o resultado da consulta e disponibiliza ela na view */
  noticiasModel.getNoticia(function (error, result) {
    res.render("noticias/noticia", { noticia: result });
  });
};
