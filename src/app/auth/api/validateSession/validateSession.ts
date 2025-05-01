import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib";

interface VerifyResponse {
  mode: string;
  userId: number;
  userUuid: string;
  username: string;
  email: string;
  name: string;
  image: string;
  phoneNumber: string | null;
  data: Record<string, unknown>;
  locked: boolean;
  isMfaRequired: boolean;
  preferredFirstFactor: {
    channel: string;
    strategy: string;
  };
  preferredSecondFactor: {
    channel: string;
    strategy: string;
  };
  isEmailConfirmed: boolean;
  isPhoneNumberConfirmed: boolean;
  lastActiveAt: string;
  createdAt: string;
  updatedAt: string;
  tenant: {
    tenantId: string;
    aliasId: string | null;
    name: string;
    image: string;
    loginRedirectPath: string;
    logoutRedirectPath: string;
  };
  authorization: Record<string, unknown>;
  tenantId: string;
  isConfirmed: boolean;
  uuid: string;
  authentication: {
    firstFactors: Array<{
      channel: string;
      strategy: string;
    }>;
    secondFactors: Array<unknown>;
  };
}

const adapterVerifySession = (data: VerifyResponse) => {
  return {
    id: data.userId,
    uuid: data.userUuid,
    username: data.username,
    email: data.email,
    name: data.name,
    image: data.image,
    phoneNumber: data.phoneNumber,
    ation: data.authentication,
  };
};

export const VerifySession = async (
  token: string
): Promise<ReturnType<typeof adapterVerifySession>> => {
  const response = await api.get("/auth/verify", {
    headers: {
      Authorization: token,
    },
  });
  return adapterVerifySession(response.data);
};

export const useVerifySessionQuery = (token: string) => {
  return useQuery({
    queryKey: ["verifySession"],
    queryFn: () => VerifySession(token),
  });
};
