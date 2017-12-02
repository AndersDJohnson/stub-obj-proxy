import stubObjProxy from '.'

describe('stubObjProxy', () => {
  it('should return defined for `get` with property paths', () => {
    const p = stubObjProxy()
    expect(p.a.b.c).toBeDefined()
  })

  it('should allow function call with property paths', () => {
    const p = stubObjProxy()
    expect(p.a().b.c()).toBeDefined()
  })

  it('should allow `map` with property paths', () => {
    const p = stubObjProxy()
    p.a.b.c.map(e => !!e)
  })

  it('should allow `for ... in` with property paths', () => {
    const p = stubObjProxy()
    for (let e in p.a.b.c) {
      e = !!e
    }
  })

  it('should allow `for ... of` with property paths', () => {
    const p = stubObjProxy()
    for (let e of p.a.b.c) {
      e = !!e
    }
  })

  it('should be true for `has` with property paths', () => {
    const p = stubObjProxy()
    expect(p.a.b.c.hasOwnProperty('ok')).toBe(true)
  })

  it('should be true for `in` with property paths', () => {
    const p = stubObjProxy()
    expect('ok' in p.a.b.c).toBe(true)
  })

  it('should allow but ignore `set` with property paths', () => {
    const p = stubObjProxy()
    expect(() => {
      p.a.b.c = 'foo'
    }).not.toThrow()
  })
})
