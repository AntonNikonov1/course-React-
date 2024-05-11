import React from 'react'
import classes from './StepIndicator.module.scss'
import { StepIconProps } from '@mui/material'

export const StepperStaticIndicator = (props: StepIconProps) => {
  return (
    <p className={classes.indicator}>{props.icon}</p>
  )
}
