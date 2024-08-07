import { Connection, InternalNodeBase, Transform, EdgeBase } from '../..';
export declare function getEdgeCenter({ sourceX, sourceY, targetX, targetY, }: {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
}): [number, number, number, number];
export type GetEdgeZIndexParams = {
    sourceNode: InternalNodeBase;
    targetNode: InternalNodeBase;
    selected?: boolean;
    zIndex?: number;
    elevateOnSelect?: boolean;
};
export declare function getElevatedEdgeZIndex({ sourceNode, targetNode, selected, zIndex, elevateOnSelect, }: GetEdgeZIndexParams): number;
type IsEdgeVisibleParams = {
    sourceNode: InternalNodeBase;
    targetNode: InternalNodeBase;
    width: number;
    height: number;
    transform: Transform;
};
export declare function isEdgeVisible({ sourceNode, targetNode, width, height, transform }: IsEdgeVisibleParams): boolean;
/**
 * This util is a convenience function to add a new Edge to an array of edges
 * @remarks It also performs some validation to make sure you don't add an invalid edge or duplicate an existing one.
 * @public
 * @param edgeParams - Either an Edge or a Connection you want to add
 * @param edges -  The array of all current edges
 * @returns A new array of edges with the new edge added
 */
export declare const addEdge: <EdgeType extends EdgeBase>(edgeParams: EdgeType | Connection, edges: EdgeType[]) => EdgeType[];
export type ReconnectEdgeOptions = {
    shouldReplaceId?: boolean;
};
/**
 * A handy utility to reconnect an existing edge with new properties
 * @param oldEdge - The edge you want to update
 * @param newConnection - The new connection you want to update the edge with
 * @param edges - The array of all current edges
 * @param options.shouldReplaceId - should the id of the old edge be replaced with the new connection id
 * @returns the updated edges array
 */
export declare const reconnectEdge: <EdgeType extends EdgeBase>(oldEdge: EdgeType, newConnection: Connection, edges: EdgeType[], options?: ReconnectEdgeOptions) => EdgeType[];
export {};
//# sourceMappingURL=general.d.ts.map