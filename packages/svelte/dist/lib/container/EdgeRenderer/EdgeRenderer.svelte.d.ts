import { SvelteComponentTyped } from "svelte";
import type { DefaultEdgeOptions } from '../../types';
declare const __propDef: {
    props: {
        defaultEdgeOptions: DefaultEdgeOptions | undefined;
    };
    events: {
        edgeclick: CustomEvent<{
            edge: import("../../types").Edge;
            event: MouseEvent | TouchEvent;
        }>;
        edgecontextmenu: CustomEvent<{
            edge: import("../../types").Edge;
            event: MouseEvent;
        }>;
        edgemouseenter: CustomEvent<{
            edge: import("../../types").Edge;
            event: MouseEvent;
        }>;
        edgemouseleave: CustomEvent<{
            edge: import("../../types").Edge;
            event: MouseEvent;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EdgeRendererProps = typeof __propDef.props;
export type EdgeRendererEvents = typeof __propDef.events;
export type EdgeRendererSlots = typeof __propDef.slots;
export default class EdgeRenderer extends SvelteComponentTyped<EdgeRendererProps, EdgeRendererEvents, EdgeRendererSlots> {
}
export {};
