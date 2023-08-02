import { FC, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getTrackingDocument } from "../services/api/apiTracking";
import { ITrackingDocument } from "../models/ITrackingDocument";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { addTtns } from "../redux/trackingSlice";

type FormData = {
  ttn: string;
};

export const TrackingPage: FC = () => {
  const { control, handleSubmit, setValue } = useForm<FormData>();
  const [trackInfo, setTrackInfo] = useState<null | ITrackingDocument>(null);
  const dispatch = useAppDispatch()
  const ttns = useAppSelector(state => state.ttn.list)

  const onSubmit = async (data: FormData) => {
    const result = await getTrackingDocument(data.ttn);
    console.log(result);
    if (result) {
      setTrackInfo(result);
      if (result.success === true && result.data[0].Number) {
        dispatch(addTtns(result.data[0].Number));
      }
    }
  };

  const onButtonClick = async (data: string) => {
    setValue("ttn", data);
    const result = await getTrackingDocument(data);
    console.log(result);
    if (result) {
      setTrackInfo(result);
      if (result.success === true && result.data[0].Number) {
        dispatch(addTtns(result.data[0].Number));
      }
    }
  };

  return (
    <main>
      <Typography variant="h1">Перевірити ТТН</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              size="small"
              type="search"
              required
              autoComplete="off"
              sx={{ ml: 1, mr: 1 }}
            />
          )}
          name="ttn"
          control={control}
          defaultValue=""
        />
        <Button type="submit" variant="contained" color="primary">
          Get ststus TTN
        </Button>
      </form>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "#eeeeee",
          m: 1,
          display: "inline-block",
        }}
      >
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
                {trackInfo.data[0].WarehouseSender}
              </Typography>
            </Typography>
            <Typography variant="subtitle2">
              Отримано:
              <Typography variant="body2">
                {trackInfo.data[0].WarehouseRecipient}
              </Typography>
            </Typography>
          </>
        )}
      </Box>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "#eeeeee",
          m: 1,
          display: "inline-block",
        }}
      >
        {ttns.length > 0 &&
          ttns.map((ttn) => (
            <Button key={ttn} onClick={() => onButtonClick(ttn)}>
              {ttn}
            </Button>
          ))}
      </Box>
    </main>
  );
};
