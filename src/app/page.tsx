import { RadioButton } from "@/components/ui/radio/TRadioButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/TSelect";

export default function Home() {
  return (
    <div className="w-[60%] m-auto ">
      <RadioButton id="option1" name="example-group" label="Yes" />
      <Select>
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
      </Select>
    </div>
  );
}
