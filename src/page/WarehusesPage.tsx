import { FC, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { ILocality } from "../models/ICitiesOnChange";
import { getCities, getWarehouses } from "../services/api/apiWarehouses";
import { IWarehouse } from "../models/IWarehouses";
import {
  Btn,
  BtnCities,
  Input,
  LocalityContainer,
  MainContainer,
  NoWarehouseMessage,
  Title,
  Footer,
} from "./WarehousesPage.styled";

type CityFormData = {
  city: string;
};

export const WarehousesPage: FC = () => {
  const [cityOnChange, setCityOnChange] = useState<null | ILocality[]>(null);
  const [changedCity, setChangedCity] = useState<null | string>(null);
  const [warehouses, setWarehouses] = useState<null | IWarehouse[]>(null);
  const { control, handleSubmit, setValue } = useForm<CityFormData>();

  const onSubmit = async (data: CityFormData) => {
    setWarehouses(null);
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
    <>
      <main>
        <MainContainer>
          <Title>Пошук відділення за населеним пунктом</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              render={({ field }) => (
                <Input
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
            <Btn type="submit" variant="contained" color="primary">
              Знайти населений пункт
            </Btn>
          </form>
          {cityOnChange && (
            <LocalityContainer>
              {cityOnChange.map((city) => (
                <BtnCities onClick={() => onCityPress(city)} type="button">
                  {city.Present}
                </BtnCities>
              ))}
            </LocalityContainer>
          )}
          {warehouses &&
            warehouses.length > 0 &&
            warehouses.map((warehouse) => (
              <BtnCities type="button">{warehouse.Description}</BtnCities>
            ))}
          {warehouses && warehouses.length === 0 && (
            <NoWarehouseMessage>
              В цьому населеному пункті зараз немає відділень нової пошти
            </NoWarehouseMessage>
          )}
        </MainContainer>
      </main>
      <Footer>
        <a
          href="https://github.com/AndreyNik2/tracking-np"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </Footer>
    </>
  );
};
