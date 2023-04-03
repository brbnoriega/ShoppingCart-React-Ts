import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void; //no necesito un add porque tengo este increase
  decreaseCartQuantity: (id: number) => void; //no retorna nada
  removeFromCart: (id: number) => void;
  cartQuantity: number
  cartItems: CartItem[]
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  //providers para los valores que necesito

  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]); //empty array by default
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0) //contabiliza los items de mi carrito

  const openCart=() => setIsOpen(true)
  const closeCart=() => setIsOpen(false)

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0; //si tiene el valor que retorne la cant sino 0
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        //si no existe un item en el carrito
        return [...currItems, { id, quantity: 1 }]; //retorna lo que existe agregandolo al carrito
      } else {
        return currItems.map((item) => {
          //mapeo los items
          if (item.id === id) {
            // si tengo el item
            return { ...item, quantity: item.quantity + 1 }; //retorna el item que existe +1
          } else {
            return item; //retornar el item
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        //si tengo 1 item en el carrito
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          //mapeo los items
          if (item.id === id) {
            // si tengo el item
            return { ...item, quantity: item.quantity - 1 }; //retorna el item que existe -1
          } else {
            return item; //retornar el item
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }


  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity

      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  );
}
