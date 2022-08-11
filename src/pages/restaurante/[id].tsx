import { useState } from 'react';
import type { NextPageContext } from 'next';
import { ForkKnife } from 'phosphor-react';

import { api } from '../../services/api';
import {
  GetProdutosType,
  GetRestaurantsType,
  GetRestaurantType,
  ProdutoType,
} from '../../types/api';

import styles from '../../styles/Restaurante.module.sass';
import ProductCard from '../../components/ProductCard';

interface RestauranteProps {
  restaurant: GetRestaurantType;
  products: ProdutoType[];
  images: string;
}

export default function Restaurante({
  restaurant,
  products,
  images,
}: RestauranteProps) {
  const productImages = JSON.parse(images);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.profile}>
          <ForkKnife className={styles.pictureIcon} size={32} />
        </div>
        <div className={styles.restaurantInfo}>
          <h1>{restaurant.nome}</h1>
          <span>
            {restaurant.cozinha.nome} -{' '}
            {restaurant.taxaFrete.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </div>
      <div className={styles.separator}>
        <span>Produtos</span>
        <div className={styles.line}></div>
      </div>
      <div className={styles.cardsContainer}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            src={productImages[product.id]}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const { data } = await api.get<GetRestaurantsType>('/v1/restaurantes');
    const paths = data._embedded.restaurantes.map((restaurant) => {
      return {
        params: {
          id: restaurant.id.toString(),
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch {
    return {
      paths: [],
      fallback: false,
    };
  }
}

interface PageContext extends NextPageContext {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: PageContext) {
  try {
    const images = await import('../../utils/products.json');
    const getRestaurant = await api.get<GetRestaurantType>(
      `/v1/restaurantes/${params.id}`
    );

    const getProducts = await api.get<GetProdutosType>(
      `/v1/restaurantes/${params.id}/produtos`
    );

    return {
      props: {
        restaurant: getRestaurant.data,
        products: getProducts.data._embedded.produtos,
        images: JSON.stringify(images),
      },
    };
  } catch {
    return {
      props: {
        restaurant: {},
        products: [],
      },
    };
  }
}
