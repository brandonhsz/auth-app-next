"use client";
import { useForm } from "@/hooks";
import { BUTTON_COLORS } from "@/lib/constants";
import { Button, Card, PasswordInput, TextInput } from "@mantine/core";
import { LockKeyhole, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { SignInSchema, TSignInSchema } from "@/modules/auth/schemas";
import { useLoginTenantMutation } from "@/modules/auth/api";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/useRedux/useRedux";
import { updateTokens } from "../store";

const SignIn = () => {
  const t = useTranslations("SignIn");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const signInMutation = useLoginTenantMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    schema: SignInSchema,
    resetOptions: {
      keepValues: true,
    },
    mode: "all",
  });

  const onSubmit = async (data: TSignInSchema) => {
    const session = await signInMutation.mutateAsync(data);
    if (session) {
      dispatch(updateTokens(session.tokens));
      router.push("/dashboard");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex gap-4 px-56 flex-col items-center justify-center h-screen"
    >
      <Card shadow="lg" className="flex flex-col gap-4">
        <h2 className="font-bold text-xl">{t("title")}</h2>
        <p>{t("description")}</p>

        <div className="flex flex-col gap-4">
          <TextInput
            {...register("email")}
            leftSection={<Mail />}
            label={t("email")}
            error={errors.email?.message}
          />
          <PasswordInput
            {...register("password")}
            leftSection={<LockKeyhole />}
            label={t("password")}
            error={errors.password?.message}
          />
        </div>

        <Button
          type="submit"
          disabled={!isValid}
          color={BUTTON_COLORS.primary}
          className="mb-4"
        >
          {t("sign_in")}
        </Button>
      </Card>
      <Button variant="transparent">
        <span className="underline">{t("forgot_password")}</span>
      </Button>
    </form>
  );
};

export default SignIn;
