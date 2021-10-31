const sumFunc = require('../../src/math/sum')

describe('return-resolves.test.js', () => {
	afterEach(() => {
		sinon.restore()
	})

	it(`Given a stub of sumFunc.execute returning 1000
      When call sumFunc.execute(10, 20)
      Then should return 1000 even that the original returns 30`, async () => {
		sinon.stub(sumFunc, 'execute').returns(1000)

		const result = sumFunc.execute(10, 20)
		expect(result).to.be.eq(1000)
	})

	it(`Given a stub of sumFunc.execute resolving 1000
      When call await sumFunc.execute(10, 20)
      Then should return 1000 as promise`, async () => {
		sinon.stub(sumFunc, 'execute').resolves(1000)

		result = sumFunc.execute(10, 20)
		console.log(result)
		result = await sumFunc.execute(10, 20)
		expect(result).to.be.eq(1000)
	})
})
