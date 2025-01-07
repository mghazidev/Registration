import React from "react";
import { RadioCard } from "@/components/ui/radioCard";
import FormHead from "../components/FormHead";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { businessRevenueSchema } from "../formValidation";
import { BusinessRevenueFormValues } from "../types/types";
const BusinessRevenueForm: React.FC<{
  onSubmitRef: React.RefObject<() => void>;
}> = ({ onSubmitRef }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BusinessRevenueFormValues>({
    resolver: zodResolver(businessRevenueSchema),
    defaultValues: {
      revenue: "",
    },
  });

  const [selectedRevenue, setSelectedRevenue] = React.useState<string>("");

  const handleRadioChange = (value: string) => {
    console.log("Radio value changed to:", value);
    setSelectedRevenue(value);
    setValue("revenue", value);
  };

  const onSubmit = (data: BusinessRevenueFormValues) => {
    console.log("Submitted data:", data);
  };

  React.useEffect(() => {
    if (onSubmitRef) {
      onSubmitRef.current = handleSubmit(onSubmit);
    }
  }, [onSubmitRef, handleSubmit]);
  return (
    <form className="flex flex-col gap-4">
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
              onChange={() => handleRadioChange(option)}
            />
          ))}
        </div>
        {errors.revenue && (
          <p className="text-red-500 text-sm">{errors.revenue.message}</p>
        )}
      </div>
    </form>
  );
};

export default BusinessRevenueForm;
