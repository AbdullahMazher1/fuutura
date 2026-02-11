export function MagicLinkEmail({ link }) {
  return `
  <!DOCTYPE html>
  <html>
    <body style="margin:0; padding:0; background-color:#f4f4f7; font-family:Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
          <td align="center">
            
            <table width="500" cellpadding="0" cellspacing="0" 
              style="background:#ffffff; padding:40px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
              
              <tr>
                <td align="center" style="padding-bottom:20px;">
                  <h2 style="margin:0; color:#111827;">Verify Your Email</h2>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding-bottom:30px; color:#6b7280; font-size:16px;">
                  Click the button below to continue.
                  This link will expire soon.
                </td>
              </tr>

              <tr>
                <td align="center">
                  <a href="${link}" 
                     style="display:inline-block;
                            padding:14px 28px;
                            background-color:#111827;
                            color:#ffffff;
                            text-decoration:none;
                            border-radius:6px;
                            font-weight:bold;
                            font-size:16px;">
                    Verify Email
                  </a>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding-top:30px; font-size:12px; color:#9ca3af;">
                  If you didn’t request this email, you can safely ignore it.
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
