"use client";

import * as React from "react";
import { RadioButton } from "@/components/ui/radio/TRadioButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/TSelect";
import { RadioCard } from "@/components/ui/radio_card/TRadioCard";

export default function Home() {
  const [selected, setSelected] = React.useState<string>("option1");

  const handleChange = (value: string) => {
    setSelected(value);
  };
  return (
    <div className="w-[60%] m-auto ">
      <RadioButton id="option1" name="example-group" label="Yes" />
      <RadioCard
        id="option1"
        label="Option 1"
        value="option1"
        checked={selected === "option1"}
        onChange={handleChange}
      />
      <RadioCard
        id="option2"
        label="Option 2"
        value="option2"
        checked={selected === "option2"}
        onChange={handleChange}
      />
      <RadioCard
        id="option3"
        label="Option 3 (Disabled)"
        value="option3"
        checked={selected === "option3"}
        onChange={handleChange}
        disabled
      />
      {/* <Select>
        <SelectTrigger className="w-[180px] my-4">
          <SelectValue
            placeholder="Write for search..."
            data-placeholder="true"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="rr">R</SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  );
}
