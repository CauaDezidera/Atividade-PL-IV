import React, { Component, MouseEvent } from "react";

class ListaCliente extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      clientes: [], 
      clienteSelecionado: null,
      clienteHover: null,
    };
  }

  handleClienteClick = (cliente: any) => {
    this.setState({ clienteSelecionado: cliente });
  };

  handleMouseEnter = (nome: string) => {
    this.setState({ clienteHover: nome });
  };

  handleMouseLeave = () => {
    this.setState({ clienteHover: null });
  };

  render() {
    const { abrirAtualizarCliente } = this.props;
    const { clienteSelecionado, clientes, clienteHover } = this.state;

    return (
      <div className="container">
        {clienteSelecionado && (
          <div className="cliente-table">
            <h3>Informações do Cliente</h3>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Nome:</th>
                  <td>{clienteSelecionado.nome}</td>
                </tr>
                <tr>
                  <th>Nome Social:</th>
                  <td>{clienteSelecionado.nomeSocial}</td>
                </tr>
                <tr>
                  <th>CPF:</th>
                  <td>{clienteSelecionado.cpf}</td>
                </tr>
                <tr>
                  <th>Data de Emissão do CPF:</th>
                  <td>{clienteSelecionado.dataEmissaoCPF}</td>
                </tr>
                <tr>
                  <th>Data de Cadastro:</th>
                  <td>{clienteSelecionado.dataCadastro}</td>
                </tr>
                <tr>
                  <th>RG:</th>
                  <td>{clienteSelecionado.rg}</td>
                </tr>
                <tr>
                  <th>Data de Emissão do RG:</th>
                  <td>{clienteSelecionado.dataEmissaoRG}</td>
                </tr>
                <tr>
                  <th>Telefone:</th>
                  <td>({clienteSelecionado.telefone.ddd}) {clienteSelecionado.telefone.numero}</td>
                </tr>
                <tr>
                  <th>Nome do Pet:</th>
                  <td>{clienteSelecionado.pet}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="btn btn-outline-primary"
              onClick={() => this.setState({ clienteSelecionado: null })}
            >
              Fechar
            </button>
          </div>
        )}

        <div className="table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => (
                <tr key={index}>
                  <td
                    onMouseEnter={() => this.handleMouseEnter(cliente.nome)}
                    onMouseLeave={this.handleMouseLeave}
                    onClick={() => this.handleClienteClick(cliente)}
                    className={clienteHover === cliente.nome ? "hovered" : ""}
                  >
                    {cliente.nome}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm mr-2"
                      onClick={() => abrirAtualizarCliente(cliente)} 
                    >
                      Atualizar
                    </button>
                    <button className="btn btn-danger btn-sm">Deletar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListaCliente;

type Props = {
  tema: string;
  abrirAtualizarCliente: (cliente: any) => void; 
};

type State = {
  clientes: Array<{
    nome: string;
    nomeSocial: string;
    cpf: string;
    dataEmissaoCPF: string;
    dataCadastro: string;
    rg: string;
    dataEmissaoRG: string;
    telefone: {
      ddd: string;
      numero: string;
    };
    pet: string;
  }>;
  clienteSelecionado: {
    nome: string;
    nomeSocial: string;
    cpf: string;
    dataEmissaoCPF: string;
    dataCadastro: string;
    rg: string;
    dataEmissaoRG: string;
    telefone: {
      ddd: string;
      numero: string;
    };
    pet: string;
  } | null;
  clienteHover: string | null;
};
