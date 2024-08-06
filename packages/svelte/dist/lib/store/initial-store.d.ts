/// <reference types="svelte" />
import { SelectionMode, ConnectionMode, ConnectionLineType, type SelectionRect, type SnapGrid, type MarkerProps, type PanZoomInstance, type CoordinateExtent, type NodeOrigin, type OnError, type Viewport, type ConnectionLookup, type OnConnect, type OnConnectStart, type OnConnectEnd, type NodeLookup, type EdgeLookup, type ConnectionState, type ParentLookup } from '@xyflow/system';
import DefaultNode from '../components/nodes/DefaultNode.svelte';
import InputNode from '../components/nodes/InputNode.svelte';
import OutputNode from '../components/nodes/OutputNode.svelte';
import GroupNode from '../components/nodes/GroupNode.svelte';
import { BezierEdgeInternal, SmoothStepEdgeInternal, StraightEdgeInternal, StepEdgeInternal } from '../components/edges';
import type { NodeTypes, EdgeTypes, EdgeLayouted, Node, Edge, FitViewOptions, OnDelete, OnEdgeCreate, OnBeforeDelete, IsValidConnection, InternalNode } from '../types';
export declare const initialNodeTypes: {
    input: typeof InputNode;
    output: typeof OutputNode;
    default: typeof DefaultNode;
    group: typeof GroupNode;
};
export declare const initialEdgeTypes: {
    straight: typeof StraightEdgeInternal;
    smoothstep: typeof SmoothStepEdgeInternal;
    default: typeof BezierEdgeInternal;
    step: typeof StepEdgeInternal;
};
export declare const getInitialStore: ({ nodes, edges, width, height, fitView, nodeOrigin }: {
    nodes?: Node[] | undefined;
    edges?: Edge[] | undefined;
    width?: number | undefined;
    height?: number | undefined;
    fitView?: boolean | undefined;
    nodeOrigin?: NodeOrigin | undefined;
}) => {
    flowId: import("svelte/store").Writable<string | null>;
    nodes: {
        subscribe: (this: void, run: import("svelte/store").Subscriber<Node[]>) => import("svelte/store").Unsubscriber;
        update: (this: void, updater: import("svelte/store").Updater<Node[]>) => void;
        set: (this: void, value: Node[]) => Node[];
        setDefaultOptions: (opts: Partial<Omit<Node<Record<string, unknown>, string>, "id">>) => void;
        setOptions: (opts: import("./utils").NodeStoreOptions) => void;
    };
    nodeLookup: import("svelte/store").Readable<NodeLookup<InternalNode>>;
    parentLookup: import("svelte/store").Readable<ParentLookup<InternalNode>>;
    edgeLookup: import("svelte/store").Readable<EdgeLookup<Edge>>;
    visibleNodes: import("svelte/store").Readable<InternalNode[]>;
    edges: import("svelte/store").Writable<Edge[]> & {
        setDefaultOptions: (opts: import("../types").DefaultEdgeOptions) => void;
    };
    visibleEdges: import("svelte/store").Readable<EdgeLayouted[]>;
    connectionLookup: import("svelte/store").Readable<ConnectionLookup>;
    height: import("svelte/store").Writable<number>;
    width: import("svelte/store").Writable<number>;
    minZoom: import("svelte/store").Writable<number>;
    maxZoom: import("svelte/store").Writable<number>;
    nodeOrigin: import("svelte/store").Writable<NodeOrigin>;
    nodeDragThreshold: import("svelte/store").Writable<number>;
    nodeExtent: import("svelte/store").Writable<CoordinateExtent>;
    translateExtent: import("svelte/store").Writable<CoordinateExtent>;
    autoPanOnNodeDrag: import("svelte/store").Writable<boolean>;
    autoPanOnConnect: import("svelte/store").Writable<boolean>;
    fitViewOnInit: import("svelte/store").Writable<boolean>;
    fitViewOnInitDone: import("svelte/store").Writable<boolean>;
    fitViewOptions: import("svelte/store").Writable<FitViewOptions>;
    panZoom: import("svelte/store").Writable<PanZoomInstance | null>;
    snapGrid: import("svelte/store").Writable<SnapGrid | null>;
    dragging: import("svelte/store").Writable<boolean>;
    selectionRect: import("svelte/store").Writable<SelectionRect | null>;
    selectionKeyPressed: import("svelte/store").Writable<boolean>;
    multiselectionKeyPressed: import("svelte/store").Writable<boolean>;
    deleteKeyPressed: import("svelte/store").Writable<boolean>;
    panActivationKeyPressed: import("svelte/store").Writable<boolean>;
    zoomActivationKeyPressed: import("svelte/store").Writable<boolean>;
    selectionRectMode: import("svelte/store").Writable<string | null>;
    selectionMode: import("svelte/store").Writable<SelectionMode>;
    nodeTypes: import("svelte/store").Writable<NodeTypes>;
    edgeTypes: import("svelte/store").Writable<EdgeTypes>;
    viewport: import("svelte/store").Writable<Viewport>;
    connectionMode: import("svelte/store").Writable<ConnectionMode>;
    domNode: import("svelte/store").Writable<HTMLDivElement | null>;
    connection: import("svelte/store").Readable<ConnectionState>;
    connectionLineType: import("svelte/store").Writable<ConnectionLineType>;
    connectionRadius: import("svelte/store").Writable<number>;
    isValidConnection: import("svelte/store").Writable<IsValidConnection>;
    nodesDraggable: import("svelte/store").Writable<boolean>;
    nodesConnectable: import("svelte/store").Writable<boolean>;
    elementsSelectable: import("svelte/store").Writable<boolean>;
    selectNodesOnDrag: import("svelte/store").Writable<boolean>;
    markers: import("svelte/store").Readable<MarkerProps[]>;
    defaultMarkerColor: import("svelte/store").Writable<string>;
    lib: import("svelte/store").Readable<string>;
    onlyRenderVisibleElements: import("svelte/store").Writable<boolean>;
    onerror: import("svelte/store").Writable<OnError>;
    ondelete: import("svelte/store").Writable<OnDelete>;
    onedgecreate: import("svelte/store").Writable<OnEdgeCreate>;
    onconnect: import("svelte/store").Writable<OnConnect>;
    onconnectstart: import("svelte/store").Writable<OnConnectStart>;
    onconnectend: import("svelte/store").Writable<OnConnectEnd>;
    onbeforedelete: import("svelte/store").Writable<OnBeforeDelete>;
    nodesInitialized: import("svelte/store").Writable<boolean>;
    edgesInitialized: import("svelte/store").Writable<boolean>;
    viewportInitialized: import("svelte/store").Writable<boolean>;
    initialized: import("svelte/store").Readable<boolean>;
};
