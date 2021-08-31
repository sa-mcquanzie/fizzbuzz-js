describe("fizzbuzz", () => {

  it("Should return fizz when div by 3", function() {
    expect(fizzbuzz()[2]).toEqual('fizz');
  });

  it("Should return buzz when div by 5", function() {
    expect(fizzbuzz()[4]).toEqual('buzz');
  });

  it("Should return fizzbuzz when div by 15", function() {
    expect(fizzbuzz()[14]).toEqual('fizzbuzz');
  });


  it("Should return number when not divisible by 3, 5 or 15", function() {
    expect(fizzbuzz()[12]).toEqual(13);
  });

  console.log(fizzbuzz)
});