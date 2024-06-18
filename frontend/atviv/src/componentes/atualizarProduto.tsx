import React, { Component, ChangeEvent } from "react";

export default class AtualizarProduto extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nomeProduto: "",
      preco: "",
    };
  }

  handleChangeNomeProduto = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ nomeProduto: e.target.value });
  };

  handleChangePreco = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ preco: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  render() {

    const { tema } = this.props;
    const { nomeProduto, preco } = this.state;

    return (
      
      <div className="container-conteudo">
        <div className="forma">

          <form onSubmit={this.handleSubmit}>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nome do produto"
                aria-label="Nome do produto"
                value={nomeProduto}
                onChange={this.handleChangeNomeProduto}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Preço do produto"
                aria-label="Preço"
                value={preco}
                onChange={this.handleChangePreco}
              />
            </div>

            <div className="input-group mb-3">
              <button
                type="submit"
                className="btn btn-outline-secondary"
                style={{ background: tema }}
              >

                Atualizar produto

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

type State = {
  nomeProduto: string;
  preco: string;
};

