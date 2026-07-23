type Direction = 'left' | 'right' | 'up' | 'down';

const move: Direction = 'left';
const tomb: Direction = 'graveyard';

/*
1-6.ts:4:7 - error TS2322: Type '"graveyard"' is not assignable to type 'Direction'.

4 const tomb: Direction = 'graveyard';
        ~~~~


Found 1 error in 1-6.ts:4
*/