export const OVERLAY_READY = 'OVERLAY_READY'

type FormaticSupportedChains = 1 | 3 | 4 | 42

const CHAIN_ID_NETWORK_ARGUMENT: { readonly [chainId in FormaticSupportedChains]: string | undefined } = {
  [1]: undefined,
  [3]: 'ropsten',
  [4]: 'rinkeby',
  [42]: 'kovan',
}