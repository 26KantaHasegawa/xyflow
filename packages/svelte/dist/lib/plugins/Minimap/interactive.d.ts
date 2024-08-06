/// <reference types="svelte" />
import { type Writable } from 'svelte/store';
import { type PanZoomInstance, type Viewport, type XYMinimapUpdate } from '@xyflow/system';
export type UseInteractiveParams = {
    panZoom: PanZoomInstance;
    viewport: Writable<Viewport>;
    getViewScale: () => number;
} & XYMinimapUpdate;
export default function interactive(domNode: Element, params: UseInteractiveParams): {
    update: (params: UseInteractiveParams) => void;
    destroy(): void;
};
