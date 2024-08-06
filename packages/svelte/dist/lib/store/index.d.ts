import { type NodeOrigin } from '@xyflow/system';
import type { Node, Edge } from '../types';
import type { SvelteFlowStore } from './types';
export declare const key: unique symbol;
export declare function createStore({ nodes, edges, width, height, fitView: fitViewOnCreate, nodeOrigin }: {
    nodes?: Node[];
    edges?: Edge[];
    width?: number;
    height?: number;
    fitView?: boolean;
    nodeOrigin?: NodeOrigin;
}): SvelteFlowStore;
export declare function useStore(): SvelteFlowStore;
export declare function createStoreContext({ nodes, edges, width, height, fitView, nodeOrigin }: {
    nodes?: Node[];
    edges?: Edge[];
    width?: number;
    height?: number;
    fitView?: boolean;
    nodeOrigin?: NodeOrigin;
}): SvelteFlowStore;
