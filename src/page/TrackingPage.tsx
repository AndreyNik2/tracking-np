import { FC } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

type FormData = {
  ttn: string;
};

export const TrackingPage: FC = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
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
      ></Box>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "#eeeeee",
          m: 1,
          display: "inline-block",
        }}
      ></Box>
    </main>
  );
};
