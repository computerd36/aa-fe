import { Navigate, Route, Routes } from "react-router-dom"
import { PageLanding } from "./routes/PageLanding"
import { PageSetup } from "./routes/PageSetup"
import { PageStatus } from "./routes/PageStatus";
import { LanguageProvider } from "./context/languageContext";
import { PageHow } from "./routes/PageHow";
import { PageHelp } from "./routes/PageHelp";
import { PageImprint } from "./routes/PageImprint";


function App() {

  document.documentElement.classList.add('bg-gray-950');
  document.body.classList.add('dark', 'text-foreground');

  return (
    <main className="dark">
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<PageLanding />} />
          <Route path="/setup" element={<PageSetup />} />
          <Route path="/status" element={<PageStatus />} />
          <Route path="/how" element={<PageHow />} />
          <Route path="/help" element={<PageHelp />} />
          <Route path="/support" element={<Navigate to="/help" replace />} />
          <Route path="/imprint" element={<PageImprint />} />
        </Routes>
      </LanguageProvider >
    </main>
  )
}

export default App
