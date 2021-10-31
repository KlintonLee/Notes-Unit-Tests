const sumFunc = require('../../src/math/sum')
const multFunc = require('../../src/math/mult')

describe('called.test.js', () => {
  afterEach(() => {
    sinon.restore()
  })

  it(`Given a spy of sumFunc and multFunc
      When call
        sumFunc.execute(10, 20)
        sumFunc.execute(30, 40)
        multFunc.execute(1, 2)
      Then expect for
        sumFunc.execute called at least once
        sumFunc.execute called exactly two times
        sumFunc.execute called exactly twice (redundant)
        sumFunc.execute on first called with (10, 20)
        sumFunc.execute on last called with (30, 40)
        multFunc.called called once
        multFunc.called with (1, 2)
        multFunc.called called once with (1, 2)
        multFunc.called called once with exactly (1, 2)
      `, async () => {
    const sumSpy = sinon.spy(sumFunc, 'execute')
    const multSpy = sinon.spy(multFunc, 'execute')

    sumFunc.execute(10, 20)
    sumFunc.execute(30, 40)
    multFunc.execute(1, 2)

    expect(sumSpy.called).to.be.true
    expect(sumSpy.callCount).to.be.eq(2)
    expect(sumSpy.calledTwice).to.be.true
    expect(sumSpy.firstCall.calledWith(10, 20)).to.be.true
    expect(sumSpy.lastCall.calledWith(30, 40)).to.be.true

    expect(multSpy.calledOnce).to.be.true
    expect(multSpy.calledWith(1, 2)).to.be.true
    expect(multSpy.calledOnceWith(1, 2)).to.be.true
    expect(multSpy.calledOnceWithExactly(1, 2)).to.be.true
  })
})
