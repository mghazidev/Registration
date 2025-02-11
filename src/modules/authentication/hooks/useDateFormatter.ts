import { useState } from "react";

const useDateFormatter = () => {
  const [date, setDate] = useState("");

  const formatDate = (value: string) => {
    let formattedValue = value.replace(/\D/g, "");
    if (formattedValue.length > 8) formattedValue = formattedValue.slice(0, 8);

    if (formattedValue.length > 4) {
      formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(
        2,
        4
      )}/${formattedValue.slice(4)}`;
    } else if (formattedValue.length > 2) {
      formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(
        2
      )}`;
    }

    setDate(formattedValue);
    return formattedValue;
  };

  return { date, setDate, formatDate };
};

export default useDateFormatter;
