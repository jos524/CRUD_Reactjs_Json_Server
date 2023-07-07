/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ListaEmpregados() {
  const navigate = useNavigate();
  const [dadosEmpregados, mudaDadosEmpregados] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/empregados")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        mudaDadosEmpregados(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const carregaEdicao = (id) => {
    navigate("/empregado/edita/" + id);
  };
  const removeEmpregado = (id) => {
    if (window.confirm("Deseja realmente excluir o empregado?")) {
      fetch("http://localhost:8000/empregados/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Empregado deletado com sucesso");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const carregaDetalhes = (id) => {
    navigate("/empregado/detalha/" + id);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h2>Lista de Empregados</h2>
          </div>
          <div className="card-body">
            <div className="divbtn">
              <Link to="empregado/adicionar" className="btn btn-success">
                Adicionar Empregado (+)
              </Link>
            </div>
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <td>Nome</td>
                  <td>Email</td>
                  <td>Telefone</td>
                  <td>Ativo</td>
                  <td>Ação</td>
                </tr>
              </thead>
              <tbody>
                {dadosEmpregados &&
                  dadosEmpregados.map((empregado) => {
                    return (
                      <tr key={empregado.id}>
                        <td>{empregado.nome}</td>
                        <td>{empregado.email}</td>
                        <td>{empregado.telefone}</td>
                        <td>{empregado.ativo ? "Sim" : "Não"}</td>
                        <td>
                          <a
                            onClick={() => {
                              carregaEdicao(empregado.id);
                            }}
                            className="btn btn-primary"
                          >
                            Editar
                          </a>
                          <a
                            onClick={() => {
                              removeEmpregado(empregado.id);
                            }}
                            className="btn btn-danger"
                          >
                            Remove
                          </a>
                          <a
                            onClick={(event) => {
                              carregaDetalhes(empregado.id, event);
                            }}
                            className="btn btn-success"
                          >
                            Detalhes
                          </a>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaEmpregados;
