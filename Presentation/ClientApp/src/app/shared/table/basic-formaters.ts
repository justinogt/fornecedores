import { format } from 'date-fns';

export const formatColumnBold = value => `<b>${value}</b>`;
export const formatColumnDate = value => format(value, 'dd/MM/yyyy hh:mm:ss');
