import { memo, FC } from 'react';
import { Handle, Position, NodeProps, NodeResizeControl } from '@xyflow/react';

const CustomNode: FC<NodeProps> = ({ id, data, positionAbsoluteX, positionAbsoluteY, width, height }) => {
  return (
    <>
      <div
        style={{
          padding: 10,
          width: '100%',
          height: '100%',
          background: 'blue',
          position: 'relative',
          transform: 'rotate(180deg)',
        }}
      >
        <NodeResizeControl
          minWidth={data.minWidth ?? undefined}
          maxWidth={data.maxWidth ?? undefined}
          minHeight={data.minHeight ?? undefined}
          maxHeight={data.maxHeight ?? undefined}
          shouldResize={data.shouldResize ?? undefined}
          onResizeStart={data.onResizeStart ?? undefined}
          onResize={data.onResize ?? undefined}
          onResizeEnd={data.onResizeEnd ?? undefined}
          keepAspectRatio={false}
          rotation={{
            anchorX: positionAbsoluteX + (width || 0) / 2,
            anchorY: positionAbsoluteY + (height || 0) / 2,
            angle: -135,
          }}
          color="red"
          position={Position.Top}
        />
        <NodeResizeControl
          minWidth={data.minWidth ?? undefined}
          maxWidth={data.maxWidth ?? undefined}
          minHeight={data.minHeight ?? undefined}
          maxHeight={data.maxHeight ?? undefined}
          shouldResize={data.shouldResize ?? undefined}
          onResizeStart={data.onResizeStart ?? undefined}
          onResize={data.onResize ?? undefined}
          onResizeEnd={data.onResizeEnd ?? undefined}
          keepAspectRatio={false}
          rotation={{
            anchorX: positionAbsoluteX + (width || 0) / 2,
            anchorY: positionAbsoluteY + (height || 0) / 2,
            angle: -180,
          }}
          color="red"
          position={Position.Bottom}
        />
      </div>
    </>
  );
};

export default memo(CustomNode);
