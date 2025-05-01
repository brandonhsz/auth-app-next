import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib";
import { TSignInSchema } from "@/modules/auth/schemas";

const loginTenant = async (loginData: TSignInSchema) => {
  const response = await api.post("/auth/login", loginData);
  return response.data;
};

export const useLoginTenantMutation = () => {
  return useMutation({
    mutationFn: loginTenant,
  });
};
