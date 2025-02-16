import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const OptCode = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="display-1 font-extrabold">23</CardTitle>
        <CardDescription>Code expires in 00:59</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default OptCode;
