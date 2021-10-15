import { useCalculator } from "@utils/useCalculator";

const Calculator = () => {
  const {
    expression,
    appendToHistory,
    appendSymbol,
    removeSymbol,
    clearExpression,
  } = useCalculator();
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Calculator;
