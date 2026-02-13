export function MagicLinkEmail(otp: string): string {
  return `
  <!DOCTYPE html>
  <html>
    <body style="margin:0; padding:0; background-color:#f4f4f7; font-family:Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
          <td align="center">
            
            <table width="500" cellpadding="0" cellspacing="0" 
              style="background:#ffffff; padding:40px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
              
              <!-- LOGO -->
              <tr>
                <td align="center" style="padding-bottom:20px;">
                  <img 
                    src="https://fuutura.com/Images/emailLogo.png"
                    alt="Fuutura Logo"
                    width="120"
                    style="display:block; margin:0 auto;"
                  />
                </td>
              </tr>

              <tr>
                <td align="center" style="padding-bottom:10px;">
                  <h2 style="margin:0; color:#111827;">Your Verification Code</h2>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding-bottom:20px; color:#6b7280; font-size:16px;">
                  Use the code below to continue. This code will expire in 5 minutes.
                </td>
              </tr>

              <tr>
                <td align="center" style="padding:20px 0;">
                  <div style="
                    display:inline-block;
                    font-size:32px;
                    font-weight:bold;
                    letter-spacing:6px;
                    background:#111827;
                    color:#ffffff;
                    padding:14px 28px;
                    border-radius:6px;">
                    ${otp}
                  </div>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding-top:30px; font-size:12px; color:#9ca3af;">
                  If you didn’t request this code, you can safely ignore this email.
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}
