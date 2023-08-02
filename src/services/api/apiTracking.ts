import { ITrackingDocument } from "./../../models/ITrackingDocument";
import axios from "axios";
import { errorCatch } from "./error.api";

export const getTrackingDocument = async (ttn: string) => {
  try {
    const { data } = await axios<ITrackingDocument>({
      method: "post",
      url: "https://api.novaposhta.ua/v2.0/json/",
      data: {
        apiKey: "147843ab0f6e7d67b07babed23aa5b87",
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: [
            {
              DocumentNumber: ttn,
            },
          ],
        },
      },
      
    });
    return data;
  } catch (error) {
    return 
  }
};
