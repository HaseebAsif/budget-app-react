import React from "react";
import { Card, ProgressBar, Button, Stack } from "react-bootstrap";
import { currencyFormatter } from "../Utilties";
const BudgetCard = ({ name, amount, max }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div>{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
            <span className="text-muted fs-6 ms-2">
              / {currencyFormatter.format(max)}
            </span>
          </div>
        </Card.Title>
        <ProgressBar className="rounded-pill" min={0} max={max} now={amount} />
        <Stack direction="horizontal" gap="2" className="mt-4">
          <Button varient="outline-primary" className="ms-auto">
            Add Expense
          </Button>
          <Button varient="outline-secondary">View expenses</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default BudgetCard;
