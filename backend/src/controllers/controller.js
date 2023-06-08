const { query } = require("express");
const connection = require("../Config/db");

function checkBook(req, res) {
  const query =
    "SELECT  titulos.tituloId, titulos.titulo, categorias.categoria FROM tituloCategorias JOIN titulos ON tituloCategorias.tituloId = titulos.tituloId JOIN categorias ON tituloCategorias.categoriaId = categorias.categoriaId";

  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(results);
  });
}

function addCategorie(req, res) {
  const  body  = req.body
  const { categoria } = body;

  const query = "INSERT INTO categorias (categoria) VALUES (?)"
  connection.query(query,[categoria], (err, results) =>{
    if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).json({ message: "categoria adicionada"})
  })
}

function addBook(req, res) {
  const body = req.body;
  const { categoria, titulo } = body;
  let tituloId;
  let categoriaId;

  const queryTitulo = "INSERT INTO titulos (titulo) VALUES (?)";
  connection.query(queryTitulo, [titulo], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    tituloId = results.insertId;

    const queryCategoria = "INSERT INTO categorias (categoria) VALUES (?)";
    connection.query(queryCategoria, [categoria], (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }
      categoriaId = results.insertId;

      const queryTituloCategoria =
        "INSERT INTO tituloCategorias (tituloId, categoriaId) VALUES (?,?)";
      connection.query(
        queryTituloCategoria,
        [tituloId, categoriaId],
        (err, results) => {
          if (err) {
            return res.status(500).json(err);
          }

          return res.status(200).json({ message: "livro adicionado" });
        }
      );
    });
  });
}

function updateBook(req, res) {
  const body = req.body;
  const { categoria, titulo, id } = body;

  const query = "UPDATE titulos SET  titulo = ? WHERE tituloId = ?";
  connection.query(query, [titulo, id], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    const query = "UPDATE categorias SET categoria = ? WHERE categoriaId = ?";
    connection.query(query, [categoria, id], (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json({ message: "livro atualizado" });
    });
  });
}

function deleteBook(req, res) {
  const body = req.body;
  const { id } = body;

  const deleteTituloCategoriasQuery = "DELETE FROM tituloCategorias WHERE tituloId = ?";
  connection.query(deleteTituloCategoriasQuery, [id], (err, tituloCategoriasResults) => {
    if (err) {
      return res.status(500).json(err);
    }
    
    const deleteCategoriasQuery = "DELETE FROM categorias WHERE categoriaId = ?";
    connection.query(deleteCategoriasQuery, [id], (err, categoriasResults) => {
      if (err) {
        return res.status(500).json(err);
      }
      
      const deleteTitulosQuery = "DELETE FROM titulos WHERE tituloId = ?";
      connection.query(deleteTitulosQuery, [id], (err, titulosResults) => {
        if (err) {
          return res.status(500).json(err);
        }
        
        return res.status(200).json({ message: "livro deletado" });
      });
    });
  });
}

function getCategories(req, res) {
  const query = "SELECT DISTINCT categoria FROM categorias"
  connection.query(query,(err, results) => {
    return res.status(200).json(results)
  })
}

module.exports = {
  addBook,
  updateBook,
  deleteBook,
  checkBook,
  getCategories,
  addCategorie
};
