import { TInputField } from "@/components/ui/input/TInputField";

export default function Home() {
  return (
    <div className="w-48 m-auto prose">
      <h2 className="h1">Heading 2</h2>
      <p className="display-1">Medium Body Text</p>

      <TInputField className="border p-2 rounded-md" />
    </div>
  );
}
