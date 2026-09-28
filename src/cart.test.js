import { describe, it, expect } from "vitest";
import { calculateTotal, applyDiscount, formatCurrency } from "./cart.js";

describe("calculateTotal", () => {
  it("should return 0 for empty array", () => {
    expect(calculateTotal([])).toBe(0);
  });

  it("should sum prices correctly", () => {
    const items = [
      { price: 100, quantity: 2 },
      { price: 50, quantity: 1 },
    ];
    expect(calculateTotal(items)).toBe(250);
  });

  it("should throw error for non-array", () => {
    expect(() => calculateTotal("invalid")).toThrow("Items must be an array");
  });

  it("should throw error for negative price", () => {
    const items = [{ price: -10 }];
    expect(() => calculateTotal(items)).toThrow("Invalid price");
  });
});

describe("applyDiscount", () => {
  it("should apply 10% discount", () => {
    expect(applyDiscount(100, 10)).toBe(90);
  });

  it("should throw error for discount > 100", () => {
    expect(() => applyDiscount(100, 150)).toThrow(
      "Discount must be between 0 and 100",
    );
  });
});

// задание 1. добавить 1 метод и пять тестов к нему
describe('formatCurrency', () => {
  it('should format amount in USD by default', () => {
    expect(formatCurrency(1234.5)).toBe('$1234.50');
  });

  it('should format amount in EUR', () => {
    expect(formatCurrency(99.99, 'EUR')).toBe('€99.99');
  });

  it('should format amount in RUB', () => {
    expect(formatCurrency(1500, 'RUB')).toBe('₽1500.00');
  });

  it('should handle zero amount', () => {
    expect(formatCurrency(0, 'USD')).toBe('$0.00');
  });

  it('should handle negative amounts', () => {
    expect(formatCurrency(-50.5, 'GBP')).toBe('£-50.50');
  });

  it('should throw error for unsupported currency', () => {
    expect(() => formatCurrency(100, 'XYZ')).toThrow('Unsupported currency');
  });

  it('should throw error for non-number amount', () => {
    expect(() => formatCurrency('100', 'USD')).toThrow('Amount must be a valid number');
  });
});

