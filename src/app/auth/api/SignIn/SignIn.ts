import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib";
import { TSignInSchema } from "@/modules/auth/schemas";
import { SignInState } from "@/modules/auth/store//signInSlice/authSliceInterfaces";

const loginTenant = async (loginData: TSignInSchema): Promise<SignInState> => {
  const response = await api.post("/auth/login", loginData);
  return response.data;
};

export const useLoginTenantMutation = () => {
  return useMutation({
    mutationFn: loginTenant,
  });
};
