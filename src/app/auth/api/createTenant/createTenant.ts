import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib";
import { TSignupSchema } from "@/modules/auth/schemas";

const registerTenant = async (tenantData: TSignupSchema) => {
  const response = await api.post("/auth/register", tenantData);
  return response.data;
};

export const useRegisterTenantMutation = () => {
  return useMutation({
    mutationFn: registerTenant,
  });
};
