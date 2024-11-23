"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Medicine } from "@/types";
import MedicineComponent from "./medicine-component";
import Button from "./button";
import { Input } from "./ui/input";
import { useState } from "react";
import axios from "axios";
import { Label } from "@radix-ui/react-label";
import { toast } from "sonner";
import { revalidatePath } from "next/cache";

const EditMedicineDialog = ({ medicine }: { medicine: Medicine }) => {
  const [name, setName] = useState(medicine.name);
  const [price, setPrice] = useState<string>(String(medicine.price));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("price", price);

    try {
      axios.post("http://0.0.0.0:8000/update", formData.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      revalidatePath("/");
    } catch (error) {
      toast("Error", {
        description: "Error updating information",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <MedicineComponent key={medicine.name} medicine={medicine} />
      </DialogTrigger>
      <DialogContent className="w-80">
        <DialogHeader>
          <DialogTitle>Edit Medicine Details</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={name ? name : ""}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              id="price"
              value={price ? price : 0}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </div>
          <div className="flex justify-end">
            <Button>Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditMedicineDialog;
