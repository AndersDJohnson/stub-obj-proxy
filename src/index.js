const stubObjProxy = () => new Proxy(
  () => stubObjProxy(),
  {
    get: (target, property) => {
      if (property === 'hasOwnProperty') return () => true
      return stubObjProxy()
    },
    has: () => true
  }
)

export default stubObjProxy
