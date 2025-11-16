# PayPal Live Setup Instructions

## Getting Your Live PayPal Client ID

1. Go to https://developer.paypal.com/dashboard/
2. **Switch from "Sandbox" to "Live"** using the toggle in the top right corner
3. Click on **"Apps & Credentials"** in the left menu
4. Under the **"Live"** section, click **"Create App"**
5. Give your app a name (e.g., "29th Day Bakery Website")
6. Click **"Create App"**
7. Copy your **Live Client ID** (it will look similar to the sandbox one but different)

## Update Your Website

1. Open `cart.html` file
2. Find this line near the top (around line 9):
   ```html
   <script src="https://www.paypal.com/sdk/js?client-id=YOUR_LIVE_CLIENT_ID&currency=USD"></script>
   ```
3. Replace `YOUR_LIVE_CLIENT_ID` with your actual Live Client ID
4. Save the file
5. Commit and push to GitHub:
   ```
   git add cart.html
   git commit -m "Add live PayPal credentials"
   git push
   ```

## Enable Payment Notifications

1. Log into your **PayPal Business account** at https://www.paypal.com/
2. Click the gear icon (Settings) in the top right
3. Go to **Notifications**
4. Under **"Notifications"**, enable:
   - **Payments Received** - You'll get an email for every payment
   - **Instant Payment Notification (IPN)** (optional) - For advanced tracking

5. Make sure your email notifications are turned on for your PayPal account

## What Information You'll Receive

When a customer places an order, PayPal will email you with:
- Customer Name
- Phone Number
- Pickup or Delivery choice
- Delivery Address (if delivery selected)
- Order Notes
- All pie items and quantities
- Payment amount
- Transaction ID

The customer details are included in the PayPal transaction's "Custom ID" and "Description" fields.

## Important Notes

- **Test first!** Before going live, you can keep the sandbox credentials and do a few test orders
- **Real money**: Once you switch to live credentials, all transactions will be real
- **Check your PayPal email**: Make sure the email associated with your PayPal Business account is one you check regularly on your phone
- **Phone notifications**: Set up email push notifications on your phone for your PayPal email address so you get instant alerts

## Switching Back to Sandbox (for testing)

If you want to test again, just replace the Live Client ID with your Sandbox Client ID:
```
AdZ77IXoXY2HtrRKcMSfv8Z1BXK3j7LY2t9eKSgpz-fFnH2veX9Y6N7gh-HN_VtHjuwXBYGZ91dnPZId
```
