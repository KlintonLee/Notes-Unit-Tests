const sumFunc = require('../../src/math/sum')

describe('on-calls.test.js', () => {
	afterEach(() => {
		sinon.restore()
	})

	it(`Given a stub of sumFunc.execute changing its behavior that in
        the first call multiplies the args (a, b)
        the second call divides the args (a, b)
        the third call mod the args (a, b)
        and the fourth call substract the args (a, b)
      When call sumFunc.execute(10, 20)
      Then returns 200 three times and 30 on fourth time`, async () => {
    const sumFuncStub = sinon.stub(sumFunc, 'execute')
    sumFuncStub
      .onFirstCall()
      .callsFake((a, b) => a * b)
    sumFuncStub
      .onSecondCall()
      .callsFake((a, b) => a / b)
    sumFuncStub
      .onThirdCall()
      .callsFake((a, b) => a % b)
    sumFuncStub
      .onCall(3)
      .callsFake((a, b) => a - b)

    expect(sumFunc.execute(20, 10)).to.be.eq(200)
    expect(sumFunc.execute(20, 10)).to.be.eq(2)
    expect(sumFunc.execute(20, 10)).to.be.eq(0)
    expect(sumFunc.execute(20, 10)).to.be.eq(10)
	})
})
