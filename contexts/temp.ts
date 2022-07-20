import { createContext, useContext } from 'react'

export interface HangangTempRows {
  MSR_DATE: string
  MSR_TIME: string
  SITE_ID: string
  W_TEMP: string
  W_PH: string
  W_DO: string
  W_TN: string
  W_TP: string
  W_TOC: string
  W_PHEN: string
  W_CN: string
}

export interface SettingsData {
  current: [number, Function]
}

export interface DefaultValueData {
  data: HangangTempRows[]
  settings: SettingsData
}

export const defaultValue: DefaultValueData = {
  data: [],
  settings: {
    current: [0, () => null]
  }
}

export const TempContext = createContext(defaultValue)

export const useTempContext = () => useContext(TempContext)