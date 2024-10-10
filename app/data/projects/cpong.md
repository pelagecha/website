# Technical Report: Embedded Pong Game Development

## Introduction

This project entails the development of an embedded Pong game utilizing GPIO-controlled LEDs and ADC-based joystick inputs. The primary objective is to create an interactive, real-time gaming experience on a microcontroller platform, leveraging the `libopencm3` library for hardware interfacing. The game features two paddles controlled by players and a ball that moves across a 32x32 LED matrix, simulating the classic Pong gameplay.

## Project Structure

The codebase is organized into three main components:

1. **`led.c`**: Handles the initialization and control of the LED matrix through GPIO pins. It manages the rendering of the game board, updating LED states based on game logic.
2. **`main.c`**: Serves as the entry point of the application, orchestrating the initialization of hardware peripherals, game settings, and the main game loop.
3. **`game.c`**: Contains the core game logic, including ball movement, paddle control, collision detection, and score management.

## Technical Architecture

### Hardware Interfacing

-   **GPIO Configuration**: The project extensively uses GPIO pins to interface with the LED matrix and joysticks. Specific pins are designated for input (joystick readings) and output (LED control). The configuration ensures efficient toggling of LEDs to represent the game state.
-   **ADC Integration**: Joystick inputs are read using the ADC (Analog-to-Digital Converter). The `readPaddle` function captures analog signals from the joysticks, converting them into digital values to determine paddle movements.

### Game Representation

-   **Data Structures**:

    -   **`Settings` Structure**: Defines configurable parameters such as paddle width, margin, and ball speed.
    -   **`Game` Structure**: Represents the game state, including the LED matrix (`board`), paddle positions (`leftPaddleCenter`, `rightPaddleCenter`), ball coordinates (`ballX`, `ballY`), and movement direction.

-   **LED Matrix**: A 3D array `board[32][32][3]` represents the LED states for each pixel, accommodating three color channels (likely RGB).

### Game Logic

-   **Initialization**: The `initialise` function sets up the game state, positioning paddles at default locations and randomizing the ball's initial direction using the `startAngle` function.
-   **Main Loop**: Continuously reads joystick inputs to update paddle positions and moves the ball accordingly. It handles collision detection with paddles and boundaries, updating scores when the ball passes a paddle.
-   **Rendering**: The `rowSelect` and `pixel` functions manage the selection and color display of LED rows, effectively rendering the current game state on the LED matrix.

## Code Decisions and Motivations

### Choice of `libopencm3`

The `libopencm3` library is chosen for its comprehensive support of STM32 microcontrollers, providing low-level access to GPIO and ADC functionalities. This choice facilitates precise control over hardware peripherals, essential for real-time game rendering and input handling.

### Struct-Based Design

Utilizing `structs` for `Game` and `Settings` promotes organized and scalable code. This approach encapsulates related data, enhancing code readability and maintainability. It allows easy adjustments to game parameters without extensive modifications across the codebase.

### Randomized Ball Direction

The ball's initial movement direction is randomized within specific angle ranges to ensure varied gameplay experiences. The `startAngle` function generates angles in radians, influencing the ball's vertical and horizontal velocities, thereby introducing unpredictability in game dynamics.

### ADC-Based Joystick Handling

Using ADC for joystick inputs provides accurate and responsive paddle control. The `readPaddle` function interprets analog joystick positions, translating them into digital states that drive paddle movements. This method ensures smooth and precise player interactions.

### LED Matrix Rendering

Managing the LED matrix via GPIO involves meticulous control of row selection and pixel coloring. The `rowSelect` function activates specific rows, while the `pixel` function sets individual LEDs based on the game state. This separation of concerns streamlines the rendering process, allowing efficient updates to the display.

## Technical Challenges and Solutions

### Real-Time Performance

Ensuring real-time responsiveness is critical for a smooth gaming experience. The code employs efficient looping and minimalistic processing within the main loop to maintain high performance. Delays are managed judiciously to balance input processing and display updates.

### Collision Detection

Accurate collision detection between the ball and paddles or boundaries is fundamental to gameplay. The implementation checks the ball's position against paddle centers and margins, adjusting its trajectory upon collisions. This logic preserves the game's integrity and fairness.

### Resource Management

Embedded systems have limited resources. The code optimizes memory usage by leveraging fixed-size arrays and avoiding dynamic memory allocations. This strategy ensures reliable performance without exceeding hardware constraints.

## Conclusion

This embedded Pong game project demonstrates effective utilization of microcontroller peripherals for interactive gameplay. Through thoughtful struct-based design, efficient hardware interfacing, and robust game logic, the project achieves a functional and engaging Pong experience on an LED matrix. The strategic technical decisions underpinning the codebase facilitate scalability and maintainability, laying a strong foundation for future enhancements.
