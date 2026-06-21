"use client";
import Hero from "@/components/Hero";
import { Collections, DeviceSelector, TrendingProducts, WhyCoverHub, Reviews, WhatsAppBanner } from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <DeviceSelector />
      <TrendingProducts />
      <WhyCoverHub />
      <Reviews />
      <WhatsAppBanner />
    </>
  );
}
