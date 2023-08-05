import type {
  Context,
} from "deco-sites/std/packs/salesforce/accounts/salesforce.ts";
import { TokenBaseSalesforce } from "deco-sites/std/packs/salesforce/types.ts";

/**
 * @docs https://developer.salesforce.com/docs/commerce/commerce-api/references/shopper-login?meta=getAccessToken
 */

const loader = async (
  _props: unknown,
  _req: Request,
  _ctx: Context,
): Promise<null | TokenBaseSalesforce> => {
  await 0;
  return null;
};

export default loader;
