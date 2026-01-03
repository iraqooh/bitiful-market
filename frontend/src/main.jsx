import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
// import './index.css'
import { BrowserRouter } from "react-router-dom"
import Layout from "./Layout.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </StrictMode>
)
