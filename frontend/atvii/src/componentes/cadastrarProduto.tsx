import React, { Component } from "react";

export default class CadastroProduto extends Component<Props> {

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
                placeholder="Nome do produto"
                aria-label="Nome do produto"
                aria-describedby="basic-addon1"
              />

            </div>

            <div className="input-group mb-3">

              <input
                type="text"
                className="form-control"
                placeholder="Preço do produto"
                aria-label="Preço do produto"
                aria-describedby="basic-addon1"
              />

            </div>

            <div className="input-group mb-3">

              <button
                className="btn btn-outline-secondary"
                type="button"
                style={{ background: tema }}
              >

                Cadastrar produto

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
