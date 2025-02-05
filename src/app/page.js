import Image from "next/image";
import styles from "./page.module.css";
import AppHeader from "./components/Header";
import AppPageContent from "./components/PageContent";
import AppFooter from "./components/Footer";

export default function Home() {
  return (
    <div className="app">
      <AppHeader />
      <AppPageContent />
      <AppFooter />
    </div>
  );
}




