// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//import Component
import Layout from "./Component/Layout"

//import pages
import Dictionary from "./pages/Dictionary"

import NotFound from "./pages/NotFound"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dictionary />} />
            {/* <Route path="traduction" element={<Traduction />} /> */}
            {/* ... */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

