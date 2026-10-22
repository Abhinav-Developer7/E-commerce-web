
import HeroSection from '../../components/HeroSection';
import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';



export default function Home() {
  return (

    <main className="min-h-screen bg-stone-50 text-stone-900">
      <NavBar />
      <HeroSection />
      <ProductCard />
    </main>
  );
}
