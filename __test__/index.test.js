const sevenElevenRules = require("../index.js");
const Restriction = require("h8-restriction");

describe("7eleven rules", () => {
  it("Harus validasi 'age' untuk pembelian 'rokok' (20)", () => {
    const resultTrue1 = sevenElevenRules("Galuh", 17, 1049000);
    const resultTrue2 = sevenElevenRules("Galuh", 20, 1049000);
    const resultTrue3 = sevenElevenRules("Galuh", 19, 50000);
    const resultFalse1 = sevenElevenRules("Galuh", 16, 1049000);
    const resultFalse2 = sevenElevenRules("Galuh", 15, 1049000);
    const resultFalse3 = sevenElevenRules("Galuh", 13, 50000);

    expect(resultTrue1.includes("Rokok")).toBe(true);
    expect(resultTrue2.includes("Rokok")).toBe(true);
    expect(resultTrue3.includes("Rokok")).toBe(true);
    expect(resultFalse1.includes("Rokok")).toBe(false);
    expect(resultFalse2.includes("Rokok")).toBe(false);
    expect(resultFalse3.includes("Rokok")).toBe(false);
  });

  it("Harus mengutamakan pembelian dengan harga terdekat yang paling mahal terlebih dahulu (20)", () => {
    const result1 = sevenElevenRules("Galuh", 17, 80000);
    const result2 = sevenElevenRules("Galuh", 17, 60000);
    const result3 = sevenElevenRules("Galuh", 17, 50000);
    const result4 = sevenElevenRules("Galuh", 17, 30000);
    const result5 = sevenElevenRules("Galuh", 16, 90000);

    expect(result1.includes("Koran")).not.toBe(true);
    expect(result2.includes("Soda")).not.toBe(true);
    expect(result3.includes("Soda")).not.toBe(true);
    expect(result3.includes("Koran")).not.toBe(true);
    expect(result4.includes("Koran")).not.toBe(true);
    expect(result5.includes("Koran")).not.toBe(true);
  });

  it("Harus menjumlahkan atau menghitung apa saja yang dibeli (20)", () => {
    const result1 = sevenElevenRules("Galuh", 17, 1049000);
    const result2 = sevenElevenRules("Galuh", 16, 1049000);
    const result3 = sevenElevenRules("Galuh", 17, 50000);
    const result4 = sevenElevenRules("Galuh", 16, 50000);
    const result5 = sevenElevenRules("Galuh", 20, 48000);

    expect(result1).toContain("20 Rokok, 1 Soda dan 1 Koran");
    expect(result2).toContain("34 Soda dan 2 Koran");
    expect(result3).toContain("1 Rokok");
    expect(result4).toContain("1 Soda dan 2 Koran");
    expect(result5).toContain("1 Soda dan 1 Koran");
  });

  it("Harus memunculkan sisa uang yang tersisa (20)", () => {
    const result1 = sevenElevenRules("Galuh", 17, 1049000);
    const result2 = sevenElevenRules("Galuh", 16, 1049000);
    const result3 = sevenElevenRules("Galuh", 17, 50000);
    const result4 = sevenElevenRules("Galuh", 16, 50000);
    const result5 = sevenElevenRules("Galuh", 20, 48000);

    expect(result1).toContain("9000");
    expect(result2).toContain("9000");
    expect(result3).toContain("0");
    expect(result4).toContain("0");
    expect(result5).toContain("8000");
  });

  it("Harus validasi ketika 'name' tidak diisi (5)", () => {
    const result1 = sevenElevenRules("", undefined, undefined);
    const result2 = sevenElevenRules(undefined, 58, 1049000);
    const result3 = sevenElevenRules();

    expect(result1).toEqual("Anda tidak boleh membeli di 7eleven!");
    expect(result2).toEqual("Anda tidak boleh membeli di 7eleven!");
    expect(result3).toEqual("Anda tidak boleh membeli di 7eleven!");
  });

  it("Harus validasi ketika 'money' kurang cukup (5)", () => {
    const result1 = sevenElevenRules("Ujang", 25, 9000);
    const result2 = sevenElevenRules("Ujang", 25, 5000);

    expect(result1).toEqual("Tidak cukup membeli barang apapun!");
    expect(result2).toEqual("Tidak cukup membeli barang apapun!");
  });

  it("Harus validasi ketika salah input 'age' dan 'money' (5)", () => {
    const result1 = sevenElevenRules("Abdul", undefined, undefined);
    const result2 = sevenElevenRules("Abdul", undefined, -10000);
    const result3 = sevenElevenRules("Abdul", -17, undefined);

    expect(result1).toEqual("Invalid Age dan Money!");
    expect(result2).toEqual("Invalid Age dan Money!");
    expect(result3).toEqual("Invalid Age dan Money!");
  });

  it("Harus validasi ketika salah input 'age' (2.5)", () => {
    const result1 = sevenElevenRules("Abdul", -17, 60000);

    expect(result1).toEqual("Invalid Age!");
  });

  it("Harus validasi ketika salah input 'money' (2.5)", () => {
    const result1 = sevenElevenRules("Abdul", 30, undefined);

    expect(result1).toEqual("Invalid Money!");
  });

  it("check restriction (-20)", async () => {
    const checkRestriction = new Restriction("../index.js");
    checkRestriction.rules = [
      "match",
      "split",
      "concat",
      "search",
      "pop",
      "push",
      "join",
      "slice",
    ];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});
