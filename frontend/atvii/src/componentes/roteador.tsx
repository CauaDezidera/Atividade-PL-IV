import React, { Component, MouseEvent } from "react";
import BarraNavegacao from "./barraNav";
import ListaCliente from "./listarClientes";
import CadastroCliente from "./cadastrarCliente";
import ListaProduto from "./listarProdutos";
import CadastroProduto from "./cadastrarProduto";
import ListaServico from "./listarServicos";
import CadastroServico from "./cadastrarServico";
import ListaPet from "./listarPets";
import CadastroPet from "./cadastrarPet";
import PaginaInicial from "./paginaInicial";
import AtualizarCliente from "./atualizarCliente";
import AtualizarProduto from "./atualizarProduto";
import AtualizarServico from "./atualizarServico";
import AtualizarPet from "./atualizarPet";
import ConsumosClientes from "./consumosClientes";
import ServicosEProdutosMaisConsumidos from "./servicosEprodutosMaisConsumidos";
import ServicosEProdutosRacaETipoPet from "./ServicosEProdutosRacaETipoPet";
import MaisConsumiramValor from "./maisConsumiramValor";
import MaisConsumiramQuantidade from "./maisConsumiramQuantidade";

export default class Roteador extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tela: "Home",
    };
    this.selecionarView = this.selecionarView.bind(this);
  }

  selecionarView(novaTela: string, evento: MouseEvent) {
    evento.preventDefault();
    console.log(novaTela);
    this.setState({
      tela: novaTela,
    });
  }

  abrirAtualizarCliente = (evento: MouseEvent<HTMLButtonElement>) => {
    this.selecionarView("Atualizar Cliente", evento);
  };

  abrirAtualizarProduto = (evento: MouseEvent<HTMLButtonElement>) => {
    this.selecionarView("Atualizar Produto", evento);
  };

  abrirAtualizarServico = (evento: MouseEvent<HTMLButtonElement>) => {
    this.selecionarView("Atualizar Serviço", evento);
  };

  abrirAtualizarPet = (evento: MouseEvent<HTMLButtonElement>) => {
    this.selecionarView("Atualizar Pet", evento);
  };

  render() {
    let barraNavegacao = (
      <BarraNavegacao
        seletorView={this.selecionarView}
        tema="#E8F5E9"
        botoes={["Clientes", "Pets", "Produtos", "Serviços", "Cadastros", "Listagens"]}
      />
    );

    if (this.state.tela === "Clientes") {
      return (
        <>
          {barraNavegacao}
          <ListaCliente
            tema="#E8F5E9"
            abrirAtualizarCliente={this.abrirAtualizarCliente}
          />
        </>
      );

    } else if (this.state.tela === "Pets") {
          return (
            <>
              {barraNavegacao}
              <ListaPet
                tema="#E8F5E9"
                abrirAtualizarPet={this.abrirAtualizarPet}
              />
            </>
      );

    } else if (this.state.tela === "Produtos") {
          return (
            <>
              {barraNavegacao}
              <ListaProduto
                tema="#E8F5E9"
                abrirAtualizarProduto={this.abrirAtualizarProduto}
              />
            </>
      );

    } else if (this.state.tela === "Cadastro Cliente") {
      return (
        <>
          {barraNavegacao}
          <CadastroCliente tema="#E8F5E9" />
        </>
      );

    

    } else if (this.state.tela === "Cadastro Produto") {
      return (
        <>
          {barraNavegacao}
          <CadastroProduto tema="#E8F5E9" />
        </>
      );
      
    } else if (this.state.tela === "Serviços") {
      return (
        <>
          {barraNavegacao}
          <ListaServico
            tema="#E8F5E9"
            abrirAtualizarServico={this.abrirAtualizarServico}
          />
        </>
      );

    } else if (this.state.tela === "Cadastro Serviço") {
      return (
        <>
          {barraNavegacao}
          <CadastroServico tema="#E8F5E9" />
        </>
      );
    

    } else if (this.state.tela === "Cadastro Pet") {
      return (
        <>
          {barraNavegacao}
          <CadastroPet tema="#E8F5E9" />
        </>
      );

    } else if (this.state.tela === "Home") {
      return (
        <>
          {barraNavegacao}
          <PaginaInicial
            tema="#E8F5E9"
            
          />
        </>
      );

    } else if (this.state.tela === "Atualizar Cliente") {
      return (
        <>
          {barraNavegacao}
          <AtualizarCliente tema="#E8F5E9" />
        </>
      );

    } else if (this.state.tela === "Atualizar Produto") {
      return (
        <>
          {barraNavegacao}
          <AtualizarProduto tema="#E8F5E9" />
        </>
      );

    } else if (this.state.tela === "Atualizar Serviço") {
      return (
        <>
          {barraNavegacao}
          <AtualizarServico tema="#E8F5E9" />
        </>
      );

    } else if (this.state.tela === "Atualizar Pet") {
      return (
        <>
          {barraNavegacao}
          <AtualizarPet tema="#E8F5E9" />
        </>
      );

    } else if (this.state.tela === "Registro de consumos dos clientes") {
      return (
        <>
          {barraNavegacao}
          <ConsumosClientes tema="#E8F5E9" />
        </>
      );

    } else if (this.state.tela === "Serviços e Produtos mais consumidos") {
      return (
        <>
          {barraNavegacao}
          <ServicosEProdutosMaisConsumidos tema="#E8F5E9" />
        </>
      );

    } else if (this.state.tela === "Serviços e Produtos mais consumidos por tipo e raça de pets") {
      return (
        <>
          {barraNavegacao}
          <ServicosEProdutosRacaETipoPet tema="#E8F5E9" />
        </>
      );
  
    

    } else if (this.state.tela === "Top 10 clientes que mais consumiram em quantidade") {
      return (
        <>
          {barraNavegacao}
          <MaisConsumiramQuantidade tema="#E8F5E9" />
        </>
      );

    } else if (this.state.tela === "Top 5 clientes que que mais consumiram em valor") {
          return (
            <>
              {barraNavegacao}
              <MaisConsumiramValor tema="#E8F5E9" />
            </>
          );
    }
  }
}

type State = {
  tela: string;
};

type Props = {};