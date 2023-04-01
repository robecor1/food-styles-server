import * as queries from './queries'
import * as mutations from './mutations'

export const controller = {
  ...queries,
  ...mutations
};
