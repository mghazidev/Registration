"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormHead from "../components/FormHead";
import { Label } from "@/components/ui/label";
import { RadioButton } from "@/components/ui/radio";
import { Input } from "@/components/ui/form/input/input";
import { VerificationInputField } from "@/components/ui/form/input/TVerificationInputField";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
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

const PersonalDetailsForm: React.FC<{
  onSubmitRef: React.RefObject<() => void>;
}> = ({ onSubmitRef }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<any>({
    // resolver: zodResolver(),
  });
  const [isSignatory, setIsSignatory] = React.useState<string>("");
  const [nationalId, setNationalId] = React.useState("");
  const [verificationStatus, setVerificationStatus] = React.useState<
    "verified" | "not_verified" | "loading" | "idle"
  >("idle");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  React.useEffect(() => {
    if (onSubmitRef) {
      onSubmitRef.current = handleSubmit(onSubmit);
    }
  }, [onSubmitRef, handleSubmit]);

  const handleVerifyPhoneNumber = () => {
    setVerificationStatus("loading");

    setTimeout(() => {
      if (nationalId.length === 10) {
        setVerificationStatus("verified");
      } else {
        setVerificationStatus("not_verified");
      }
    }, 2000);
  };

  return (
    <TooltipProvider>
      <form className="flex flex-col gap-4">
        <FormHead
          heading="Legal Signatory confirmation"
          description="Please fill in your details so we can set up your account."
        />

        <div className="mb-4">
          <Label>Are you the business legal signatory?</Label>
          <div className="flex gap-6">
            <RadioButton
              id="signatory-yes"
              name="signatory"
              label="Yes"
              value="yes"
              checked={isSignatory === "yes"}
              onChange={(e) => setIsSignatory(e.target.value)}
            />
            <RadioButton
              id="signatory-no"
              name="signatory"
              label="No"
              value="no"
              checked={isSignatory === "no"}
              onChange={(e) => setIsSignatory(e.target.value)}
            />
          </div>
          <Label htmlFor="national-id">National ID</Label>
          <VerificationInputField
            id="national-id"
            placeholder="Enter national id"
            value={nationalId}
            onChange={setNationalId}
            verificationStatus={verificationStatus}
            onVerifyClick={handleVerifyPhoneNumber}
          />

          <Label htmlFor="legal-signatory-name">Legal signatory name</Label>
          <Input id="legal-signatory-name" placeholder="Tama LTD" />

          <Label htmlFor="expiry-date">Expiry date</Label>
          <Input id="expiry-date" placeholder="1/1/2025" />

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
              <TooltipContent className="ml-4" id="country" side="right">
                Reference site about lorem Ipsum, giving information on its
                origins, as well as a random Lipsum generator. <br></br>
                <p className="mt-2">
                  What is Country?{" "}
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
      </form>
    </TooltipProvider>
  );
};

export default PersonalDetailsForm;
