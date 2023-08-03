import { FC, useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button, TextField, Typography, Container, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { getTrackingDocument } from "../services/api/apiTracking";
import { ITrackingDocument } from "../models/ITrackingDocument";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { addTtns } from "../redux/trackingSlice";
import { ILocality } from "../models/ICitiesOnChange";
import { getCities, getWarehouses } from "../services/api/apiWarehouses";
import { IWarehouse } from "../models/IWarehouses";

type CityFormData = {
  city: string;
};

export const WarehousesPage: FC = () => {
  const [cityOnChange, setCityOnChange] = useState<null | ILocality[]>(null);
  const [changedCity, setChangedCity] = useState<null | string>(null);
  const [warehouses, setWarehouses] = useState<null | IWarehouse[]>(null);
  const { control, handleSubmit, setValue } = useForm<CityFormData>();

  const onSubmit = async (data: CityFormData) => {
    const result = await getCities(data.city);
    if (result && result.success) {
      const successRes = result.data[0].Addresses.filter(
        (city) => city.Warehouses > 0
      );
      if (successRes.length === 1) {
        setChangedCity(successRes[0].Ref);
      }
      if (successRes.length > 1) {
        setCityOnChange(successRes);
      }
    }
  };

  const onCityPress = (locality: ILocality) => {
    setValue("city", locality.Present);
    setCityOnChange(null);
    setChangedCity(locality.Ref);
  };

  useEffect(() => {
    const getData = async () => {
      if (changedCity) {
        const result = await getWarehouses(changedCity);
        if (result) {
          setWarehouses(result.data);
        }
      }
    };
    getData();
  }, [changedCity]);

  return (
    <main>
      <h1>Пошук відділення за населеним пунктом</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              size="small"
              type="search"
              label="Введіть назву населенного пункта"
              required
              autoComplete="off"
            />
          )}
          name="city"
          control={control}
          defaultValue=""
        />
        <Button type="submit" variant="contained" color="primary">
          Знайти населений пункт
        </Button>
      </form>
      {cityOnChange && (
        <Box>
          {cityOnChange.map((city) => (
            <Button onClick={() => onCityPress(city)} type="button">
              {city.Present}
            </Button>
          ))}
        </Box>
      )}
      {warehouses && warehouses.map(warehouse => <Typography>{warehouse.Description}</Typography>)}
    </main>
  );
};
