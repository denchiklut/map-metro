export interface SchemeMeta {
    size: { height: number, width: number }
    center: { x: number, y: number }
    scale: { detailed: number, initial: number, max: number, min: number, overview: number }
}

export const schemeMeta: SchemeMeta = {
    size: { height: 3500, width: 3000 },
    center: { x: 1508, y: 1433 },
    scale: { detailed: 3.9, initial: 2.13, max: 5.2, min: 0.6, overview: 1 },
}
