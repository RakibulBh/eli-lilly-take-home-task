import Header from "@/components/header";
import MedicineContainer from "@/components/medicine-container";
import MedicineHeader from "@/components/medicine-header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-white flex flex-col space-y-12">
      <Header />
      <div className="px-64 space-y-4">
        <MedicineHeader />
        <MedicineContainer />
      </div>
    </div>
  );
}
