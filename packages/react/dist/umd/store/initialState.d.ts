import { NodeOrigin } from '@xyflow/system';
import type { Edge, Node, ReactFlowStore } from '../types';
declare const getInitialState: ({ nodes, edges, defaultNodes, defaultEdges, width, height, fitView, nodeOrigin, }?: {
    nodes?: Node[];
    edges?: Edge[];
    defaultNodes?: Node[];
    defaultEdges?: Edge[];
    width?: number;
    height?: number;
    fitView?: boolean;
    nodeOrigin?: NodeOrigin;
}) => ReactFlowStore;
export default getInitialState;
//# sourceMappingURL=initialState.d.ts.map