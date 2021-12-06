module.exports.formulario_inclusao_noticia = function (application, req, res) {
  res.render("admin/formulario_inclusao_noticia", {
    validacao: {},
    noticia: {},
  });
};

module.exports.noticias_salvar = function (application, req, res) {
  var noticia = req.body; /* recupera os dados enviados na requisição */
  console.log(noticia);

  req.assert("titulo", "Título é obrigatório!").notEmpty();
  req.assert("resumo", "Resumo é obrigatório!").notEmpty();
  req
    .assert("resumo", "Resumo deve conter entre 10 e 100 caracteres.")
    .len(10, 100);
  req.assert("autor", "Autor é obrigatório!").notEmpty();
  req
    .assert("data_noticia", "Data é obrigatória!")
    .notEmpty()
    .isDate({ format: "YYYY-MM-DD" });
  req.assert("noticia", "Notícia é obrigatório!").notEmpty();

  var erros = req.validationErrors();
  console.log(erros);

  if (erros) {
    res.render("admin/formulario_inclusao_noticia", {
      validacao: erros,
      noticia: noticia,
    });

    return;
  }

  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  /* dentro da variável noticias ele guarda o resultado da consulta e disponibiliza ela na view */
  noticiasModel.salvarNoticia(noticia, function (error, result) {
    res.redirect("/noticias");
  });
};
