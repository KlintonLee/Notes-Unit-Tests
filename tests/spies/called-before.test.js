const sumFunc = require('../../src/math/sum')
const multFunc = require('../../src/math/mult')

describe('called-before.test.js', () => {
  afterEach(() => {
    sinon.restore()
  })

  it(`Given a spy of sumFunc and multFunc
      When call
        sumFunc.execute(10, 20)
        multFunc.execute(1, 2)
      Then expect for the sumFunc to be called before the multFunc
      `, async () => {
    const sumSpy = sinon.spy(sumFunc, 'execute')
    const multSpy = sinon.spy(multFunc, 'execute')

    sumFunc.execute(10, 20)
    multFunc.execute(1, 2)

    // Called before, but it doesn't have to be immediately
    expect(sumSpy.calledBefore(multSpy)).to.be.true
    expect(sumSpy.calledImmediatelyBefore(multSpy)).to.be.true
  })
})
