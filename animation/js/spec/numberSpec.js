describe("The factorOf() function", function(){
    it("should find the factor of 12", function(){
        expect(factorsOf(12)).toEqual([1,2,3,4,6,12])
    });
});

describe("The isPrime() function", function(){
    it("should say 2 is prime function", function(){
        expect(isPrime(2).toBe(true));
    });
    it("should say 10 is not prime", function(){
        expect(isPrime(10).not.toBe(true));
    })
})