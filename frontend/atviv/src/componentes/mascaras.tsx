export default class Mascara {

   static formatarTelefone(valor: string): string {
      const numeros = valor.replace(/\D/g, ""); 
      const padrao = numeros.length === 11 ? /^(\d{2})(\d{5})(\d{4})$/ : /^(\d{2})(\d{4})(\d{4})$/;
      return numeros.replace(padrao, "($1) $2-$3");
  }

  static formatarCPF(valor: string): string {
      const numeros = valor.replace(/\D/g, ""); 
      const padrao = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
      return numeros.replace(padrao, "$1.$2.$3-$4");
  }

 
  static formatarRG(valor: string): string {
      const numeros = valor.replace(/\D/g, ""); 
      const padrao = /^(\d{2})(\d{3})(\d{3})(\d{1})$/;
      return numeros.replace(padrao, "$1.$2.$3-$4");
  }
}