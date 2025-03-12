# Favorites DApp

The **Favorites DApp** is a decentralized application built on the Solana blockchain using the Anchor framework. It enables users to store and manage their favorite number, color, and hobbies on-chain. This project serves as an example of how to create, deploy, and interact with Solana programs using Anchor.

## Features

- **Set Favorites**: Users can set their favorite number, color, and a list of hobbies.
- **On-Chain Storage**: Favorites are stored on the Solana blockchain, ensuring immutability and transparency.

## Prerequisites

Before running this project, ensure you have the following installed:

- **Rust**: The programming language for building Solana programs.
- **Solana CLI**: Command-line tool for Solana development.
- **Anchor CLI**: Command-line tool for the Anchor framework.
- **Node.js**: JavaScript runtime for running tests and scripts.

For detailed installation instructions, refer to the [Anchor framework documentation](https://www.anchor-lang.com/docs/installation).


## Getting Started

Follow these steps to set up and run the project:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/dehghanialif/Favorites.git
   cd Favorites
   ```


2. **Initialization**:

   Create keypair:
   ```bash
   solana-keygen new
   ```

   Changing the Default Network:
   ```bash
   solana config set --url localhost
   ```

3. **Build the Program**:

   Compile the Solana program:

   ```bash
   anchor build
   ```

4. **Deploy the Program**:

   Deploy the program to the local Solana cluster:

   ```bash
   anchor deploy
   ```

5. **Run Tests**:

   Execute the test suite to ensure the program functions correctly:

   ```bash
   anchor test
   ```

## Resources

- **Anchor Framework Documentation**: [https://www.anchor-lang.com/](https://www.anchor-lang.com/)
- **Solana Documentation**: [https://docs.solana.com/](https://docs.solana.com/)
