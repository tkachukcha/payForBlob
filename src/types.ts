export interface IValues {
  namespace_id: string
  data: string
  gas_limit: number
  fee: number
}

export interface IData {
  namespaceId: string
  height: number | string
  txhash: string
  date: string
}

export interface IDataContextValue {
  dataArr: IData[]
  submitData: (payload: IValues) => void
  clearData: () => void
}
