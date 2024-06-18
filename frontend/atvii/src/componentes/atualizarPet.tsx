import { Component } from "react";

export default class AtualizarPet extends Component<Props> {
  render() {
    const { tema } = this.props;

    return (
      <div className="container-conteudo">
        <div className="forma">
          <form>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nome do pet"
                aria-label="Nome do Pet"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Raça"
                aria-label="Raça"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Gênero"
                aria-label="Gênero"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Tipo"
                aria-label="Tipo"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">

              <button
                className="btn btn-outline-secondary"
                type="button"
                style={{ background: tema }}
              >

                Atualizar pet

              </button>
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}

type Props = {
  tema: string;
};