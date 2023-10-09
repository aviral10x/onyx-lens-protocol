import dotenv from "dotenv";
import { ethers } from "ethers";
import { getEddsaPrivateKey, getEs256kPrivateKey } from "./utils/keygen";

dotenv.config();

const getparamm = (name: string) => {
  const param = process.env[name];
  if (!param) {
    console.error(`\nConfig param '${name}' missing\n`);
    return null;
  }
  return param;
};

//Provider configs
export const NETWORK_RPC_URL = getparamm("NETWORK_RPC_URL");
export const CHAIN_ID = parseInt(getparamm("CHAIN_ID")!);
export const NETWORK_NAME = getparamm("NETWORK_NAME");
export const REGISTRY_CONTRACT_ADDRESS = getparamm("REGISTRY_CONTRACT_ADDRESS");

//Keys
export const ISSUER_EDDSA_PRIVATE_KEY =
  getparamm("ISSUER_EDDSA_PRIVATE_KEY") ||
  getEddsaPrivateKey("ISSUER_EDDSA_PRIVATE_KEY");
export const ISSUER_ES256K_PRIVATE_KEY =
  getparamm("ISSUER_ES256K_PRIVATE_KEY") ||
  getEs256kPrivateKey("ISSUER_ES256K_PRIVATE_KEY");
export const HOLDER_EDDSA_PRIVATE_KEY =
  getparamm("HOLDER_EDDSA_PRIVATE_KEY") ||
  getEddsaPrivateKey("HOLDER_EDDSA_PRIVATE_KEY");
export const HOLDER_ES256K_PRIVATE_KEY =
  getparamm("HOLDER_ES256K_PRIVATE_KEY") ||
  getEs256kPrivateKey("HOLDER_ES256K_PRIVATE_KEY");

//VC configs
export const VC_SCHEMA_URL = getparamm("VC_SCHEMA_URL");
export const VC_DIR_PATH =
  getparamm("VC_DIR_PATH") || "./src/verifiable_credentials";
export const VC = getparamm("VC");
export const VC_ES256K_PRIVATE_KEY = getparamm("VC_ES256K_PRIVATE_KEY");

//VP configs
export const VP_DIR_PATH =
  getparamm("VP_DIR_PATH") || "./src/verifiable_presentation";
export const VP = getparamm("VP");

export const provider = new ethers.providers.JsonRpcProvider(NETWORK_RPC_URL!);
export const ethrProvider = {
  name: NETWORK_NAME!,
  chainId: CHAIN_ID,
  rpcUrl: NETWORK_RPC_URL!,
  registry: REGISTRY_CONTRACT_ADDRESS!,
  gasSource: "",
};

export interface JwtPayload {
  [key: string]: any;
  iss?: string | undefined;
  sub?: string | undefined;
  aud?: string | string[] | undefined;
  exp?: number | undefined;
  nbf?: number | undefined;
  iat?: number | undefined;
  jti?: string | undefined;
}
