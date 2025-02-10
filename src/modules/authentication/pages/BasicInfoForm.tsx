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
import FormHead from "../components/FormHead";
import { zodResolver } from "@hookform/resolvers/zod";
import { basicInfoSchema } from "../formValidation";
import { BasicInfoFormValues } from "../types/types";
import { useForm } from "react-hook-form";
import {
  TooltipContent,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
const BasicInfoForm: React.FC<{ onSubmitRef: React.RefObject<() => void> }> = ({
  onSubmitRef,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BasicInfoFormValues>({
    resolver: zodResolver(basicInfoSchema),
  });

  const onSubmit = (data: BasicInfoFormValues) => {
    console.log(data);
  };

  React.useEffect(() => {
    if (onSubmitRef) {
      onSubmitRef.current = handleSubmit(onSubmit);
    }
  }, [onSubmitRef, handleSubmit]);

  return (
    <TooltipProvider>
      <form className="flex flex-col gap-4">
        <FormHead
          heading="Get started with Tamara"
          description="Please fill in your details so we can set up your account."
        />

        <div className="mb-4">
          <Select onValueChange={(value) => setValue("country", value)}>
            <SelectGroup>
              <SelectLabel>Country of registration</SelectLabel>
            </SelectGroup>
            <Tooltip>
              <TooltipTrigger asChild>
                <SelectTrigger
                  id="country"
                  aria-label="Country of registration"
                >
                  <SelectValue placeholder="Choose a country" />
                </SelectTrigger>
              </TooltipTrigger>
              <TooltipContent id="country" side="right">
                Reference site about lorem Ipsum, giving information on its
                origins, as well as a random Lipsum generator. <br></br>
                <p className="mt-2">
                  What is business number?{" "}
                  <span className="text-brand-50">Learn more</span>
                </p>
              </TooltipContent>
            </Tooltip>
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
          <Input id={"brand"} placeholder="tamara" {...register("brand")} />
        </div>
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            {...register("email")}
          />
        </div>
      </form>
    </TooltipProvider>
  );
};

export default BasicInfoForm;
