import { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Typography, Container, TextField } from "@mui/material";
import { getTrackingDocument } from "../services/api/apiTracking";
import { ITrackingDocument } from "../models/ITrackingDocument";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { addTtns, removeTtns } from "../redux/trackingSlice";
import {
  Btn,
  BtnNumber,
  ContainerInfo,
  FlexContainerInfo,
  Footer,
  Input,
  Title,
} from "./TrackingPage.styled";

type FormData = {
  number: string;
};

export const TrackingPage: FC = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const [trackInfo, setTrackInfo] = useState<null | ITrackingDocument>(null);
  const dispatch = useAppDispatch();
  const ttns = useAppSelector((state) => state.trackingReducer.list);

  const onSubmit = async (data: FormData) => {
    const result = await getTrackingDocument(data.number);
    console.log(result);
    if (result) {
      setTrackInfo(result);
      if (
        result.success === true &&
        result.data[0].Number &&
        result.data[0].Status !== "Номер не найден"
      ) {
        dispatch(addTtns(result.data[0].Number));
      }
    }
  };

  const onButtonClick = async (data: string) => {
    setValue("number", data);
    const result = await getTrackingDocument(data);
    console.log(result);
    if (result) {
      setTrackInfo(result);
      if (result.success === true && result.data[0].Number) {
        dispatch(addTtns(result.data[0].Number));
      }
    }
  };

  const onClickRemoveTtns = () => {
    dispatch(removeTtns(1))
  }

  return (
    <>
      <main>
        <Container sx={{ mt: 1 }}>
          <Title variant="h1">Перевірити ТТН</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              size="small"
              type="search"
              label="Введіть номер ТТН"
              required
              autoComplete="off"
              {...register("number", {
                required: "Ви не ввели номер ТТН",
                pattern: {
                  value: /^[0-9]{14}$/,
                  message: "ТТН повинна складатись з 14 цифр",
                },
              })}
              error={Boolean(errors.number)}
              helperText={errors.number?.message}
            />

            <Btn type="submit" variant="contained" color="primary">
              Отримати статус ТТН
            </Btn>
          </form>
          <FlexContainerInfo>
            <ContainerInfo>
              {trackInfo?.success === false && (
                <Typography variant="subtitle2">
                  ТТН з таким номером не знайдено
                </Typography>
              )}
              {trackInfo?.success === true && (
                <>
                  <Typography variant="subtitle2">
                    Статус доставки:
                    <Typography variant="body2">
                      {trackInfo.data[0].Status}
                    </Typography>
                  </Typography>
                  <Typography variant="subtitle2">
                    Відправлено:
                    <Typography variant="body2">
                      {trackInfo.data[0].CitySender}
                    </Typography>
                    <Typography variant="body2">
                      {trackInfo.data[0].WarehouseSender}
                    </Typography>
                  </Typography>
                  <Typography variant="subtitle2">
                    Отримано:
                    <Typography variant="body2">
                      {trackInfo.data[0].CityRecipient}
                    </Typography>
                    <Typography variant="body2">
                      {trackInfo.data[0].WarehouseRecipient}
                    </Typography>
                  </Typography>
                </>
              )}
            </ContainerInfo>
            <ContainerInfo>
              {ttns.length > 0 && (
                <BtnNumber variant="contained" onClick={onClickRemoveTtns}>
                  Видалити всі ТТН
                </BtnNumber>
              )}
              {ttns.length > 0 &&
                ttns.map((ttn) => (
                  <BtnNumber
                    variant="outlined"
                    key={ttn}
                    onClick={() => onButtonClick(ttn)}
                  >
                    {ttn}
                  </BtnNumber>
                ))}
            </ContainerInfo>
            {/* {ttns.length > 0 && (
              <BtnNumber
                variant="contained"
                onClick={onClickRemoveTtns}
              >
                Видалити всі ТТН
              </BtnNumber>
            )} */}
          </FlexContainerInfo>
        </Container>
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
