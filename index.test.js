describe('Flatten array function', () => {
  it.each`
    array                                             | mutable  | expected
    ${[]}                                             | ${false} | ${[]}
    ${[1]}                                            | ${false} | ${[1]}
    ${[[[]]]}                                         | ${false} | ${[]}
    ${null}                                           | ${false} | ${null}
    ${undefined}                                      | ${false} | ${undefined}
    ${1}                                              | ${false} | ${null}
    ${''}                                             | ${false} | ${null}
    ${([1, 2, 3], [4, , 5, 6])}                       | ${false} | ${[1, 2, 3, 4, 5, 6]}
    ${[[0, 1], [2, 3], [4, 5, [6, 7, [8, [9, 10]]]]]} | ${false} | ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
    ${[null]}                                         | ${false} | ${[null]}
    ${[undefined]}                                    | ${false} | ${[undefined]}
    ${[]}                                             | ${true}  | ${[]}
    ${[1]}                                            | ${true}  | ${[1]}
    ${[[[]]]}                                         | ${true}  | ${[]}
    ${null}                                           | ${true}  | ${null}
    ${undefined}                                      | ${true}  | ${undefined}
    ${1}                                              | ${true}  | ${null}
    ${''}                                             | ${true}  | ${null}
    ${([1, 2, 3], [4, , 5, 6])}                       | ${true}  | ${[1, 2, 3, 4, 5, 6]}
    ${[[0, 1], [2, 3], [4, 5, [6, 7, [8, [9, 10]]]]]} | ${true}  | ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
    ${[null]}                                         | ${true}  | ${[null]}
    ${[undefined]}                                    | ${true}  | ${[undefined]}
  `(
    'returns $expected when $array is called with mutable argument as $mutable',
    ({ array, mutable, expected }) => {
      expect(flatten(array, mutable)).toBe(expected);
    }
  );
});
