import { TInputField } from "@/components/ui/input/TInputField";

export default function Home() {
  return (
    <div className="w-48 m-auto">
      <div className="prose">
        <h1>This is a Heading 1</h1>
        <h2>This is a Heading 2</h2>
        <h3>This is a Heading 3</h3>
        <h4>This is a Heading 4</h4>
        <h5>This is a Heading 5</h5>
        <h6>This is a Heading 6</h6>

        <p className="body-1-medium">
          This is a body text with the body-1-medium variant.
        </p>
        <p className="body-2-medium">
          This is a body text with the body-2-medium variant.
        </p>
        <p className="body-3-medium">
          This is a body text with the body-3-medium variant.
        </p>
        <p className="body-1-regular">
          This is a body text with the body-1-regular variant.
        </p>
        <p className="body-2-regular">
          This is a body text with the body-2-regular variant.
        </p>
        <p className="body-3-regular">
          This is a body text with the body-3-regular variant.
        </p>

        <p className="label-1-medium">
          This is a label with the label-1-medium variant.
        </p>
        <p className="label-2-medium">
          This is a label with the label-2-medium variant.
        </p>
        <p className="label-3-medium">
          This is a label with the label-3-medium variant.
        </p>
        <p className="label-4-medium">
          This is a label with the label-4-medium variant.
        </p>
        <p className="label-1-regular">
          This is a label with the label-1-regular variant.
        </p>
        <p className="label-2-regular">
          This is a label with the label-2-regular variant.
        </p>
        <p className="label-3-regular">
          This is a label with the label-3-regular variant.
        </p>
        <p className="label-4-regular">
          This is a label with the label-4-regular variant.
        </p>

        <a href="#" className="link-1-regular">
          This is a link with the link-1-regular variant.
        </a>
        <a href="#" className="link-2-regular">
          This is a link with the link-2-regular variant.
        </a>
        <a href="#" className="link-3-regular">
          This is a link with the link-3-regular variant.
        </a>

        <p className="display-1">
          This is display text with the display-1 variant.
        </p>
        <p className="display-2">
          This is display text with the display-2 variant.
        </p>
        <p className="display-3">
          This is display text with the display-3 variant.
        </p>
      </div>

      <TInputField />
    </div>
  );
}
