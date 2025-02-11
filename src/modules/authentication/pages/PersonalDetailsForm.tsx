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
import { personalDetailsSchema } from "../formValidation";
import { PersonalDetailsFormValues } from "../types/types";
import useDateFormatter from "../hooks/useDateFormatter";

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
  } = useForm<PersonalDetailsFormValues>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: {
      isSignatory: "no",
    },
  });
  const { date, setDate, formatDate } = useDateFormatter();
  const [isSignatory, setIsSignatory] = React.useState<string>("no");
  const [nationalId, setNationalId] = React.useState("");
  const [verificationStatus, setVerificationStatus] = React.useState<
    "verified" | "not_verified" | "loading" | "idle"
  >("idle");

  const onSubmit = (data: PersonalDetailsFormValues) => {
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

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedDate = formatDate(e.target.value);
    setValue("expiryDate", formattedDate, { shouldValidate: true });
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
              label="Yes"
              value="yes"
              checked={isSignatory === "yes"}
              {...register("isSignatory")}
              onChange={(e) => {
                setIsSignatory(e.target.value);
                setValue("isSignatory", e.target.value, {
                  shouldValidate: true,
                });
              }}
            />
            <RadioButton
              id="signatory-no"
              label="No"
              value="no"
              checked={isSignatory === "no"}
              {...register("isSignatory")}
              onChange={(e) => {
                setIsSignatory(e.target.value);
                setValue("isSignatory", e.target.value, {
                  shouldValidate: true,
                });
              }}
            />
          </div>
          {errors.isSignatory && (
            <p className="text-red-500">{errors.isSignatory.message}</p>
          )}

          <Label htmlFor="nationalId">National ID</Label>
          <VerificationInputField
            id="nationalId"
            placeholder="Enter national id"
            value={nationalId}
            onChange={(value) => {
              setNationalId(value);
              setValue("nationalId", value);
            }}
            verificationStatus={verificationStatus}
            onVerifyClick={handleVerifyPhoneNumber}
          />
          {errors.nationalId && (
            <p className="text-red-500">{errors.nationalId.message}</p>
          )}

          <Label htmlFor="legalSignatoryName">Legal signatory name</Label>
          <Input
            id="legalSignatoryName"
            placeholder="Tama LTD"
            {...register("legalSignatoryName")}
          />

          {errors.legalSignatoryName && (
            <p className="text-red-500">{errors.legalSignatoryName.message}</p>
          )}

          <Label htmlFor="expiryDate">Expiry date</Label>
          <Input
            id="expiryDate"
            placeholder="MM/DD/YYYY"
            maxLength={10}
            {...register("expiryDate", {
              onChange: (e) => handleExpiryDateChange(e),
            })}
            value={date}
          />
          {errors.expiryDate && (
            <p className="text-red-500">{errors.expiryDate.message}</p>
          )}

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
          {errors.country && (
            <p className="text-red-500">{errors.country.message}</p>
          )}
        </div>
      </form>
    </TooltipProvider>
  );
};

export default PersonalDetailsForm;
