// Creates a calculator object to keep track of values
const calculator = {
  Display_Value: "0",
  Expression_Display: "",
  First_Operand: null,
  Wait_Second_Operand: false,
  operator: null,
};

//This modifies values each time a button is clicked.
function Input_Digit(digit) {
  const { Display_Value, Wait_Second_Operand } = calculator;
  if (Wait_Second_Operand === true) {
    calculator.Display_Value = digit;
    calculator.Wait_Second_Operand = false;
  } else {
    calculator.Display_Value =
      Display_Value === "0" ? digit : Display_Value + digit;
  }
  calculator.Expression_Display += digit;
}

// This section handles decimal points
function Input_Decimal(dot) {
  if (calculator.Wait_Second_Operand === true) return;
  if (!calculator.Display_Value.includes(dot)) {
    calculator.Display_Value += dot;
  }
}

// This section handles operators
function Handle_Operator(Next_Operator) {
  const { First_Operand, Display_Value, operator } = calculator;
  const Value_of_Input = parseFloat(Display_Value);
  if (operator && calculator.Wait_Second_Operand) {
    calculator.operator = Next_Operator;
    return;
  }
  if (First_Operand == null) {
    calculator.First_Operand = Value_of_Input;
  } else if (operator) {
    const Value_Now = First_Operand || 0;
    const result = Perform_Calculation[operator](Value_Now, Value_of_Input);
    calculator.Display_Value = String(result);
    calculator.First_Operand = result;
  }
  calculator.Wait_Second_Operand = true;
  if (Next_Operator !== "=") {
    calculator.Expression_Display += " " + Next_Operator + " ";
  } else {
    calculator.Expression_Display = calculator.Display_Value;
  }
  calculator.operator = Next_Operator;
}

const Perform_Calculation = {
  "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
  "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
  "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
  "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
  "=": (First_Operand, Second_Operand) => Second_Operand,
};

// This function resets the calculator to its default state
function Calculator_Reset() {
  calculator.Display_Value = "0";
  calculator.Expression_Display = "";
  calculator.First_Operand = null;
  calculator.Wait_Second_Operand = false;
  calculator.operator = null;
}

// This function updates the screen with the contents of Display_Value
function Update_Display() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.Expression_Display || calculator.Display_Value;
}

Update_Display();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    Handle_Operator(target.value);
    Update_Display();
    return;
  }
  if (target.classList.contains("decimal")) {
    Input_Decimal(target.value);
    Update_Display();
    return;
  }
  if (target.classList.contains("all-clear")) {
    Calculator_Reset();
    Update_Display();
    return;
  }
  Input_Digit(target.value);
  Update_Display();
});
