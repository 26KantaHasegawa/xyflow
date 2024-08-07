import { SvelteComponentTyped } from "svelte";
export declare function wrapHandler(handler: (evt: MouseEvent) => void, container: HTMLDivElement): (evt: MouseEvent) => void;
export declare function toggleSelected<Item extends Node | Edge>(ids: string[]): (item: Item) => Item;
import type { Node, Edge } from '../../types';
import type { PaneProps } from './types';
declare const __propDef: {
    props: PaneProps;
    events: {
        paneclick: CustomEvent<{
            event: MouseEvent | TouchEvent;
        }>;
        panecontextmenu: CustomEvent<{
            event: MouseEvent;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
type PaneProps_ = typeof __propDef.props;
export { PaneProps_ as PaneProps };
export type PaneEvents = typeof __propDef.events;
export type PaneSlots = typeof __propDef.slots;
export default class Pane extends SvelteComponentTyped<PaneProps_, PaneEvents, PaneSlots> {
}
