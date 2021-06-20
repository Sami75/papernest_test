import React from "react";
import { Button } from "react-bootstrap";
import { Plus } from "react-feather";
import useStore from "./counterStore";

const Up = () => {
  const counterUp = useStore((state) => state.counterUp);

  return (
    <Button
      variant="primary"
      size="lg"
      onClick={() => {
        counterUp();
      }}
    >
      Up <Plus />
    </Button>
  );
};

export default Up;
