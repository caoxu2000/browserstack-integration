export default function expectExactSame(results) {

	results.forEach((result, idx) => {
		expect(result.isExactSameImage, `image ${idx} is not the same`).to.be.true;
	});

}
