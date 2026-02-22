/**
 * 🧾 GST Calculator - Tax Lagao Bhai!
 *
 * Bunty apni dukaan ke liye GST calculator bana raha hai. Customer ko bill
 * dena hai jisme base price, GST amount, aur total clearly dikhna chahiye.
 * GST rate category ke hisaab se change hota hai.
 *
 * GST Rates (by category string, case-insensitive):
 *   - "essential"   => 0% GST  (dal, chawal, atta, etc.)
 *   - "food"        => 5% GST  (packaged food, restaurant below Rs 7500)
 *   - "standard"    => 12% GST (processed food, business class tickets)
 *   - "electronics" => 18% GST (phones, laptops, etc.)
 *   - "luxury"      => 28% GST (cars, aerated drinks, tobacco)
 *   - Any other category => return null
 *
 * Rules:
 *   - Calculate: gstAmount = amount * rate / 100
 *   - Calculate: totalAmount = amount + gstAmount
 *   - Round gstAmount aur totalAmount to 2 decimal places using
 *     parseFloat(value.toFixed(2))
 *   - Return object: { baseAmount, gstRate, gstAmount, totalAmount }
 *   - category ko lowercase mein compare karo (case-insensitive)
 *   - Hint: Use toFixed(), parseFloat(), Number.isFinite(), toLowerCase()
 *
 * Validation:
 *   - Agar amount positive finite number nahi hai, return null
 *   - Agar category string nahi hai, return null
 *   - Agar category unknown hai, return null
 *
 * @param {number} amount - Base amount before tax
 * @param {string} category - Product category
 * @returns {{ baseAmount: number, gstRate: number, gstAmount: number, totalAmount: number } | null}
 *
 * @example
 *   calculateGST(1000, "electronics")
 *   // => { baseAmount: 1000, gstRate: 18, gstAmount: 180, totalAmount: 1180 }
 *
 *   calculateGST(500, "essential")
 *   // => { baseAmount: 500, gstRate: 0, gstAmount: 0, totalAmount: 500 }
 */
export function calculateGST(amount, category) {
  
  if (!Number.isFinite(amount) || amount <= 0 || Number.isNaN() || typeof(category) != 'string' || typeof(amount) != 'number' || category.length ==0) {
    return null;
  }

  if (!["essential", "food", "standard", "electronics", "luxury"].includes(category.toLowerCase())) {
    return null;
  }

  switch (category.toLowerCase()) {
    case "food" :
      return {baseAmount: amount, gstRate: 5, gstAmount: parseFloat((0.05*amount).toFixed(2)), totalAmount: parseFloat((1.05*amount).toFixed(2))};
    
    case "standard" :
      return {baseAmount: amount, gstRate: 12, gstAmount: parseFloat((0.12*amount).toFixed(2)), totalAmount: parseFloat((1.12*amount).toFixed(2))};
  
    case "electronics" :
      return {baseAmount: amount, gstRate: 18, gstAmount: parseFloat((0.18*amount).toFixed(2)), totalAmount: parseFloat((1.18*amount).toFixed(2))};
  
    case "luxury" :
      return {baseAmount: amount, gstRate: 28, gstAmount: parseFloat((0.28*amount).toFixed(2)), totalAmount: parseFloat((1.28*amount).toFixed(2))};
  
    default:
      return {baseAmount: amount, gstRate: 0, gstAmount: 0, totalAmount: parseFloat((amount).toFixed(2))};
  
  }

}
