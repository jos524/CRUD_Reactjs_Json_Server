import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetalhaEmpregado() {
  const empregadoId = useParams();

  const [dadosEmpregados, mudaDadosEmpregados] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/empregados/" + empregadoId.empregadoid)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        mudaDadosEmpregados(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [empregadoId]);

  console.log(dadosEmpregados.ativo);
  return (
    <>
      <div>
        <div className="card" style={{ textAlign: "left" }}>
          <div className="card-title" style={{ textAlign: "center" }}>
            <h1>Detalhes do Empregado</h1>
          </div>
          <div className="card-body">
            {dadosEmpregados && (
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <h5>ID</h5>
                    <input
                      disabled="disable"
                      type="text"
                      className="form-control"
                      value={dadosEmpregados.id}
                    />
                  </div>
                  <div className="form-group">
                    <h5>Nome</h5>
                    <input
                      disabled="disable"
                      type="text"
                      className="form-control"
                      value={dadosEmpregados.nome}
                    />
                  </div>
                  <div className="form-group">
                    <h5>Email</h5>
                    <input
                      disabled="disable"
                      type="text"
                      className="form-control"
                      value={dadosEmpregados.email}
                    />
                  </div>
                  <div className="form-group">
                    <h5>telefone</h5>
                    <input
                      disabled="disable"
                      type="text"
                      className="form-control"
                      value={dadosEmpregados.telefone}
                    />
                  </div>
                  <div className="form-group">
                    <h5>Ativo</h5>
                    <input
                      disabled="disable"
                      type="text"
                      className="form-control"
                      value={dadosEmpregados.ativo ? "Sim" : "Não"}
                    />
                  </div>
                </div>
                <Link to={"/"} className="btn btn-danger">
                  Voltar
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalhaEmpregado;
