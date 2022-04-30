import { UsedContext } from "react";

const BudgetsContext = React.createContext();
export function UsedBudgets() {
  return usecontext(BudgetsContext);
}
export const BudgetProvider = ({ children }) => {
  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        GetBudgetExpenses,
        AddExpense,
        AddBudget,
        DeleteBudget,
        DeleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
