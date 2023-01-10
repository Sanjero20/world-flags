export type StatusType = {
  loading: boolean;
  error: string;
};

export const initialState: StatusType = {
  loading: true,
  error: '',
};
