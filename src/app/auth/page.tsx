"use client";
import { TextInput, PasswordInput, Button } from "@mantine/core";
import { LockKeyhole } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { useForm } from "@/hooks";
import { SignUpSchema } from "./schemas";

const Auth = () => {
  const t = useTranslations("SignUp");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    schema: SignUpSchema,
    resetOptions: {
      keepValues: true,
    },
    mode: "onBlur",
  });

  const onSubmit = (data: unknown) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex px-40 flex-col items-center justify-center h-screen">
      <div>
        <header>
          <h2 className="font-bold text-xl">{t("title")}</h2>
          <p>{t("description")}</p>
        </header>

        <form
          className="mt-4 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <TextInput
              id="enterpriseName"
              label={t("enterprise_name")}
              {...register("enterpriseName")}
              error={errors.enterpriseName?.message}
            />
          </div>

          <div className="flex gap-4">
            <TextInput
              id="userNames"
              required
              className="w-1/3"
              label={t("user_names")}
              {...register("userNames")}
              error={errors.userNames?.message}
            />
            <TextInput
              id="userLastNames"
              required
              className="w-2/3"
              label={t("user_last_names")}
              {...register("userLastNames")}
              error={errors.userLastNames?.message}
            />
          </div>

          <div className="flex gap-4">
            <TextInput
              id="userEmail"
              required
              className="w-1/2"
              label={t("user_email")}
              type="email"
              {...register("userEmail")}
              error={errors.userEmail?.message}
            />
            <TextInput
              id="userPhone"
              required
              className="w-1/2"
              label={t("user_phone")}
              type="tel"
              {...register("userPhone")}
              error={errors.userPhone?.message}
            />
          </div>

          <div className="flex gap-4">
            <PasswordInput
              id="userPassword"
              required
              className="w-1/2"
              label={t("user_password")}
              type="password"
              leftSection={<LockKeyhole />}
              {...register("userPassword")}
              error={errors.userPassword?.message}
            />
            <PasswordInput
              id="userPasswordConfirmation"
              required
              className="w-1/2"
              label={t("user_password_confirmation")}
              type="password"
              leftSection={<LockKeyhole />}
              {...register("userPasswordConfirmation")}
              error={errors.userPasswordConfirmation?.message}
            />
          </div>

          <Button
            disabled={!isValid}
            type="submit"
            color="rgba(11, 59, 104, 1)"
          >
            {t("create_account")}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
