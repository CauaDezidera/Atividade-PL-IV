import React, { Component } from "react";

export default class CadastroServico extends Component<Props> {
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
                placeholder="Nome do serviço"
                aria-label="Nome"
                aria-describedby="basic-addon1"
              />

            </div>

            <div className="input-group mb-3">

              <input
                type="text"
                className="form-control"
                placeholder="Preço do serviço"
                aria-label="Preço"
                aria-describedby="basic-addon1"
              />

            </div>

            <div className="input-group mb-3">

              <button
                className="btn btn-outline-secondary"
                type="button"
                style={{ background: tema }}
              >

                Cadastrar serviço

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
