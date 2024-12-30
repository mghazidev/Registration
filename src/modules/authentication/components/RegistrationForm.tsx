"use client";
import React from "react";
import { Button } from "@/components/ui/button/TButton";
import { TInputField } from "@/components/ui/input/TInputField";
import { Label } from "@/components/ui/Label/TLabel";
import { motion, AnimatePresence } from "framer-motion";
const RegistrationForm = () => {
  const [isEmail, setIsEmail] = React.useState(true);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <div className="bg-primary-white py-10 w-[500px] m-auto p-10 shadow-custom rounded-xl">
        <h1 className="label-1-regular ">Sign up or login using</h1>
        <div className="bg-brand-100 flex my-6 items-center rounded-3xl w-full p-2 ">
          <Button
            variant="secondary"
            className={`${
              isEmail
                ? "bg-primary-white text-functional-100 "
                : "bg-transparent text-functional-700"
            } `}
            size="lg"
            onClick={() => setIsEmail(true)}
          >
            Email
          </Button>
          <Button
            variant="secondary"
            className={`${
              !isEmail
                ? "bg-primary-white text-functional-100"
                : "bg-transparent text-functional-700"
            } `}
            size="lg"
            onClick={() => setIsEmail(false)}
          >
            Mobile Number
          </Button>
        </div>
        <AnimatePresence mode="wait">
          {isEmail ? (
            <motion.div
              key="email"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Label htmlFor="email">Email address</Label>
              <TInputField
                id="email"
                type="email"
                placeholder="example@gmail.com"
              />
            </motion.div>
          ) : (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Label htmlFor="mobile">Mobile number</Label>
              <TInputField id="mobile" type="tel" placeholder="123-456-7890" />
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-functional-700 mt-8 body-2-medium">
          By continuing, I accept Tamara Partner's{" "}
          <span className="text-brand-50">Terms & conditions</span>
        </p>
        <Button
          variant="secondary"
          className="bg-brand-50 text-primary-white body-2-medium mt-4 mb-2 font-bold"
          size="lg"
        >
          Continue
        </Button>
        <div className="flex items-center justify-between my-4">
          <hr className="flex-grow border-t border-functional-200" />
          <p className="mx-4 label-3-medium text-functional-400">Or</p>
          <hr className="flex-grow border-t border-functional-200" />
        </div>
        <Button
          variant="outline"
          className="bg-primary-white   text-functional-100 body-2-medium font-bold "
          size="lg"
        >
          Sign in with Google
        </Button>
      </div>
      <button className="body-2-regular text-brand-700">
        Not a business? Click here
      </button>
    </div>
  );
};

export default RegistrationForm;
