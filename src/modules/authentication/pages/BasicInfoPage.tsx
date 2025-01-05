import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/form/input/input";

const countries = [
  {
    name: "United Arab Emirates",
  },
  {
    name: "Kingdom of saudia arabia",
  },
  {
    name: "Egypt",
  },
  {
    name: "Qatar",
  },
];
const BasicInfoPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="label-1-medium text-[32px]">Get started with Tamara</h1>
      <p className="label-2-medium font-thin text-functional-500 my-4">
        Please fill in your details so we can set up your account.
      </p>

      <div className="mb-4">
        <Select>
          <SelectGroup>
            <SelectLabel>Country of registration</SelectLabel>
          </SelectGroup>
          <SelectTrigger id="country" aria-label="Country of registration">
            <SelectValue placeholder="Choose a country" />
          </SelectTrigger>

          <SelectContent>
            {countries.map((country) => (
              <SelectItem
                key={country.name}
                value={country.name}
                className="pl-10"
              >
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="brand">Brand Name</Label>
        <Input id={"brand"} type="text" placeholder="tamara" />
      </div>
      <div>
        <Label htmlFor="email">Email address</Label>
        <Input id="email" type="email" placeholder="example@gmail.com" />
      </div>
    </div>
  );
};

export default BasicInfoPage;
