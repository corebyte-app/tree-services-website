import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import TreeRemoval from './pages/TreeRemoval';
import TreeTrimming from './pages/TreeTrimming';
import StumpGrinding from './pages/StumpGrinding';
import Quote from './pages/Quote';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Router basename={process.env.NODE_ENV === 'production' ? '/tree-services-website' : ''}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/tree-removal" element={<TreeRemoval />} />
            <Route path="services/tree-trimming" element={<TreeTrimming />} />
            <Route path="services/stump-grinding" element={<StumpGrinding />} />
            <Route path="quote" element={<Quote />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
