import React from 'react';
import HeroSection from './subcomponents/HeroSection';
import TrendingProducts from './subcomponents/TrendingProducts';
import Collections from './subcomponents/Collections';
import SaleAndTestimonials from './subcomponents/SaleAndTestimonials';
import { collections, productsWithOldPrices, testimonials, trendingProducts } from '../constants/data';
import ProductCard from './subcomponents/ProductCard';

const MainPage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <TrendingProducts products={trendingProducts} />
      <ProductCard products={productsWithOldPrices}/>
      <Collections collections={collections} />
      <SaleAndTestimonials testimonials={testimonials} />
    </main>
  );
};

export default MainPage;
