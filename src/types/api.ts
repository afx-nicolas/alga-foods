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
