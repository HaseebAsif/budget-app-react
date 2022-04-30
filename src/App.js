import React from "react";
import "./App.scss";
import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";

const App = () => {
  return (
    <>
      <Container className="my-5">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <BudgetCard name="Shopping" amount={200} max={1000}></BudgetCard>
        </div>
      </Container>
    </>
  );
};

export default App;
