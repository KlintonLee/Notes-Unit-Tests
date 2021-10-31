const sumFunc = require('../../src/math/sum')

describe('reset-restore.test.js', () => {
	afterEach(() => {
		sinon.restore()
	})

	it(`Given a stub of sumFunc.execute changing it behavior that in
        the three first calls multiplies args (a, b)
        and the fourth call turns to default behavior
      When call sumFunc.execute(10, 20)
      Then returns 200 on the first three calls and
        30 on fourth call`, () => {
    const sumFuncStub = sinon.stub(sumFunc, 'execute')
      .onCall(0)
      .callsFake((a, b) => a * b)

    for (const i in [...Array(4)]) {
      if (i !== '3') {
        sumFuncStub.resetHistory()
        expect(sumFunc.execute(20, 10)).to.be.eq(200)
      } else {
        expect(sumFunc.execute(20, 10)).to.be.eq(undefined)
      }
    }
	})
})
