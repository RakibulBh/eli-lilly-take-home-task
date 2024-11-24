"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "./button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { toast } from "sonner";
import { Filter } from "lucide-react";

const FilterDialog = ({
  setMinMax,
  minMax,
}: {
  setMinMax: (values: [number, number]) => void;
  minMax: [number, number];
}) => {
  const [min, setMin] = useState(minMax[0]);
  const [max, setMax] = useState(minMax[1]);
  const [open, setOpen] = useState(false);

  const onSubmit = () => {
    if (min < 0 || max < min || min > max) {
      toast.error("Invalid price range");
      return;
    }

    setMinMax([min, max]);
    setOpen(false);
  };

  const onReset = () => {
    setMin(0);
    setMax(5000);
    setMinMax([0, 5000]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="p-2 hover:bg-opacity-85 bg-[#901615] text-white text-semibold rounded-md font-semibold flex gap-2">
        <Filter />
        Filter
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Filter medicine by price</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex gap-6">
            <div className="flex-1">
              <Label htmlFor="min">Min</Label>
              <Input
                type="number"
                id="min"
                value={min}
                onChange={(e) => setMin(Number(e.target.value))}
                placeholder="Min price"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="max">Max</Label>
              <Input
                type="number"
                id="max"
                value={max}
                onChange={(e) => setMax(Number(e.target.value))}
                placeholder="Max price"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button onClick={onReset}>Reset</Button>
            <Button onClick={onSubmit}>Apply Filter</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterDialog;
