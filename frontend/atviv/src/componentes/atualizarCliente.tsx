import React, { Component, ChangeEvent } from "react";
import Mascaras from "./mascaras";

export default class AtualizarCliente extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: "",
      nomeSocial: "",
      cpf: "",
      dataEmissaoCPF: "",
      rg: [""],
      dataEmissaoRG: [""],
      telefones: [{ ddd: "", numero: "" }],
      produtosConsumidos: [""],
      servicosConsumidos: [""],
      nomePet: "",
      pets: [{ nome: "", raça: "", gênero: "", tipo: "" }],
      dataCadastro: "",
    };
  }

  adicionarRG = () => {
    this.setState((prevState) => ({
      rg: [...prevState.rg, ""],
      dataEmissaoRG: [...prevState.dataEmissaoRG, ""],
    }));
  };

  adicionarTelefone = () => {
    this.setState((prevState) => ({
      telefones: [...prevState.telefones, { ddd: "", numero: "" }],
    }));
  };

  adicionarProduto = () => {
    this.setState((prevState) => ({
      produtosConsumidos: [...prevState.produtosConsumidos, ""],
    }));
  };

  adicionarServico = () => {
    this.setState((prevState) => ({
      servicosConsumidos: [...prevState.servicosConsumidos, ""],
    }));
  };

  adicionarPet = () => {
    this.setState((prevState) => ({
      pets: [...prevState.pets, { nome: "", raça: "", gênero: "", tipo: "" }],
    }));
  };

  handleChange = (field: keyof State, value: string) => {
    this.setState({ [field]: value } as unknown as Pick<State, keyof State>);
  };

  handleChangeTelefone = (index: number, field: keyof { ddd: string; numero: string }, value: string) => {
    this.setState((prevState) => {
      const novosTelefones = [...prevState.telefones];
      novosTelefones[index] = { ...novosTelefones[index], [field]: value };
      return { telefones: novosTelefones };
    });
  };

  handleChangeRg = (index: number, value: string) => {
    this.setState((prevState) => {
      const novoRg = [...prevState.rg];
      novoRg[index] = Mascaras.formatarRG(value);
      return { rg: novoRg };
    });
  };

  handleChangeDataEmissaoRG = (index: number, value: string) => {
    this.setState((prevState) => {
      const novaDataEmissaoRG = [...prevState.dataEmissaoRG];
      novaDataEmissaoRG[index] = value;
      return { dataEmissaoRG: novaDataEmissaoRG };
    });
  };

  handleChangeCPF = (value: string) => {
    this.setState({ cpf: Mascaras.formatarCPF(value) });
  };

  handleChangePet = (index: number, field: keyof Pet, value: string) => {
    this.setState((prevState) => {
      const novosPets = [...prevState.pets];
      novosPets[index] = { ...novosPets[index], [field]: value };
      return { pets: novosPets };
    });
  };

  handleChangeArray = (field: keyof State, index: number, value: string) => {
    this.setState((prevState) => {
      const updatedArray = [...(prevState[field] as string[])];
      updatedArray[index] = value;
      return { [field]: updatedArray } as unknown as Pick<State, keyof State>;
    });
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { nome, nomeSocial, cpf, dataEmissaoCPF, rg, dataEmissaoRG, telefones, produtosConsumidos, servicosConsumidos, pets, dataCadastro } = this.state;

    const clienteAtualizado = {
      nome,
      nomeSocial,
      cpf,
      dataEmissaoCPF,
      rg,
      dataEmissaoRG,
      telefones,
      produtosConsumidos,
      servicosConsumidos,
      pets,
      dataCadastro,
    };

    try {
      const response = await fetch('http://localhost:32831/cliente/atualizar', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clienteAtualizado),
      });
  
      if (response.ok) {
        alert('Cliente atualizado com sucesso!');
        
      } else {
        const errorData = await response.json(); 
        console.error('Falha ao atualizar cliente:', errorData.error);
        alert(`Falha ao atualizar cliente: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      alert('Ocorreu um erro ao atualizar cliente. Verifique sua conexão ou tente novamente mais tarde.');
    }
  };

  render() {
    const { tema } = this.props;
    const { nome, nomeSocial, cpf, dataEmissaoCPF, rg, dataEmissaoRG, telefones, produtosConsumidos, servicosConsumidos, pets, dataCadastro } = this.state;

    return (
      <div className="container-conteudo">
        <div className="forma">
          <form onSubmit={this.handleSubmit}>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nome"
                aria-label="Nome"
                value={nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChange("nome", e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nome Social"
                aria-label="Nome Social"
                value={nomeSocial}
                onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChange("nomeSocial", e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              
              <input
                type="text"
                className="form-control"
                placeholder="CPF"
                aria-label="CPF"
                value={cpf}
                onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangeCPF(e.target.value)}
              />

              <input
                type="date"
                className="form-control"
                placeholder="Data de Emissão do CPF"
                aria-label="Data de Emissão do CPF"
                value={dataEmissaoCPF}
                onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChange("dataEmissaoCPF", e.target.value)}
              />

            </div>

            {rg.map((rg, index) => (
              <div className="input-group mb-3" key={index}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="RG"
                  aria-label="RG"
                  value={rg}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangeRg(index, e.target.value)}
                />

                <input
                  type="date"
                  className="form-control"
                  placeholder="Data de Emissão do RG"
                  aria-label="Data de Emissão do RG"
                  value={dataEmissaoRG[index]}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangeDataEmissaoRG(index, e.target.value)}
                />

                <button type="button" className="btn btn-outline-secondary" onClick={this.adicionarRG}> Adicionar RG </button>

              </div>
            ))}

            {telefones.map((telefone, index) => (
              <div className="input-group mb-3" key={index}>

                <input
                  type="text"
                  className="form-control"
                  placeholder="DDD"
                  aria-label="DDD"
                  value={telefone.ddd}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangeTelefone(index, "ddd", e.target.value)}
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Telefone"
                  aria-label="Telefone"
                  value={telefone.numero}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangeTelefone(index, "numero", e.target.value)}
                />

                <button type="button" className="btn btn-outline-secondary" onClick={this.adicionarTelefone}>Adicionar Telefone </button>

              </div>
            ))}

            {produtosConsumidos.map((produto, index) => (
              <div className="input-group mb-3" key={index}>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Produto Consumido"
                  aria-label="Produto Consumido"
                  value={produto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangeArray("produtosConsumidos", index, e.target.value)}
                />

                <button type="button" className="btn btn-outline-secondary" onClick={this.adicionarProduto}> Adicionar Produto </button>

              </div>
            ))}

            {servicosConsumidos.map((servico, index) => (
              <div className="input-group mb-3" key={index}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Serviço Consumido"
                  aria-label="Serviço Consumido"
                  value={servico}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangeArray("servicosConsumidos", index, e.target.value)}
                  />
                  <button type="button" className="btn btn-outline-secondary" onClick={this.adicionarServico}> Adicionar Serviço </button>
  
                </div>
              ))}
  
              {pets.map((pet, index) => (
                <div className="input-group mb-3" key={index}>
  
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pet"
                    aria-label="Nome do Pet"
                    value={pet.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangePet(index, "nome", e.target.value)}
                  />
  
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Raça"
                    aria-label="Raça"
                    value={pet.raça}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangePet(index, "raça", e.target.value)}
                  />
  
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Gênero"
                    aria-label="Gênero"
                    value={pet.gênero}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangePet(index, "gênero", e.target.value)}
                  />
  
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tipo"
                    aria-label="Tipo"
                    value={pet.tipo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangePet(index, "tipo", e.target.value)}
                  />
  
                  <button type="button" className="btn btn-outline-secondary" onClick={this.adicionarPet}> Adicionar Pet</button>
  
                </div>
              ))}
  
              <div className="input-group mb-3">
  
                <input
                  type="date"
                  className="form-control"
                  placeholder="Data de Cadastro"
                  aria-label="Data de Cadastro"
                  value={dataCadastro}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChange("dataCadastro", e.target.value)}
                />
  
              </div>
  
              <button type="submit" className="btn btn-outline-secondary" style={{ background: tema }}>Atualizar Cliente</button>
  
            </form>
          </div>
        </div>
      );
    }
  }
  
  type Props = {
    tema: string;
  };
  
  type Pet = {
    nome: string;
    raça: string;
    gênero: string;
    tipo: string;
  };
  
  type State = {
    nome: string;
    nomeSocial: string;
    cpf: string;
    dataEmissaoCPF: string;
    rg: string[];
    dataEmissaoRG: string[];
    telefones: { ddd: string; numero: string }[];
    produtosConsumidos: string[];
    servicosConsumidos: string[];
    nomePet: string;
    pets: Pet[];
    dataCadastro: string;
  };
  
