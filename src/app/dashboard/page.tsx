"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux/useRedux";
import { Button } from "@mantine/core";
import { useTranslations } from "next-intl";
import React from "react";
import { clearUserState } from "@/modules/auth/store";
import { useRouter } from "next/navigation";

const DashBoard = () => {
  const t = useTranslations("Dashboard");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { email, uuid, id } = useAppSelector(
    (state) => state.persistedReducer.userReducer
  );

  const logout = () => {
    router.push("/auth/signin");
    dispatch(clearUserState());
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="bg-white  shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {t("user_information")}
        </h1>
        <div className="flex flex-col">
          <div className="flex justify-start gap-2">
            <span className="font-medium text-gray-600">Email:</span>
            <span className="text-gray-800">{email}</span>
          </div>
          <div className="flex justify-start gap-2">
            <span className="font-medium text-gray-600">UUID:</span>
            <span className="text-gray-800">{uuid}</span>
          </div>
          <div className="flex justify-start gap-2">
            <span className="font-medium text-gray-600">ID:</span>
            <span className="text-gray-800">{id}</span>
          </div>
        </div>

        <div className="my-4 flex justify-center">
          <Button onClick={logout} size="xl">
            {t("logout")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
