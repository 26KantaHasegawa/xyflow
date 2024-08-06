import { SvelteComponentTyped } from "svelte";
import type { PanelProps } from './types';
declare const __propDef: {
    props: PanelProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
type PanelProps_ = typeof __propDef.props;
export { PanelProps_ as PanelProps };
export type PanelEvents = typeof __propDef.events;
export type PanelSlots = typeof __propDef.slots;
export default class Panel extends SvelteComponentTyped<PanelProps_, PanelEvents, PanelSlots> {
}
