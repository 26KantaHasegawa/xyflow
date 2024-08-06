import { SvelteComponentTyped } from "svelte";
import type { SvelteFlowProviderProps } from './types';
declare const __propDef: {
    props: SvelteFlowProviderProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
type SvelteFlowProviderProps_ = typeof __propDef.props;
export { SvelteFlowProviderProps_ as SvelteFlowProviderProps };
export type SvelteFlowProviderEvents = typeof __propDef.events;
export type SvelteFlowProviderSlots = typeof __propDef.slots;
export default class SvelteFlowProvider extends SvelteComponentTyped<SvelteFlowProviderProps_, SvelteFlowProviderEvents, SvelteFlowProviderSlots> {
}