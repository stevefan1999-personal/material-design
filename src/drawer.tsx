import * as React from 'react';
import DrawerComponent from '@material-ui/core/Drawer';
import { ModalProps } from './modal';
import { PaperProps } from './paper';
import { StandardProps } from './types';

export interface DrawerProps extends StandardProps<ModalProps> {
    /** @name Anchor @default Left */
    anchor?: DrawerAnchor;

    /** @name Elevation @default 16 */
    elevation?: number;

    /* @name Open @default true
    open?: boolean; */
    
    /** @name Variant @default Temporary */
    variant?: DrawerVariant;

    children?: React.ReactNode;

    /** @name Modal Props */
    ModalProps?: Partial<ModalProps>;

    /** @name Paper Props */
    PaperProps?: Partial<PaperProps>;
}

export enum DrawerAnchor {
    Left = 'left',
    Top = 'top',
    Right = 'right',
    Bottom ='bottom'
}

export enum DrawerVariant {
    Permanent = 'permanent',
    Persistent = 'persistent',
    Temporary = 'temporary'
}

/**
 * @name Drawer
 * @description Provide access to destinations in your app
 */
export const Drawer: React.SFC<DrawerProps> = props => {
    return (
        <DrawerComponent {...props}>
            {props.children}
        </DrawerComponent>
    )
}
