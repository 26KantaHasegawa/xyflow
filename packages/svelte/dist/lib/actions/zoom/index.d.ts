/// <reference types="svelte" />
import type { Writable } from 'svelte/store';
import { PanOnScrollMode, type CoordinateExtent, type OnPanZoom, type PanZoomInstance, type Viewport } from '@xyflow/system';
type ZoomParams = {
    viewport: Writable<Viewport>;
    initialViewport: Viewport;
    minZoom: number;
    maxZoom: number;
    dragging: Writable<boolean>;
    onPanZoomStart?: OnPanZoom;
    onPanZoom?: OnPanZoom;
    onPanZoomEnd?: OnPanZoom;
    onPaneContextMenu?: (event: MouseEvent) => void;
    translateExtent: CoordinateExtent;
    panZoom: Writable<PanZoomInstance | null>;
    zoomOnScroll: boolean;
    zoomOnPinch: boolean;
    zoomOnDoubleClick: boolean;
    panOnScroll: boolean;
    panOnDrag: boolean | number[];
    panOnScrollSpeed: number;
    panOnScrollMode: PanOnScrollMode;
    zoomActivationKeyPressed: boolean;
    preventScrolling: boolean;
    noPanClassName: string;
    noWheelClassName: string;
    userSelectionActive: boolean;
    lib: string;
    paneClickDistance: number;
};
export default function zoom(domNode: Element, params: ZoomParams): {
    update(params: ZoomParams): void;
};
export {};