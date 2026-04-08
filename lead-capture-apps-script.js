// Bumble Bee Blinds - Unified Lead Capture Apps Script
// Handles both homeshow leads and condo/HOA expo leads in one sheet
// Sheet columns: Timestamp | First Name | Last Name | Email | Phone | Address | Products | Timeline | Promo | Source | Role | Community | Management Co | Num Units | Property Type | Project Scope | Decision Stage | Approver | Notes

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    e.parameter.timestamp || new Date().toISOString(),  // A: Timestamp
    e.parameter.fname || '',                             // B: First Name
    e.parameter.lname || '',                             // C: Last Name
    e.parameter.email || '',                             // D: Email
    e.parameter.phone || '',                             // E: Phone
    e.parameter.address || '',                           // F: Address
    e.parameter.products || '',                          // G: Products
    e.parameter.timeline || '',                          // H: Timeline
    e.parameter.promo || '',                             // I: Promo
    e.parameter.source || (e.parameter.role ? 'condo_expo' : 'homeshow'),  // J: Source
    e.parameter.role || '',                              // K: Role
    e.parameter.community_name || '',                    // L: Community
    e.parameter.management_company || '',                // M: Management Co
    e.parameter.num_units || '',                         // N: Num Units
    e.parameter.property_type || '',                     // O: Property Type
    e.parameter.project_scope || '',                     // P: Project Scope
    e.parameter.decision_stage || '',                    // Q: Decision Stage
    e.parameter.approver || '',                          // R: Approver
    e.parameter.notes || ''                              // S: Notes
  ]);
  return ContentService.createTextOutput('OK');
}
