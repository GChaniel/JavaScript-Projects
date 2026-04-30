# JavaScript-Projects
This repository contains a collection of projects I built while learning and developing my JavaScript skills with PITMAN training. Each project focuses on applying core concepts such as DOM manipulation, event handling, and user interaction.
 
##Projects

### 1. Pizza Menu
A dynamic web-based pizza ordering system that allows users to select different toppings and automatically calculates the total price.

**Key Features:**

- Dynamic pizza builder with multiple configuration options (size, crust, sauce, cheese, toppings, sides, drinks, and extras)

- Real-time order summary displayed in a modal pop-up before confirmation

- Automatic price calculation using JavaScript based on selected options

- Reusable function (`handleOptions`) to efficiently process both single-choice (radio) and multiple-choice (checkbox) inputs

- “Buy Now” quick-order functionality using data attributes for instant item selection

- Interactive modal system with open, close, cancel, and confirm actions

- Form validation to ensure required selections (e.g. pizza size) are made before proceeding

- Order reset functionality after confirmation or cancellation

- Clean separation of logic using modular functions 

- User feedback via alerts and UI updates for a better user experience



### 2. Tic-Tac-Toe Game
A classic two-player Tic-Tac-Toe game built using HTML, CSS and JavaScript.

**Key Features:**

- Interactive two-player game with automated computer opponent

- Game state management using arrays to track player moves (`selectedSquares`)

- Turn-based logic system with automatic switching between player (X) and computer (O)

- Win condition detection using reusable logic to check all possible combinations

- Score tracking system for both player and computer

- Computer AI with randomised move selection for gameplay interaction

- Click the control system to prevent user interaction during the computer’s turn

- Dynamic UI updates using DOM manipulation (placing X and O images)

- Visual win indication using HTML Canvas with animated line drawing

- Sound effects integration for actions (placement, win, tie)

- Automatic game reset after a win or a draw

- Draw (tie) detection when all squares are filled

- Modular function structure for better code organisation



### 3. Calculator
A simple and responsive calculator that performs basic arithmetic operations.

**Key Features:**

- Functional calculator application for basic arithmetic operations: addition, subtraction, multiplication, and division

- Calculator state managed through a JavaScript object to track display value, current expression, first operand, selected operator, and second operand status

- Dynamic display updates based on user input and calculation results

- Operator handling system that processes chained calculations without needing to reset after each operation

- Decimal input support with validation to prevent duplicate decimal points

- Event delegation used on the calculator keypad to handle all button clicks efficiently

- Clear/reset functionality to return the calculator to its default state

- Separate calculation logic stored in a reusable `Perform_Calculation` object

- Clean function-based structure for easier readability and maintenance 
