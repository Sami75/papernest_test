import React from "react";
import { Button } from "react-bootstrap";
import { Minus } from "react-feather";
import useStore from "./counterStore";

const Down = () => {
  const counterDown = useStore((state) => state.counterDown);

  return (
    <Button
      variant="danger"
      size="lg"
      onClick={() => {
        counterDown();
      }}
    >
      Down <Minus />
    </Button>
  );
};

export default Down;
