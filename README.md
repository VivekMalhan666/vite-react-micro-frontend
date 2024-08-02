# Basic Microfrontends with React

Welcome to the **Basic Microfrontends with React** repository! This project provides a simple and clear example of how to implement microfrontends using React. Microfrontends are an architectural style where independently deliverable frontend applications are composed into a greater whole, allowing for greater scalability, flexibility, and team autonomy. To know more read this blog[https://medium.com/javascript-in-plain-english/exploring-micro-frontends-and-implementation-with-react-vite-7178aa1886d4]

## Features

- **Microfrontend Architecture**: Demonstrates the basic principles of microfrontends, including independent deployment and integration.
- **React**: Utilizes React for building user interfaces.
- **Module Federation**: Implements Webpack Module Federation for dynamic module loading.
- **Simple Setup**: Easy-to-follow project structure suitable for beginners.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/VivekMalhan666/test-vite-react-micro-frontend.git
    cd test-vite-react-micro-frontend
    ```

2. Install dependencies for each microfrontend:
    ```bash
    cd host
    npm install
    cd ../remote-a
    npm install
    cd ../remote-b
    npm install
    ```

### Running the Project

1. Start the container application:
    ```bash
    cd host
    npm run dev
    ```

2. Start the first microfrontend:
    ```bash
    cd ../remote-a
    npm run build
    npm run preview
    ```

3. Start the second microfrontend:
    ```bash
    cd ../remote-b
    npm run build
    npm run preview
    ```

4. Open your browser and navigate to `http://localhost:5173` to see the container application integrating the microfrontends.

## Project Structure

- **/container**: The main application that hosts the microfrontends.
- **/microfrontend1**: The first microfrontend application.
- **/microfrontend2**: The second microfrontend application.

Each microfrontend is a standalone React application, demonstrating how to structure and manage independent frontend modules.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements, bug fixes, or new features.

## License

This project is licensed under the MIT License.

---

Feel free to explore the code, learn from it, and adapt it to your own projects. Happy coding!

---

### Contact

If you have any questions or need further assistance, please contact [https://vivekmalhan-cb919.web.app/].
