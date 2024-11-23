import Header from "@/components/header";
import MedicineHeader from "@/components/medicine-header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-white flex flex-col space-y-12">
      <Header />
      <MedicineHeader />
    </div>
  );
}
