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
import { useRouter } from "next/navigation";

const EditMedicineDialog = ({ medicine }: { medicine: Medicine }) => {
  const router = useRouter();
  const [name, setName] = useState(medicine.name);
  const [price, setPrice] = useState<string>(String(medicine.price));
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!name || !price) {
      toast.error("Please fill in all fields");
      return;
    }
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("price", price);

    try {
      axios.post("http://0.0.0.0:8000/update", formData.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      toast.success("Medicine updated successfully");
      router.refresh();
      setOpen(false);
    } catch (error) {
      toast.error("Failed to update medicine");
    }
  };

  const handleDelete = async () => {
    const formData = new URLSearchParams();
    formData.append("name", name);

    try {
      await axios.delete("http://0.0.0.0:8000/delete", {
        data: formData.toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      toast.success("Successfully deleted!");
      router.refresh();
      setOpen(false);
    } catch (error) {
      toast.error("Error deleting medicine");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <MedicineComponent key={medicine.name} medicine={medicine} />
      </DialogTrigger>
      <DialogContent className="w-80">
        <DialogHeader>
          <DialogTitle>Edit Medicine Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
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
            <div className="flex gap-2">
              <Button onClick={handleDelete}>Delete</Button>
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditMedicineDialog;
