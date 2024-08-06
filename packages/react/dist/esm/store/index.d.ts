import { NodeOrigin } from '@xyflow/system';
import type { ReactFlowState, Node, Edge } from '../types';
declare const createStore: ({ nodes, edges, defaultNodes, defaultEdges, width, height, fitView, nodeOrigin, }: {
    nodes?: Node[];
    edges?: Edge[];
    defaultNodes?: Node[];
    defaultEdges?: Edge[];
    width?: number;
    height?: number;
    fitView?: boolean;
    nodeOrigin?: NodeOrigin;
}) => import("zustand/traditional").UseBoundStoreWithEqualityFn<import("zustand").StoreApi<ReactFlowState>>;
export { createStore };
//# sourceMappingURL=index.d.ts.map