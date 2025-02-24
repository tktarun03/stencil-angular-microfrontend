# stencil-angular-microfrontend

A micro frontend solution using StencilJS for reusable web components and Angular as the host application.

## 🚀 Features
- Uses **StencilJS** to create reusable web components.
- **Angular** acts as the host application, consuming the Stencil-built micro frontend.
- Ideal for micro frontend architectures with cross-framework compatibility.

## 📂 Project Structure
```
stencil-angular-microfrontend/
│── stencil-microfrontend/  # Stencil-built web components
│   ├── src/components/my-widget/  # Example widget component
│   ├── stencil.config.ts  # Stencil configuration
│── angular-host/  # Angular host application
│   ├── src/app/  # Angular app using Stencil component
│   ├── package.json  # Angular dependencies
│── README.md
```

## 🛠 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/tktarun03/stencil-angular-microfrontend.git
   cd stencil-angular-microfrontend
   ```

2. Install dependencies and build Stencil micro frontend:
   ```bash
   cd stencil-microfrontend
   npm install
   npm run build
   ```

3. Link Stencil components to Angular:
   ```bash
   cd ../angular-host
   npm install
   npm start
   ```

4. Open **http://localhost:4200** to see Angular consuming Stencil micro frontend.

## 👨‍💻 About the Author

🚀 Created by [Arunkumar Thamilarasu](https://github.com/tktarun03) | UI Technical Architect | Stencil & Angular Expert

## ⭐ Contribute & Support
- Fork & Star this repository! ⭐
- Submit Issues and PRs to improve micro frontend integration.

---
🎯 **Follow me on GitHub**: [@tktarun03](https://github.com/tktarun03)
