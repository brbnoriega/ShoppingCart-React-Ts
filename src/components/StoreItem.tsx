import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        className="mb-4"
        src={imgUrl}
        height="400px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
          <span className="fs-5">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100 btn btn-dark"
              onClick={() => increaseCartQuantity(id)}
            >
              + Agregar al carrito
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  className="btn btn-dark"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div className="fs-3">
                  {" "}
                  <span>{quantity}</span> en carrito
                </div>
                <Button
                  className="btn btn-dark"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remover
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
