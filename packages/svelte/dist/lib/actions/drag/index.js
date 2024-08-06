import { get } from 'svelte/store';
import { XYDrag } from '@xyflow/system';
export default function drag(domNode, params) {
    const { store, onDrag, onDragStart, onDragStop, onNodeMouseDown } = params;
    const dragInstance = XYDrag({
        onDrag,
        onDragStart,
        onDragStop,
        onNodeMouseDown,
        getStoreItems: () => {
            const snapGrid = get(store.snapGrid);
            const vp = get(store.viewport);
            return {
                nodes: get(store.nodes),
                nodeLookup: get(store.nodeLookup),
                edges: get(store.edges),
                nodeExtent: get(store.nodeExtent),
                snapGrid: snapGrid ? snapGrid : [0, 0],
                snapToGrid: !!snapGrid,
                nodeOrigin: get(store.nodeOrigin),
                multiSelectionActive: get(store.multiselectionKeyPressed),
                domNode: get(store.domNode),
                transform: [vp.x, vp.y, vp.zoom],
                autoPanOnNodeDrag: get(store.autoPanOnNodeDrag),
                nodesDraggable: get(store.nodesDraggable),
                selectNodesOnDrag: get(store.selectNodesOnDrag),
                nodeDragThreshold: get(store.nodeDragThreshold),
                unselectNodesAndEdges: store.unselectNodesAndEdges,
                updateNodePositions: store.updateNodePositions,
                panBy: store.panBy
            };
        }
    });
    function updateDrag(domNode, params) {
        if (params.disabled) {
            dragInstance.destroy();
            return;
        }
        dragInstance.update({
            domNode,
            noDragClassName: params.noDragClass,
            handleSelector: params.handleSelector,
            nodeId: params.nodeId,
            isSelectable: params.isSelectable,
            nodeClickDistance: params.nodeClickDistance
        });
    }
    updateDrag(domNode, params);
    return {
        update(params) {
            updateDrag(domNode, params);
        },
        destroy() {
            dragInstance.destroy();
        }
    };
}