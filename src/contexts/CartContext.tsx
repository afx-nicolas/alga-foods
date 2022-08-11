import { createContext, useEffect, useState } from 'react';

type CartItem = {
  name: string;
  price: number;
  amount: number;
};

type Cart = {
  [key: number]: CartItem;
};

interface CartContextProps {
  cart: Cart;
  addToCart: (id: number, item: { name: string; price: number }) => void;
  increaseItemAmount: (id: number) => void;
  decreaseItemAmount: (id: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: React.ReactNode;
}

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cart, setCart] = useState({} as Cart);

  useEffect(() => {
    if (typeof window !== undefined) {
      const localStorageCart = localStorage.getItem('@user_cart');

      if (!localStorageCart) {
        localStorage.setItem('@user_cart', JSON.stringify({}));
        return;
      }
      setCart(JSON.parse(localStorageCart));
      return;
    }
  }, []);

  function addToCart(id: number, product: { name: string; price: number }) {
    setCart((cart) => {
      const newCart = {
        ...cart,
        [id]: {
          name: product.name,
          price: product.price,
          amount: cart[id]?.amount + 1 || 1,
        },
      };

      localStorage.setItem('@user_cart', JSON.stringify(newCart));

      return newCart;
    });
  }

  function increaseItemAmount(id: number) {
    setCart((cart) => {
      const newCart = {
        ...cart,
        [id]: {
          ...cart[id],
          amount: cart[id].amount + 1,
        },
      };

      localStorage.setItem('@user_cart', JSON.stringify(newCart));

      return newCart;
    });
  }

  function decreaseItemAmount(id: number) {
    setCart((cart) => {
      const newCart = {
        ...cart,
        [id]: {
          ...cart[id],
          amount: cart[id].amount - 1,
        },
      };

      if (!newCart[id].amount) {
        const { [id]: value, ...restCart } = newCart;

        localStorage.setItem('@user_cart', JSON.stringify(restCart));

        return restCart;
      }

      localStorage.setItem('@user_cart', JSON.stringify(newCart));

      return newCart;
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseItemAmount,
        decreaseItemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
