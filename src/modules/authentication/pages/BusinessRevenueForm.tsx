import React from "react";
import { RadioCard } from "@/components/ui/radioCard";
import FormHead from "../components/FormHead";
const BusinessRevenueForm = () => {
  const [selectedRevenue, setSelectedRevenue] = React.useState<string>("");

  const handleRadioChange = (value: string) => {
    setSelectedRevenue(value);
  };
  return (
    <div className="flex flex-col gap-4">
      <FormHead
        heading="What is the size of your business?"
        description="Choose one of the following options to help us set up your account."
      />
      <div>
        <h3 className="text-functional-700 h3">Yearly revenue</h3>
        <div className="mt-4">
          {[
            "I just started my business",
            "Below SAR 100,000",
            "SAR 200,000 - SAR 500.000",
            "Over than SAR 500,000",
          ].map((option, index) => (
            <RadioCard
              key={index}
              id={`revenue-${index}`}
              label={option}
              value={option}
              checked={selectedRevenue === option}
              onChange={handleRadioChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessRevenueForm;
