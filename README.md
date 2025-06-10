# Snap.Hutao.Docs

This repository contains the documentation for the [Snap Hutao project](https://github.com/DGP-Studio/Snap.Hutao). You can view the live version at [https://hut.ao](https://hut.ao).

We welcome contributions to our documentation! If you're interested in helping with translations, please check our [Localization Guide](https://hut.ao/i18n.html).

## How to Run Locally

### Initial Setup

Before you begin, ensure you have the following installed:

*   **Node.js**: [Download the latest LTS version](https://nodejs.org/en/download/)
*   **Git**: [Download Git](https://git-scm.com/downloads/) or use a client like [GitHub Desktop](https://desktop.github.com/).

Once the prerequisites are met, follow these steps:

1.  **Clone the Repository:**
    Open your terminal or command prompt and run the following command to clone this project to your local machine:
    ```bash
    git clone https://github.com/DGP-Studio/Snap.Hutao.Docs.git
    ```

2.  **Navigate to the Project Directory:**
    ```bash
    cd Snap.Hutao.Docs
    ```

3.  **Install Dependencies:**
    We use `pnpm` for package management. Run the following command to install all necessary dependencies:
    ```bash
    pnpm install
    ```

### Running the Local Server

After the setup is complete, you can start the local development server:

1.  **Start the Server:**
    In the project's root directory, run:
    ```bash
    pnpm run docs:dev
    ```
2.  **View the Documentation:**
    The server will start, and you can access the local documentation by opening your browser and navigating to `http://localhost:8080`. The site will automatically update as you make changes to the source files.