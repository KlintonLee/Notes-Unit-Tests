const sumFunc = require('../../src/math/sum')
const multFunc = require('../../src/math/mult')

describe('called-after.test.js', () => {
  afterEach(() => {
    sinon.restore()
  })

  it(`Given a spy of sumFunc and multFunc
      When call
        sumFunc.execute(10, 20)
        multFunc.execute(1, 2)
      Then expect for the sumFunc to be called after the multFunc
      `, async () => {
    const sumSpy = sinon.spy(sumFunc, 'execute')
    const multSpy = sinon.spy(multFunc, 'execute')

    sumFunc.execute(10, 20)
    multFunc.execute(1, 2)

    // Called after, but it doesn't have to be immediately
    expect(multSpy.calledAfter(sumSpy)).to.be.true
    expect(multSpy.calledImmediatelyAfter(sumSpy)).to.be.true
  })
})
