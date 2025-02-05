"use client"
import Image from "next/image";
import styles from "./page.module.css";
import AppHeader from "./components/Header";
import AppPageContent from "./components/PageContent";
import AppFooter from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <div className="app">
      <BrowserRouter>
        <AppHeader />
        <AppPageContent />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}




