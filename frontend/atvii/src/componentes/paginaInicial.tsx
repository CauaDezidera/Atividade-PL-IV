import React, { Component } from "react";

export default class PaginaInicial extends Component<Props> {
  render() {
    const { tema } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh", 
          backgroundColor: tema,
          margin: "0",
          padding: "0",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333333", fontSize: "4rem" }}> Seja bem-vindo!</h1>
        <h2 style={{ marginTop: "20px", color: "#388E3C", fontSize: "4em" }}> PetLovers </h2>
      </div>
    );
  }
}

type Props = {
  tema: string;
};
