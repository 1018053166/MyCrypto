import getChainCode from './getChainCode';
import getAddress from './getAddress';
import signTransaction from './signTransaction';
import signMessage from './signMessage';
import displayAddress from './displayAddress';
import { EnclaveMethods, EnclaveMethodParams, EnclaveMethodResponse } from 'shared/enclave/types';

const handlers: {
  [key in EnclaveMethods]: (
    params: EnclaveMethodParams
  ) => EnclaveMethodResponse | Promise<EnclaveMethodResponse>
} = {
  [EnclaveMethods.GET_CHAIN_CODE]: getChainCode,
  [EnclaveMethods.GET_ADDRESS]: getAddress,
  [EnclaveMethods.SIGN_TRANSACTION]: signTransaction,
  [EnclaveMethods.SIGN_MESSAGE]: signMessage,
  [EnclaveMethods.DISPLAY_ADDRESS]: displayAddress
};

export default handlers;
