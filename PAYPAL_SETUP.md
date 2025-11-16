# PayPal Integration Setup Instructions

## Steps to Get Your PayPal Client ID:

1. **Go to PayPal Developer Portal**
   - Visit: https://developer.paypal.com/

2. **Log in with your PayPal account**
   - Use your business PayPal account credentials

3. **Navigate to Dashboard**
   - Click on "Dashboard" in the top menu

4. **Create an App**
   - Click on "Apps & Credentials" 
   - Click "Create App" button
   - Name it something like "29th Day Bakery"
   - Select "Merchant" as the app type

5. **Get Your Client ID**
   - Once created, you'll see your **Client ID**
   - Copy the Client ID

6. **Update the Website**
   - Open `cart.html` in the code
   - Find this line: `<script src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD"></script>`
   - Replace `YOUR_PAYPAL_CLIENT_ID` with your actual Client ID
   - Save the file

7. **Test Mode vs Live Mode**
   - Initially, you'll be in **Sandbox mode** (test mode)
   - Use sandbox test accounts to test payments
   - When ready to go live, switch to **Live** credentials in the PayPal dashboard
   - Update the Client ID in cart.html with your Live Client ID

## Important Notes:
- **Sandbox mode** is for testing - no real money is processed
- **Live mode** processes real payments
- Keep your Client ID secure (it's okay to share in your code, but keep Secret keys private!)

## Need Help?
- PayPal Documentation: https://developer.paypal.com/docs/checkout/
