import type { HTMLButtonAttributes } from 'svelte/elements';
import type { PanelPosition } from '@xyflow/system';
import type { FitViewOptions } from '../../types';
export type ControlsProps = {
    /** Position of the controls on the pane
     * @example PanelPosition.TopLeft, PanelPosition.TopRight,
     * PanelPosition.BottomLeft, PanelPosition.BottomRight
     */
    position?: PanelPosition;
    /** Show button for zoom in/out */
    showZoom?: boolean;
    /** Show button for fit view */
    showFitView?: boolean;
    /** Show button for toggling interactivity */
    showLock?: boolean;
    buttonBgColor?: string;
    buttonBgColorHover?: string;
    buttonColor?: string;
    buttonColorHover?: string;
    'aria-label'?: string;
    style?: string;
    class?: string;
    orientation?: 'horizontal' | 'vertical';
    fitViewOptions?: FitViewOptions;
};
export type ControlButtonProps = HTMLButtonAttributes & {
    class?: string;
    bgColor?: string;
    bgColorHover?: string;
    color?: string;
    colorHover?: string;
    borderColor?: string;
};
