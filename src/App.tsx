import { Route, Routes } from "react-router-dom"
import { PageLanding } from "./routes/PageLanding"
import { PageSetup } from "./routes/PageSetup"
import { PageStatus } from "./routes/PageStatus";


function App() {

  document.documentElement.classList.add('bg-gray-950');
  document.body.classList.add('dark', 'text-foreground');

  return (
    <main className="dark">
      <Routes>
        <Route path="/" element={<PageLanding />} />
        <Route path="/setup" element={<PageSetup />} />
        <Route path="/status" element={<PageStatus />} />
      </Routes>
    </main>
  )
}

export default App
