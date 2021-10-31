const sumFunc = require('../../src/math/sum')
const multFunc = require('../../src/math/mult')

describe('not-called.test.js', () => {
  afterEach(() => {
    sinon.restore()
  })

  it(`Given a spy of sumFunc
      When do not call sumFunc.execute
      Then expect this function was never called
      `, async () => {
    const sumSpy = sinon.spy(sumFunc, 'execute')
    const multSpy = sinon.spy(multFunc, 'execute')

    multFunc.execute(1, 2)

    expect(sumSpy.notCalled).to.be.true
    expect(multSpy.alwaysCalledWith(1, 2)).to.be.true
    expect(multSpy.neverCalledWith(100, 100)).to.be.true
  })
})
