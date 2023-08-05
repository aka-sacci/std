export interface ProductBaseSalesforce {
  limit: number;
  data: [
    {
      currency: "USD" | "BRL";
      id: string;
      brand?: string;
      imageGroups: ImageGroups[];
      inventory: Inventory;
      longDescription: string;
      master?: Master;
      minOrderQuantity: number;
      name: string;
      pageDescription?: string;
      pageTitle?: string;
      price: number;
      pricePerUnit: number;
      primaryCategoryId: string;
      shortDescription?: string;
      slugUrl: string;
      stepQuantity: number;
      type: Type;
      validFrom?: ValidFrom;
      variants?: Variants[];
      variationAttributes?: VariationAttributes[];
      c_isNewtest?: boolean;
      c_isSale?: boolean;
    },
  ];
  total: number;
  url: string;
}

export interface TokenBaseSalesforce {
  access_token: string;
  id_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_token_expires_in: number;
  token_type: "BEARER";
  usid: string;
  customer_id: string;
  enc_user_id: string;
  idp_access_token: string;
  idp_refresh_token: string;
}

export interface Images {
  alt: string;
  disBaseLink: string;
  link: string;
  title: string;
}

export interface ImageGroups {
  images: Images[];
  viewType: "large" | "medium" | "small" | "swatch";
}

export interface Inventory {
  ats: number;
  backorderable: boolean;
  id: string;
  orderable: boolean;
  preorderable: boolean;
  stockLevel: number;
}

export interface Master {
  masterId: string;
  orderable: boolean;
  price: number;
}

export interface Type {
  master?: boolean;
  bundle?: boolean;
  variant?: boolean;
  item?: boolean;
  option?: boolean;
}

export interface ValidFrom {
  default: string;
}

export interface Variants {
  orderable: boolean;
  price: number;
  productId: string;
  variationValues: {
    color: string;
    size: string;
  };
}

export interface VariationAttributes {
  id: string;
  name: string;
  values: VariationAttributesValues[];
}

export interface VariationAttributesValues {
  name: string;
  orderable: boolean;
  value: string;
}

export interface PDPParams {
  /**
   * @description inventory list ID
   */
  inventoryIds?: string;

  /**
   * @description If missing, all values will be returned.
   */
  expand?:
    | "availability"
    | "bundled_products"
    | "links"
    | "promotions"
    | "options"
    | "images"
    | "prices"
    | "variations"
    | "set_products"
    | "recommendations";

  /**
   * @description Retrieve the whole image model for the requested product.
   */
  allImages?: boolean;

  /**
   * @description Retrieve the whole pricebook prices and tiered prices (if available) for the requested product.
   */
  perPricebook?: boolean;
}

export interface ProductSearchParams {
  /**
   * @description Refine search Params. The refinements can be a collection of custom defined attributes IDs and the system defined attributes IDs but the search can only accept a total of 9 refinements at a time
   */
  refine?: {
    /**
     * @description Allows refinement per single category ID. Multiple category ids are not supported.
     */
    cgid?: string;

    /**
     * @description Allows refinement per single price range. Multiple price ranges are not supported.
     * @example (100..300)
     */
    price?: string;

    /**
     * @description Allows refinement per promotion ID.
     */
    pmid?: string;

    /**
     * @description Allow refinement by including only the provided hit types.
     */
    htype?:
      | "product"
      | "master"
      | "set"
      | "bundle"
      | "slicing_group"
      | "variation_group";

    /**
     * @description Unavailable products are excluded from the search results if true is set.
     */
    orderable_only?: boolean;

    /**
     * @description Refinement color. Multiple values are supported by a subset of refinement attributes and can be provided by separating them using a pipe (URL encoded = "|") i.e.
     * @example red|green|blue
     */
    c_refinementColor?: string;
  };

  /**
   * @description The ID of the sorting option to sort the search hits.
   */
  sort?: string;

  /**
   * @description The expand parameter. A list with the allowed values (availability, images, prices, represented_products, variations). If the parameter is missing all the values will be returned.
   */
  expand?: string;

  /**
   * @description Used to retrieve the results based on a particular resource offset.
   */
  offset?: number;

  /**
   * @description Maximum records to retrieve per request, not to exceed 200. Defaults to 25.
   */
  limit?: number;
}
