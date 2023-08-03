import { ITrackingDocument } from "./../../models/ITrackingDocument";
import axios from "axios";
import { errorCatch } from "./error.api";
import { ICitiesOnChange } from "../../models/ICitiesOnChange";
import { IWarehouses } from "../../models/IWarehouses";

export const getCities = async (city: string) => {
  try {
    const { data } = await axios<ICitiesOnChange>({
      method: "post",
      url: "https://api.novaposhta.ua/v2.0/json/",
      data: {
        apiKey: "147843ab0f6e7d67b07babed23aa5b87",
        modelName: "Address",
        calledMethod: "searchSettlements",
        methodProperties: {
          CityName: city,
          Limit: "100",
          Page: "1",
        },
      },
    });
    return data;
  } catch (error) {
    return;
  }
};

export const getWarehouses = async (ref: string) => {
  try {
    const { data } = await axios<IWarehouses>({
      method: "post",
      url: "https://api.novaposhta.ua/v2.0/json/",
      data: {
        apiKey: "147843ab0f6e7d67b07babed23aa5b87",
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          SettlementRef: ref,
        },
      },
    });
    return data;
  } catch (error) {
    return;
  }
};
