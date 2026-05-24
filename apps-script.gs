// ============================================================
//  NinjaNursery™ AI Agent — Google Apps Script
//  Paste this entire file into Google Apps Script editor
//  Then Deploy → New Deployment → Web App
// ============================================================

const SHEET_NAME = "NinjaNursery Ideas";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    saveToSheet(data);
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "NinjaNursery Agent Script is running!" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function saveToSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  // Create sheet + headers if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    const headers = [
      "Timestamp",
      "Collection",
      "Product Type",
      "Market Trend & Design Idea",
      "Leonardo AI Prompt",
      "Product Title",
      "Product Description",
      "Pinterest Pin 1",
      "Pinterest Pin 2",
      "Pinterest Pin 3",
      "Status"
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

    // Style the header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#1a1a26");
    headerRange.setFontColor("#ffffff");
    headerRange.setFontWeight("bold");
    sheet.setFrozenRows(1);

    // Set column widths
    sheet.setColumnWidth(1, 160);  // Timestamp
    sheet.setColumnWidth(2, 200);  // Collection
    sheet.setColumnWidth(3, 150);  // Product Type
    sheet.setColumnWidth(4, 300);  // Trend
    sheet.setColumnWidth(5, 350);  // Leonardo
    sheet.setColumnWidth(6, 250);  // Title
    sheet.setColumnWidth(7, 350);  // Description
    sheet.setColumnWidth(8, 250);  // Pinterest 1
    sheet.setColumnWidth(9, 250);  // Pinterest 2
    sheet.setColumnWidth(10, 250); // Pinterest 3
    sheet.setColumnWidth(11, 100); // Status
  }

  // Parse product title and description
  const titleMatch = (data.product || "").match(/TITLE:\s*(.+)/);
  const productTitle = titleMatch ? titleMatch[1].trim() : data.product || "";

  const descMatch = (data.product || "").match(/DESCRIPTION:\s*([\s\S]+)/);
  const productDesc = descMatch ? descMatch[1].trim() : "";

  // Split Pinterest pins
  const pinterestPins = (data.pinterest || "").split("---").map(p => p.trim()).filter(Boolean);

  // Format timestamp
  const ts = data.timestamp ? new Date(data.timestamp) : new Date();
  const formattedTs = Utilities.formatDate(ts, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");

  // Append row
  sheet.appendRow([
    formattedTs,
    data.collection || "",
    data.productType || "",
    data.trend || "",
    data.leonardo || "",
    productTitle,
    productDesc,
    pinterestPins[0] || "",
    pinterestPins[1] || "",
    pinterestPins[2] || "",
    "New"
  ]);

  // Wrap text in all content cells
  const lastRow = sheet.getLastRow();
  sheet.getRange(lastRow, 1, 1, 11).setWrap(true);
  sheet.setRowHeight(lastRow, 120);

  // Color row based on collection
  const collection = (data.collection || "").toLowerCase();
  let rowColor = "#ffffff";
  if (collection.includes("naruto")) rowColor = "#fff8e1";
  else if (collection.includes("jjk") || collection.includes("sorcerer")) rowColor = "#f3e5f5";
  else if (collection.includes("demon")) rowColor = "#fce4ec";
  else if (collection.includes("pirate") || collection.includes("one piece")) rowColor = "#e1f5fe";
  else if (collection.includes("judgment") || collection.includes("death note")) rowColor = "#f5f5f5";

  sheet.getRange(lastRow, 1, 1, 11).setBackground(rowColor);
}
