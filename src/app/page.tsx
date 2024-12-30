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
import { usePhoneNumberFormat } from "@/modules/authentication/hooks/usePhoneNumberFormat";
import { VerificationInputField } from "@/components/ui/input/TVerificationInputField";
export default function Home() {
  // const [selected, setSelected] = React.useState<string>("option1");

  // const handleChange = (value: string) => {
  //   setSelected(value);
  // };

  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [verificationStatus, setVerificationStatus] = React.useState<
    "verified" | "not_verified" | "loading" | "idle"
  >("idle");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleVerifyClick = () => {
    setIsModalOpen(true);
  };

  const verifyPhoneNumber = (phone: string) => {
    setVerificationStatus("loading");
    setTimeout(() => {
      if (phone === "1234567890") {
        setVerificationStatus("verified");
      } else {
        setVerificationStatus("not_verified");
      }
    }, 2000);
  };

  React.useEffect(() => {
    if (phoneNumber.length > 0) {
      setVerificationStatus("loading");
      verifyPhoneNumber(phoneNumber);
    } else {
      setVerificationStatus("idle");
    }
  }, [phoneNumber]);

  return (
    <div className="w-[60%] m-auto my-4">
      <VerificationInputField
        id="phoneNumber"
        value={phoneNumber}
        onChange={setPhoneNumber}
        verificationStatus={verificationStatus}
        onVerifyClick={handleVerifyClick}
        error={verificationStatus === "not_verified"}
      />

      {/* Modal for verification */}
      {isModalOpen && (
        <>
          <div>Modal content here</div>
        </>
      )}
      {/* <RadioButton id="option1" name="example-group" label="Yes" /> */}
      {/* <RadioCard
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
      /> */}
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
