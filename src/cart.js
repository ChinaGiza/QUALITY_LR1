export const calculateTotal = (items) => {
  if (!Array.isArray(items)) {
    throw new Error("Items must be an array");
  }

  return items.reduce((total, item) => {
    if (typeof item.price !== "number" || item.price < 0) {
      throw new Error("Invalid price");
    }
    return total + item.price * (item.quantity || 1);
  }, 0);
};

export const applyDiscount = (total, discountPercent) => {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Discount must be between 0 and 100");
  }
  return total * (1 - discountPercent / 100);
};

// задание 1. добавить 1 метод и пять тестов к нему
export const formatCurrency = (amount, currency = 'USD') => {
  if (typeof amount !== 'number' || Number.isNaN(amount)) {
    throw new Error('Amount must be a valid number');
  }

  const symbols = {
    USD: '$',
    EUR: '€',
    RUB: '₽',
    GBP: '£',
    JPY: '¥',
  };

  if (!symbols[currency]) {
    throw new Error(`Unsupported currency: ${currency}`);
  }

  const formatted = amount.toFixed(2);
  return `${symbols[currency]}${formatted}`;
};

// задание 3. добавить метод для проверки эмэйлов через TDD
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email) => {
  if (typeof email !== 'string' || email.length === 0) {
    return false;
  }
  return EMAIL_REGEX.test(email);
};