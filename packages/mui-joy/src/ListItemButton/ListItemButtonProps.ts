import * as React from 'react';
import {
  OverridableComponent,
  OverridableStringUnion,
  OverridableTypeMap,
  OverrideProps,
} from '@mui/types';
import { SxProps } from '../styles/defaultTheme';
import { ColorPaletteProp, VariantProp } from '../styles/types';
import { ListItemButtonClasses } from './listItemButtonClasses';

export type ListItemButtonSlot = 'root';

export interface ListItemButtonPropsVariantOverrides {}

export interface ListItemButtonPropsColorOverrides {}

export interface ListItemButtonTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * A ref for imperative actions. It currently only supports `focusVisible()` action.
     */
    action?: React.Ref<{
      focusVisible(): void;
    }>;
    /**
     * If `true`, the list item is focused during the first mount.
     * Focus will also be triggered if the value changes from false to true.
     * @default false
     */
    autoFocus?: boolean;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'neutral'
     */
    color?: OverridableStringUnion<ColorPaletteProp, ListItemButtonPropsColorOverrides>;
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ListItemButtonClasses>;
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * This prop can help identify which element has keyboard focus.
     * The class name will be applied when the element gains the focus through keyboard interaction.
     * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
     * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
     * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
     * if needed.
     */
    focusVisibleClassName?: string;
    /**
     * The empty space on the side(s) of the separator.
     */
    inset?: 'gutter' | 'leftGutter' | 'startAdornment';
    /**
     * Use to apply selected styling.
     * @default false
     */
    selected?: boolean;
    /**
     * The variant to use.
     * @default 'text'
     */
    variant?: OverridableStringUnion<VariantProp, ListItemButtonPropsVariantOverrides>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps;
    /**
     * @default 0
     */
    tabIndex?: NonNullable<React.HTMLAttributes<any>['tabIndex']>;
  };
  defaultComponent: D;
}

export interface ExtendListItemButtonTypeMap<M extends OverridableTypeMap> {
  props: M['props'] & ListItemButtonTypeMap['props'];
  defaultComponent: M['defaultComponent'];
}

export type ListItemButtonProps<
  D extends React.ElementType = ListItemButtonTypeMap['defaultComponent'],
  P = {
    component?: React.ElementType;
  },
> = OverrideProps<ListItemButtonTypeMap<P, D>, D>;

export type ExtendListItemButton<M extends OverridableTypeMap> = ((
  props: OverrideProps<ExtendListItemButtonTypeMap<M>, 'a'>,
) => JSX.Element) &
  OverridableComponent<ExtendListItemButtonTypeMap<M>>;
