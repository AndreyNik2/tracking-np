
export interface ILocality {
    
        Present: string;
        Warehouses: 0;
        MainDescription: string;
        Area: string;
        Region: string;
        SettlementTypeCode: string;
        Ref: string;
        DeliveryCity: string;
        AddressDeliveryAllowed: boolean;
        StreetsAvailability: boolean;
        ParentRegionTypes: string;
        ParentRegionCode: string;
        RegionTypes: string;
        RegionTypesCode: string;
      
}

export interface ICitiesOnChange {
  success: boolean;
  data: [
    {
      TotalCount: number;
      Addresses: ILocality[]
    }
  ];
  errors: [];
  warnings: [];
  info: [];
  messageCodes: [];
  errorCodes: [];
  warningCodes: [];
  infoCodes: [];
}


