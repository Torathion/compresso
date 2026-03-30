import { mostCommon } from 'src/utils'
import { describe, it, expect } from 'vitest'

describe('deleteProp', () => {
  const users = [
    { role: 'admin' }, { role: 'user' }, { role: 'admin' },
    { role: 'moderator' }, { role: 'admin' }
  ];

  it('finds most common property value', () => {
    expect(mostCommon(users, 'role')).toBe('admin');
  });

  it('returns undefined on empty', () => {
    expect(mostCommon([], 'role' as any)).toBeUndefined();
  });

  it('handles ties correctly (first max)', () => {
    const tie = [
      { x: 'a' }, { x: 'b' }, { x: 'a' }, { x: 'b' }
    ];
    expect(mostCommon(tie, 'x')).toBe('a');
  });

  it('supports numbers and nullish', () => {
    const data = [{ n: 5 }, { n: 10 }, { n: 5 }, { n: null }, { n: 5 }];
    expect(mostCommon(data, 'n')).toBe(5);
  });
})
