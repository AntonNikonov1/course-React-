import { StepConnector, stepConnectorClasses, styled } from "@mui/material";

export const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    background: 'red',
    [`& .${stepConnectorClasses.line}`]: {
      background: 'red',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    background: 'red',
    [`& .${stepConnectorClasses.line}`]: {
      background: 'red',
    },
  },
  [`& .${stepConnectorClasses.alternativeLabel}`]: {
    background: 'red',
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));