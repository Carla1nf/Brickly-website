import axios from "axios";
import z from "zod";

const GetDataSchema = z.object({
  Descripción: z.string(),
  Inicio: z.string(),
  Interes: z.number(),
  Titulo: z.string(),
  Unidad: z.number(),
  Piso: z.number(),
  Metros: z.number(),
  Camas: z.number(),
  Localidad: z.string(),
});
export type GetData = z.infer<typeof GetDataSchema>;

export const intertalDataHotel = async (unidad: number) => {
  try {
    // V1 API
    // [collaterals, lending, totalLiquidityLent]
    // const response = await axios.get("https://v4wfbcl0v9.execute-api.us-east-1.amazonaws.com/Deploy/getData")

    // V2 API
    // [collaterals, lending, totalLiquidityLent]
    // todo: move URL into a config file in prep for x-chain app
    const response = await axios.get(
      "https://fuoilhro07.execute-api.us-east-1.amazonaws.com/hotelesData/getData"
    );

    // Important, once parsed we MUST only reference the parsed version
    // (sanitized and confirmed to be correct)
    const parsedResponse = GetDataSchema.parse(response.data.body[unidad - 1]);

    return parsedResponse;
  } catch (error) {
    console.error("Api→getData", error);
    return {
      Descripción: "",
      Inicio: "",
      Interes: 0,
      Titulo: "",
      Unidad: 0,
      Piso: 0,
      Metros: 0,
      Camas: 0,
      Localidad: "",
    };
  }
};

export const getHotelData = async (id: number) => {
  const data = await intertalDataHotel(id);
  return data;
};
