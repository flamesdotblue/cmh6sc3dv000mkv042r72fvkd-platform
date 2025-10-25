import Header from './components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
