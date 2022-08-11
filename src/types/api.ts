export interface RestaurantType {
  id: number;
  nome: string;
  taxaFrete: number;
  cozinha: {
    id: number;
    nome: string;
    _links: {
      self: {
        href: string;
      };
    };
  };
}

export interface GetRestaurantsType {
  _embedded: {
    restaurantes: RestaurantType[];
  };
  _links: {
    self: {
      href: string;
      templated: boolean;
    };
  };
}

export interface GetRestaurantType {
  aberto: boolean;
  ativo: boolean;
  cozinha: {
    id: number;
    nome: string;
  };
  endereco: {
    bairro: string;
    cep: string;
    cidade: {
      estado: string;
      id: number;
      nome: string;
    };
    logradouro: string;
  };
  nome: string;
  taxaFrete: number;
}

export interface ProdutoType {
  ativo: boolean;
  descricao: string;
  id: number;
  nome: string;
  preco: number;
}

export interface GetProdutosType {
  _embedded: {
    produtos: ProdutoType[];
  };
}
