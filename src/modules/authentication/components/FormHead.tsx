type FormHeadProps = {
  heading: string;
  description: string;
};

const FormHead: React.FC<FormHeadProps> = ({ heading, description }) => {
  return (
    <div>
      <h1 className="h1 text-[28px] font-medium">{heading}</h1>
      <p className="label-2-medium font-thin text-functional-500 my-4">
        {description}
      </p>
    </div>
  );
};

export default FormHead;
