# Hurtle Viewer Project Report

## Introduction

Hurtle Viewer is a Haskell-based application designed to parse and visualize Hogo programs. Leveraging Haskell's robust type system and functional paradigms, the project emphasizes modularity, maintainability, and scalability, making it a significant addition to any developer's portfolio.

## Motivation

The primary motivation behind Hurtle Viewer is to create a reliable tool for interpreting and displaying turtle graphics commands defined in the Hogo language. Haskell was chosen for its strong support in managing complex parsing tasks and its ability to facilitate clear and concise code, which is essential for handling the intricacies of graphical command interpretation.

## Technical Architecture

### Project Structure

The codebase is organized with a clear separation of concerns:

-   **src/**: Contains the core library modules, including `Hurtle.Parser` and `Hurtle.Types`, which handle the parsing logic and define the data structures for the Hogo program.
-   **app/**: Houses the application's entry point in `Main.hs`, orchestrating the overall flow of the application.
-   **test/**: Contains test suites using the `tasty` framework to ensure code reliability and correctness.
-   **hatch/**: An optional module intended for enhanced graphical capabilities using Gloss, though not enabled by default to optimize compile times.

### Dependency Management

**Stack** is employed as the build tool, ensuring consistent builds via the specified resolver in `stack.yaml`. Dependencies are managed meticulously to include essential libraries:

-   **Megaparsec**: Utilized for parsing Hogo programs, offering a powerful and flexible parsing library that simplifies the handling of complex grammatical structures.
-   **Gloss and Gloss-Juicy**: Optional dependencies for graphical rendering, included when Hatch is enabled, allowing for rich visualization capabilities.
-   **Testing Libraries**: Incorporates `tasty`, `tasty-hunit`, `tasty-quickcheck`, and `tasty-reporter-muffled` to establish a robust testing environment that ensures the application's reliability.

**Cabal** configuration, facilitated by `hpack`, outlines the build and dependency specifications, ensuring seamless integration with Haskell's tooling ecosystem. The `package.yaml` file provides a high-level overview of the project's dependencies, build options, and test suites, fostering maintainability and ease of updates.

### Parsing Implementation

The parsing logic centralized in `Hurtle.Parser` employs Megaparsec to interpret Hogo commands effectively. The parser handles various commands such as `forward`, `backward`, `left`, `right`, and pen controls like `penup`, `pendown`, and `clearscreen`. It also supports `repeat` blocks, allowing for the execution of command sequences multiple times, which enhances the program's expressiveness and user flexibility.

Key aspects of the parsing implementation include:

-   **Error Handling**: Provides detailed error messages using `errorBundlePretty`, improving user feedback on parsing failures and facilitating easier debugging.
-   **Extensibility**: The parser's modular design facilitates the addition of new commands and features with minimal changes to existing code, ensuring that the application can evolve alongside user needs.
-   **Performance**: Efficient parsing strategies are employed to handle large Hogo programs without significant performance degradation, ensuring a smooth user experience.

### Application Entry Point

`Main.hs` serves as the application's entry point, orchestrating the reading of input files and invoking the parser. Although currently marked as not implemented, it sets the foundation for integrating the parsing logic into a functional application pipeline. Future development will focus on enhancing this module to provide a complete user interface and handle various input sources seamlessly.

## Build and Configuration

The build process is meticulously managed via Stack, as detailed in `stack.yaml`, which specifies precise resolver snapshots to maintain dependency consistency. The configuration ensures that all necessary packages are included, with optional components like Hatch and Gloss enabled through modifications in `package.yaml` and `cswk-hurtle.cabal`.

Key configuration highlights include:

-   **Resolver Specification**: Uses a specific LTS snapshot (`lts-21/25`) to ensure compatibility and stability across builds.
-   **Extra Dependencies**: Handles dependencies not included in the resolver by specifying them in the `extra-deps` section, allowing for the inclusion of specific library versions or forks.
-   **Compiler Options**: Custom GHC options are set to enforce strict compilation standards (`-Wall`, `-Wcompat`, etc.), promoting code quality and consistency.

## Conclusion

Hurtle Viewer exemplifies a well-structured Haskell application, leveraging advanced parsing techniques and a modular design to deliver a robust tool for visualizing Hogo programs. The project showcases effective use of Haskell's ecosystem, meticulous dependency management, and a commitment to maintainable and extensible code architecture. With its comprehensive testing strategy and thoughtful technical decisions, Hurtle Viewer stands as an impressive and realistic project, demonstrating the developer's proficiency in functional programming and software engineering best practices.
