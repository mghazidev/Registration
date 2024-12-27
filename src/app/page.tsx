import { TInputField } from "@/components/ui/input/TInputField";
import { RadioButton } from "@/components/ui/radio/TRadioButton";

export default function Home() {
  return (
    <div className="w-48 m-auto ">
      <RadioButton id="option1" name="example-group" label="Yes" />
      <TInputField className="border p-2 rounded-md" />
    </div>
  );
}
