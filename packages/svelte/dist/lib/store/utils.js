import { writable, get } from 'svelte/store';
import { adoptUserNodes, updateConnectionLookup } from '@xyflow/system';
// we need to sync the user nodes and the internal nodes so that the user can receive the updates
// made by Svelte Flow (like dragging or selecting a node).
export function syncNodeStores(nodesStore, userNodesStore) {
    const nodesStoreSetter = nodesStore.set;
    const userNodesStoreSetter = userNodesStore.set;
    const currentNodesStore = get(nodesStore);
    const currentUserNodesStore = get(userNodesStore);
    // depending how the user initializes the nodes, we need to decide if we want to use
    // the user nodes or the internal nodes for initialization. A user can use a SvelteFlowProvider
    // without providing any nodes, in that case we want to use the nodes passed by the user.
    // By default we are using the store nodes, because they already have the absolute positions.
    const initWithUserNodes = currentNodesStore.length === 0 && currentUserNodesStore.length > 0;
    let val = initWithUserNodes ? currentUserNodesStore : currentNodesStore;
    nodesStore.set(val);
    const _set = (nds) => {
        const updatedNodes = nodesStoreSetter(nds);
        val = updatedNodes;
        userNodesStoreSetter(val);
        return updatedNodes;
    };
    nodesStore.set = userNodesStore.set = _set;
    nodesStore.update = userNodesStore.update = (fn) => _set(fn(val));
}
// same for edges
export function syncEdgeStores(edgesStore, userEdgesStore) {
    const nodesStoreSetter = edgesStore.set;
    const userEdgesStoreSetter = userEdgesStore.set;
    let val = get(userEdgesStore);
    edgesStore.set(val);
    const _set = (eds) => {
        nodesStoreSetter(eds);
        userEdgesStoreSetter(eds);
        val = eds;
    };
    edgesStore.set = userEdgesStore.set = _set;
    edgesStore.update = userEdgesStore.update = (fn) => _set(fn(val));
}
// it is possible to pass a viewport store to SvelteFlow for having more control
// if that's the case we need to sync the internal viewport with the user viewport
export const syncViewportStores = (panZoomStore, viewportStore, userViewportStore) => {
    if (!userViewportStore) {
        return;
    }
    const panZoom = get(panZoomStore);
    const viewportStoreSetter = viewportStore.set;
    const userViewportStoreSetter = userViewportStore.set;
    let val = userViewportStore ? get(userViewportStore) : { x: 0, y: 0, zoom: 1 };
    viewportStore.set(val);
    viewportStore.set = (vp) => {
        viewportStoreSetter(vp);
        userViewportStoreSetter(vp);
        val = vp;
        return vp;
    };
    userViewportStore.set = (vp) => {
        panZoom?.syncViewport(vp);
        viewportStoreSetter(vp);
        userViewportStoreSetter(vp);
        val = vp;
        return vp;
    };
    viewportStore.update = (fn) => {
        viewportStore.set(fn(val));
    };
    userViewportStore.update = (fn) => {
        userViewportStore.set(fn(val));
    };
};
// we are creating a custom store for the internals nodes in order to update the zIndex and positionAbsolute.
// The user only passes in relative positions, so we need to calculate the absolute positions based on the parent nodes.
export const createNodesStore = (nodes, nodeLookup, parentLookup, nodeOrigin = [0, 0]) => {
    const { subscribe, set, update } = writable([]);
    let value = nodes;
    let defaults = {};
    let elevateNodesOnSelect = true;
    const _set = (nds) => {
        adoptUserNodes(nds, nodeLookup, parentLookup, {
            elevateNodesOnSelect,
            nodeOrigin,
            defaults,
            checkEquality: false
        });
        value = nds;
        set(value);
        return value;
    };
    const _update = (fn) => _set(fn(value));
    const setDefaultOptions = (options) => {
        defaults = options;
    };
    const setOptions = (options) => {
        elevateNodesOnSelect = options.elevateNodesOnSelect ?? elevateNodesOnSelect;
    };
    _set(value);
    return {
        subscribe,
        set: _set,
        update: _update,
        setDefaultOptions,
        setOptions
    };
};
export const createEdgesStore = (edges, connectionLookup, edgeLookup, defaultOptions) => {
    const { subscribe, set, update } = writable([]);
    let value = edges;
    let defaults = defaultOptions || {};
    const _set = (eds) => {
        const nextEdges = defaults ? eds.map((edge) => ({ ...defaults, ...edge })) : eds;
        updateConnectionLookup(connectionLookup, edgeLookup, nextEdges);
        value = nextEdges;
        set(value);
    };
    const _update = (fn) => _set(fn(value));
    const setDefaultOptions = (options) => {
        defaults = options;
    };
    _set(value);
    return {
        subscribe,
        set: _set,
        update: _update,
        setDefaultOptions
    };
};
