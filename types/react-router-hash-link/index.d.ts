// Type definitions for react-router-hash-link 2.4
// Project: https://github.com/rafgraph/react-router-hash-link
// Definitions by: Sam Baeck <https://github.com/zoompie>
//                 Michael Vasyliv <https://github.com/michael-vasyliv>
//                 Eli Robinson <https://github.com/EliRobinson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

import * as React from 'react';
import { LinkProps, NavLinkProps } from 'react-router-dom';

export interface HashLinkProps extends LinkProps {
  elementId?: string | undefined;
  smooth?: boolean | undefined;
  scroll?: ((element: HTMLElement) => void) | undefined;
  timeout?: number | undefined;
}

export interface NavHashLinkProps extends Omit<NavLinkProps, 'className' | 'style'>, HashLinkProps {
  className?: string;
  style?: React.CSSProperties;
}

export class HashLink extends React.Component<HashLinkProps, any> { }

export class NavHashLink extends React.Component<NavHashLinkProps, any> { }

export function genericHashLink<P>(Component: React.FunctionComponent<P>): React.FunctionComponent<P>;
