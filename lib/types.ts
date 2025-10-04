import { RefObject } from 'react';
import { Group } from 'three';

export type SearchableObject = {
    id: string;
    name: string;
    type: 'planet' | 'asteroid' | 'comet' | 'sun';
    ref: RefObject<Group | null>;
};
