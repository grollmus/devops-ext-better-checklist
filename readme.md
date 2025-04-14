[![build](https://github.com/grollmus/devops-ext-better-checklist/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/grollmus/devops-ext-better-checklist/actions/workflows/build.yml) [![publish](https://github.com/grollmus/devops-ext-better-checklist/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/grollmus/devops-ext-better-checklist/actions/workflows/publish.yml)

# Better Checklist

## 📌 About the Project

**Better Checklist** is a tool designed to streamline and enhance the management of checklist templates in Azure Devops. It enables users to create, manage, and reuse checklists for complex recurring tasks, ensuring consistency and efficiency across DevOps workflows.

## 🚀 Features

- ✅ Create and reuse checklist templates across projects
- 🔁 Automate repetitive DevOps processes
- 📋 Ensure process consistency and compliance
- ✏️ Modify templates to adapt to evolving workflows
- ✅ Track task progress within Azure DevOps

## 🛠 Development Setup

To get started with local development:

1. Clone the repository
   ```sh
   git clone https://github.com/grollmus/devops-ext-better-checklist.git
   cd devops-ext-better-checklist
   ````
2. Install dependencies
   ```sh
   npm install
   ````
3. Start the local development server
   ```sh
   npm run compile:dev
   npm run start:dev
   ```
4. Setup Azure DevOps Extension to use localhost:3000 (optional)
   ```sh
   npx tfx extension publish --manifest-globs vss-extension.json --overrides-file vss-extension.dev.json --share-with [YOUR PRIVATE AZURE DEVOPS]
   ```
5. Activate the extension in your Azure DevOps (optional)
6. Go to extension page
   [Organization] -> [Project] -> Boards -> Better Checklist

## 💡 Usage

1. Create a new checklist template with predefined steps.
2. Apply the template to recurring tasks to maintain standardization.
3. Track progress and completion status across multiple instances.

## 🤝 Contributing
Contributions are welcome!
If you have ideas, suggestions, or improvements:

- Open an [Issue](https://github.com/grollmus/devops-ext-better-checklist/issues/new/choose)
- Submit a [Pull Request](https://github.com/grollmus/devops-ext-better-checklist/compare)
- Improve documentation or [report bugs](https://github.com/grollmus/devops-ext-better-checklist/issues/new?template=bug.md)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📬 Contact

For feedback, questions, or collaboration:

- Open an [Issue](https://github.com/grollmus/devops-ext-better-checklist/issues/new/choose)
- Or fork the repo and send a [PR 🚀](https://github.com/grollmus/devops-ext-better-checklist/compare)