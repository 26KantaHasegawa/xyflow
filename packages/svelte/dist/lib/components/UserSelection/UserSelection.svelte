<script>import { useStore } from '../../store';
import { Selection } from '../Selection';
const { selectionRect, selectionRectMode } = useStore();
</script>

<Selection
  isVisible={!!($selectionRect && $selectionRectMode === 'user')}
  width={$selectionRect?.width}
  height={$selectionRect?.height}
  x={$selectionRect?.x}
  y={$selectionRect?.y}
/>
