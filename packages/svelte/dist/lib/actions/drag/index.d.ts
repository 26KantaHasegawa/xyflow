import { type OnDrag } from '@xyflow/system';
import type { SvelteFlowStore } from '../../store/types';
export type UseDragParams = {
    store: SvelteFlowStore;
    disabled?: boolean;
    noDragClass?: string;
    handleSelector?: string;
    nodeId?: string;
    isSelectable?: boolean;
    nodeClickDistance?: number;
    onDrag?: OnDrag;
    onDragStart?: OnDrag;
    onDragStop?: OnDrag;
    onNodeMouseDown?: (id: string) => void;
};
export default function drag(domNode: Element, params: UseDragParams): {
    update(params: UseDragParams): void;
    destroy(): void;
};
