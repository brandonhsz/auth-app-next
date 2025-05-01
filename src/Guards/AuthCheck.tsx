"use client";
import { useVerifySessionQuery } from "@/app/auth/api";
import { setUserState } from "@/app/auth/store";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux/useRedux";
import { LoadingOverlay } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AuthCheck = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { access } = useAppSelector(
    (state) => state.persistedReducer.signInReducer.tokens
  );

  const VerifySessionQuery = useVerifySessionQuery(access?.value);

  const { data, isFetched, isLoading } = VerifySessionQuery;

  useEffect(() => {
    if ((!data && isFetched && !isLoading) || !access.value) {
      router.push("/auth/signin");
    }
    if (data) {
      dispatch(setUserState(data));
    }
  }, [data, isFetched, isLoading, router, access.value]);

  if (!access) return <LoadingOverlay visible />;

  return <>{children}</>;
};
