import type { InferGetStaticPropsType } from 'next';
import { getAllProducts } from '@framework/product';
import { getConfig } from '@framework/api/config';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid, Hero, Marquee } from '@components/ui';

export async function getStaticProps(){

  const config = getConfig();
  const products = await getAllProducts(config);
  return{
    props:{
      products
    },
    // Check database every 4 hours for new products
      revalidate: 4 * 60 * 60
    // Check database every 4 hours for new products
  };

};

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      
      <Grid>

        {products.slice(0,3).map(product => 

          <ProductCard 
            key={product.id}
            product={product}
          />

        )}

      </Grid>
      <Hero
        headline='Jackets, Caps and T-shirts'
        description={`MEET YOUR FAVORITE COLD-WEATHER CAP | Premium Imports' Versatile Knit Beanie Hat Keeps Your Head, Scalp & Ears Warm & Dry Ultralight, versatile, and packable, this down jacket for men is a consummate traveler, whether your destination is cross town or far off the beaten path. The quick drying T-shirt suitable for most outdoor activities including sports, hiking, climbing, biking, cycling, weight lifting and just for daily use.`}
      />
      <Marquee>

        {products.slice(0,3).map(product => 
  
          <ProductCard 
            key={product.id}
            variant='slim'
            product={product}
          />
        
        )}

      </Marquee>
      <Grid layout='B'>

        {products.slice(0,3).map(product => 

          <ProductCard 
            key={product.id}
            product={product}
          />

        )}

      </Grid>
      <Marquee variant='secondary'>

        {products.slice(0,3).map(product => 
  
          <ProductCard 
            key={product.id}
            variant='slim'
            product={product}
          />
        
        )}

      </Marquee>

    </>
  );

};

// Initializing [Layout] as [Home] prop
  Home.Layout = Layout;
// Initializing [Layout] as [Home] prop