import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditaEmpregado() {
  const empregadoId = useParams();
  const [id, mudaId] = useState("");
  const [nome, mudaNome] = useState("");
  const [email, mudaEmail] = useState("");
  const [telefone, mudaTelefone] = useState("");
  const [ativo, mudaAtivo] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoEmpregado = { id, nome, email, telefone, ativo };

    fetch("http://localhost:8000/empregados/" + empregadoId.empregadoid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(novoEmpregado),
    })
      .then((res) => {
        alert("Empregado atualizado com sucesso");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8000/empregados/" + empregadoId.empregadoid)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        mudaId(res.id);
        mudaNome(res.nome);
        mudaEmail(res.email);
        mudaTelefone(res.telefone);
        mudaAtivo(res.ativo);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [empregadoId]);

  return (
    <>
      <div>
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSubmit}>
              <div className="card" style={{ textAlign: "left" }}>
                <div className="card-title">
                  <h2 style={{ textAlign: "center" }}>Edita Empregado</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Nome</label>
                        <input
                          required
                          value={nome}
                          onChange={(e) => mudaNome(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          required
                          value={email}
                          onChange={(e) => mudaEmail(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Telefone</label>
                        <input
                          required
                          value={telefone}
                          onChange={(e) => mudaTelefone(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-check">
                        <input
                          checked={ativo}
                          onChange={(e) => mudaAtivo(e.target.checked)}
                          type="checkbox"
                          className="form-check-input"
                        />
                        <label className="form-check-label">Está ativo</label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button type="submit" className="btn btn-success">
                          Atualizar
                        </button>
                        <Link to="/" className="btn btn-danger">
                          Voltar
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditaEmpregado;
