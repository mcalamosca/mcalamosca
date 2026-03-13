/**
 * Forest Björn Contact Form Handler
 * Deploy this as a Google Apps Script web app
 * 
 * Setup:
 * 1. Go to https://script.google.com
 * 2. Create new project, paste this code
 * 3. Deploy > New deployment > Web app
 * 4. Execute as: Me (forestbjornllc@gmail.com)
 * 5. Who has access: Anyone
 * 6. Copy the deployment URL
 */

const RECIPIENT_EMAIL = 'forestbjornllc@gmail.com';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Build email body
    const subject = `🌲 New Project Inquiry from ${data.name}`;
    
    const body = `
New project inquiry from Forest Björn website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Type: ${data.projectType}
Timeline: ${data.timeline || 'Not specified'}
Budget: ${data.budget || 'Not specified'}

Description:
${data.description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL INFO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Has Designs: ${data.hasDesigns || 'Not specified'}
Technical Requirements: ${data.technicalRequirements || 'None specified'}
Referral Source: ${data.referralSource || 'Not specified'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST
    `.trim();

    // Send email
    GmailApp.sendEmail(RECIPIENT_EMAIL, subject, body, {
      replyTo: data.email,
      name: 'Forest Björn Website'
    });

    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS preflight
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ready' }))
    .setMimeType(ContentService.MimeType.JSON);
}
